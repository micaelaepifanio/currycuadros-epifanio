import { useState, createContext, useContext } from "react";

 const CartContext = createContext();

 const useCart = () => useContext(CartContext);

 const CartProvider = ({ children }) => {
    const [cart, setCart] = useState({addedItems : []});
  
    const addItem = (item, qty) => {
      if (isInCart(item.id)) {
        const items =  cart.addedItems;
        const index = items.findIndex(element => element.id == item.id)
        items[index].qty =  parseInt(items[index].qty) + parseInt(qty)

        setCart({addedItems : items});

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
    
    const isInCart = (id) => {
        return (cart.addedItems.some((addedItem) => addedItem.id === id))
    }

    const removeItem = (id) => {
        if(isInCart(id)){
            const products = cart.addedItems;
            const filteredProducts = products.filter((itemToRemove) => itemToRemove.id != id)
            setCart({addedItems : filteredProducts});
        }
    }

    const getItems = () => cart.addedItems

    const getTotalItemQty = () => {
      let result = 0;
      getItems().forEach(i => {
          result = result + parseInt(i.qty)}
        );

      return result
    }

    const getTotalPrice = () => {
      let result = 0;
      getItems().forEach(i => {
          result = result + (parseInt(i.qty) * parseInt(  i.precio))}
        );

      return result
    }

    return (
      <CartContext.Provider value={{ cart, clear, addItem, removeItem, getItems, getTotalItemQty, getTotalPrice }}>
        {children}
      </CartContext.Provider>
    );
  };

  export { CartContext, useCart, CartProvider };