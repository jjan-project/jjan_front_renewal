export const convertObjectValuesToStrings = (object: object) => {
  return Object.fromEntries(
    Object.entries(object).map(([key, value]) => [key, String(value)]),
  );
};
