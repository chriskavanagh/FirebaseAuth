//import remove from "lodash.remove";

const initialState = [];

function notesReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_NOTE":
      return [
        ...state,
        {
          id: action.id,
          note: action.note,
        },
      ];

    case "DELETE_NOTE":
      let newState = state.filter((item) => item.id !== action.payload);
      return newState;

    default:
      return state;
  }
}

export default notesReducer;

/* case DELETE_NOTE:
    let newState = state.filter(item => item.id !==action.id)
      return newState; */

/* case DELETE_NOTE:
        return [
            ...state,
            state.filter(item => item.id !== action.payload)
        ] */
