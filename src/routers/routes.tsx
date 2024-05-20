import { Route, Routes } from "react-router-dom";

import Inicio from '../pages/inicio'
import Transparencia from "../pages/transparencia";
import QuemSomos from "../pages/quemsomos";

export function GroupRouters() {
    return(
        <Routes>
            <Route path="/" element={<Inicio/>}/>
            <Route path="/transparencia" element={<Transparencia/>}/>
            <Route path="/quem-somos" element={<QuemSomos/>}/>
        </Routes>
    )
}