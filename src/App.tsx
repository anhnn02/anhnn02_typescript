import { useEffect, useState } from 'react'
// import './App.css'
import { Navigate, NavLink, Route, Routes } from 'react-router-dom';
import HomePage from './pages/client/HomePage';
import ProductPage from './pages/client/ProductPage';
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
import { list, remove } from './api/product';
import AddProduct from './pages/admin/product/AddProduct';

// import ShowInfo from './components/ShowInfo'

function App() {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      const { data } = await list();
      console.log(data)
      setProducts(data);
    }
    getProducts();
  }, [])

  const removeItem = (id: number) => {
    remove(id)
    setProducts(products.filter(item => item._id !== id));
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
        </Route>

        {/* auth */}
        <Route path="/register" element={<Register />} />
        <Route path="/signin" element={<SignIn />} />

        {/* Admin */}
        <Route path="admin" element={<AdminLayout />}>
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />

          <Route path="product">
            <Route index element={< Product products={products} onRemove={removeItem} />} />
            <Route path=":id" element={<h1>Hello 2</h1>} />
            <Route path="add-product" element={<AddProduct />} />
            <Route path="category-product" element={<h1>Hello 2</h1>} />
          </Route>

        </Route>

        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  )
}

export default App

