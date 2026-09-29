import { Link } from "react-router-dom";

function Categories() {
  const categories = [
    {
      name: "Fashion",
      icon: "👕",
    },
    {
      name: "Electronics",
      icon: "💻",
    },
    {
      name: "Beauty",
      icon: "💄",
    },
    {
      name: "Jewellery",
      icon: "💎",
    },
  ];

  return (
    <div className="page">
      {/* Header */}
      <header className="navbar">
        <div className="navbar-left">
          <Link to="/" className="logo">
            E-Commerce
          </Link>

          <Link to="/categories" className="categories-button active">
            Categories
          </Link>
        </div>

        <nav className="nav-links">
          <Link to="/" className="nav-link">
            Home
          </Link>

          <Link to="/admin" className="nav-link">
            Admin
          </Link>
        </nav>
      </header>

      {/* Categories */}
      <main className="categories-page">
        <section className="categories-header">
          <span className="hero-badge">Explore our collection</span>

          <h1>Choose Your Product Category</h1>

          <p>
            Select a category to explore products available in our store.
          </p>
        </section>

        <section className="categories-grid">
          {categories.map((category) => (
            <div className="category-card" key={category.name}>
              <div className="category-icon">{category.icon}</div>

              <h2>{category.name}</h2>

              <button className="category-button">
                Explore
              </button>
            </div>
          ))}
        </section>

        <div className="back-home">
          <Link to="/">← Back to Home</Link>
        </div>
      </main>
    </div>
  );
}

export default Categories;