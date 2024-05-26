import { Route, Routes } from "react-router-dom";

import Home from "../pages/inicio";
import Transparency from "../pages/transparencia";
import About from "../pages/quemsomos";
import Galery from "../pages/galeria";
import Donation from "../pages/doacao";

export function GroupRouters() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/transparencia" element={<Transparency />} />
      <Route path="/quem-somos" element={<About />} />
      <Route path="/galeria" element={<Galery />} />
      <Route path="/doacao" element={<Donation />} />
    </Routes>
  );
}
