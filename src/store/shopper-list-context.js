import React from "react";


const shopperListContext=React.createContext({
    items:[],
    addItems:(item)=>{},
    updateItems:(ite)=>{}
})

export default shopperListContext;