import { createContext, useEffect, useReducer } from "react";
import Reducer from "./Reducer";

const INITIAL_STATE = {
    // user: JSON.parse(localStorage.getItem("user")) || null,
    user: null,
    error: false,
    isFetching: false,
};

export const Context = createContext(INITIAL_STATE);

export const ContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);

    // When login, set user to the state retrieved from database
    useEffect(
        () => {
            if (!state.user) return
            localStorage.setItem("user", JSON.stringify(state.user));
        },
        //
        [state.user]
    );

    useEffect(
        () => {
            dispatch({
                type: "SET_USER",
                payload: JSON.parse(localStorage.getItem("user")) || null
            });
        },
        //
        []
    )

    return (
        <Context.Provider
            value={{
                user: state.user,
                isFetching: state.isFetching,
                error: state.error,
                dispatch,
            }}
        >
            {children}
        </Context.Provider>
    )
}