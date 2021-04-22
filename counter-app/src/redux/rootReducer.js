const initialState = {
  counter: 10,
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD":
      return {
        counter: state.counter + 1,
      };
    case "SUB":
      return {
        counter: state.counter - 1,
      };
    default:
      return state;
  }
}
