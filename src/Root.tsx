import { HashRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import { Gallery } from "./pages/Gallery";
import { Home } from "./pages/Home";
import { Contacts } from "./pages/Contacts";
import { Projects } from "./pages/Projects";
import { NotFoundPage } from "./pages/NotFoundPage";

export const Root = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  </HashRouter>
);
