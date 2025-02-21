import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  ShoppingCartContextInterface,
  shoppingCartItemInterface,
} from "../interfaces";

const ShoppingCartContext = createContext<ShoppingCartContextInterface | null>(
  null
);

export function useShoppingCartContext() {
  const context = useContext(ShoppingCartContext);
  if (!context) {
    throw new Error("Component should be wrapped by ShoppingCartProvider");
  }
  return context;
}

function useShoppingCart() {
  const [shoppingCart, setShoppingCart] = useState<
    shoppingCartItemInterface[] | []
  >(JSON.parse(localStorage.getItem("shoppingCart") || "[]"));

  useEffect(() => {
    localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
  }, [shoppingCart]);

  const addToCart = (
    item: shoppingCartItemInterface,
    quantity: number,
    path: string,
    size?: string
  ) => {
    // if no items in the shopping cart add new item
    if (shoppingCart.length < 1) {
      setShoppingCart([
        { ...item, quantity: quantity, path: path, size: size },
      ]);
      // if there are items in the shopping cart check if next added item id isn't already in the cart
    } else {
      setShoppingCart((prevCart) => {
        const itemsWithMatchingId = shoppingCart.filter(
          (shopItem) => shopItem.id === item.id
        );
        // if id is in the cart, get all items with this id and try to find matching size if there is any
        if (itemsWithMatchingId) {
          const existingSize = itemsWithMatchingId.find(
            (item) => item.size === size
          );
          // if id is in the cart but size dosn't match, create new item
          if (!existingSize) {
            return [
              ...prevCart,
              {
                ...item,
                quantity: quantity,
                path: path,
                size: size,
              },
            ];
          } else {
            // if id is in the cart and size match change quantity of this item
            return prevCart.map((cartItem) =>
              existingSize.size === cartItem.size
                ? {
                    ...cartItem,
                    quantity: parseInt(cartItem.quantity as string) + quantity,
                  }
                : cartItem
            );
          }
          // if its not in the cart - add new item
        } else {
          return [
            ...prevCart,
            {
              ...item,
              quantity: quantity,
              path: path,
              size: size,
            },
          ];
        }
      });
    }
  };

  const removeFromCart = (id: string, size?: string) => {
    if (!size) {
      setShoppingCart((prevCart) => prevCart.filter((item) => item.id !== id));
      localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
    } else {
      setShoppingCart((prevCart) => {
        const filteredById = prevCart.filter((item) => item.id === id);
        const filteredByIdAndSize = filteredById.find(
          (item) => item.size === size
        );
        return prevCart.filter((item) => item !== filteredByIdAndSize);
      });
      localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
    }
  };

  const handleQuantityChange = (
    event: any,
    id: string,
    quantitySetter: Function,
    size?: string
  ) => {
    if (!size) {
      setShoppingCart((prevCart) =>
        prevCart.map((item) =>
          item.id === id ? { ...item, quantity: event.target.value } : item
        )
      );
      quantitySetter(event.target.value);
    } else {
      quantitySetter(event.target.value);
      setShoppingCart((prevCart) =>
        prevCart.map((item) =>
          item.id === id
            ? item.size === size
              ? { ...item, quantity: event.target.value }
              : item
            : item
        )
      );
    }
  };

  const countTotalPrice = () => {
    const pricesArray = shoppingCart.map(
      (shoppingCartItem) =>
        parseInt(shoppingCartItem.quantity as string) * shoppingCartItem.price
    );
    const totalPrice = pricesArray.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    return totalPrice;
  };

  const resetCart = () => {
    setShoppingCart([]);
  };

  return {
    shoppingCart,
    setShoppingCart,
    addToCart,
    removeFromCart,
    handleQuantityChange,
    countTotalPrice,
    resetCart,
  };
}

export function ShoppingCartProvider({ children }: { children: ReactNode }) {
  const shoppingCartInterface: ShoppingCartContextInterface = useShoppingCart();
  return (
    <ShoppingCartContext.Provider value={shoppingCartInterface}>
      {children}
    </ShoppingCartContext.Provider>
  );
}
