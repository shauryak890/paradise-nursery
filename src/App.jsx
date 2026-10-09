import { ArrowRight, Leaf, Sprout, Truck } from 'lucide-react';
import { Link, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import AboutUs from './components/AboutUs.jsx';
import ProductList from './components/ProductList.jsx';
import CartItem from './components/CartItem.jsx';

function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className="hero-eyebrow"><Leaf size={16} /> YOUR HOME, A LITTLE GREENER</div>
          <h1>Find your<br /><em>kind of</em> wild.</h1>
          <p>Beautiful houseplants. Happier spaces. A fresh start, one leaf at a time.</p>
          <Link to="/plants" className="button button-light">Get Started <ArrowRight size={18} /></Link>
          <div className="hero-footnote"><span /> Thoughtfully picked for your everyday spaces</div>
        </div>
        <div className="hero-side-note">GROW AT YOUR OWN PACE · EST. WITH LOVE</div>
      </section>
      <section className="promise-strip">
        <div><Sprout /><span><strong>Plants for every space</strong><small>From tiny desks to sunny corners</small></span></div>
        <div><Leaf /><span><strong>Easy to fall for</strong><small>Find your next leafy favourite</small></span></div>
        <div><Truck /><span><strong>A greener kind of happy</strong><small>Good things start with a little green</small></span></div>
      </section>
      <AboutUs />
      <section className="home-cta">
        <div><div className="section-kicker">Your next chapter is growing</div><h2>Make room for something green.</h2></div>
        <Link to="/plants" className="button button-primary">Shop all plants <ArrowRight size={17} /></Link>
      </section>
    </main>
  );
}

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plants" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <footer className="site-footer">
        <Link to="/" className="footer-brand"><Leaf size={18} /> Paradise Nursery</Link>
        <span>Grow a space that feels like you.</span>
        <span>© {new Date().getFullYear()} Paradise Nursery</span>
      </footer>
    </div>
  );
}