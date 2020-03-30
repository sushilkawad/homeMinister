import {getPersistData} from '../constants';

const initialState = {
  cart: {},
  itemCount: 0,
  loginData: {},
  loggedIn: !!getPersistData('email'),
};

export default function(state = initialState, action) {
  const {type, payload} = action;
  let newState = {...state};
  switch (type) {
    case 'LOGIN':
      let {token, ...customer} = payload || {};
      newState = {
        ...newState,
        loggedIn: true,
        loginData: {customer, token},
      };
      return {...newState};
    case 'LOGOUT':
      return {...initialState, loggedIn: false};
    default:
      return newState;
  }
}
