import React, { createContext } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { productReducer } from "./store/reducers/productReducer";
import App from "./App";
import firebase from "firebase";
import "firebase/firestore"; // база данных,с которой мы будем взаимодействовать
import "firebase/auth"; // модуль для аутентификации
//аутентификации - проверка подлинности пользователя путем сравнения
//введенного им google аккаунта

const store = createStore(
  productReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// тут мы и сконектимся с firebase
// подключение firebase приложения
// объект с конфигом
firebase.initializeApp({
  apiKey: "AIzaSyABdlki0Cm_OfUZzxJeRTpvuoCBPaoUD6c",
  authDomain: "login-8e16f.firebaseapp.com",
  projectId: "login-8e16f",
  storageBucket: "login-8e16f.appspot.com",
  messagingSenderId: "1052670929108",
  appId: "1:1052670929108:web:c3a1389f9b7ea436087341",
  measurementId: "G-TT7WFP4XV9",
});

export const Context = createContext(null);
// нам нужны будут эти два объекта в components,
// чтобы не прокидывать всё это через пропсы
// воспользуемся контекстом

const auth = firebase.auth(); //объект,с помощью которого мы будем авторизовываться
const firestore = firebase.firestore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Context.Provider
        value={{
          firebase,
          auth,
          firestore,
        }}
      >
        <App />
      </Context.Provider>
      ,
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
