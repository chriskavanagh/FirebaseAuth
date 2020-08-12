import { initialState as data } from "../data/data";
//console.log(data.items);

const initialState = {
  items: [
    {
      id: 101,
      dish: "Egg Drop Soup",
      price: 2.1,
      type: "soup",
      notes: "",
      quantity: 0,
    },
    {
      id: 102,
      dish: "Wonton Soup",
      price: 2.1,
      type: "soup",
      notes: "",
      quantity: 0,
    },
    {
      id: 103,
      dish: "Hot Sour Soup",
      price: 2.1,
      type: "soup",
      notes: "",
      quantity: 0,
    },
    {
      id: 104,
      dish: "Miso Soup",
      price: 2.1,
      type: "soup",
      notes: "",
      quantity: 0,
    },
    {
      id: 105,
      dish: "Dragon & Phoenix Soup",
      price: 2.1,
      type: "soup",
      notes: "",
      quantity: 0,
    },
    {
      id: 106,
      dish: "Combo Wonton Soup",
      price: 2.1,
      type: "soup",
      notes: "",
      quantity: 0,
    },
    {
      id: 107,
      dish: "Chicken Veg Soup",
      price: 2.1,
      type: "soup",
      notes: "",
      quantity: 0,
    },
    {
      id: 108,
      dish: "Crabmeat Veg Soup",
      price: 2.1,
      type: "soup",
      notes: "",
      quantity: 0,
      quantity: 0,
    },
    {
      id: 109,
      dish: "Seafood Treasure Soup",
      price: 2.1,
      type: "soup",
      notes: "",
      quantity: 0,
    },
    {
      id: 110,
      dish: "Seafood Curry Soup",
      price: 2.1,
      type: "soup",
      notes: "",
      quantity: 0,
    },
    {
      id: 200,
      dish: "General Chicken",
      price: 12.95,
      type: "chicken",
      notes: "",
      quantity: 0,
    },
    {
      id: 201,
      dish: "Sweet Sour Chicken",
      price: 10.95,
      type: "chicken",
      notes: "",
      quantity: 0,
    },
    {
      id: 202,
      dish: "Szechuan Chicken",
      price: 10.95,
      type: "chicken",
      notes: "",
      quantity: 0,
    },
    {
      id: 203,
      dish: "Moo Goo Gai Pan",
      price: 10.95,
      type: "chicken",
      notes: "",
      quantity: 0,
    },
    {
      id: 204,
      dish: "Chicken & Garlic",
      price: 10.95,
      type: "chicken",
      notes: "",
      quantity: 0,
    },
    {
      id: 205,
      dish: "Chicken & Peanuts",
      price: 10.95,
      type: "chicken",
      notes: "",
      quantity: 0,
    },
    {
      id: 206,
      dish: "Lemon Chicken",
      price: 10.95,
      type: "chicken",
      notes: "",
      quantity: 0,
    },
    {
      id: 207,
      dish: "Chicken & Cashew",
      price: 10.95,
      type: "chicken",
      notes: "",
      quantity: 0,
    },
    {
      id: 208,
      dish: "Three Runners",
      price: 13.95,
      type: "chicken",
      notes: "",
      quantity: 0,
    },
    {
      id: 209,
      dish: "House Grilled Chicken",
      price: 10.95,
      type: "chicken",
      notes: "",
      quantity: 0,
    },
    {
      id: 210,
      dish: "Curry Chicken",
      price: 10.95,
      type: "chicken",
      notes: "",
      quantity: 0,
    },
    {
      id: 211,
      dish: "Sesame Chicken",
      price: 10.95,
      type: "chicken",
      notes: "",
      quantity: 0,
    },
    {
      id: 212,
      dish: "Pineapple Chicken",
      price: 10.95,
      type: "chicken",
      notes: "",
      quantity: 0,
    },
    {
      id: 213,
      dish: "Chicken w/Blk Bean Sauce",
      price: 10.95,
      type: "chicken",
      notes: "",
      quantity: 0,
    },
    {
      id: 214,
      dish: "Chicken Broccoli w/Garlic Sauce",
      price: 10.95,
      type: "chicken",
      notes: "",
      quantity: 0,
    },

    {
      id: 215,
      dish: "Five Flavor Chicken",
      price: 12.95,
      type: "chicken",
      notes: "",
      quantity: 0,
    },
    {
      id: 216,
      dish: "Chicken Green Pepper",
      price: 10.95,
      type: "chicken",
      notes: "",
      quantity: 0,
    },
    {
      id: 217,
      dish: "Teriyaki Chicken",
      price: 12.5,
      type: "chicken",
      notes: "",
      quantity: 0,
    },
    {
      id: 301,
      dish: "Szechuan Beef",
      price: 12.5,
      type: "beef",
      notes: "",
      quantity: 0,
    },
    {
      id: 302,
      dish: "Beef With Green Pepper",
      price: 12.5,
      type: "beef",
      notes: "",
      quantity: 0,
    },
    {
      id: 303,
      dish: "Beef & Broccoli",
      price: 12.5,
      type: "beef",
      notes: "",
      quantity: 0,
    },
    {
      id: 304,
      dish: "Sesame Beef",
      price: 14.95,
      type: "beef",
      notes: "",
      quantity: 0,
    },
    {
      id: 305,
      dish: "Beef & Garlic Sauce",
      price: 2.1,
      type: "beef",
      notes: "",
      quantity: 0,
    },
    {
      id: 306,
      dish: "Moo Shu Beef",
      price: 12.95,
      type: "beef",
      notes: "",
      quantity: 0,
    },
    {
      id: 307,
      dish: "Shredded Beef Szechaun",
      price: 12.5,
      type: "beef",
      notes: "",
      quantity: 0,
    },
    {
      id: 308,
      dish: "Beef & Snow Peas",
      price: 12.5,
      type: "beef",
      notes: "",
      quantity: 0,
    },
    {
      id: 309,
      dish: "Beef Peanuts",
      price: 12.5,
      type: "beef",
      notes: "",
      quantity: 0,
    },
    {
      id: 310,
      dish: "Curry Beef",
      price: 12.5,
      type: "beef",
      notes: "",
      quantity: 0,
    },
    {
      id: 311,
      dish: "Beef & Dried Tofu",
      price: 13.95,
      type: "beef",
      notes: "",
      quantity: 0,
    },
    {
      id: 312,
      dish: "Beef/Tomato w/Mixed Veg",
      price: 2.1,
      type: "beef",
      notes: "",
      quantity: 0,
    },
    {
      id: 313,
      dish: "Teriyaki Beef",
      price: 12.95,
      type: "beef",
      notes: "",
      quantity: 0,
    },
    {
      id: 400,
      dish: "Sweet/Sour Pork",
      price: 10.95,
      type: "pork",
      notes: "",
      quantity: 0,
    },
    {
      id: 401,
      dish: "Pork Szechuan Style",
      price: 10.95,
      type: "pork",
      notes: "",
      quantity: 0,
    },
    {
      id: 402,
      dish: "Pork & Dried Tofu",
      price: 12.95,
      type: "pork",
      notes: "",
      quantity: 0,
    },
    {
      id: 403,
      dish: "Pork Garlic Sauce",
      price: 10.95,
      type: "pork",
      notes: "",
      quantity: 0,
    },
    {
      id: 404,
      dish: "Moo Shu Pork",
      price: 11.95,
      type: "pork",
      notes: "",
      quantity: 0,
    },
    {
      id: 405,
      dish: "Twiced Cooked Pork",
      price: 10.95,
      type: "pork",
      notes: "",
      quantity: 0,
    },
    {
      id: 406,
      dish: "Pork w/Black Bean Sauce",
      price: 10.95,
      type: "pork",
      notes: "",
      quantity: 0,
    },
    {
      id: 407,
      dish: "Pork w/Broccoli",
      price: 10.95,
      type: "pork",
      notes: "",
      quantity: 0,
    },
    {
      id: 408,
      dish: "Roasted Pork w/Snowpeas",
      price: 12.5,
      type: "pork",
      notes: "",
      quantity: 0,
    },
    {
      id: 500,
      dish: "Szechuan Shrimp",
      price: 12.5,
      type: "seafood",
      notes: "",
      quantity: 0,
    },
    {
      id: 501,
      dish: "Shrimp & Peanuts",
      price: 10.5,
      type: "seafood",
      notes: "",
      quantity: 0,
    },
    {
      id: 502,
      dish: "Shrimp & Walnuts",
      price: 16.95,
      type: "seafood",
      notes: "",
      quantity: 0,
    },
    {
      id: 503,
      dish: "Szechuan & Garlic",
      price: 13.95,
      type: "seafood",
      notes: "",
      quantity: 0,
    },
    {
      id: 504,
      dish: "Three Sailors",
      price: 13.95,
      type: "seafood",
      notes: "",
      quantity: 0,
    },
    {
      id: 505,
      dish: "Perfect Couple",
      price: 15.95,
      type: "seafood",
      notes: "",
      quantity: 0,
    },
    {
      id: 506,
      dish: "Shrimp & Cashews",
      price: 13.95,
      type: "seafood",
      notes: "",
      quantity: 0,
    },
    {
      id: 507,
      dish: "Teriyaki Shrimp",
      price: 14.5,
      type: "seafood",
      notes: "",
      quantity: 0,
    },
    {
      id: 508,
      dish: "Grilled Salmon",
      price: 15.95,
      type: "seafood",
      notes: "",
      quantity: 0,
    },
    {
      id: 509,
      dish: "Shrimp & Lobster Sauce",
      price: 13.95,
      type: "seafood",
      notes: "",
      quantity: 0,
    },
    {
      id: 600,
      dish: "Szechuan Green Beans",
      price: 8.95,
      type: "vegetable",
      notes: "",
      quantity: 0,
    },
    {
      id: 601,
      dish: "Buddist Delight",
      price: 8.95,
      type: "vegetable",
      notes: "",
      quantity: 0,
    },
    {
      id: 602,
      dish: "Bean Curd Home Style",
      price: 9.5,
      type: "vegetable",
      notes: "",
      quantity: 0,
    },
    {
      id: 603,
      dish: "Sesame Bean Curd",
      price: 9.5,
      type: "vegetable",
      notes: "",
      quantity: 0,
    },
    {
      id: 604,
      dish: "Brocolli & Garlic Sauce",
      price: 8.95,
      type: "vegetable",
      notes: "",
      quantity: 0,
    },
    {
      id: 605,
      dish: "Hot Bean Curd Szechuan Style",
      price: 8.95,
      type: "vegetable",
      notes: "",
      quantity: 0,
    },
    {
      id: 606,
      dish: "EggPlant In Garlic Sauce",
      price: 8.95,
      type: "vegetable",
      notes: "",
      quantity: 0,
    },
    {
      id: 607,
      dish: "EggPlant In Sesame Sauce",
      price: 8.95,
      type: "vegetable",
      notes: "",
      quantity: 0,
    },
    {
      id: 608,
      dish: "Bean Curd In Black Bean Sauce",
      price: 8.95,
      type: "vegetable",
      quantity: 0,
      notes: "",
    },
  ],
  cart: [],
  total: +(0).toFixed(2),
};

function cartReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_ITEM":
      let addedItem = state.items.find((item) => item.id === action.payload.id);
      addedItem.quantity = action.payload.quantity;
      addedItem.notes = action.payload.notes;
      /* return {
        ...state,
        cart: [...state.cart, addedItem],
        total: 0,
      }; */
      let existed_item = state.cart.find(
        (item) => action.payload.id === item.id
      );
      if (existed_item) {
        console.log(`Existing ${existed_item}`);
        addedItem.quantity += 1;
        return {
          ...state,
          total: state.total + addedItem.price,
        };
      } else {
        addedItem.quantity = action.payload.quantity;
        let newTotal = state.total + addedItem.price;

        return {
          ...state,
          cart: [...state.cart, addedItem],
          total: newTotal,
        };
      }
    case "ADD_QUANTITY":
      let add_cart_item = state.cart.find(
        (item) => action.payload.id === item.id
      );
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
        total: state.total + add_cart_item.price,
      };
    case "REMOVE_ITEM":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
        total: state.total - itemTotal,
      };
    case "REMOVE_QUANTITY":
      let sub_cart_item = state.cart.find(
        (item) => action.payload.id === item.id
      );
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? {
                ...item,
                quantity:
                  item.quantity <= 1 ? item.quantity - 0 : item.quantity - 1,
              }
            : item
        ),
        total: state.total - sub_cart_item.price,
      };

    default:
      return state;
  }
}

export default cartReducer;
