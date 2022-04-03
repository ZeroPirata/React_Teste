import React from "react";
import { Route, BrowserRouter, Routes as RoutesWrapper } from 'react-router-dom';

import Inside from "../pages/In/inside"
import Login from "../pages/Out/outlogin"
import Registrar from "../pages/OutRegistrar/outregistrar"
const Routes = () => {
    return (
        <BrowserRouter>

            <RoutesWrapper>
                <Route element={<Inside />} path="/ZeroPirata" />
                <Route element={<Login />} path="/" />
                <Route element={<Registrar />} path="/Registrar" />

            </RoutesWrapper>
        </BrowserRouter>
    )
}
export default Routes