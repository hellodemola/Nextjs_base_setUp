import { useMemo } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import Cookie from 'js-cookie';

let store;
const initialState = {
  user: Cookie.getJSON('user') || {
    id: '8b447f9e-4561-11ec-81d3-0242ac130003',
    first_name: 'Vistor',
    last_name: '',
    image_url: null,
    type: 'admin',
    email: '',
    status: 'active',
    username: 'demo',
  },
  token: Cookie.get('token'),
  drawer: false,
  pop_over: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_USER':
      return {
        ...state,
        user: action.payload,
      };
    case 'RESET_EMAIL':
      return {
        ...state,
        reset_email: action.payload,
      };
    case 'ADD_TOPIC':
      return {
        ...state,
        add_topic: action.payload,
      };
    case 'PASSWORD_RESET':
      return {
        ...state,
        reset_password: action.payload,
      };
    case 'PASSWORD_CHANGE':
      return {
        ...state,
        change_password: action.payload,
      };
    case 'LOGOUT':
      return {
        ...state,
        auth: false,
        user: Cookie.remove('token'),
        token: Cookie.remove('data'),
      };
    default:
      return state;
  }
};

function initStore(preloadedState = initialState) {
  return createStore(
    reducer,
    preloadedState,
    composeWithDevTools(applyMiddleware()),
  );
}

export const initializeStore = (preloadedState) => {
  // eslint-disable-next-line
  let _store = store ?? initStore(preloadedState);

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    });
    // Reset the current store
    store = undefined;
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store;
  // Create the store once in the client
  if (!store) store = _store;

  return _store;
};
  // eslint-disable-next-line
export function useStore(initialState) {
  // eslint-disable-next-line
  const store = useMemo(() => initializeStore(initialState), [initialState]);
  return store;
}
