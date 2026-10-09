import { Link } from "react-router-dom";
import Button from "../components/Button";

export default function Home() {
  return (
    <div className="page">
      {/* Header and Top Navigation Bar */}
      <header className="navbar">
        <div className="navbar-left">
          {/* Logo links back to Home page */}
          <Link to="/" className="logo">
            E-Commerce
          </Link>

          {/* Link to Categories page */}
          <Link to="/categories" className="categories-button">
            Categories
          </Link>
        </div>

        <nav className="nav-links">
          {/* Active link for current Home page */}
          <Link to="/" className="nav-link active">
            Home
          </Link>

          {/* Task Requirement: Register link added to the header with bold style layout */}
          <Link
            to="/register"
            className="nav-link"
            style={{ fontWeight: "bold" }}
          >
            Register
          </Link>

          {/* Link to Admin Panel */}
          <Link to="/admin" className="nav-link">
            Admin
          </Link>
        </nav>
      </header>

      {/* Main Content Area */}
      <main>
        {/* Hero Section with Welcome Text and Action Buttons */}
        <section className="hero-section">
          <div className="hero-content">
            <span className="hero-badge">Welcome to our store</span>

            <h1>
              Everything you need,
              <span> all in one place.</span>
            </h1>

            <p>
              Discover quality products, explore new collections, and enjoy a
              simple and convenient shopping experience.
            </p>

            {/* Action buttons inside the main hero layout container */}
            <div className="hero-actions">
              {/* Primary button to navigate to product catalog */}
              <Button className="shop-button">Start Shopping</Button>

              {/* Administrative link targeting store settings panel view */}
              <Link to="/admin" className="admin-button">
                Admin Panel
              </Link>
            </div>
          </div>

          {/* Decorative Section on the right side of Hero */}
          <div className="hero-decoration">
            <div className="blue-circle"></div>

            <div className="hero-card">
              <div className="hero-card-icon">🛍️</div>

              <h3>Shop Smarter</h3>

              <p>Simple. Fast. Convenient.</p>
            </div>
          </div>
        </section>

        {/* Features Section explaining why to choose the store */}
        <section className="features-section">
          <div className="section-heading">
            <span>Why choose us?</span>

            <h2>Everything built for a better shopping experience.</h2>
          </div>

          <div className="info-section">
            {/* Feature 1: Quality Products */}
            <div className="info-card">
              <div className="info-icon">✓</div>

              <h3>Quality Products</h3>

              <p>Browse products added and managed through our platform.</p>
            </div>

            {/* Feature 2: Easy Shopping */}
            <div className="info-card">
              <div className="info-icon">⚡</div>

              <h3>Easy Shopping</h3>

              <p>
                Find what you need with a simple and user-friendly experience.
              </p>
            </div>

            {/* Feature 3: Secure Payments */}
            <div className="info-card">
              <div className="info-icon">🔒</div>

              <h3>Secure Payments</h3>

              <p>
                Safe and reliable payment processing will be integrated into the
                platform.
              </p>
            </div>
          </div>
        </section>

        {/* Bottom Call to Action Section */}
        <section className="bottom-cta">
          <div>
            <h2>Ready to explore?</h2>

            <p>Your shopping experience starts here.</p>
          </div>

          <Link to="/categories" className="cta-button">
            Explore Products
          </Link>
        </section>
      </main>
    </div>
  );
}
