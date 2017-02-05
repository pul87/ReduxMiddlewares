export default function({ dispatch }) {
  return next => action => {

    // if the action does not have a payload or if is not a promise
    if ( ! action.payload || ! action.payload.then ) {
      return next(action);
    }

    action.payload.then( response => dispatch({ ...action, payload: response }) );

  };
}
