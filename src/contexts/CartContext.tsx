import axios from "axios";
import { createContext, ReactNode, useCallback, useState } from "react";

export interface ProductType {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  defaultPriceId: string;
  description: string;
}

interface CartContextProps {
  cartItems: ProductType[];
  onAddToCart: (product: ProductType) => void;
  onRemoveToCart: (productId: string) => void;
  onConfirmOrder: () => Promise<void>;
  isProductAlreadyInCart: (productId: string) => boolean;
  cartSummary: number;
  isCreatingCheckoutSession?: boolean;
}

interface CartContextProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextProps);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<ProductType[]>([]);
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false);

  function handleAddToCart(product: ProductType) {
    setCartItems((state) => [...state, product]);
  }

  function handleRemoveToCart(productId: string) {
    const filteredCart = cartItems.filter((item) => item.id !== productId);
    setCartItems(filteredCart);
  }

  function isProductAlreadyInCart(productId: string) {
    return cartItems.some((product) => product.id === productId);
  }

  const handleConfirmOrder = async () => {
    try {
      setIsCreatingCheckoutSession(true);
      const response = await axios.post("/api/checkout-session", {
        products: cartItems,
      });

      const { checkoutUrl } = response.data;

      window.location.href = checkoutUrl;
    } catch (error) {
      alert("Falha ao redirecionar ao checkout!");
    } finally {
      setIsCreatingCheckoutSession(false);
    }
  };

  const cartSummary = cartItems.reduce((summary, product) => {
    return summary + product.price;
  }, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        onAddToCart: handleAddToCart,
        onRemoveToCart: handleRemoveToCart,
        isProductAlreadyInCart,
        onConfirmOrder: handleConfirmOrder,
        cartSummary,
        isCreatingCheckoutSession,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
