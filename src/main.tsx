import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Menu } from './pages/Menu/Menu'
import { Cart } from './pages/Cart/Cart'
import { Error } from './pages/Error/Error'
import { Product } from './pages/Product/Product'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Layout } from './layout/Layout/Layout'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: '/',
				element: <Menu />,
			},
			{
				path: '/cart',
				element: <Cart />,
			},
			{
				path: '/product/:id',
				element: <Product />,
			},
		],
	},
	{
		path: '*',
		element: <Error />,
	},
])

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={router}></RouterProvider>
	</React.StrictMode>
)
