import React, {createContext, useReducer} from "react";

const initialState ={
    tankkaukset: [
      
    ]
}

export const GlobalContext = createContext(initialState);

export function AppReducer(state,action){
  switch(action.type){
    case"ADD_FUEL":
    return {
      ...state,
      tankkaukset: [action.payload, ...state.tankkaukset]
    }
    default:
      return state;
  }
};


export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    function addTransaction(tankkaus){
      dispatch({
      type: "ADD_FUEL",
      payload: tankkaus
      });
    }   

    return (<GlobalContext.Provider value ={{
      tankkaukset: state.tankkaukset,
      addTransaction
    }}
    >
        {children}
      </GlobalContext.Provider>);
    
}