import { GET_DISHES, FILTER_DISHES, SORT_DISHES } from "../actions/types";

const inistialState = {
  dishes: [],
  filteredDishes: [],
  filter: "",
  sortBy: "name",
  order: "asc"
};

export default function(state = inistialState, action) {
  switch (action.type) {
    case GET_DISHES:
      return {
        ...state,
        dishes: action.payload,
        filteredDishes: action.payload
      };
    case FILTER_DISHES: {
      const { filter } = action.payload;
      if (filter.length === 0) {
        return {
          ...state,
          filter,
          filteredDishes: state.dishes
        };
      }
      return {
        ...state,
        filteredDishes: state.dishes.filter(elem =>
          elem.name.toLowerCase().includes(filter.toLowerCase())
        ),
        filter
      };
    }
    case SORT_DISHES: {
      const { fieldName } = action.payload;
      console.log(fieldName);
      let order;
      if (fieldName === state.sortBy) {
        order = state.order === "asc" ? "desc" : "asc";
      } else {
        order = "asc";
      }
      return {
        ...state,
        sortBy: fieldName,
        order
      };
    }
    default:
      return state;
  }
}
