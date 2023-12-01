import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginPage from './pages/login.jsx'
import RegisterPage from './pages/register.jsx'
import ErrorPage from './pages/404'
import ProductsPage from './pages/products'
import DetailProduct from './pages/detailProduct'
import { Provider } from 'react-redux'
import store from './redux/store'
import DarkModeContextProvider from './context/DarkMode'
import { TotalPriceProvider } from './context/TotalPriceContext'
import HomePage from './pages/Home'


// const userLogin = useLogin();

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />
  },
  {
    path: "/login",
    element: <LoginPage />
    // element: userLogin() ? <Redirect to="/" /> : <LoginPage />,
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
      <DarkModeContextProvider>
        <TotalPriceProvider>
          <RouterProvider router={router} />
        </TotalPriceProvider>
      </DarkModeContextProvider>
    </Provider>
  </React.StrictMode>,
)
