import { OPEN_SIDEBAR, CLOSE_SIDEBAR } from "../actions/actions";

const reducer = (state, action) => {
  switch (action.types) {
    case OPEN_SIDEBAR:
      return {
        ...state,
        isSidebarOpen: true,
      };
    case CLOSE_SIDEBAR:
      return {
        ...state,
        isSidebarOpen: false,
      };
    default:
        return state;
  }
};

export default reducer;
