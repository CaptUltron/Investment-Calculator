import React from 'react'
import './App.css'
import { Routes, Route} from 'react-router-dom'
import AuthLayout from './components/auth/Layout/index.jsx'
import AdminLayout from './components/admin-view/layout.jsx'
import ShoppingViewLayout from './components/shoppping-view/layout.jsx'
import Login from './pages/auth/login.jsx'
import Register from './pages/auth/register.jsx'
import AdminDashboard from './pages/admin-view/dashboard.jsx'
import AdminOrder from './pages/admin-view/order.jsx'
import AdminProduct from './pages/admin-view/product.jsx'
import ShoppingHome from './pages/shopping-view/home.jsx'
import ShoppingListing from './pages/shopping-view/listing.jsx'
import ShoppingAccount from './pages/shopping-view/account.jsx'
import ShoppingCheckout from './pages/shopping-view/checkout.jsx'
import NotFound from './pages/not-found/index.jsx'
import CheckAuth from './components/common/check-auth.jsx'
import UnauthPage from './pages/unauth-page/index.jsx'

function App() {

  const isAuthenticated = false; // Replace with actual authentication logic
  const user = null;
  // {
  //   name: "John Doe",
  //   role: "admin"
  // }; // Replace with actual user data

  return (
    <div className="flex flex-col overflow-hidden bg-white">
      {/* common component */}
      <Routes>
        <Route path="/auth" element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            <AuthLayout />
          </CheckAuth>
        }>
          <Route path="login" element={<Login/>}/>
          <Route path="register" element={<Register/>}/>
        </Route>
        <Route path="/admin" element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            <AdminLayout/>
          </CheckAuth>
        }>
          <Route path="dashboard" element={<AdminDashboard/>} />
          <Route path="order" element={<AdminOrder/>} />
          <Route path="product" element={<AdminProduct/>} />
        </Route>
        <Route path="/shop" element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            <ShoppingViewLayout/>
          </CheckAuth>
        }>
          <Route path="home" element={<ShoppingHome/>} />
          <Route path="listing" element={<ShoppingListing/>} />
          <Route path="account" element={<ShoppingAccount/>} />
          <Route path="checkout" element={<ShoppingCheckout/>} />
        </Route>
        <Route path="/unauth-page" element={<UnauthPage/>}></Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
    </div>
  )
}

export default App
