import React from 'react';
import { Outlet } from 'react-router-dom';
import './layout.css';

const DefaultLayout = () => {
  return (
    <>
      <div className={'header'}>
       MAIN APP HEADER
      </div>
      <div className={'content'}>
      <h3>This is Main app is only container for child apps</h3>
        <Outlet />
      </div>
      <div className={'header'}>Microfront MVP ©2022 </div>
    </>
  );
};

export default DefaultLayout;
