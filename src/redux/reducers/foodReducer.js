const initialState = {
  items: {
    soups: [
      { id: 101, dish: "Egg Drop Soup", price: 2.1, quantity: 0 },
      { id: 102, dish: "Wonton Soup", price: 2.1, quantity: 0 },
      { id: 103, dish: "Hot Sour Soup", price: 2.1, quantity: 0 },
      { id: 104, dish: "Miso Soup", price: 2.1, quantity: 0 },
      { id: 105, dish: "Dragon & Phoenix Soup", price: 2.1, quantity: 0 },
      { id: 106, dish: "Combo Wonton Soup", price: 2.1, quantity: 0 },
      { id: 107, dish: "Chicken Veg Soup", price: 2.1, quantity: 0 },
      { id: 108, dish: "Crabmeat Veg Soup", price: 2.1, quantity: 0 },
      { id: 109, dish: "Seafood Treasure Soup", price: 2.1, quantity: 0 },
      { id: 110, dish: "Seafood Curry Soup", price: 2.1, quantity: 0 },
    ],
    poultry: [
      { id: 200, dish: "General Chicken", price: 12.95, quantity: 0 },
      { id: 201, dish: "Sweet Sour Chicken", price: 10.95, quantity: 0 },
      { id: 202, dish: "Szechuan Chicken", price: 10.95, quantity: 0 },
      { id: 203, dish: "Moo Goo Gai Pan", price: 10.95, quantity: 0 },
      { id: 204, dish: "Chicken & Garlic", price: 10.95, quantity: 0 },
      { id: 205, dish: "Chicken & Peanuts", price: 10.95, quantity: 0 },
      { id: 206, dish: "Lemon Chicken", price: 10.95, quantity: 0 },
      { id: 207, dish: "Chicken & Cashew", price: 10.95, quantity: 0 },
      { id: 208, dish: "Three Runners", price: 13.95, quantity: 0 },
      { id: 209, dish: "House Grilled Chicken", price: 10.95, quantity: 0 },
      { id: 210, dish: "Curry Chicken", price: 10.95, quantity: 0 },
      { id: 211, dish: "Sesame Chicken", price: 10.95, quantity: 0 },
      { id: 212, dish: "Pineapple Chicken", price: 10.95, quantity: 0 },
      {
        id: 213,
        dish: "Chicken w/Blk Bean Sauce",
        price: 10.95,
        quantity: 0,
      },
      {
        id: 214,
        dish: "Chicken Broccoli w/Garlic Sauce",
        price: 10.95,
        quantity: 0,
      },
      { id: 215, dish: "Five Flavor Chicken", price: 12.95, quantity: 0 },
      { id: 216, dish: "Chicken Green Pepper", price: 10.95, quantity: 0 },
      { id: 217, dish: "Teriyaki Chicken", price: 12.5, quantity: 0 },
    ],
    beef: [
      { id: 301, dish: "Szechuan Beef", price: 12.5, quantity: 0 },
      { id: 302, dish: "Beef With Green Pepper", price: 12.5, quantity: 0 },
      { id: 303, dish: "Beef & Broccoli", price: 12.5, quantity: 0 },
      { id: 304, dish: "Sesame Beef", price: 14.95, quantity: 0 },
      { id: 305, dish: "Beef & Garlic Sauce", price: 2.1, quantity: 0 },
      { id: 306, dish: "Moo Shu Beef", price: 12.95, quantity: 0 },
      { id: 307, dish: "Shredded Beef Szechaun", price: 12.5, quantity: 0 },
      { id: 308, dish: "Beef & Snow Peas", price: 12.5, quantity: 0 },
      { id: 309, dish: "Beef Peanuts", price: 12.5, quantity: 0 },
      { id: 310, dish: "Curry Beef", price: 12.5, quantity: 0 },
      { id: 311, dish: "Beef & Dried Tofu", price: 13.95, quantity: 0 },
      { id: 312, dish: "Beef/Tomato w/Mixed Veg", price: 2.1, quantity: 0 },
      { id: 313, dish: "Teriyaki Beef", price: 12.95, quantity: 0 },
    ],
    pork: [
      { id: 400, dish: "Sweet/Sour Pork", price: 10.95, quantity: 0 },
      { id: 401, dish: "Pork Szechuan Style", price: 10.95, quantity: 0 },
      { id: 402, dish: "Pork & Dried Tofu", price: 12.95, quantity: 0 },
      { id: 403, dish: "Pork Garlic Sauce", price: 10.95, quantity: 0 },
      { id: 404, dish: "Moo Shu Pork", price: 11.95, quantity: 0 },
      { id: 405, dish: "Twiced Cooked Pork", price: 10.95, quantity: 0 },
      { id: 406, dish: "Pork w/Black Bean Sauce", price: 10.95, quantity: 0 },
      { id: 407, dish: "Pork w/Broccoli", price: 10.95, quantity: 0 },
      { id: 408, dish: "Roasted Pork w/Snowpeas", price: 12.5, quantity: 0 },
    ],
  },
  addedItems: [],
  total: +(0).toFixed(2),
};

function foodReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_ITEM":
      let addedItem = Object.values(state.items)
        .reduce((acc, curr) => acc.concat(curr))
        .find((item) => item.id === action.payload);

      let existed_item = state.addedItems.find(
        (item) => action.payload === item.id
      );
      if (existed_item) {
        addedItem.quantity += 1;
        return {
          ...state,
          total: state.total + addedItem.price,
        };
      } else {
        addedItem.quantity = 1;
        let newTotal = state.total + addedItem.price;

        return {
          ...state,
          addedItems: [...state.addedItems, addedItem],
          total: newTotal,
        };
      }

    case "REMOVE_ITEM":
      let inCart = state.addedItems.find((item) => action.payload === item.id);
      let itemTotal = inCart.quantity * inCart.price.toFixed(2);
      return {
        ...state,
        addedItems: state.addedItems.filter(
          (item) => item.id !== action.payload
        ),
        total: state.total - itemTotal,
      };

    case "ADD_QUANTITY":
      let add_cart_item = state.addedItems.find(
        (item) => action.payload === item.id
      );
      return {
        ...state,
        addedItems: state.addedItems.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
        total: state.total + add_cart_item.price,
      };

    case "REMOVE_QUANTITY":
      let sub_cart_item = state.addedItems.find(
        (item) => action.payload === item.id
      );
      return {
        ...state,
        addedItems: state.addedItems.map((item) =>
          item.id === action.payload
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

export default foodReducer;
