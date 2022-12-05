import React from 'react'
import { createSlice , PayloadAction } from "@reduxjs/toolkit"

interface cartObjectDataType{
    "id":number;
    "name":string;
    "price":number;
    "quantity":number;
}

export const cartSlice = createSlice({
    name:"cart",
    initialState: Array<cartObjectDataType>,
    reducers:{
     
        addItemsToStore :(state ,  action :PayloadAction<cartObjectDataType>)=>{
              state.push(action.payload);
        },
        addToCart : (state , action :PayloadAction<number>)=>{
              state[action.payload].quantity +=1;
        },
        removeFromCart : (state , action:PayloadAction<number>)=>{
                 if(state[action.payload].quantity === 0) return;
                 state[action.payload].quantity -=1;
        },


    }
})


export default cartSlice.reducer;

export const {addItemsToStore , addToCart , removeFromCart} = cartSlice.actions;