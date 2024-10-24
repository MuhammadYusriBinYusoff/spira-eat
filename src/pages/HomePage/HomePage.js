import React from "react";
import "./HomePage.scss";
import { useMealContext } from "../../context/mealContext";
import Loader from "../../components/Loader/Loader";
import CategoryList from "../../components/Category/CategoryList";
import MealList from "../../components/Meal/MealList";

const HomePage = () => {
  const { categories, meals, categoryLoading, mealsLoading } = useMealContext();
  console.log("HOMEPAGE");
  console.log(categories, meals, categoryLoading, mealsLoading);

  console.log("meals loading: ", mealsLoading);
  console.log("category loading: ", categoryLoading);

  return (
    <main className="main-content">
      {mealsLoading ? (
        <Loader />
      ) : meals === null ? (
        <NotFound />
      ) : meals?.length ? (
        <MealList meals={meals} />
      ) : (
        ""
      )}
      {categoryLoading ? <Loader /> : <CategoryList categories={categories} />}
    </main>
  );
};

export default HomePage;
