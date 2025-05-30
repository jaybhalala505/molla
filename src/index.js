import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './header';
import Footer from './footer';
import Home from './home/home';
import Shop from './shop/shop';
import ProductPage from './product/productpage';
import BlogPage from './blogpage/blogpage';
import Elements from './element/element';
import Pages from './pages/pages';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <>
        <BrowserRouter>
            <Header />
            <Routes>
                <Route>
                    <Route path="/" element={<Home />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/product" element={<ProductPage />} />
                    <Route path="/page" element={<Pages />} />
                    <Route path="/blog" element={<BlogPage />} />
                    <Route path="/element" element={<Elements />} />
                </Route>
            </Routes>
            <Footer />
        </BrowserRouter>
    </>

);

