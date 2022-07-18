import { useState, createContext, useContext } from "react";

const ShopContext = createContext();

export const StateContext = ({ children }) => {
  const [qty, setQty] = useState(1);
  const [cartItems, setCartItems] = useState([]);

  const onAdd = (product) => {
    const exists = cartItems.find((item) => item.id === product.id);

    if (exists) {
      setCartItems(
        cartItems.map((currentItem) =>
          currentItem.id === product.id
            ? { ...exists, quantity: exists.quantity + 1 }
            : currentItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
      console.log(cartItems);
    }
  };

  const onRemove = (product) => {
    const productToTarget = cartItems.find((item) => item.id === product.id);
    if (productToTarget.quantity === 1) {
      const removedCart = cartItems.filter((item) => item.id !== product.id);
      setCartItems([...removedCart]);
    } else {
      setCartItems(
        cartItems.map((currentItem) =>
          currentItem.id === product.id
            ? { ...productToTarget, quantity: productToTarget.quantity - 1 }
            : currentItem
        )
      );
    }
  };
  return (
    <ShopContext.Provider value={{ qty, onAdd, onRemove, cartItems }}>
      {children}
    </ShopContext.Provider>
  );
};

export const useStateContext = () => useContext(ShopContext);
