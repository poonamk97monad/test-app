import { Storage } from '../index';
export class MemoryStorage implements Storage {
  private state: Record<string, string | null | undefined> = {};

  public setItem(key: string, value: string | null | undefined) {
    this.state[key] = value;
  }

  public getItem(key: string) {
    return this.state[key];
  }
}
