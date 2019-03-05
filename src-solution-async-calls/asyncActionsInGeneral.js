export function asyncActionInANutshell() {

  return (dispatch, getState) => {

    const { someStatePart } = getState();

    dispatch(readyToTakeOff());

    performBackendCall(params, response => {

      dispatch(anActionFor(response));

    });
  };
}
