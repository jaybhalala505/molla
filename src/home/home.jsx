import React from 'react';
import Service from './service';
import Fashion from './fashion';
import Subscribe from './subscribe';
import CustomerReviews from './customerreviews';
import Blog from './blog';
import Banner from './banner';
import Product from './product';

const Home = () => {
    return (
        <>
            <Banner />
            <Service />
            <Fashion />
            <Subscribe />
            <Product />
            <CustomerReviews />
            <Blog />
        </>
    );
};

export default Home;

