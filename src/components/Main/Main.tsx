import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../../Pages/Home/Home';
import ProductDetail from '../../Pages/ProductDetail/ProductDetail';
import Cart from '../../Pages/Cart/Cart';


const Main: FC = () => {
    return (
        <main>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/detail-product/' element={<ProductDetail />} />
                <Route path='/cart' element={<Cart />} />
            </Routes>
        </main>
    );
};

export default Main;