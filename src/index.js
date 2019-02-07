export const defaultStater = (state, name) => {
  const storedState = localStorage.getItem(name);
  const defaultState = storedState
    ? { ...state, ...JSON.parse(storedState) }
    : state;
  const saveState = stateToSave => {
    if (localStorage) {
      localStorage.setItem(name, JSON.stringify(stateToSave))
    }
    return stateToSave;
  };
  return [defaultState, saveState];
};
