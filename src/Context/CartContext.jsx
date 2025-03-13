import { createContext, useState } from "react";

export const CartContext = createContext({
    cart: []
});

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    console.log(cart);
    

    const addItem = (item, quantity) => {
        if(!isInCart(item.id)){
            setCart(prev=>[...prev, {...item, quantity }])
        }else{
            setCart((prev) => 
                prev.map((prod) => 
                    prod.id === item.id 
                        ? { ...prod, quantity: prod.quantity + quantity }
                        : prod
                )
            );
        }
    };


    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId);
        setCart(cartUpdated);
    };

    const clearCart= () => {
        setCart([]);
    };

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId);
    }

    const total= cart.reduce((acc, prod)=> acc + prod.price * prod.quantity, 0).toFixed(2);
    const totalQuantity= cart.reduce((acc, prod)=> acc + prod.quantity, 0);

    return (
        <CartContext.Provider value={{cart,addItem,removeItem,clearCart,total,totalQuantity}}>
            {children}
        </CartContext.Provider>
    );
}

