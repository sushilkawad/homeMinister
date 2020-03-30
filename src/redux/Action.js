import {bindActionCreators} from 'redux';
import store from './Store';

const login = data => dispatch => {
  dispatch({
    type: 'LOGIN',
    payload: data,
  });
};

const logout = () => dispatch => {
  dispatch({
    type: 'LOGOUT',
  });
};

const actions = bindActionCreators(
  {
    login,
    logout,
  },
  store.dispatch,
);

export default actions;
