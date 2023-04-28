import "./App.css";
import { Routes, Route } from "react-router-dom";
import ProductsPage from "./Pages/ProductsPage";
import HomePage from "./Pages/HomePage";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ErrorPage from "./Pages/ErrorPage";
import SingleProductPage from "./Pages/SingleProductPage";
import WatchPage from "./Pages/WatchPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<ProductsPage />} />
        <Route path="/movies/:movieId" element={<SingleProductPage />} />
        <Route path="/movies/:movieId/:imdbId" element={<WatchPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
