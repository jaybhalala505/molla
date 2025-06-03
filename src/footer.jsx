import React from "react";
import { FaFacebookF, FaTwitter, FaGooglePlusG, FaInstagram, FaYoutube } from "react-icons/fa";
import $ from "jquery";

const Footer = () => {
    $(document).ready(function () {
        $("#flip-one").click(function () {
            $("#panel-one").slideToggle();
            const icon = $(this).find("#toggle-icon");
            icon.text(icon.text() === "+" ? "−" : "+");
        });

        $("#flip-two").click(function () {
            $("#panel-two").slideToggle();
            const icon = $(this).find("#toggle-icon");
            icon.text(icon.text() === "+" ? "−" : "+");
        });

        $("#flip-third").click(function () {
            $("#panel-third").slideToggle();
            const icon = $(this).find("#toggle-icon");
            icon.text(icon.text() === "+" ? "−" : "+");
        });
    });
    return (
        <>
            <footer>
                <div className="container">
                    <div className="footer_inner">
                        <div className="footer_top">
                            <div className="footer_block_one">
                                <div className="footer_logo">
                                    <img src="assets/img/molla_footer_logo.webp" alt="molla-logo" />
                                </div>
                                <p>Praesent dapibus, neque id cursus ucibus, tortor neque egestas augue, eu vulputate magna eros eu erat.
                                    Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.</p>
                                <div className="got_question">
                                    <div className="phone_number">
                                        <span>Got Question? Call us 24/7</span>
                                        <span>+0123 456 789</span>
                                    </div>
                                    <div className="payment">
                                        <span>Payment Method</span>
                                        <img src="assets/img/paypal.webp" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="footer_block_two">
                                <div className="footer_column">
                                    <span className="column_heading">Information</span>
                                    <ul type="none" className="footer_list">
                                        <li><a href="#">About Molla</a></li>
                                        <li><a href="#">How to shop on Molla</a></li>
                                        <li><a href="#">FAQ's</a></li>
                                        <li><a href="#">Contact us</a></li>
                                        <li><a href="#">Log in</a></li>
                                    </ul>
                                </div>
                                <div className="footer-drop-down">
                                    <div id="flip-one" className="flip-heading">Information<span id="toggle-icon">+</span></div>
                                    <ul id="panel-one" className="panel-nav" type="none">
                                        <li><a href="#">About Molla</a></li>
                                        <li><a href="#">How to shop on Molla</a></li>
                                        <li><a href="#">FAQ's</a></li>
                                        <li><a href="#">Contact us</a></li>
                                        <li><a href="#">Log in</a></li>
                                    </ul>
                                </div>
                                <div className="footer_column">
                                    <span className="column_heading">Customer Service</span>
                                    <ul type="none" className="footer_list">
                                        <li><a href="#">Payment Methods</a></li>
                                        <li><a href="#">Money-back guarantee!</a></li>
                                        <li><a href="#">Returns</a></li>
                                        <li><a href="#">Shipping</a></li>
                                        <li><a href="#">Terms and conditions</a></li>
                                        <li><a href="#">Privacy Policy</a></li>
                                    </ul>
                                </div>
                                <div className="footer-drop-down">
                                    <div id="flip-two" className="flip-heading">Customer Service<span id="toggle-icon">+</span></div>
                                    <ul id="panel-two" className="panel-nav" type="none">
                                        <li><a href="#">Payment Methods</a></li>
                                        <li><a href="#">Money-back guarantee!</a></li>
                                        <li><a href="#">Returns</a></li>
                                        <li><a href="#">Shipping</a></li>
                                        <li><a href="#">Terms and conditions</a></li>
                                        <li><a href="#">Privacy Policy</a></li>
                                    </ul>
                                </div>
                                <div className="footer_column">
                                    <span className="column_heading">My Account</span>
                                    <ul type="none" className="footer_list">
                                        <li><a href="#">Sign In</a></li>
                                        <li><a href="#">View Cart</a></li>
                                        <li><a href="#">My Wishlist</a></li>
                                        <li><a href="#">Track My Order</a></li>
                                        <li><a href="#">Help</a></li>
                                    </ul>
                                </div>
                                <div className="footer-drop-down">
                                    <div id="flip-third" className="flip-heading">My Account<span id="toggle-icon">+</span></div>
                                    <ul id="panel-third" className="panel-nav" type="none">
                                        <li><a href="#">Sign In</a></li>
                                        <li><a href="#">View Cart</a></li>
                                        <li><a href="#">My Wishlist</a></li>
                                        <li><a href="#">Track My Order</a></li>
                                        <li><a href="#">Help</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="footer_bottom">
                            <div className="copyright">
                                <span>Copyright © 2020 Molla Store. All Rights Reserved.</span>
                                <a href="#">Search</a>
                            </div>
                            <div className="social_media">
                                <span>Social Media</span>
                                <div className="social_icon">
                                    <a href="#"><FaFacebookF style={{ color: '#1977f2' }}/></a>
                                    <a href="#"><FaTwitter style={{ color: '#79c8ed' }} /></a>
                                    <a href="#"><FaGooglePlusG style={{ color: '#d74937' }} /></a>
                                    <a href="#"><FaInstagram style={{ color: '#dd6d9a' }} /> </a>
                                    <a href="#"><FaYoutube style={{ color: '#e66262' }} /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer >
        </>
    );
};

export default Footer;