import React from "react";
import {BrowserRouter,Route, Routes} from 'react-router-dom';
import { ProductDescription } from "../screens/ProductDescription";
import { Produtos } from "../screens/Produtos";
import { RegisterChangeProducts } from "../screens/RegisterChangeProducts";

export function RoutesNav(){
    return(
            <Routes>
                <Route path="/" element={<Produtos/>}/>
                <Route path="/ProductDescription/:id?/" element={<ProductDescription/>}/>
                <Route path="/RegisterChangeProducts/:id?/" element={<RegisterChangeProducts/>}/>
            </Routes>
    );
}