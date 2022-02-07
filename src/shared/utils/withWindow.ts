type WindowWrapper<T> = (window: Window) => T;

/**
 * Returns undefined if function does not exist, otherwise returns the
 * whatever func would normally return
 * @param func function requiring window
 */
export function withWindow(func: WindowWrapper<void>): void;
export function withWindow<T>(func: WindowWrapper<T>, defaultValue: T): T;
export function withWindow<T>(func: WindowWrapper<T>, defaultValue?: T) {
  if (typeof window !== 'undefined') {
    return func(window);
  }

  return defaultValue;
}
