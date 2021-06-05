//================================================================
/**
 * Array Utility Method
 */
//================================================================

/**
 * 
 * @param arr 
 * @param selector 
 * @returns 
 */
export function normalize<T>(
  arr: T[], 
  selector: (item: T) => string | number = (item: any) => item.id
) {
  const normalizeObj: { [key: string]: T } = {};

  arr.forEach((data) => {
    normalizeObj[selector(data)] = data;
  });

  return normalizeObj;
}