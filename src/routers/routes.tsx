import { Route, Routes } from "react-router-dom";

import Inicio from '../pages/inicio'

export function GroupRouters() {
    return(
        <Routes>
            <Route path="/" element={<Inicio/>}/>
        </Routes>
    )
}