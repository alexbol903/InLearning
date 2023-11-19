import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { App } from '@/components/App';
import { About } from '@/pages/about';
import { Shop } from '@/pages/shop';
var root = document.getElementById('root');
if (!root) {
    throw new Error('root is not found');
}
var container = createRoot(root);
var router = createBrowserRouter([
    {
        path: '/',
        element: _jsx(App, {}),
        children: [
            {
                path: '/about',
                element: (_jsxs(Suspense, { fallback: 'Loading...', children: [_jsx(About, {}), ","] })),
            },
            {
                path: '/shop',
                element: (_jsxs(Suspense, { fallback: 'Loading...', children: [_jsx(Shop, {}), ","] })),
            },
        ],
    },
]);
container.render(_jsx(RouterProvider, { router: router }));
