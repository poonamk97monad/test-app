import { useEffect, useReducer, useRef } from "react";
import { useIsMounted } from "@shared/utils/hooks/useIsMounted";

const document = window.document;

export type DocumentVisibilityOptions = Readonly<{
  onChange?: (prev: VisibilityState | undefined, next: VisibilityState) => void;
  onHidden?: () => void;
  onVisible?: () => void;
}>;

type DocumentVisibilityState = { visibilityState: VisibilityState | undefined };

class DocumentVisibility {
  private onUpdate: () => void;
  private options: DocumentVisibilityOptions;
  private state: DocumentVisibilityState;

  constructor({
    options,
    onUpdate,
  }: {
    options: DocumentVisibilityOptions;
    onUpdate: () => void;
  }) {
    this.options = options;
    this.onUpdate = onUpdate;
    this.initializeState();
  }

  public observe(): void {
    document?.addEventListener(
      "visibilitychange",
      this.handleVisibilityChange,
      false
    );
  }

  public disconnect(): void {
    document?.removeEventListener(
      "visibilitychange",
      this.handleVisibilityChange,
      false
    );
  }

  public getVisibility(): VisibilityState | undefined {
    return this.state.visibilityState;
  }

  public setOptions(options: DocumentVisibilityOptions): void {
    this.options = options;
  }

  private handleVisibilityChange = (): void => {
    if (document) {
      const { onChange, onHidden, onVisible } = this.options;

      const previousVisibility = this.state.visibilityState;
      const nextVisibility = document.visibilityState;

      this.state.visibilityState = nextVisibility;

      if (previousVisibility !== nextVisibility) {
        onChange?.(previousVisibility, nextVisibility);
        if (nextVisibility === "hidden") {
          onHidden?.();
        } else {
          onVisible?.();
        }

        this.onUpdate();
      }
    }
  };

  private initializeState(): void {
    const state: DocumentVisibilityState = {
      visibilityState: document?.visibilityState,
    };
    this.state = state;
  }
}

export const useDocumentVisibility = (
  options: DocumentVisibilityOptions = {}
) => {
  const isMounted = useIsMounted();
  const [, forceUpdate] = useReducer((x) => x + 1, 0);
  const documentVisibilityRef = useRef<DocumentVisibility>(
    new DocumentVisibility({
      options,
      onUpdate: () => {
        forceUpdate();
      },
    })
  );
  const documentVisibility = documentVisibilityRef.current;
  documentVisibility.setOptions(options);

  useEffect(() => {
    if (!isMounted) {
      return () => {};
    }

    documentVisibility.observe();
    return () => {
      documentVisibility.disconnect();
    };
  }, [documentVisibility, isMounted]);

  return documentVisibility.getVisibility();
};
