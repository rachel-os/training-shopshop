
export const removeFromCart = id => ({
  type: 'REMOVE_ITEM',
  payload: id
});

export const addToCart = id => ({
  type: 'ADD_TO_CART',
  payload: id 
});