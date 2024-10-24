import React, {createContext, useContext, useReducer} from "react";
import reducer from "../reducers/sidebarReducer";
import {
    OPEN_SIDEBAR,
    CLOSE_SIDEBAR
} from "../actions/actions";

const initialState = {  //dia tolong initilaize in the early of the code
    isSidebarOpen: false
}

const SidebarContext = createContext({});

export const SidebarProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const openSidebar = () => {
        dispatch({types: OPEN_SIDEBAR}); //type dalam tu nk beritahu action //dispatch guna sekali dengan reducer
    }

    const closeSidebar = () => {
        dispatch({ types: CLOSE_SIDEBAR });
    }

    return (
        <SidebarContext.Provider value = {{ //to ensure we can call these function or variale in other page
            ...state,
            openSidebar, 
            closeSidebar
        }}>
            {children}
        </SidebarContext.Provider>
    )
}

export const useSidebarContext = () => { //custom hooks
    return useContext(SidebarContext);
}