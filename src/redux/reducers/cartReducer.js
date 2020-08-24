import { initialState as data } from "../data/data";

const initialState = {
  items: data.items,
  cart: [],
  total: +(0).toFixed(2),
};

function cartReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_ITEM":
      // find item in menu
      let addedItem = state.items.find((item) => item.id === action.payload.id);

      // check if item is already in cart
      let existed_item = state.cart.find(
        (item) => action.payload.id === item.id
      );
      if (existed_item) {
        console.log(`Existing ${JSON.stringify(existed_item)}`);
        //existed_item.quantity += 1;
        // let tax = state.total * 0.093;
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === existed_item.id
              ? { ...existed_item, quantity: existed_item.quantity + 1 }
              : item
          ),
          // total: state.total + addedItem.price,
          total: state.total + existed_item.price,
        };
      } else {
        addedItem.quantity = action.payload.quantity;
        addedItem.notes = action.payload.notes;
        let newTotal = state.total + addedItem.price;
        //let tax = newTotal * 0.093; // this works

        return {
          ...state,
          cart: [...state.cart, addedItem],
          //total: newTotal + tax, // this works
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
      let inCart = state.cart.find((item) => action.payload.id === item.id);
      let itemTotal = inCart.quantity * inCart.price.toFixed(2);
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
