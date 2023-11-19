import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export const App = () => {
  return (
    <div>
      <h1>
        SHOP MODULE
        <br />
        <span>234244444</span>
      </h1>
      <Outlet />
    </div>
  );
};
