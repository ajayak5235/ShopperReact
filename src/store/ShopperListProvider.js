

import { useState } from "react";
import shopperListContext from "./shopper-list-context";

const ShopperListProvider=(props)=>{


    const [items,setItems]=useState([]);

    const addItems=(item)=>{
        setItems([...items,item]);
    }

    const updateItems=(ite)=>{
        let p=[...items]
        console.log('updating')

        for(let i=0;i<p.length;i++){
            // console.log(p[i].id,' id ',ite.l)
            if(p[i].id===ite.id){
                if(ite.size==='l'){
                    p[i].l=Number(p[i].l)+Number(-1);
                }else if(ite.size==='m'){
                    p[i].m=Number(p[i].m)+Number(-1);
                }else{
                    p[i].s=Number(p[i].s)+Number(-1);
                }
                
                // console.log('id')
            }
        }
        setItems([...p])
    }



    const shopperContext={
        items:items||[],
        addItems:addItems,
        updateItems:updateItems
    }


    return <shopperListContext.Provider value={shopperContext}>
        {props.children}
    </shopperListContext.Provider>
}

export default ShopperListProvider