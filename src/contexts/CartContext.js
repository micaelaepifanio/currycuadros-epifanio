import { useState, createContext, useContext } from "react";

 const CartContext = createContext();

 const useCart = () => useContext(CartContext);

 const CartProvider = ({ children }) => {
    const [cart, setCart] = useState({addedItems : []});
  
    const addItem = (item, qty) => {
      if (isInCart(item)) {
        alert("El item ya existe en el carrito")
        return;
      }

      const itemWithQty = {...item, qty}
      
      const products = cart.addedItems;
      products.push(itemWithQty);

      setCart({addedItems : products});

      console.dir(cart)
    };

    const clear = () => {
        setCart({addedItems : []});
      };
    
    const isInCart = (item) => {
        return (cart.addedItems.some((addedItem) => addedItem.id === item.id))
    }

    const removeItem = (item) => {
        if(isInCart(item)){
            const products = cart.addedItems;
            const filteredProducts = products.filter((itemToRemove) => itemToRemove.id == item)
            setCart({addedItems : filteredProducts});
        }
    }

    return (
      <CartContext.Provider value={{ cart, clear, addItem, removeItem }}>
        {children}
      </CartContext.Provider>
    );
  };

  export { CartContext, useCart, CartProvider };