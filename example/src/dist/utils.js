export const wrap = props => {
  return props.children;
};

export const createDispatch = reduce => {
  let initialState = {};
  let Component;
  if (!!reduce.initialState) {
    Component = reduce.reducer;
    initialState = reduce.initialState;
  } else {
    Component = reduce;
  }
  return {
    Component,
    initialState
  };
};
