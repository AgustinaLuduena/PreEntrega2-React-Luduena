import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";

// Pages
import HomePage from "./pages/HomePage/HomePage";
import ContactPage from "./pages/ContactPage/ContactPage";
import DetailPage from "./pages/DetailPage/DetailPage";
//import CategoryPage from "./pages/CategoryPage/CategoryPage";

const App = () => {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
        </Routes>
      </div>
    </Router>

  );
};

export default App;

//
// <Route path="/category/:categoryId" element={<CategoryPage />} />