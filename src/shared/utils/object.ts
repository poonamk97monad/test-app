export const getKeys = <O extends {}>(obj: O): ReadonlyArray<keyof O> => {
  // TSC complains when casting this result as ReadonlyArray
  return Object.keys(obj) as Array<keyof O>;
};

export const getValues = <O extends {}>(obj: O): ReadonlyArray<O[keyof O]> => {
  // TSC complains when casting this result as ReadonlyArray
  return Object.values(obj) as Array<O[keyof O]>;
};
