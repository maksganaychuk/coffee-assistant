import { createRoutine } from 'redux-routines';
import { INIT, LOADING, SUCCESS, FAILURE } from '@constants/requestPhase';
import * as api from './api';

// < ----- ACTIONS ----- > //
const getCoffeeListRoutine = createRoutine('GET_COFFEE_LIST');

// < ----- ACTION CREATORS ----- > //
export const getCoffeeList = data => async dispatch => {
  try {
    dispatch(getCoffeeListRoutine.request());

    const response = await api.getCoffeeList(data);

    return dispatch(getCoffeeListRoutine.success(response.data));
  } catch (error) {
    return dispatch(getCoffeeListRoutine.failure(error.response));
  }
};

// < ----- STATE ----- > //
export const coffeeStoreWhitelist = [];

const initialState = {
  coffeeList: [],

  getCoffeeListPhase: INIT,
  getCoffeeListError: null,
};

// < ----- STORE REDUCER ----- > //
const store = (state = initialState, { type, payload }) => {
  switch (type) {
    // GET BENEFITS
    case getCoffeeListRoutine.REQUEST:
      return {
        ...state,
        getCoffeeListPhase: LOADING,
      };
    case getCoffeeListRoutine.SUCCESS:
      return {
        ...state,
        getCoffeeListPhase: SUCCESS,
        coffeeList: payload.data,
      };
    case getCoffeeListRoutine.FAILURE:
      return {
        ...state,
        getCoffeeListPhase: FAILURE,
        getCoffeeListError: payload,
      };
    default:
      return state;
  }
};

export default store;
