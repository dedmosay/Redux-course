const redux = require("redux");

const initialState = {
  counter: 0,
};

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      return {
        counter: state.counter + 1,
      };
    case "SUB":
      return {
        counter: state.counter - 1,
      };
    case "NUM":
      return {
        counter: state.counter + addNumber.value,
      };
    default:
      return state;
  }
};

// Store
const store = redux.createStore(reducer);
console.log("1 - Начальный State", store.getState());
store.subscribe(()=> {
    console.log('4 - Подписка на  Subscribe', store.getState())
})

// Action
const addCounter = {
  type: "ADD",
};
const subCounter = {
  type: "SUB",
};
const addNumber = {
  type: "NUM",
  value: 10,
};

// dispatch используем для вызова действия
store.dispatch(addCounter);
console.log("2 - Выполнение ADD ", store.getState());

store.dispatch(subCounter);
console.log("3 - Выполнение SUB ", store.getState());

store.dispatch(addNumber);
console.log("4 - Выполнение NUM ", store.getState());
