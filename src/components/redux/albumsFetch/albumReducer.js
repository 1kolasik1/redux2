const DEFAULT_STATE = {
  albums: [],
  loading: false,
  error: null,
};

export const albumReducer = (state = DEFAULT_STATE, { type, payload }) => {
  switch (type) {
    case "ALBUMS/SET": {
      return {
        ...state,
        albums: payload,
      };
    }
    case "ALBUMS/FETCH/START": {
      return {
        ...state,
        loading: true,
      };
    }
    case "ALBUMS/FETCH/SUCC": {
      return {
        ...state,
        loading: false,
        error: null,
        albums: payload,
      };
    }
    case "ALBUMS/FETCH/ERR": {
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
