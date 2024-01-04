import React, { useReducer } from "react";

export const cartContext =  React.createContext()

const defaultAmount = {
    items: [],
    totalAmount: 0
}

const reducer = (state, action) =>{
    if(action.type === 'ADD'){
        const updatedTotalPrice = state.totalAmount + action.item.price * action.item.amount

        const prevItemIndex = state.items.findIndex(item => item.id === action.item.id)
        const toBeUpdatedItem = state.items[prevItemIndex]
        let updatedItem

        if(toBeUpdatedItem){
            const updatedItemAmount = {
                ...toBeUpdatedItem,
                amount: toBeUpdatedItem.amount + action.item.amount
            }
            updatedItem = [...state.items]
            updatedItem[prevItemIndex] = updatedItemAmount
        }
        else{
            updatedItem = state.items.concat(action.item)
        }
        return{
            items: updatedItem,
            totalAmount: updatedTotalPrice
        }
    }

    if(action.type === 'REMOVE'){
        const prevItemIndex = state.items.findIndex(item => item.id === action.id)
        const toBeUpdatedItem = state.items[prevItemIndex]
        const updatedTotalPrice = state.totalAmount - toBeUpdatedItem.price
        let updatedItem

        if(toBeUpdatedItem.amount === 1){
            updatedItem = state.items.filter(item => item.id !== action.id)
        }   
        else{
            const updatedItemAmount = {...toBeUpdatedItem, amount: toBeUpdatedItem.amount -1}
            updatedItem = [...state.items]
            updatedItem[prevItemIndex] = updatedItemAmount
        }
        return {
            items: updatedItem,
            totalAmount: updatedTotalPrice
        }
    }
    return defaultAmount
}

const Context = (props) => {

    const [state, dispatch] = useReducer(reducer, defaultAmount)

    const handleAddItem = (item) => {
        dispatch({type: 'ADD', item})
    }

    const handleRemoveItem = (id) => {
        dispatch({type: 'REMOVE', id})
    }

    const newContext = {
        items: state.items,
        totalAmount: state.totalAmount,
        addItem: handleAddItem,
        removeItem: handleRemoveItem
    }

    return (
        <cartContext.Provider value={newContext}>
            {props.children}
        </cartContext.Provider>
    );
}
 
export default Context;