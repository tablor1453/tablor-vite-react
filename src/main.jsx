import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginPage from './pages/Login.jsx'
import RegisterPage from './pages/register.jsx'
import ErrorPage from './pages/404'
import ProductsPage from './pages/products'
import DetailProduct from './pages/detailProduct'
import { Provider } from 'react-redux'
import store from './redux/store'

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello WOrld</div>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/register",
    element: <RegisterPage />
  },
  {
    path: "/products",
    element: <ProductsPage />
  },
  {
    path: "/product/:id",
    element: <DetailProduct />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
