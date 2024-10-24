import React, {createContext, useContext, useEffect, useReducer} from "react";
import { mealReducer } from "../reducers/mealReducer";
import { startFetchCategories } from "../actions/mealsActions";

const initialState = {
    categories: [],
    categoryLoading: false,
    categoryError: false,
    categoryMeals: [],
    categoryMealsLoading: false,
    categoryMealsError: false,
    meals: [],
    mealsLoading: false,
    mealsError: false,
    meal: [],
    mealLoading: false,
    mealError: false
}

const MealContext = createContext({});
export const MealProvider = ({children}) => {
    const [state, dispatch] = useReducer(mealReducer, initialState);

    useEffect(() => { //use effect used to fetching data
        startFetchCategories(dispatch);
    }, []); // [] means run only on the first render

    return (
        <MealContext.Provider value = {{  //function yang boleh di export
            ...state, //ini contains state
            dispatch,
            startFetchCategories
        }}>
            {children}
        </MealContext.Provider>
    )
}

export const useMealContext = () => {
    return useContext(MealContext);
}