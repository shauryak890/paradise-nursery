import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';
import { useState } from 'react';
import {
  clearCart,
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
  selectCartItems,
  selectCartTotal,
} from '../features/cart/CartSlice.jsx';

const money = (amount) => `$${amount.toFixed(2)}`;

export default function CartItem() {
  const dispatch = useDispatch();
  const items = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);
  const [checkoutMessage, setCheckoutMessage] = useState(false);

  if (items.length === 0) {
    return (
      <main className="cart-page page-shell">
        <div className="empty-cart">
          <div className="empty-cart-icon"><ShoppingBag size={32} /></div>
          <div className="section-kicker">Your green corner</div>
          <h1>Your cart is taking a little breather.</h1>
          <p>There are no plants here yet. Find one that feels like you.</p>
          <Link className="button button-primary" to="/plants">Explore plants</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="cart-page page-shell">
      <div className="cart-page-heading">
        <div>
          <div className="section-kicker">Almost home</div>
          <h1>Your plant basket</h1>
          <p>{items.reduce((sum, item) => sum + item.quantity, 0)} lovely plant(s), ready for a new home.</p>
        </div>
        <Link className="text-link" to="/plants"><ArrowLeft size={17} /> Continue shopping</Link>
      </div>
      <div className="cart-layout">
        <section className="cart-items-panel" aria-label="Shopping cart items">
          {items.map((item) => (
            <article className="cart-item" key={item.id}>
              <img className="cart-item-image" src={item.image} alt={item.name} />
              <div className="cart-item-info">
                <span className="cart-item-category">{item.category || 'Houseplant'}</span>
                <h2>{item.name}</h2>
                <p>{money(item.price)} <span>each</span></p>
                <button className="remove-button" onClick={() => dispatch(removeFromCart(item.id))}>
                  <Trash2 size={15} /> Remove
                </button>
              </div>
              <div className="cart-item-controls">
                <div className="quantity-control" aria-label={`Quantity for ${item.name}`}>
                  <button aria-label={`Decrease ${item.name} quantity`} onClick={() => dispatch(decreaseQuantity(item.id))}><Minus size={15} /></button>
                  <span>{item.quantity}</span>
                  <button aria-label={`Increase ${item.name} quantity`} onClick={() => dispatch(increaseQuantity(item.id))}><Plus size={15} /></button>
                </div>
                <strong className="line-total">{money(item.price * item.quantity)}</strong>
                <span className="line-total-label">Item total</span>
              </div>
            </article>
          ))}
          <button className="clear-cart-button" onClick={() => dispatch(clearCart())}>Clear cart</button>
        </section>
        <aside className="order-summary">
          <div className="section-kicker">Order overview</div>
          <h2>Order summary</h2>
          <div className="summary-row"><span>Items ({items.reduce((sum, item) => sum + item.quantity, 0)})</span><span>{money(total)}</span></div>
          <div className="summary-row"><span>Delivery</span><span className="free-label">Free</span></div>
          <div className="summary-divider" />
          <div className="summary-total"><span>Total</span><strong>{money(total)}</strong></div>
          <p className="summary-note">Taxes, if applicable, are calculated at checkout.</p>
          <button className="button button-primary checkout-button" onClick={() => setCheckoutMessage(true)}>
            Checkout <span>→</span>
          </button>
          {checkoutMessage && <div className="checkout-message"><CheckCircle2 size={18} /> Coming soon! Checkout is not available yet.</div>}
          <Link to="/plants" className="summary-continue">Continue shopping</Link>
        </aside>
      </div>
    </main>
  );
}