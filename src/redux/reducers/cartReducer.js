import { initialState as data } from "../data/data";

const initialState = {
  items: data.items,
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
        //total: state.total - itemTotal,
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
