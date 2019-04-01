import axios from "axios";

import { GET_DISHES, FILTER_DISHES, SORT_DISHES } from "./types";

export const getDishes = () => dispatch => {
  axios
    .get("/api/dishes/")
    .then(res => {
      dispatch({
        type: GET_DISHES,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

export const filterDishes = filter => ({
  type: FILTER_DISHES,
  payload: {
    filter
  }
});

export const sortDishes = sortBy => ({
  type: SORT_DISHES,
  payload: {
    fieldName: sortBy
  }
});
