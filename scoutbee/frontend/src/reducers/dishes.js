import { GET_DISHES, FILTER_DISHES } from "../actions/types";

const inistialState = {
  dishes: [],
  filteredDishes: [],
  filter: ""
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
    default:
      return state;
  }
}
