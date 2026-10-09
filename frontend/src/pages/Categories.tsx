import { Link } from "react-router-dom";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import DevicesIcon from "@mui/icons-material/Devices";
import FaceRetouchingNaturalIcon from "@mui/icons-material/FaceRetouchingNatural";
import DiamondOutlinedIcon from "@mui/icons-material/DiamondOutlined";
import Button from "../components/Button";

function Categories() {
  const categories = [
  {
    name: "Fashion",
    icon: <CheckroomIcon sx={{ fontSize: 55 }} />,
  },
  {
    name: "Electronics",
    icon: <DevicesIcon sx={{ fontSize: 55 }} />,
  },
  {
    name: "Beauty",
    icon: <FaceRetouchingNaturalIcon sx={{ fontSize: 55 }} />,
  },
  {
    name: "Jewellery",
    icon: <DiamondOutlinedIcon sx={{ fontSize: 55 }} />,
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

              <Button className="category-button">
                Explore
              </Button>
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