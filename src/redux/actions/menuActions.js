export const GET_MENU = "GET_MENU";
export const FILTER_POULTRY = "FILTER_POULTRY";
export const FILTER_SOUP = "FILTER_SOUP";
export const FILTER_BEEF = "FILTER_BEEF";
export const FILTER_CHEF = " FILTER_CHEF";
export const FILTER_SEAFOOD = "FILTER_SEAFOOD";
export const FILTER_PORK = "FILTER_PORK";
export const FILTER_VEGETABLE = "FILTER_VEGETABLE";
export const FILTER_ALL = "FILTER_ALL";

export const getMenu = (_) => {
  return {
    type: FILTER_ALL,
  };
};

export const filterSoup = () => {
  return {
    type: FILTER_SOUP,
  };
};

export const filterVegetable = () => {
  return {
    type: FILTER_VEGETABLE,
  };
};

export const filterPoultry = () => {
  return {
    type: FILTER_POULTRY,
  };
};

export const filterBeef = () => {
  return {
    type: FILTER_BEEF,
  };
};

export const filterChef = () => {
  return {
    type: FILTER_CHEF,
  };
};

export const filterSeafood = () => {
  return {
    type: FILTER_SEAFOOD,
  };
};

export const filterPork = () => {
  return {
    type: FILTER_PORK,
  };
};

/* export const filterPoultry = () => ({
  type: FILTER_POULTRY,
});
 */
