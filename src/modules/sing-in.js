export const SUBMIT_SING_IN_FORM = 'sing-in/SUBMIT_SING_IN_FORM';
export const AUTHORIZATION_SUCCESS = 'sing-in/AUTHORIZATION_SUCCESS';
export const AUTHORIZATION_ERROR = 'sing-in/AUTHORIZATION_ERROR';

const initialState = {
  authorized: false,
  sending: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_SING_IN_FORM:
      return {
        ...state,
        sending: true,
      };
    case AUTHORIZATION_SUCCESS:
      return {
        ...state,
        authorized: true,
      };
    case AUTHORIZATION_ERROR:
      return {
        ...state,
        authorized: false,
      };

    default:
      return state;
  }
};

export const submitSingInForm = ev => {
  const form = {};
  for (var pair of new FormData(ev.target).entries()) {
    form[pair[0]] = pair[1];
  }

  console.log(form);
  ev.preventDefault();
  console.log(
    Array.prototype.map.call(ev.target.elements, el => {
      return { [el.name]: el.value || el.checked };
    }),
  );
  return dispatch => {
    dispatch({
      type: SUBMIT_SING_IN_FORM,
    });

    return fetch('ya.ru')
      .then(data => {
        console.log(data);
      })
      .then(() => {
        dispatch({
          type: AUTHORIZATION_SUCCESS,
        });
      })
      .catch(() => {
        dispatch({
          type: AUTHORIZATION_ERROR,
        });
      });
  };
};
