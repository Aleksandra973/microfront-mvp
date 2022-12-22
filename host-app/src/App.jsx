import React from "react";
import ChildApp from "Child/App";
import ChildApp2 from "Child2/App";
import DefaultLayout from "./components/Layout/DefaultLayout";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Observable } from 'windowed-observable';
import '../src/components/Layout/layout.css';
import { Link } from 'react-router-dom';

const observable = new Observable('cart-items');
const observer = (item) => console.log(item);
observable.subscribe(observer)


export const App = () => {
   
  // observable.publish({ id: 1234, name: 'Mouse Gamer XyZ', quantity: 1 });

  const resetCount = () => {    
    const resetCount = new CustomEvent('RESET_COUNT');
    window.dispatchEvent(resetCount);
  }

  const sendUser = () => {    
    const userInfo = new CustomEvent('USER', {detail: {id: 1, name: 'TEST TESTOVICH'}});
    window.dispatchEvent(userInfo);
  }

  return (
    <>
      <div className={'header'}>
        MAIN APP HEADER
        <div>
          <button
          aria-label="Decrement value"
          onClick={resetCount}
        >
          resetCount
        </button>
        <button
          aria-label="Decrement value"
          onClick={sendUser}
        >
          sendUser
        </button>
        </div>
      </div>
      <div className={'content'}>
      <BrowserRouter>
      <Link to={'users'}>TO CHILD APP</Link>
        <br/>
        <Link to={'/'}>TO CHILD APP2</Link>
      <Routes>
          <Route path="/*" element={<ChildApp2 />} />
          <Route path="users/*" element={<ChildApp />} />
      </Routes>
    </BrowserRouter>
  </div>
  </>
  );
}
export default App;