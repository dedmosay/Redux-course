Установка пакета Redux:

### `npm i redux`

Redux состоит из Reducer, Store, Actions

Подключение `Redux`

```js
    const redux = require("redux");
```

Сначала нужно создать некоторый Store (хранилище для данных)

### Store

```js
    // Store
    const store = redux.createStore(reducer);
    console.log("1 - Начальный State", store.getState());
    store.subscribe(() => {
        console.log("4 - Подписка на  Subscribe", store.getState());
    });
```

В `createStore` передаем значения с помощью ```reducer```

### Reducer

```js
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
```

Примечание:
Если `state` не определен, то его задают начальным параметром `initialState`

```js
    const initialState = {
        counter: 0,
    };
```

В reducer принимает еще объект Actions

Данный объект по сути имеет поле TYPE

### Actions

```js
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
```

```dispatch``` используем для вызова действия

### Dispatch
```js
    // dispatch 
    store.dispatch(addCounter);
    console.log("2 - Выполнение ADD ", store.getState());

    store.dispatch(subCounter);
    console.log("3 - Выполнение SUB ", store.getState());

    store.dispatch(addNumber);
    console.log("4 - Выполнение NUM ", store.getState());

```

Запуск

### `node redux.js`
```
    1 - Начальный State { counter: 0 }
    4 - Подписка на  Subscribe { counter: 1 }
    2 - Выполнение ADD  { counter: 1 }
    4 - Подписка на  Subscribe { counter: 0 }
    3 - Выполнение SUB  { counter: 0 }
    4 - Подписка на  Subscribe { counter: 10 }
    4 - Выполнение NUM  { counter: 10 }
```


### см. redux.js
