const GET_IMAGE = 'GET_IMAGE';
const REQUEST_IMAGE = 'REQUEST_IMAGE';
const FAILED_REQUEST = 'FAILED_REQUEST';

const getImage = (json) => {
  return {
    type: GET_IMAGE,
    payload: json.message
  };
}

const requestDog = () => {
  return {
    type: REQUEST_IMAGE
  };
}

const failedRequest = (error) => {
  return {
    type: FAILED_REQUEST,
    payload: error
  };
}


// o uso de API, o thunk vai retornar uma FUNÇÃO (e não plain object)
// nesse caso somente a funcao fetch é exportada, e dentro dela as actions
// seguindo a regra LOADING, SUCCESS, FAILURE
// veja que automaticamente tem acesso ao dispatch
const fetchDog = () => {
  return (dispatch) => {
    dispatch(requestDog());
    return fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(json => dispatch(getImage(json)))
      .catch(error => dispatch(failedRequest(error)))
  };
}

export default fetchDog;
