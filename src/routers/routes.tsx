import { Route, Routes } from "react-router-dom";

import Inicio from '../pages/inicio'
import Transparencia from "../pages/transparencia";

export function GroupRouters() {
    return(
        <Routes>
            <Route path="/" element={<Inicio/>}/>
            <Route path="/transferencia" element={<Transparencia/>}/>
        </Routes>
    )
}