import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AboutMe } from "./pages/AboutMe/AboutMe";
import { ContactMe } from "./pages/ContactMe";
import { Projects } from "./pages/Projects";
import { Navbar } from "./shared/navbar/Navbar";
import { Footer } from "./shared/footer/Footer";
import { ToastContainer } from "react-toastify";
export const App: React.FC = () => {
  return (
    <>
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
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
};
