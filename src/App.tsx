import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AboutMe } from "./pages/AboutMe";
import { ContactMe } from "./pages/ContactMe";
import { Projects } from "./pages/Projects";
import { Navbar } from "./shared/navbar/Navbar";
import { Footer } from "./shared/Footer";
export const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/about" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<ContactMe />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
