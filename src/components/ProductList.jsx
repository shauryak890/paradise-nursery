import { useSelector, useDispatch } from 'react-redux';
import { Check, ShoppingBag } from 'lucide-react';
import { categories } from '../data/plants.js';
import { addToCart, selectCartItems } from '../features/cart/CartSlice.jsx';

function PlantCard({ plant }) {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const isAdded = cartItems.some((item) => item.id === plant.id);

  return (
    <article className="plant-card">
      <div className="plant-image-wrap">
        <img src={plant.image} alt={plant.name} className="plant-image" loading="lazy" />
        <span className="plant-tag">Plant parent favourite</span>
      </div>
      <div className="plant-card-body">
        <div className="plant-card-heading">
          <h3>{plant.name}</h3>
          <span className="plant-price">${plant.price.toFixed(2)}</span>
        </div>
        <p>{plant.description}</p>
        <button
          className={`button ${isAdded ? 'button-added' : 'button-primary'} add-button`}
          onClick={() => dispatch(addToCart(plant))}
          disabled={isAdded}
        >
          {isAdded ? <><Check size={17} /> Added to cart</> : <><ShoppingBag size={17} /> Add to Cart</>}
        </button>
      </div>
    </article>
  );
}

export default function ProductList() {
  return (
    <main className="catalog-page page-shell">
      <div className="catalog-intro">
        <div className="section-kicker">Find your new favourite</div>
        <h1>Plants that make <em>you</em> feel at home.</h1>
        <p>Bring a little life into your space with our handpicked indoor plants.</p>
      </div>
      {categories.map((category) => (
        <section className="plant-category" key={category.id}>
          <div className="category-heading">
            <div>
              <h2>{category.name}</h2>
              <p>{category.description}</p>
            </div>
            <span className="category-count">{category.plants.length} plants</span>
          </div>
          <div className="plant-grid">
            {category.plants.map((plant) => <PlantCard key={plant.id} plant={plant} />)}
          </div>
        </section>
      ))}
    </main>
  );
}