/* export const addItem = (id, quantity, notes) => {
  return {
    type: "ADD_ITEM",
    id,
    quantity,
    notes,
  };
}; */

export const addItem = (id, quantity, notes) => {
  return {
    type: "ADD_ITEM",
    payload: {
      id: id,
      quantity: quantity,
      notes: notes,
    },
  };
};

export const removeItem = (id) => {
  return {
    type: "REMOVE_ITEM",
    payload: {
      id: id,
    },
  };
};

export const addQuantity = (id) => {
  return {
    type: "ADD_QUANTITY",
    payload: {
      id: id,
    },
  };
};

export const removeQuantity = (id) => {
  return {
    type: "REMOVE_QUANTITY",
    payload: {
      id: id,
    },
  };
};

// ---------------------------------------------------------------------------------------//
/* export const addItem = (id) => {
  dispatch({
    type: "ADD_ITEM",
    payload: id,
  });
}; */

/* export const addQuantity = (id) => {
  dispatch({
    type: "ADD_QUANTITY",
    payload: id,
  });
}; */

/* export const removeQuantity = (id) => {
  dispatch({
    type: "REMOVE_QUANTITY",
    payload: id,
  });
}; */

/* export const removeItem = (id) => {
  dispatch({
    type: "REMOVE_ITEM",
    payload: id,
  });
}; */
