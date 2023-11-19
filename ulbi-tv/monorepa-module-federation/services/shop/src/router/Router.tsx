import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { App } from '@/components/App';
import { Suspense } from 'react';
import { Shop } from '@/pages/shop';

const routes = [
  {
    path: '/shop',
    element: <App />,
    children: [
      {
        path: '/shop/main',
        element: (
          <Suspense fallback={'Loading...'}>
            <Shop />,
          </Suspense>
        ),
      },
      {
        path: '/shop/second',
        element: <div>Second</div>,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);

export default routes;
