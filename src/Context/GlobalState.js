import React, { createContext, useReducer } from 'react'
import Reducer from './Reducer'

// initialize state that use in reducer
const initializeState = {
    transaction:[
          { id: 1, text: 'Flower', amount: -20 },
          { id: 2, text: 'Salary', amount: 300 },
          { id: 3, text: 'Book', amount: -10 },
          { id: 4, text: 'Camera', amount: 150 }
        ]
}
// create context
export const GlobalContext = createContext(initializeState)


// povider component
const GlobalState = ({children}) => {
    const [state,dispatch] = useReducer(Reducer,initializeState)

    function deleteTransaction (id) {
      return dispatch({
        type:'delete_Transaction',
        payload:id
      })
    }

    function addTransaction (add) {
      return dispatch({
        type:'add_Transaction',
        payload:add
      })
    }
  return (<GlobalContext.Provider value={{
    transactions:state.transaction,deleteTransaction,addTransaction
  }}>
    {children}
  </GlobalContext.Provider>)
}

export default GlobalState