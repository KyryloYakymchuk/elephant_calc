import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createContext } from "react";

import { Provider } from "react-redux";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import store from "./store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));

const firebaseConfig = {
  apiKey: "AIzaSyALBORjfqEiB84aoZ7hUY7yrn9Bk633AuM",
  authDomain: "elephant-30c9a.firebaseapp.com",
  projectId: "elephant-30c9a",
  storageBucket: "elephant-30c9a.appspot.com",
  messagingSenderId: "181727468940",
  appId: "1:181727468940:web:b6ddf553ea1932075bcaa9"
};

export const Context = createContext(null);
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
root.render(
  <Provider store={store}>
    <Context.Provider value={{ db }}>
      <App />
    </Context.Provider>
  </Provider>
);
