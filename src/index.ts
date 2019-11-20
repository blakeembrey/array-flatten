/**
 * Recursive value or array type.
 */
export type ValueOrArray<T> = T | Array<ValueOrArray<T>>;

/**
 * Flatten an array indefinitely.
 */
export function flatten<T>(array: ArrayLike<ValueOrArray<T>>): T[] {
  return $flatten(array, []);
}

function $flatten<T>(array: ArrayLike<ValueOrArray<T>>, result: T[]): T[] {
  for (let i = 0; i < array.length; i++) {
    const value = array[i];

    if (Array.isArray(value)) {
      $flatten(value, result);
    } else {
      result.push(value);
    }
  }

  return result;
}
