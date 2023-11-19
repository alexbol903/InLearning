import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { admitRoutes } from '@packages/shared/src/routes/admin';
import { shopRoutes } from '@packages/shared/src/routes/shop';

export const App = () => {
  return (
    <div>
      <h1>Hello word!</h1>

      <Link to={admitRoutes.about}>About</Link>
      <br />
      <Link to={shopRoutes.main}>Shop</Link>
      <br />
      <Outlet />
    </div>
  );
};
