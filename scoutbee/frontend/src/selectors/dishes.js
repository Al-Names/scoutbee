export const getFilteredDishes = state => {
  const { filteredDishes: dishes, sortBy, order } = state.dishes;

  return dishes.sort((elemA, elemB) => {
    const elemAField = elemA[sortBy];
    const elemBField = elemB[sortBy];
    if (typeof elemAField === "string") {
      return (
        elemAField.toLowerCase().localeCompare(elemBField.toLowerCase()) *
        (order === "asc" ? -1 : 1)
      );
    } else {
      return order === "asc"
        ? elemAField - elemBField
        : elemBField - elemAField;
    }
  });
};
