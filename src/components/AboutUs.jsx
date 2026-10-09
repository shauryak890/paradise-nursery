import { Heart, Sprout, Sun } from 'lucide-react';

export default function AboutUs() {
  return (
    <section className="about-section">
      <div className="section-kicker">A little more green, every day</div>
      <h2>Rooted in a love for living things.</h2>
      <p className="about-copy">
        Paradise Nursery makes it easier to bring nature home. We curate beautiful,
        approachable houseplants for small apartments, sunny windowsills, and every
        leafy corner in between. Our goal is to help everyone grow a space that feels
        calmer, fresher, and more personal.
      </p>
      <div className="values-grid">
        <article className="value-card">
          <span className="value-icon"><Sprout /></span>
          <h3>Thoughtfully chosen</h3>
          <p>Plants picked for their character, beauty, and place in your home.</p>
        </article>
        <article className="value-card">
          <span className="value-icon"><Heart /></span>
          <h3>Care made simple</h3>
          <p>Friendly choices and straightforward guidance for plant parents.</p>
        </article>
        <article className="value-card">
          <span className="value-icon"><Sun /></span>
          <h3>Room to grow</h3>
          <p>From your first tiny succulent to a whole indoor jungle.</p>
        </article>
      </div>
    </section>
  );
}