import { Dispatch, SetStateAction } from "react";
import {
  availableSizesDictionary,
  currentUploadImageInterface,
  shoppingCartItemInterface,
} from "./interfaces";

export async function convertToBase64(file: File) {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const result = reader.result;
      if (typeof result === "string") {
        resolve(result.split(",")[1]); // Extract Base64 string
      } else {
        reject(
          new Error("Failed to convert to base64: result is not a string")
        );
      }
    };
    reader.onerror = (error) => reject(error);
  });
}

export async function convertAll(images: currentUploadImageInterface[]) {
  if (!images) {
    throw new Error("No images to convert");
  } else {
    const newArr = [];
    for (let i = 0; i < images.length; i++) {
      const converted = await convertToBase64(images[i].image);
      newArr.push(converted);
    }
    return newArr;
  }
}

export function renderSizeOptions({
  optionsDictionary,
  optionStyles,
}: {
  optionsDictionary: availableSizesDictionary;
  optionStyles?: string;
}) {
  const optionsArr = [];
  if (optionsDictionary) {
    for (const [key, value] of Object.entries(optionsDictionary)) {
      if (value > 0) {
        optionsArr.push(
          <option
            key={crypto.randomUUID()}
            value={key}
            className={optionStyles}
          >
            {key} (dostępna ilość: {value} szt.)
          </option>
        );
      }
    }
  }
  return optionsArr;
}

export async function convertImgToString(
  event: any,
  imgStringSetter: Dispatch<SetStateAction<string>>
) {
  if (event.target.files) {
    const imgString = await convertToBase64(event.target.files[0]);
    imgStringSetter(imgString);
  }
}

export function formatIntToPrice(int: number) {
  return int.toFixed(2).replace(".", ",");
}

// example use :
// countTotalItemsInShopingCart(
//   shoppingCart.shoppingCart,
//   onlinePlanOptions.onlineTrainingPlan ? true : false
// );
export function countTotalItemsInShopingCart(
  shoppingCartItems: shoppingCartItemInterface[],
  onlinePlanOption: boolean
) {
  let totalItems: number = 0;
  for (let i = 0; i < shoppingCartItems.length; i++) {
    if (typeof shoppingCartItems[i].quantity === "string") {
      totalItems += parseInt(shoppingCartItems[i].quantity as string);
    } else {
      totalItems += shoppingCartItems[i].quantity as number;
    }
  }
  if (onlinePlanOption) {
    return totalItems + 1;
  }
  return totalItems;
}
