import { createSelector } from "reselect";
//import { soupSelector } from "../selectors";

const initialState = {
  items: [
    { id: 101, dish: "Egg Drop Soup", price: 2.1, type: "soup" },
    { id: 102, dish: "Wonton Soup", price: 2.1, type: "soup" },
    { id: 103, dish: "Hot Sour Soup", price: 2.1, type: "soup" },
    { id: 104, dish: "Miso Soup", price: 2.1, type: "soup" },
    { id: 105, dish: "Dragon & Phoenix Soup", price: 2.1, type: "soup" },
    { id: 106, dish: "Combo Wonton Soup", price: 2.1, type: "soup" },
    { id: 107, dish: "Chicken Veg Soup", price: 2.1, type: "soup" },
    { id: 108, dish: "Crabmeat Veg Soup", price: 2.1, type: "soup" },
    { id: 109, dish: "Seafood Treasure Soup", price: 2.1, type: "soup" },
    { id: 110, dish: "Seafood Curry Soup", price: 2.1, type: "soup" },
    { id: 200, dish: "General Chicken", price: 12.95, type: "chicken" },
    { id: 201, dish: "Sweet Sour Chicken", price: 10.95, type: "chicken" },
    { id: 202, dish: "Szechuan Chicken", price: 10.95, type: "chicken" },
    { id: 203, dish: "Moo Goo Gai Pan", price: 10.95, type: "chicken" },
    { id: 204, dish: "Chicken & Garlic", price: 10.95, type: "chicken" },
    { id: 205, dish: "Chicken & Peanuts", price: 10.95, type: "chicken" },
    { id: 206, dish: "Lemon Chicken", price: 10.95, type: "chicken" },
    { id: 207, dish: "Chicken & Cashew", price: 10.95, type: "chicken" },
    { id: 208, dish: "Three Runners", price: 13.95, type: "chicken" },
    { id: 209, dish: "House Grilled Chicken", price: 10.95, type: "chicken" },
    { id: 210, dish: "Curry Chicken", price: 10.95, type: "chicken" },
    { id: 211, dish: "Sesame Chicken", price: 10.95, type: "chicken" },
    { id: 212, dish: "Pineapple Chicken", price: 10.95, type: "chicken" },
    {
      id: 213,
      dish: "Chicken w/Blk Bean Sauce",
      price: 10.95,
      type: "chicken",
    },
    {
      id: 214,
      dish: "Chicken Broccoli w/Garlic Sauce",
      price: 10.95,
      type: "chicken",
    },
    { id: 215, dish: "Five Flavor Chicken", price: 12.95, type: "chicken" },
    { id: 216, dish: "Chicken Green Pepper", price: 10.95, type: "chicken" },
    { id: 217, dish: "Teriyaki Chicken", price: 12.5, type: "chicken" },
    { id: 301, dish: "Szechuan Beef", price: 12.5, type: "beef" },
    { id: 302, dish: "Beef With Green Pepper", price: 12.5, type: "beef" },
    { id: 303, dish: "Beef & Broccoli", price: 12.5, type: "beef" },
    { id: 304, dish: "Sesame Beef", price: 14.95, type: "beef" },
    { id: 305, dish: "Beef & Garlic Sauce", price: 2.1, type: "beef" },
    { id: 306, dish: "Moo Shu Beef", price: 12.95, type: "beef" },
    { id: 307, dish: "Shredded Beef Szechaun", price: 12.5, type: "beef" },
    { id: 308, dish: "Beef & Snow Peas", price: 12.5, type: "beef" },
    { id: 309, dish: "Beef Peanuts", price: 12.5, type: "beef" },
    { id: 310, dish: "Curry Beef", price: 12.5, type: "beef" },
    { id: 311, dish: "Beef & Dried Tofu", price: 13.95, type: "beef" },
    { id: 312, dish: "Beef/Tomato w/Mixed Veg", price: 2.1, type: "beef" },
    { id: 313, dish: "Teriyaki Beef", price: 12.95, type: "beef" },
    { id: 400, dish: "Sweet/Sour Pork", price: 10.95, type: "pork" },
    { id: 401, dish: "Pork Szechuan Style", price: 10.95, type: "pork" },
    { id: 402, dish: "Pork & Dried Tofu", price: 12.95, type: "pork" },
    { id: 403, dish: "Pork Garlic Sauce", price: 10.95, type: "pork" },
    { id: 404, dish: "Moo Shu Pork", price: 11.95, type: "pork" },
    { id: 405, dish: "Twiced Cooked Pork", price: 10.95, type: "pork" },
    { id: 406, dish: "Pork w/Black Bean Sauce", price: 10.95, type: "pork" },
    { id: 407, dish: "Pork w/Broccoli", price: 10.95, type: "pork" },
    { id: 408, dish: "Roasted Pork w/Snowpeas", price: 12.5, type: "pork" },
    { id: 500, dish: "Szechuan Shrimp", price: 12.5, type: "seafood" },
    { id: 501, dish: "Shrimp & Peanuts", price: 10.5, type: "seafood" },
    { id: 502, dish: "Shrimp & Walnuts", price: 16.95, type: "seafood" },
    { id: 503, dish: "Szechuan & Garlic", price: 13.95, type: "seafood" },
    { id: 504, dish: "Three Sailors", price: 13.95, type: "seafood" },
    { id: 505, dish: "Perfect Couple", price: 15.95, type: "seafood" },
    { id: 506, dish: "Shrimp & Cashews", price: 13.95, type: "seafood" },
    { id: 507, dish: "Teriyaki Shrimp", price: 14.5, type: "seafood" },
    { id: 508, dish: "Grilled Salmon", price: 15.95, type: "seafood" },
    { id: 509, dish: "Shrimp & Lobster Sauce", price: 13.95, type: "seafood" },
    { id: 600, dish: "Szechuan Green Beans", price: 8.95, type: "vegetable" },
    { id: 601, dish: "Buddist Delight", price: 8.95, type: "vegetable" },
    { id: 602, dish: "Bean Curd Home Style", price: 9.5, type: "vegetable" },
    { id: 603, dish: "Sesame Bean Curd", price: 9.5, type: "vegetable" },
    {
      id: 604,
      dish: "Brocolli & Garlic Sauce",
      price: 8.95,
      type: "vegetable",
    },
    {
      id: 605,
      dish: "Hot Bean Curd Szechuan Style",
      price: 8.95,
      type: "vegetable",
    },
    {
      id: 606,
      dish: "EggPlant In Garlic Sauce",
      price: 8.95,
      type: "vegetable",
    },
    {
      id: 607,
      dish: "EggPlant In Sesame Sauce",
      price: 8.95,
      type: "vegetable",
    },
    {
      id: 608,
      dish: "Bean Curd In Black Bean Sauce",
      price: 8.95,
      type: "vegetable",
    },
  ],
};

function menuReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_MENU":
      return {
        ...state,
        items: [...initialState.items],
      };

    case "FILTER_SOUP":
      const soupState = initialState.items.filter(
        (item) => item.type === "soup"
      );
      return {
        ...state,
        items: [...soupState],
      };

    case "FILTER_BEEF":
      const beefState = initialState.items.filter(
        (item) => item.type === "beef"
      );
      return {
        ...state,
        items: [...beefState],
      };

    case "FILTER_CHEF":
      const chefState = initialState.items.filter(
        (item) => item.type === "chef"
      );
      return {
        ...state,
        items: [...chefState],
      };

    case "FILTER_POULTRY":
      const poultryState = initialState.items.filter(
        (item) => item.type === "chicken"
      );
      return {
        ...state,
        items: [...poultryState],
      };

    case "FILTER_PORK":
      const porkState = initialState.items.filter(
        (item) => item.type === "pork"
      );
      return {
        ...state,
        items: [...porkState],
      };

    case "FILTER_SEAFOOD":
      const seafoodState = initialState.items.filter(
        (item) => item.type === "seafood"
      );
      return {
        ...state,
        items: [...seafoodState],
      };

    default:
      return state;
  }
}

export default menuReducer;
