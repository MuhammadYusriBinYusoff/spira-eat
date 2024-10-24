import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';

import { useMealContext } from '../../context/mealContext';
import { startFetchMealByCategory } from '../../actions/mealsActions';
import Loader from '../../components/Loader/Loader';
import SingleCategoryList from '../../components/Category/SingleCategoryList';

const CategoryPage = () => {
  const { name } = useParams();
  const { dispatch, meals, categoryMealsLoading, categoryMeals } = useMealContext();

  useEffect(() =>{
    startFetchMealByCategory(dispatch,name);
  }, []);

  return (
    <main className="main-content">
      {categoryMealsLoading ? <Loader/> : <SingleCategoryList name={name} categoryMeals={categoryMeals}/>}
    </main>
  )
}

export default CategoryPage
