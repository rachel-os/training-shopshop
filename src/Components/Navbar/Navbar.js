import React from 'react';
import { Link } from 'react-router-dom';


export default function Navbar() {
  return (
    <nav className="nav-wrapper teal lighten-2">
    <Link to="/" className="brand-logo">ShopShop</Link>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
      <li><Link to="/">Shop</Link></li>
        <li><Link to="/cart">My Cart</Link></li>
        <li><Link to="/cart"><i className="material-icons">shopping_cart</i></Link></li>
      </ul>
    </nav>
  )
}
