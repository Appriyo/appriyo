import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home";
import ServicesPage from "../pages/ServicesPage";
import SolutionsPage from "../pages/SolutionsPage";
import WorkPage from "../pages/WorkPage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import ServiceDetailsPage from "../pages/ServiceDetailsPage";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:id" element={<ServiceDetailsPage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
