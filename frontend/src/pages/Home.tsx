import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="page">
      {/* Header */}
      <header className="navbar">
        <div className="navbar-left">
          <Link to="/" className="logo">
            E-Commerce
          </Link>

          <Link to="/categories" className="categories-button">
  Categories
</Link>
        </div>

        <nav className="nav-links">
          <Link to="/" className="nav-link active">
            Home
          </Link>

          <Link to="/admin" className="nav-link">
            Admin
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <main>
        <section className="hero-section">
          <div className="hero-content">
            <span className="hero-badge">
              Welcome to our store
            </span>

            <h1>
              Everything you need,
              <span> all in one place.</span>
            </h1>

            <p>
              Discover quality products, explore new collections,
              and enjoy a simple and convenient shopping experience.
            </p>

            <div className="hero-actions">
              <button className="shop-button">
                Start Shopping
              </button>

              <Link to="/admin" className="admin-button">
                Admin Panel
              </Link>
            </div>
          </div>

          <div className="hero-decoration">
            <div className="blue-circle"></div>

            <div className="hero-card">
              <div className="hero-card-icon">🛍️</div>

              <h3>Shop Smarter</h3>

              <p>
                Simple. Fast. Convenient.
              </p>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="features-section">
          <div className="section-heading">
            <span>Why choose us?</span>

            <h2>
              Everything built for a better
              shopping experience.
            </h2>
          </div>

          <div className="info-section">
            <div className="info-card">
              <div className="info-icon">
                ✓
              </div>

              <h3>Quality Products</h3>

              <p>
                Browse products added and managed
                through our platform.
              </p>
            </div>

            <div className="info-card">
              <div className="info-icon">
                ⚡
              </div>

              <h3>Easy Shopping</h3>

              <p>
                Find what you need with a simple
                and user-friendly experience.
              </p>
            </div>

            <div className="info-card">
              <div className="info-icon">
                🔒
              </div>

              <h3>Secure Payments</h3>

              <p>
                Safe and reliable payment processing
                will be integrated into the platform.
              </p>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bottom-cta">
          <div>
            <h2>Ready to explore?</h2>

            <p>
              Your shopping experience starts here.
            </p>
          </div>

          <button className="cta-button">
            Explore Products
          </button>
        </section>
      </main>
    </div>
  );
}