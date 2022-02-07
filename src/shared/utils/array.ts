export const addItem = <T>(source: Array<T>, item: T) => {
  return [...source, item];
};

export const removeItem = <T>(source: Array<T>, target: T) => {
  return source.filter(item => item !== target);
};
