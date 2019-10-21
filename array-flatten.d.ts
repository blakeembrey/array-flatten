declare type InferElement<T extends ArrayLike<any>> = T extends IArguments
  ? unknown
  : {
      array: T[number] extends infer Element
        ? Element extends ArrayLike<any>
          ? InferElement<Element>
          : Element
        : never
      tuple: InferElement<Array<T[number]>>
    }[Array<T[number]> extends T ? 'array' : 'tuple']

declare function flatten<T extends ArrayLike<any>>(
  array: T
): flatten.FlatArray<T>

declare namespace flatten {
  export type FlatArray<T extends ArrayLike<any>> = Array<InferElement<T>>

  export function depth<T extends ArrayLike<any>>(
    array: T,
    depth: number
  ): FlatArray<T>

  export function from<T>(array: ArrayLike<T>): T[]
  export function fromDepth<T>(array: ArrayLike<T>, depth: number): T[]
}

export = flatten
