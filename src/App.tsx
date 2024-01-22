import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AboutMe } from "./pages/AboutMe/AboutMe";
import { ContactMe } from "./pages/ContactMe";
import { Projects } from "./pages/Projects";
import { Navbar } from "./shared/navbar/Navbar";
import { Footer } from "./shared/footer/Footer";
export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to={"/about"} />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<ContactMe />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
