import React, {createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// Initial state
const initialState = {
    transactions: [
        // { id: 1, text: 'Flower', amount: - 20},
        // { id: 2, text: 'Salary', amount: 300},
        // { id: 3, text: 'Book', amount: -10},
        // { id: 4, text: 'Camera', amount: 150},
    ]
}

// Creat context
export const GlobalContext = createContext(initialState);

// In order to have access to our store, we need a
// Provider component, So we can wrapp all our component in 
// the Provider component
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //Actions
    function deleteTransaction(id){
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    function addTransaction(transaction){
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }

    //we pass in our transaction so it can be access globally
    return(<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>)
}
