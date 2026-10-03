import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Categories from "./pages/Categories";
import Register from "./pages/Register";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* The landing page remains the main Home page configuration */}
        <Route path="/" element={<Home />} />

        {/* Dedicated endpoint mapping for your standalone user registration module */}
        <Route path="/register" element={<Register />} />

        <Route path="/categories" element={<Categories />} />

        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
