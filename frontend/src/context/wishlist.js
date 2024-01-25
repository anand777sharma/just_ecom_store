import { useState,useContext,useEffect,createContext } from "react";

const WishContext=createContext();
const Wishprovider = ({children})=>{
    const [wish,setWish]=useState([])

    useEffect(() => {
        const wishitem=localStorage.getItem("wish");
        if(wishitem){
            setWish(
                JSON.parse(wishitem)
            )
        }
        }, [])
        

    return(
        <WishContext.Provider value={[wish,setWish]}>
            {children}
        </WishContext.Provider>
    );
  
}
  // custom hook
  const useWish = ()=>useContext(WishContext);
  export {useWish,Wishprovider}