import {
  LOAD_PRODUCTS,
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  REFRESH_PRODUCT
} from '../actions';

function products(state = [], action) {
  const product = action.product;

  switch (action.type) {
    case LOAD_PRODUCTS:
      return state.concat(action.products);

    case ADD_PRODUCT:
      const productExists = state.filter(p => p.id === product.id).length > 0;
      return !productExists ? state.concat(product) : state;

    case REFRESH_PRODUCT:
      return state.map(p => (p.id === product.id ? { ...p, ...product } : p));

    case REMOVE_PRODUCT:
      return state.filter(p => p.id !== product.id);

    default:
      return state;
  }
}

export default products;
