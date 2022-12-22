import React from "react";
import Users from "./pages/Users/Users";
import User from "./pages/Users/User";
import { Route, Routes } from 'react-router-dom';
import { Observable } from 'windowed-observable';
import { store } from './store'
import { Provider } from 'react-redux'


const observable = new Observable('cart-items');
const observer = (item) => console.log('%c ' + JSON.stringify(item), 'background: #222; color: #bada55');
observable.subscribe(observer)
 
const App = () => {
    
    return (
        <Provider store={store}>
          <Routes>
            <Route index element={<Users />} />
            <Route path=":id" element={<User />}/>
          </Routes>
        </Provider>
)}
export default App;
