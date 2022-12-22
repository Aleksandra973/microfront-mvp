import React from "react";
import Fruits from "./pages/Fruits/Fruits";
import Fruit from "./pages/Fruits/Fruit";
import { Route, Routes } from "react-router-dom";
import { Observable } from "windowed-observable";
import { store } from "./store";
import { Provider } from "react-redux";

const observable = new Observable("cart-items");
const observer = (item) =>
  console.log("%c " + JSON.stringify(item), "background: #222; color: #bada55");
observable.subscribe(observer);

const App = () => {
  return (
    <Provider store={store}>
      <Routes>
        <Route index element={<Fruits />} />
        <Route path=":id" element={<Fruit />} />
      </Routes>
    </Provider>
  );
};
export default App;
