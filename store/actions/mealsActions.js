export const SET_FAVORITE = "SET_FAVORITE"
export const SET_FILTERS = "SET_FILTERS"

export const setFavorite = (id) => {
  return { type: SET_FAVORITE, mealId: id }
}

export const setFilters = filters => {
  return { type: SET_FILTERS, filters: filters }
}