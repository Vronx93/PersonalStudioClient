export function createDictionary(
    sizes: string[],
    sizesAmount: number[]
  ): { [key: string]: number } {
    if (sizes.length !== sizesAmount.length) {
      throw new Error("Arrays sizes and sizesAmount must have the same length");
    }

    const dictionary: Record<string, number> = {};

    for (let i = 0; i < sizes.length; i++) {
      dictionary[sizes[i]] = Number(sizesAmount[i]);
    }

    return dictionary;
  }