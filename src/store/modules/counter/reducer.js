const reducerCounter = (state = 0, action) => {
  console.log(action)
  switch (action.type) {
    case 'ADD_NUM':
      console.log("mas")
      return state + action.payload;
    case "LES_NUM":
      return state - action.payload;
    default:
      return state;
  }
}
export default reducerCounter;

