import { GET_APPLICATION_SUCCESS, GET_USER_SUCCESS, LOG_OUT_SUCCESS, GET_LANGUAGE_BY_STUDENTID_SUCCESS } from "../constants/actionTypes";


const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem('user')),
  application: JSON.parse(localStorage.getItem('application')),
  languages: [],
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOG_OUT_SUCCESS:{
      localStorage.removeItem('user');
      localStorage.removeItem('application');
      return {...state, user: {}, application: {}};
    }
    case GET_USER_SUCCESS: {
      localStorage.setItem('user', JSON.stringify(action.payload));
      return {...state, user: action.payload };
    }
    case GET_APPLICATION_SUCCESS: {
      localStorage.setItem('application', JSON.stringify(action.payload));
      return {...state, application: action.payload };
    }
    case GET_LANGUAGE_BY_STUDENTID_SUCCESS: {
      return {...state, languages: action.payload };
    }
    default:
      return state;
  }
};

export default userReducer;
