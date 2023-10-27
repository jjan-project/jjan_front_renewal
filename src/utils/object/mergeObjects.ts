export function mergeObjects<T extends object>(
  defaultObj: T,
  customObj?: Partial<T>,
): T {
  const mergedObj: Partial<T> = { ...defaultObj };

  if (customObj) {
    Object.keys(customObj).forEach(key => {
      const propertyKey = key as keyof T;
      const customValue = customObj[propertyKey];
      const defaultValue = defaultObj[propertyKey];

      if (typeof customValue === "object" && typeof defaultValue === "object") {
        mergedObj[propertyKey] = {
          ...defaultValue,
          ...customValue,
        } as T[keyof T];
      } else {
        mergedObj[propertyKey] = customValue as T[keyof T];
      }
    });
  }

  return mergedObj as T;
}
