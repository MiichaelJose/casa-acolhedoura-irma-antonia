import { Route, Routes } from "react-router-dom";

import Home from "../pages/home";
import Transparency from "../pages/transparency";
import About from "../pages/about";
import Galery from "../pages/galery";
import Donation from "../pages/donation";

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
