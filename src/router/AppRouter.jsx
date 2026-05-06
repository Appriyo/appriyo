// src/router/AppRouter.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

// Pages
import Home         from "../pages/Home";
import Services     from "../pages/Services";
import Solutions    from "../pages/Solutions";
import Products     from "../pages/Products";
import AmarRepair   from "../pages/AmarRepair";
import AmarBatch    from "../pages/AmarBatch";
import AmarCard     from "../pages/AmarCard";
import About        from "../pages/About";
import Contact      from "../pages/Contact";
import Privacy      from "../pages/Privacy";
import Terms        from "../pages/Terms";
import Security     from "../pages/Security";
import NotFound     from "../pages/NotFound";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/"                       element={<Home />}       />
          <Route path="/services"               element={<Services />}   />
          <Route path="/solutions"              element={<Solutions />}  />
          <Route path="/products"               element={<Products />}   />
          <Route path="/products/amar-repair"   element={<AmarRepair />} />
          <Route path="/products/amar-batch"    element={<AmarBatch />}  />
          <Route path="/products/amar-card"     element={<AmarCard />}   />
          <Route path="/about"                  element={<About />}      />
          <Route path="/contact"                element={<Contact />}    />
          <Route path="/privacy"                element={<Privacy />}    />
          <Route path="/terms"                  element={<Terms />}      />
          <Route path="/security"               element={<Security />}   />
          <Route path="*"                       element={<NotFound />}   />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}