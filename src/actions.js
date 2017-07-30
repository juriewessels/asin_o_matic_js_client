import { API_URL } from './env_vars';

export const CLOSE_MESSAGE = 'CLOSE_MESSAGE';
export const DISPLAY_MESSAGE = 'DISPLAY_MESSAGE';
export const PROCESSING_REQUEST = 'PROCESSING_REQUEST';
export const REQUEST_PROCESSED = 'REQUEST_PROCESSED';
export const LOAD_PRODUCTS = 'LOAD_PRODUCTS';
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const REFRESH_PRODUCT = 'REFRESH_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';

export function processingRequest() {
  return {
    type: PROCESSING_REQUEST
  };
}

export function requestProcessed() {
  return {
    type: REQUEST_PROCESSED
  };
}

export function closeMessage() {
  return {
    type: CLOSE_MESSAGE
  };
}

export function displayMessage(message) {
  return {
    type: DISPLAY_MESSAGE,
    message
  };
}

export function loadProducts(json) {
  return {
    type: LOAD_PRODUCTS,
    products: json.products
  };
}

export function addProduct(json) {
  return {
    type: ADD_PRODUCT,
    product: json.product
  };
}

export function refreshProduct(json) {
  return {
    type: REFRESH_PRODUCT,
    product: json.product
  };
}

export function removeProduct(json) {
  return {
    type: REMOVE_PRODUCT,
    product: json.product
  };
}

const headers = new Headers({ 'Content-Type': 'application/json' });
const productsPath = `${API_URL}/products`;

function checkStatus(response) {
  if (response.ok) {
    return Promise.resolve(response.json());
  }

  return response.json().then(json => {
    const error = new Error(json.message);
    return Promise.reject(Object.assign(error, { response }));
  });
}

function processRequest(url, method, data, successHandler) {
  return dispatch => {
    dispatch(processingRequest());

    fetch(url, { headers: headers, method: method, body: data })
      .then(response => checkStatus(response))
      .then(json => {
        dispatch(successHandler(json));
        dispatch(requestProcessed());
        dispatch(displayMessage(json.message));
      })
      .catch(error => dispatch(displayMessage(error.message)));
  };
}

export function getProducts() {
  return processRequest(productsPath, 'GET', null, loadProducts);
}

export function createProduct(asin) {
  const data = JSON.stringify({ asin: asin });
  return processRequest(productsPath, 'POST', data, addProduct);
}

export function updateProduct(productId) {
  const url = `${productsPath}/${productId}`;
  return processRequest(url, 'PUT', null, refreshProduct);
}

export function deleteProduct(productId) {
  const url = `${productsPath}/${productId}`;
  return processRequest(url, 'DELETE', null, removeProduct);
}
