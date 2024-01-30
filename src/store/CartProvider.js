

import { useState } from "react";
import CartContext from "./cart-context";



const CartProvider = (props) => {

    const [items,setItems]=useState([])


    const addingItemToCart=(item)=>{

        let p=[...items];
        let found=false;
        for(let i=0;i<p.length;i++){
            if(p[i].id===item.id){
                found=true;
                if(item.size==='l'){
                    p[i].l=Number(p[i].l)+Number(1);
                }else if(item.size==='s'){
                    p[i].s=Number(p[i].s)+Number(1);
                }else{
                    p[i].m=Number(p[i].m)+Number(1);
                }
                
            }
        }
        if(!found){
            p.push(item)
        }
        // for()
        console.log('cart ',p)
        setItems([...p])
    }

    const removingItemFromCart=(id)=>{
        setItems([]);
    }

    const updatingItemFromCart=(id)=>{

    }
    const cartContext = {

        items: items || [],
        // totalAmount: 0,
        addItemToCart: addingItemToCart,
        removeItemFromCart: removingItemFromCart,
        updateItemFromCart: updatingItemFromCart
    }


    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}


export default CartProvider;