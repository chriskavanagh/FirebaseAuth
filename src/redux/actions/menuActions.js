import {
  FILTER_POULTRY,
  FILTER_SOUP,
  FILTER_BEEF,
  FILTER_CHEF,
  FILTER_SEAFOOD,
  FILTER_PORK,
  FILTER_VEGETABLE,
  FILTER_ALL,
} from "./types";

// actions for menu

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
