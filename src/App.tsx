import { useEffect, useState } from 'react'
// import './App.css'
import { Navigate, NavLink, Route, Routes } from 'react-router-dom';
import HomePage from './pages/client/HomePage';
import ProductPage from './pages/client/shop/ProductPage';
import AboutPage from './pages/client/AboutPage';
import ContactPage from './pages/client/ContactPage';
import NewsPage from './pages/client/news/NewsPage';
import DetailNewsPage from './pages/client/news/DetailNewsPage';

import Register from './pages/auth/Register';
import SignIn from './pages/auth/SignIn';

import AdminLayout from './pages/layouts/AdminLayout';
import WebsiteLayout from './pages/layouts/WebsiteLayout';
import Dashboard from './pages/admin/Dashboard';
import Product from './pages/admin/product/Product';
import Page404 from './pages/Page404';
import { ProductType } from './pages/types/product';
import { create, list, remove, update } from './api/product';
import AddProduct from './pages/admin/product/AddProduct';

import ForgotPassword from './pages/auth/ForgotPassword';
import AuthLayout from './pages/layouts/AuthLayout';
import ResetPassword from './pages/auth/ResetPassword';
import CartPage from './pages/client/cart/CartPage';
import CheckoutPage from './pages/client/cart/CheckoutPage';
import OrderSuccessfully from './pages/client/cart/OrderSuccessfully';
import EditProduct from './pages/admin/product/EditProduct';
import PrivateRouter from './components/PrivateRouter';

// import ShowInfo from './components/ShowInfo'

function App() {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      const { data } = await list();
      setProducts(data);
    }
    getProducts();
  }, [])

  const removeItem = (id: number) => {
    remove(id)
    setProducts(products.filter(item => item._id !== id));
  }

  const onHandleAdd = (data) => {
    create(data);
    setProducts([...products, data])
  }

  const onHandleUpdate = async (product: ProductType) => {
    console.log(product);
    update(product);
    setProducts(products.map(item => item._id === product._id ? product : item))
  }
  return (
    <>
      <Routes>
        {/* Website */}
        <Route path="/" element={<WebsiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/shop" element={<ProductPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/detail" element={<DetailNewsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/order-success" element={<OrderSuccessfully />} />
        </Route>

        {/* auth */}
        <Route element={<AuthLayout />}>
          <Route path="/register" element={<Register />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/reset" element={<ForgotPassword />} />
          <Route path="/reset/password" element={<ResetPassword />} />
        </Route>

        {/* Admin */}
        <Route path="admin" element={<PrivateRouter><AdminLayout /></PrivateRouter>}>
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />

          <Route path="product">
            <Route index element={< Product products={products} onRemove={removeItem} />} />
            <Route path=":id/edit" element={<EditProduct onUpdate={onHandleUpdate}/>} />
            <Route path="add" element={<AddProduct onAdd={onHandleAdd}/>} />
            <Route path="category-product" element={<h1>Hello 2</h1>} />
          </Route>

        </Route>

        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  )
}

export default App

