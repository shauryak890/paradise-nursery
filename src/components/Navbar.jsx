import { Leaf, ShoppingCart } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCartCount } from '../features/cart/CartSlice.jsx';

export default function Navbar() {
  const count = useSelector(selectCartCount);

  return (
    <header className="navbar">
      <NavLink to="/" className="brand" aria-label="Paradise Nursery home">
        <span className="brand-mark"><Leaf size={22} /></span>
        <span>Paradise <strong>Nursery</strong></span>
      </NavLink>
      <nav className="nav-links" aria-label="Main navigation">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/plants">Plants</NavLink>
        <NavLink to="/cart" className="cart-nav">
          <ShoppingCart size={19} />
          <span>Cart</span>
          <span className="cart-count" aria-label={`${count} items in cart`}>{count}</span>
        </NavLink>
      </nav>
    </header>
  );
}