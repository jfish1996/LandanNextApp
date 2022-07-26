import { useState, useEffect, createContext, useContext } from "react";
const ShopContext = createContext();

export const StateContext = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [qty, setQty] = useState(1);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    themeCheck();
  }, []);

  // check and reset theme
  const themeCheck = () => {
    const darkModeLocal = JSON.parse(localStorage.getItem("darkMode"));
    if (darkModeLocal) {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  };

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
    <ShopContext.Provider
      value={{ darkMode, setDarkMode, onAdd, onRemove, cartItems }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useStateContext = () => useContext(ShopContext);
