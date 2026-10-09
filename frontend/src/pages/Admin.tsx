import { Link } from "react-router-dom";
import Button from "../components/Button";

export default function Admin() {
  return (
    <div className="page">
      {/* Header */}
      <header className="navbar">
        <div className="navbar-left">
          <Link to="/" className="logo">
            E-Commerce
          </Link>

          <Button className="categories-button">
            Categories
          </Button>
        </div>

        <nav className="nav-links">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </nav>
      </header>

      {/* Admin */}
      <main className="admin-page">
        <section className="admin-header">
          <span className="hero-badge">
            Administration
          </span>

          <h1>Admin Dashboard</h1>

          <p>
            Manage your store, products, orders,
            customers and payments from one place.
          </p>
        </section>

        <section className="admin-grid">
          <div className="admin-card">
            <div className="admin-card-number">01</div>

            <h2>Products</h2>

            <p>
              Add, update, remove and manage products
              available in the store.
            </p>

            <Button className="card-button">
              Manage Products
            </Button>
          </div>

          <div className="admin-card">
            <div className="admin-card-number">02</div>

            <h2>Orders</h2>

            <p>
              View customer orders and manage their
              order status.
            </p>

            <Button className="card-button">
              Manage Orders
            </Button>
          </div>

          <div className="admin-card">
            <div className="admin-card-number">03</div>

            <h2>Customers</h2>

            <p>
              View customer information and manage
              customer-related data.
            </p>

            <Button className="card-button">
              View Customers
            </Button>
          </div>

          <div className="admin-card">
            <div className="admin-card-number">04</div>

            <h2>Payments</h2>

            <p>
              Monitor payment transactions and
              payment-related information.
            </p>

            <Button className="card-button">
              View Payments
            </Button>
          </div>
        </section>

        <div className="back-home">
          <Link to="/">
            ← Back to Home
          </Link>
        </div>
      </main>
    </div>
  );
}