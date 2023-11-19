import React from 'react';
import { App } from '@/components/App';
import { createBrowserRouter } from 'react-router-dom';
// @ts-ignore
import shopRoutes from 'shop/Route';
// @ts-ignore
import AdminRoutes from 'admin/Route';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [...shopRoutes, ...AdminRoutes],
  },
]);
