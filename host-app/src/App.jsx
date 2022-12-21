import React from "react";
import ChildApp from "Child/App";
import DefaultLayout from "./components/Layout/DefaultLayout";
import MainPage from "./pages/MainPage";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Observable } from 'windowed-observable';

const observable = new Observable('cart-items');
const observer = (item) => console.log(item);
observable.subscribe(observer)


export const App = () => {
   
  observable.publish({ id: 1234, name: 'Mouse Gamer XyZ', quantity: 1 });

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<MainPage />} />
        <Route path="users/*" element={<ChildApp />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}
export default App;