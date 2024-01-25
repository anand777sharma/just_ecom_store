import { useState,useContext,useEffect,createContext } from "react";

const CartContext=createContext();
const Cartprovider = ({children})=>{
    const [cart,setCart]=useState([])

    useEffect(() => {
        const cartitem=localStorage.getItem("cart");
        if(cartitem){
            setCart(
                JSON.parse(cartitem)
            )
        }
        }, [])
        

    return(
        <CartContext.Provider value={[cart,setCart]}>
            {children}
        </CartContext.Provider>
    );
  
}
  // custom hook
  const useCart = ()=>useContext(CartContext);
  export {useCart,Cartprovider}