import Footer from "./components/Footer";
import Header from "./components/Header";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Movie from "./pages/Movie";
import FilteredItemList from "./components/FilteredItemHome";
import FullMeal from "./components/FullMeal.";
function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/movies/:id" element={<Movie />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/:id" element={<FilteredItemList />} />
          <Route path="/meal/:id" element={<FullMeal />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
