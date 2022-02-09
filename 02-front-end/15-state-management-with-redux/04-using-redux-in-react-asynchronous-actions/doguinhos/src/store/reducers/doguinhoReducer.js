const INITIAL_STATE = {
  isFetching: false,
  imagePath: '',
  error: '',
}

const GET_IMAGE = 'GET_IMAGE';
const REQUEST_IMAGE = 'REQUEST_IMAGE';
const FAILED_REQUEST = 'FAILED_REQUEST';

const doguinhoReducer = (state = INITIAL_STATE, action) => {
  // console.log(action, 'action');
  // console.log(state,'state');
  switch (action.type) {
    case REQUEST_IMAGE:
      return {
        ...state,
        isFetching: true,
      };
    case GET_IMAGE:
      return {
        ...state,
        imagePath: action.payload,
        isFetching: false,
      };
    case FAILED_REQUEST:
      return {
        ...state,
        error: action.payload,
        isFetching: false,
      };
    default:
      return state;
  }
}

export default doguinhoReducer;
