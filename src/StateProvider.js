import React, { createContext, useContext , useReducer} from "react" ;

//preparing the data layer
export const StateContext = createContext();



//higher order component to wrap the app
export const StateProvider =({ reducer, initialState, children })=>(

    <StateContext.Provider value = {useReducer( reducer, initialState)}> {children}
        </StateContext.Provider>
        );


        //pulling from the data layer by the hook
        export const  useStateValue = () =>
        useContext(StateContext) ;
