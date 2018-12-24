export const CHANGE_STATE_NAVIGATION = 'navigation/CHANGE_STATE_NAVIGATION';

const initialState = {
  openNavigation: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_STATE_NAVIGATION:
      return {
        ...state,
        openNavigation: !state.openNavigation,
      };
    default:
      return state;
  }
};

export const changeStateNavigation = () => {
  return dispatch => {
    return dispatch({
      type: CHANGE_STATE_NAVIGATION,
    });
  };
};
