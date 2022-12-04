const DEFAULT_STATE_USER = {
  users: [],
  loading: false,
  error: null,
};
export const userReducer = (state = DEFAULT_STATE_USER, { type, payload }) => {
  switch (type) {
    case "USERS/SET": {
      return {
        ...state,
        users: payload,
      };
    }
    case "USERS/FETCH/START": {
      return {
        ...state,
        loading: true,
      };
    }
    case "USERS/FETCH/SUCC": {
      return {
        ...state,
        loading: false,
        error: null,
        users: payload,
      };
    }
    case "USERS/FETCH/ERR": {
      return {
        ...state,
        loading: false,
        error: payload,
      };
    }
    default:
      return state;
  }
};
