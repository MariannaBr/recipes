import { MEALS} from "../../data/RecipesData"
import { SET_FAVORITE, SET_FILTERS } from "../actions/mealsActions"


const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: []
}

const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FAVORITE:
      const mealAdd = state.meals.find(meal => meal.id === action.mealId)
      const mealIndexDelete = state.favoriteMeals.findIndex(meal => meal.id === action.mealId)
      if (mealAdd) {
        return { ...state, favoriteMeals: state.favoriteMeals.concat(mealAdd) }
      } else if (mealIndexDelete > -1) {
        const updatedFavMeals = [...state.favoriteMeals]
        updatedFavMeals.splice(mealIndexDelete, 1)
        return { ...state, favoriteMeals: updatedFavMeals }
      }
  }
}

export default mealsReducer