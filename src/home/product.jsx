import React from 'react';
import { GoArrowRight } from "react-icons/go";
import { MdAddShoppingCart } from "react-icons/md";
import { IoMdHeartEmpty } from "react-icons/io";
import { LuGlasses } from "react-icons/lu";
import { SlShuffle } from "react-icons/sl";

const Product = () => {
    return (
        <>
            <div className="product-main">
                <div className="container">
                    <div className="product-inner">
                        <div className="product-heading">
                            <h3>Featured Products</h3>
                            <a href="#">VIEW MORE<GoArrowRight className="right-arrow" /></a>
                        </div>
                        <div className="product-items">
                            <div className="product-item-inner">
                                <div className="product-img">
                                    <img src="assets/img/product1.webp" alt="product1" />
                                    <div className="add-to-cart-hover">
                                        <a href="#"><MdAddShoppingCart className='hover-cart' />ADD TO CART</a>
                                    </div>
                                    <div className="hover-button">
                                        <a href="#" className='tap-icon'>
                                            <span className='icon'><IoMdHeartEmpty /></span>
                                            <p className='tap-hover'>Add to Wishlist</p>
                                        </a>
                                        <a href="#" className='tap-icon'>
                                            <span className='icon'><LuGlasses /></span>
                                            <p className='tap-hover'>Quick View</p>
                                        </a>
                                        <a href="#" className='tap-icon'>
                                            <span className='icon'><SlShuffle /></span>
                                            <p className='tap-hover'>Compare</p>
                                        </a>
                                    </div>
                                </div>
                                <div className="product-content">
                                    <a href="#">Long Fit T-shirt</a>
                                    <span>$16.00</span>
                                </div>
                            </div>
                            <div className="product-item-inner">
                                <div className="product-img">
                                    <img src="assets/img/product2.webp" alt="product2" />
                                    <img src="assets/img/product2_2.webp" alt="product2_2" className='hover-img' />
                                    <div className="add-to-cart-hover">
                                        <a href="#"><MdAddShoppingCart className='hover-cart' />ADD TO CART</a>
                                    </div>
                                    <div className="hover-button">
                                        <a href="#" className='tap-icon'>
                                            <span className='icon'><IoMdHeartEmpty /></span>
                                            <p className='tap-hover'>Add to Wishlist</p>
                                        </a>
                                        <a href="#" className='tap-icon'>
                                            <span className='icon'><LuGlasses /></span>
                                            <p className='tap-hover'>Quick View</p>
                                        </a>
                                        <a href="#" className='tap-icon'>
                                            <span className='icon'><SlShuffle /></span>
                                            <p className='tap-hover'>Compare</p>
                                        </a>
                                    </div>
                                </div>
                                <div className="product-content">
                                    <a href="#">Long Fit T-shirt</a>
                                    <span>$16.00</span>
                                </div>
                            </div>
                            <div className="product-item-inner">
                                <div className="product-img">
                                    <img src="assets/img/product3.webp" alt="product3" />
                                    <img src="assets/img/product3_3.webp" alt="product3_3" className='hover-img' />
                                    <div className="add-to-cart-hover">
                                        <a href="#"><MdAddShoppingCart className='hover-cart' />ADD TO CART</a>
                                    </div>
                                    <div className="hover-button">
                                        <a href="#" className='tap-icon'>
                                            <span className='icon'><IoMdHeartEmpty /></span>
                                            <p className='tap-hover'>Add to Wishlist</p>
                                        </a>
                                        <a href="#" className='tap-icon'>
                                            <span className='icon'><LuGlasses /></span>
                                            <p className='tap-hover'>Quick View</p>
                                        </a>
                                        <a href="#" className='tap-icon'>
                                            <span className='icon'><SlShuffle /></span>
                                            <p className='tap-hover'>Compare</p>
                                        </a>
                                    </div>
                                </div>
                                <div className="product-content">
                                    <a href="#">Long Fit T-shirt</a>
                                    <span>$16.00</span>
                                </div>
                            </div>
                            <div className="product-item-inner">
                                <div className="product-img">
                                    <img src="assets/img/product4.webp" alt="product4" />
                                    <img src="assets/img/product4_4.webp" alt="product4_4" className='hover-img' />
                                    <div className="add-to-cart-hover">
                                        <a href="#"><MdAddShoppingCart className='hover-cart' />ADD TO CART</a>
                                    </div>
                                    <span className='product-off'>Save 25%</span>
                                    <div className="hover-button">
                                        
                                        <a href="#" className='tap-icon'>
                                            <span className='icon'><IoMdHeartEmpty /></span>
                                            <p className='tap-hover'>Add to Wishlist</p>
                                        </a>
                                        <a href="#" className='tap-icon'>
                                            <span className='icon'><LuGlasses /></span>
                                            <p className='tap-hover'>Quick View</p>
                                        </a>
                                        <a href="#" className='tap-icon'>
                                            <span className='icon'><SlShuffle /></span>
                                            <p className='tap-hover'>Compare</p>
                                        </a>
                                    </div>
                                </div>
                                <div className="product-content">
                                    <a href="#">Long Fit T-shirt</a>
                                    <span>$16.00</span>
                                    <span style={{backgroundColor:"black",color:'white',width:'20px',padding:"1px",fontSize:'10px',fontWeight:"400",borderRadius:"2px"}}>XS</span>
                                </div>
                            </div>
                           
                            <div className="product-item-inner">
                                <div className="product-img">
                                    <img src="assets/img/product5.webp" alt="product5" />
                                    <img src="assets/img/product5_5.webp" alt="product5_5" className='hover-img' />
                                    <div className="add-to-cart-hover">
                                        <a href="#"><MdAddShoppingCart className='hover-cart' />ADD TO CART</a>
                                    </div>
                                    <div className="hover-button">
                                        <a href="#" className='tap-icon'>
                                            <span className='icon'><IoMdHeartEmpty /></span>
                                            <p className='tap-hover'>Add to Wishlist</p>
                                        </a>
                                        <a href="#" className='tap-icon'>
                                            <span className='icon'><LuGlasses /></span>
                                            <p className='tap-hover'>Quick View</p>
                                        </a>
                                        <a href="#" className='tap-icon'>
                                            <span className='icon'><SlShuffle /></span>
                                            <p className='tap-hover'>Compare</p>
                                        </a>
                                    </div>
                                </div>
                                <div className="product-content">
                                    <a href="#">Long Fit T-shirt</a>
                                    <span>$16.00</span>
                                </div>
                            </div>
                            <div className="product-item-inner">
                                <div className="product-img">
                                    <img src="assets/img/product6.webp" alt="product6" />
                                    <img src="assets/img/product6_6.webp" alt="product6_6" className='hover-img' />
                                    <div className="add-to-cart-hover">
                                        <a href="#"><MdAddShoppingCart className='hover-cart' />ADD TO CART</a>
                                    </div>
                                    <span className='product-off'>Save 25%</span>
                                    <div className="hover-button">
                                        <a href="#" className='tap-icon'>
                                            <span className='icon'><IoMdHeartEmpty /></span>
                                            <p className='tap-hover'>Add to Wishlist</p>
                                        </a>
                                        <a href="#" className='tap-icon'>
                                            <span className='icon'><LuGlasses /></span>
                                            <p className='tap-hover'>Quick View</p>
                                        </a>
                                        <a href="#" className='tap-icon'>
                                            <span className='icon'><SlShuffle /></span>
                                            <p className='tap-hover'>Compare</p>
                                        </a>
                                    </div>
                                </div>
                                <div className="product-content">
                                    <a href="#">Long Fit T-shirt</a>
                                    <span>$16.00</span>
                                </div>
                            </div>
                            <div className="product-item-inner">
                                <div className="product-img">
                                    <img src="assets/img/product7.webp" alt="product7" />
                                    <img src="assets/img/product7_7.webp" alt="product7_7" className='hover-img' />
                                    <div className="add-to-cart-hover">
                                        <a href="#"><MdAddShoppingCart className='hover-cart' />ADD TO CART</a>
                                    </div>
                                    <div className="hover-button">
                                        <a href="#" className='tap-icon'>
                                            <span className='icon'><IoMdHeartEmpty /></span>
                                            <p className='tap-hover'>Add to Wishlist</p>
                                        </a>
                                        <a href="#" className='tap-icon'>
                                            <span className='icon'><LuGlasses /></span>
                                            <p className='tap-hover'>Quick View</p>
                                        </a>
                                        <a href="#" className='tap-icon'>
                                            <span className='icon'><SlShuffle /></span>
                                            <p className='tap-hover'>Compare</p>
                                        </a>
                                    </div>
                                </div>
                                <div className="product-content">
                                    <a href="#">Long Fit T-shirt</a>
                                    <span>$16.00</span>
                                </div>
                            </div>
                            <div className="product-item-inner">
                                <div className="product-img">
                                    <img src="assets/img/product8.webp" alt="product8" />
                                    <img src="assets/img/product8_8.webp" alt="product8_8" className='hover-img' />
                                    <div className="add-to-cart-hover">
                                        <a href="#"><MdAddShoppingCart className='hover-cart' />ADD TO CART</a>
                                    </div>
                                    <div className="hover-button">
                                        <a href="#" className='tap-icon'>
                                            <span className='icon'><IoMdHeartEmpty /></span>
                                            <p className='tap-hover'>Add to Wishlist</p>
                                        </a>
                                        <a href="#" className='tap-icon'>
                                            <span className='icon'><LuGlasses /></span>
                                            <p className='tap-hover'>Quick View</p>
                                        </a>
                                        <a href="#" className='tap-icon'>
                                            <span className='icon'><SlShuffle /></span>
                                            <p className='tap-hover'>Compare</p>
                                        </a>
                                    </div>
                                </div>
                                <div className="product-content">
                                    <a href="#">Long Fit T-shirt</a>
                                    <span>$16.00</span>
                                </div>
                            </div>
                            <div className="product-item-inner">
                                <div className="product-img">
                                    <img src="assets/img/product9.webp" alt="product9" />
                                    <img src="assets/img/product9_9.webp" alt="product9_9" className='hover-img' />
                                    <div className="add-to-cart-hover">
                                        <a href="#"><MdAddShoppingCart className='hover-cart' />ADD TO CART</a>
                                    </div>
                                    <div className="hover-button">
                                        <a href="#" className='tap-icon'>
                                            <span className='icon'><IoMdHeartEmpty /></span>
                                            <p className='tap-hover'>Add to Wishlist</p>
                                        </a>
                                        <a href="#" className='tap-icon'>
                                            <span className='icon'><LuGlasses /></span>
                                            <p className='tap-hover'>Quick View</p>
                                        </a>
                                        <a href="#" className='tap-icon'>
                                            <span className='icon'><SlShuffle /></span>
                                            <p className='tap-hover'>Compare</p>
                                        </a>
                                    </div>
                                </div>
                                <div className="product-content">
                                    <a href="#">Long Fit T-shirt</a>
                                    <span>$16.00</span>
                                </div>
                            </div>
                            <div className="product-item-inner block-ten">
                                <div className="product-img">
                                    <img src="assets/img/product10.webp" alt="product10" />
                                    <img src="assets/img/product10_10.webp" alt="product10_10" className='hover-img' />
                                    <div className="add-to-cart-hover">
                                        <a href="#"><MdAddShoppingCart className='hover-cart' />ADD TO CART</a>
                                    </div>
                                    <div className="hover-button">
                                        <a href="#" className='tap-icon'>
                                            <span className='icon'><IoMdHeartEmpty /></span>
                                            <p className='tap-hover'>Add to Wishlist</p>
                                        </a>
                                        <a href="#" className='tap-icon'>
                                            <span className='icon'><LuGlasses /></span>
                                            <p className='tap-hover'>Quick View</p>
                                        </a>
                                        <a href="#" className='tap-icon'>
                                            <span className='icon'><SlShuffle /></span>
                                            <p className='tap-hover'>Compare</p>
                                        </a>
                                    </div>
                                </div>
                                <div className="product-content">
                                    <a href="#">Long Fit T-shirt</a>
                                    <span>$16.00</span>
                                </div>
                            </div>
                        </div>
                        <div className="view-more-product">
                            <a href="#">VIEW MORE PRODUCT</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Product;

