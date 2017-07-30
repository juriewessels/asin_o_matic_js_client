import {
  CLOSE_MESSAGE,
  DISPLAY_MESSAGE,
  PROCESSING_REQUEST,
  REQUEST_PROCESSED
} from '../actions';

const appDefaultState = {
  isLoading: false,
  displayMessage: false
};

function app(state = appDefaultState, action) {
  switch (action.type) {
    case CLOSE_MESSAGE:
      return { ...state, displayMessage: false, message: null };

    case DISPLAY_MESSAGE:
      return {
        ...state,
        isLoading: false,
        displayMessage: true,
        message: action.message
      };

    case PROCESSING_REQUEST:
      return { ...state, isLoading: true };

    case REQUEST_PROCESSED:
      return { ...state, isLoading: false };

    default:
      return state;
  }
}

export default app;
