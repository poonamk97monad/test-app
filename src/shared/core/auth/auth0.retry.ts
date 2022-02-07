import type { AxiosResponse, AxiosPromise, AxiosError } from 'axios';
import retry from 'retry';

export type AxiosPromiseBuilder<T> = () => AxiosPromise<T>;
type OnRetry = (currentAttempt: number) => void;

export async function executeWithAuth0Retry<T>(builder: AxiosPromiseBuilder<T>, onRetry?: OnRetry): Promise<AxiosResponse<T>> {
  return new Auth0Retryer(builder, onRetry).execute();
}

export class Auth0Retryer<T> {
  private _onRetry?: OnRetry;
  private _success: boolean = false;
  private _attemptCount: number = 1;
  public readonly auditTrail: Array<{ attemptCount: number; attemptAt: number }> = [];
  public readonly builder: AxiosPromiseBuilder<T>;

  constructor(builder: AxiosPromiseBuilder<T>, onRetry?: OnRetry) {
    this.builder = builder;
    this._onRetry = onRetry;
  }

  public get attemptCount() {
    return this._attemptCount;
  }

  public get success() {
    return this._success;
  }

  public async execute(): Promise<AxiosResponse<T>> {
    return new Promise((resolve, reject) => {
      const operation = retry.operation({ retries: 4, randomize: true });
      operation.attempt(async currentAttempt => {
        try {
          this._audit();
          const response = await this.builder();
          this._success = true;
          operation.stop();
          resolve(response);
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (err: any) {
          let willRetry = false;
          if (this._shouldHandleErr(err) && operation.retry(err)) {
            this._attemptCount++;
            willRetry = true;
          }

          if (willRetry) {
            this._onRetry?.(currentAttempt);
            return;
          }

          // That's outside of our jurisdiction
          operation.stop();
          reject(err);
        }
      });
    });
  }

  private _audit() {
    this.auditTrail.push({
      attemptCount: this.attemptCount,
      attemptAt: Date.now()
    });
  }

  private _shouldHandleErr(err: AxiosError) {
    return err.response?.status === 429;
  }
}
