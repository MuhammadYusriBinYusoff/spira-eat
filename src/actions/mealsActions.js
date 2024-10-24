import axios from "../api/axios";
import {
    FETCH_CATEGORY_BEGIN,
    FETCH_CATEGORY_ERROR,
    FETCH_CATEGORY_MEALS_BEGIN,
    FETCH_CATEGORY_MEALS_ERROR,
    FETCH_CATEGORY_MEALS_SUCCESS,
    FETCH_CATEGORY_SUCCESS,
    FETCH_MEALS_BEGIN,
    FETCH_MEALS_ERROR,
    FETCH_MEALS_SUCCESS,
    FETCH_SINGLE_MEAL_BEGIN,
    FETCH_SINGLE_MEAL_ERROR,
    FETCH_SINGLE_MEAL_SUCCESS
} from "./actions";

import { CATEGORIES_URL, MEAL_CATEGORIES_URL, MEAL_SINGLE_URL, SEARCH_URL } from "../utils/constants";

export const startFetchCategories = async(dispatch) => { //kuasa dispatch dapat dari mealContext.js
    try{
        dispatch({ type: FETCH_CATEGORY_BEGIN});
        const response = await axios.get(`${CATEGORIES_URL}`);
        console.log("KSKSKS", (response.data.categories) );
        dispatch({type: FETCH_CATEGORY_SUCCESS, payload: response.data.categories}); //payload contains data that want to update in my state//.categories ni lah dia simpan data tu
    } catch(error){
        dispatch({ type: FETCH_CATEGORY_ERROR, payload: error.message});
    }
}

export const startFetchSingleMeal = async(dispatch, id) => {
    try{
        dispatch({ type: FETCH_SINGLE_MEAL_BEGIN});
        const response = await axios.get(`${MEAL_SINGLE_URL}${id}`);
        console.log("mxmxm", response.data.meals );
        dispatch({type: FETCH_SINGLE_MEAL_SUCCESS, payload: response.data.meals});
    } catch(error){
        dispatch({ type: FETCH_SINGLE_MEAL_ERROR, payload: error.message});
    }
}

export const startFetchMealByCategory = async(dispatch, category) => {
    try{
        dispatch({type: FETCH_CATEGORY_MEALS_BEGIN});
        const response = await axios.get(`${MEAL_CATEGORIES_URL}${category}`);
        dispatch({type: FETCH_CATEGORY_MEALS_SUCCESS, payload: response.data.meals})
    } catch(error){
        dispatch({ type: FETCH_CATEGORY_MEALS_ERROR, payload: error.message});
    }
}

export const startFetchMealsBySearch = async(dispatch, searchTerm) => {
    console.log(searchTerm)
    try{
        dispatch({ type: FETCH_MEALS_BEGIN});
        const response = await axios.get(`${SEARCH_URL}${searchTerm}`);
        dispatch({ type: FETCH_MEALS_SUCCESS, payload: response.data.meals});
    } catch(error){
        dispatch({type: FETCH_MEALS_ERROR, payload: error.message});
    }
}

/*
eg result of axios.get
{
  "meals": [
    {
      "idMeal": "52771",
      "strMeal": "Spicy Arrabiata Penne",
      "strDrinkAlternate": null,
      "strCategory": "Vegetarian",
      "strArea": "Italian",
      "strInstructions": "Bring a large pot of water to a boil. Add kosher salt to the boiling water, then add the pasta. Cook according to the package instructions, about 9 minutes.\r\nIn a large skillet over medium-high heat, add the olive oil and heat until the oil starts to shimmer. Add the garlic and cook, stirring, until fragrant, 1 to 2 minutes. Add the chopped tomatoes, red chile flakes, Italian seasoning and salt and pepper to taste. Bring to a boil and cook for 5 minutes. Remove from the heat and add the chopped basil.\r\nDrain the pasta and add it to the sauce. Garnish with Parmigiano-Reggiano flakes and more basil and serve warm.",
      "strMealThumb": "https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg",
      "strTags": "Pasta,Curry",
      "strYoutube": "https://www.youtube.com/watch?v=1IszT_guI08",
    }
    ]
}

*/