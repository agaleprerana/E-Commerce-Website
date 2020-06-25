import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
//import data from "./data";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SignInScreen';
import { useSelector } from 'react-redux';
import RegisterScreen from './screens/RegisterScreen';
import ProductsScreen from './screens/ProductsScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import ProfileScreen from './screens/ProfileScreen';
import OrderScreen from './screens/OrderScreen';
//import OrdersScreen from './screens/OrdersScreen';

function App() {

    const userSignin = useSelector(state=>state.userSignin);
    const {userInfo}= userSignin;

  const openMenu=()=>{
    document.querySelector(".sidebar").classList.add("open")
  }
  const closeMenu=()=>{
    document.querySelector(".sidebar").classList.remove("open")
  }
  return (
   <BrowserRouter>

    <div className="grid-container">
    <header className="header">

       <div className="brand">
           <button onClick={openMenu}>
               &#9776;
           </button>
           <Link to="/">E-commerce</Link>
           {/* <a href="index.html">E-commerce</a> */}

       </div>
       <div className="header-links">
       <Link to="/products">   Add products(Only Admin)</Link>
           {/* <a href="cart.html">   Cart  </a> */}
           {
               userInfo ? <Link to="/profile">   {userInfo.name}</Link> :
               
               <Link to="/signin">  Sign In</Link>
           }
           
           {/* <a href="signin.html">Sign In</a> */}
           
       </div>
    </header>

    <aside className="sidebar">
        <h3>Categories</h3>
        <button className="side-close-button" onClick={closeMenu}>x</button>
        <ul className="categories">
            <li>
                <Link to="/category/Bread">Breads</Link>
            </li>
            <li>
              <Link to="/category/Fruits">Fruits</Link>
          </li>
          <li>
              <Link to="/category/Vegetables">Vegetables</Link>
          </li>
          <li>
              <Link to="/category/Dairy">Dairy</Link>
          </li>
        </ul>
    </aside>
   
    <main className="main">
        <div className="content">
            

            {/* <Route path="/orders" component={OrdersScreen} /> */}
            <Route path="/profile" component={ProfileScreen} />
            <Route path="/order/:id" component={OrderScreen} />
            <Route path="/products" component={ProductsScreen} />
            <Route path="/shipping" component={ShippingScreen} />
            <Route path="/payment" component={PaymentScreen} />
            <Route path="/placeorder" component={PlaceOrderScreen} />
            <Route path="/signin" component={SigninScreen} />
            <Route path="/register" component={RegisterScreen} />
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/cart/:id?" component={CartScreen} />
            <Route path="/category/:id" component={HomeScreen} />
            <Route path="/" exact={true} component={HomeScreen} />

          
        </div>
        
    </main>
    <footer className="footer">
        Welcome to the e-commerce shopping website
    </footer>
</div>
</BrowserRouter>
  );
}

export default App;
