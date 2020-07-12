const initialState = {
  soupById: {
    100: {
      id: 100,
      name: "Miso Soup",
      price: 3.25,
    },
    101: {
      id: 101,
      name: "Hot/Sour Soup",
      price: 2.25,
    },
    102: {
      id: 102,
      name: "Miso Soup",
      price: 2.25,
    },
    103: {
      id: 103,
      name: "Egg Drop Soup",
      price: 2.25,
    },
    104: {
      id: 104,
      name: "Bean Curd Soup",
      price: 2.75,
    },
    allIds: [100, 101, 102, 103, 104],
  },
  poultryById: {
    200: {
      id: 200,
      name: "Szechuan Chicken",
      price: 9.25,
    },
    201: {
      id: 201,
      name: "Moo Gai Pan",
      price: 9.25,
    },
    202: {
      id: 202,
      name: "Moo Shu Chicken",
      price: 12.25,
    },
    203: {
      id: 203,
      name: "Generals Chicken",
      price: 12.25,
    },
    204: {
      id: 204,
      name: "Chicken & Broccoli",
      price: 10.75,
    },
    allIds: [200, 201, 202, 203, 204],
  },
  addedItems: [],
  total: +(0).toFixed(2),
};

function menuReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_MENU":
      return {
        ...state,
      };
    default:
      return state;
  }
}

export default menuReducer;
