import React, { useState, useEffect } from "react";
import { FaFacebookF, FaTwitter, FaGooglePlusG, FaInstagram, FaYoutube, FaUser } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { LuUserRound } from "react-icons/lu";
import { LiaSearchSolid } from "react-icons/lia";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoCartOutline, IoDiamond } from "react-icons/io5";
import { MdKeyboardArrowDown, MdKeyboardArrowUp, MdKeyboardArrowRight } from "react-icons/md";
import { FaBars } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Header = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [showCurrencies, setShowCurrencies] = useState(false);
    const [activeTab, setActiveTab] = useState('menu');
    const [expandedMenus, setExpandedMenus] = useState({
        HOME: false,
        SHOP: false,
        PRODUCT: false,
        PAGES: false,
        BLOG: false,
        BUYNOW: false,
    });

    const toggleMenu = () => {
        setIsSidebarOpen(true);
        setIsDropdownOpen(false); // close dropdown if sidebar opens
    };

    const closeMenu = () => setIsSidebarOpen(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
        setIsSidebarOpen(false); // close sidebar if dropdown opens
    };

    const toggleSubmenu = (item) => {
        setExpandedMenus((prev) => ({
            ...prev,
            [item]: !prev[item],
        }));
    };

    useEffect(() => {
        const selected = document.getElementById("selected-currency");
        const listItems = document.querySelectorAll("#currency-list li");

        listItems.forEach((item) => {
            item.addEventListener("click", () => {
                selected.textContent = item.textContent;
            });
        });

        return () => {
            listItems.forEach((item) => {
                item.replaceWith(item.cloneNode(true));
            });
        };
    }, []);

    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <header className={`${isSticky ? 'sticky' : ''}`}>
                <div className="header-top">
                    <div className="container">
                        <div className="header-inner">
                            <div className="call">
                                <FiPhone className="phone-icon" />
                                <span>Call: +0123 456 789</span>
                            </div>
                            <div className="header-top-right">
                                <div className="header-icons">
                                    <a href="#"><FaFacebookF className="media-icon facebook" /></a>
                                    <a href="#"><FaTwitter className="media-icon twitter" /></a>
                                    <a href="#"><FaGooglePlusG className="media-icon google" /></a>
                                    <a href="#"><FaInstagram className="media-icon instagram" /></a>
                                    <a href="#"><FaYoutube className="media-icon youtube" /></a>
                                </div>
                                <div className="login">
                                    <LuUserRound className="user" />
                                    <span>Login</span>
                                </div>
                                <div className="currency">
                                    <div className="currency-hover">
                                        <div class="selected-currency" id="selected-currency">EUR</div>
                                        <MdKeyboardArrowDown className="list-arrow" />
                                    </div>
                                    <ul class="currency-list" id="currency-list" type="none">
                                        <li>AUD</li>
                                        <li>CAD</li>
                                        <li>DKK</li>
                                        <li>EUR</li>
                                        <li>GBP</li>
                                        <li>HKD</li>
                                        <li>JPY</li>
                                        <li>NZD</li>
                                        <li>SEK</li>
                                        <li>SGD</li>
                                        <li>USD</li>
                                        <li>VND</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="links-wrapper">
                                <button className="links-button" onClick={toggleDropdown}>
                                    Links <MdKeyboardArrowDown />
                                </button>

                                {isDropdownOpen && (
                                    <div className="dropdown">
                                        <div className="icons">
                                            <FaFacebookF />
                                            <FaTwitter />
                                            <FaGooglePlusG />
                                            <FaInstagram />
                                            <FaYoutube />
                                        </div>
                                        <div className="login">
                                            <FaUser /> Login
                                        </div>
                                        <div
                                            className="currency"
                                            onMouseEnter={() => setShowCurrencies(true)}
                                            onMouseLeave={() => setShowCurrencies(false)}
                                        >
                                            CAD <MdKeyboardArrowDown />
                                            {showCurrencies && (
                                                <div className="currency-list" id="currency-list">
                                                    <div>AUD</div>
                                                    <div>CAD</div>
                                                    <div>DKK</div>
                                                    <div>EUR</div>
                                                    <div>GBP</div>
                                                    <div>HKD</div>
                                                    <div>JPY</div>
                                                    <div>NZD</div>
                                                    <div>SEK</div>
                                                    <div>SGD</div>
                                                    <div>USD</div>
                                                    <div>VND</div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-bottom">
                    <div className="container">
                        <div className="header-bottom-inner">
                            <div className="header-bottom-first">
                                <div className="side">
                                    <button className="toggle-button" onClick={toggleMenu}>
                                        <FaBars size={24} />
                                    </button>

                                    {isSidebarOpen && (
                                        <div className="sidebar">
                                            <div className="sidebar-header">
                                                <button className="close-btn" onClick={closeMenu}>×</button>
                                                <input type="text" placeholder="Search in..." /><LiaSearchSolid className="seacrh-icon" />
                                            </div>

                                            <div className="tab-toggle">
                                                <button
                                                    className={activeTab === 'menu' ? 'active' : ''}
                                                    onClick={() => setActiveTab('menu')}
                                                >
                                                    MENU
                                                </button>
                                                <button
                                                    className={activeTab === 'categories' ? 'active' : ''}
                                                    onClick={() => setActiveTab('categories')}
                                                >
                                                    CATEGORIES
                                                </button>
                                            </div>

                                            <div className="sidebar-scroll-area">
                                                {activeTab === 'menu' && (
                                                    <ul className="menu-list">
                                                        <li>
                                                            <div className="menu-item" onClick={() => toggleSubmenu('HOME')}>
                                                                <a href="#">HOME</a> <span className="arrow">{expandedMenus.HOME ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}</span>
                                                            </div>
                                                            {expandedMenus.HOME && (
                                                                <ul className="submenu">
                                                                    <li><a href="#">01-Fruniture Store</a></li>
                                                                    <li><a href="#">01 - Furniture Store (RTL)</a></li>
                                                                    <li><a href="#">02 - Furniture Store</a></li>
                                                                    <li><a href="#">03 - Electronic Store</a></li>
                                                                    <li><a href="#">04 - Electronic Store</a></li>
                                                                    <li><a href="#">05 - Fashion Store</a></li>
                                                                    <li><a href="#">06 - Fashion Store</a></li>
                                                                    <li><a href="#">07 - Fashion Store</a></li>
                                                                    <li><a href="#">08 - Fashion Store</a></li>
                                                                    <li><a href="#">09 - Fashion Store</a></li>
                                                                    <li><a href="#">10 - Shoes Store</a></li>
                                                                    <li><a href="#">11 - Furniture Store</a></li>
                                                                    <li><a href="#">12 - Fashion Store</a></li>
                                                                    <li><a href="#">13 - Market Store</a></li>
                                                                    <li><a href="#">14 - Fashion Store</a></li>
                                                                    <li><a href="#">15 - Lookbook Store</a></li>
                                                                    <li><a href="#">16 - Lookbook Store</a></li>
                                                                    <li><a href="#">17 - Market Store</a></li>
                                                                    <li><a href="#">18 - Fashion Store</a></li>
                                                                    <li><a href="#">19 - Game Store</a></li>
                                                                    <li><a href="#">20 - Book Store</a></li>
                                                                    <li><a href="#">21 - Sport</a></li>
                                                                    <li><a href="#">22 - Tools</a></li>
                                                                    <li><a href="#">23 - Fashion</a></li>
                                                                    <li><a href="#">24 - Extreme Sport</a></li>
                                                                    <li><a href="#">25 - Jewelry<span className="new">New</span></a></li>
                                                                    <li><a href="#">29 - T-Shirt Store<span className="new">New</span></a></li>
                                                                    <li><a href="#">30 - One Product<span className="new">New</span></a></li>
                                                                    <li><a href="#">31 - Yoga Store<span className="new">New</span></a></li>
                                                                    <li><a href="#">28 - Food Market<span className="new">New</span></a></li>
                                                                </ul>
                                                            )}
                                                        </li>
                                                        <li>
                                                            <div className="menu-item" onClick={() => toggleSubmenu('SHOP')}>
                                                                <a href="#">SHOP</a> <span className="arrow">{expandedMenus.SHOP ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}</span>
                                                            </div>
                                                            {expandedMenus.SHOP && (
                                                                <ul className="submenu">
                                                                    <li><a href="#">Shop List</a></li>
                                                                    <li><a href="#">Shop Grid 4</a></li>
                                                                    <li><a href="#">Shop Market</a></li>
                                                                    <li><a href="#">Shop Boxed No Sidebar</a></li>
                                                                    <li><a href="#">Shop Fullwidth No Sidebar</a></li>
                                                                    <li><a href="#">Product Category Fullwidth</a></li>
                                                                    <li><a href="#">Product Category Boxed</a></li>
                                                                    <li><a href="#">Cart</a></li>
                                                                    <li><a href="#">Checkout</a></li>
                                                                    <li><a href="#">Wishlist</a></li>
                                                                </ul>
                                                            )}
                                                        </li>
                                                        <li>
                                                            <div className="menu-item" onClick={() => toggleSubmenu('PRODUCT')}>
                                                                <a href="#">PRODUCT</a> <span className="arrow">{expandedMenus.PRODUCT ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}</span>
                                                            </div>
                                                            {expandedMenus.PRODUCT && (
                                                                <ul className="submenu">
                                                                    <li><a href="#">Default</a></li>
                                                                    <li><a href="#">Centered</a></li>
                                                                    <li><a href="#">Extended Info</a></li>
                                                                    <li><a href="#">Gallery</a></li>
                                                                    <li><a href="#">Sticky Info</a></li>
                                                                    <li><a href="#">Boxed With Sidebar</a></li>
                                                                    <li><a href="#">Full Width</a></li>
                                                                    <li><a href="#">Masonry Sticky Info</a></li>
                                                                </ul>
                                                            )}
                                                        </li>
                                                        <li>
                                                            <div className="menu-item" onClick={() => toggleSubmenu('PAGES')}>
                                                                <a href="#">PAGES</a> <span className="arrow">{expandedMenus.PAGES ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}</span>
                                                            </div>
                                                            {expandedMenus.PAGES && (
                                                                <ul className="submenu">
                                                                    <li><a href="#">About</a></li>
                                                                    <li><a href="#">contact</a></li>
                                                                    <li><a href="#">Login</a></li>
                                                                    <li><a href="#">FAqs</a></li>
                                                                    <li><a href="#">Error 404</a></li>
                                                                    <li><a href="#">coming soon</a></li>
                                                                </ul>
                                                            )}
                                                        </li>
                                                        <li>
                                                            <div className="menu-item" onClick={() => toggleSubmenu('BLOG')}>
                                                                <a href="#">BLOG</a> <span className="arrow">{expandedMenus.BLOG ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}</span>
                                                            </div>
                                                            {expandedMenus.BLOG && (
                                                                <ul className="submenu">
                                                                    <li><a href="#">Classic</a></li>
                                                                    <li><a href="#">Listing</a></li>
                                                                    <li><a href="#">Grid</a></li>
                                                                    <li><a href="#">Masonry</a></li>
                                                                    <li><a href="#">Mask</a></li>
                                                                    <li><a href="#">Single post</a></li>
                                                                </ul>
                                                            )}
                                                        </li>
                                                        <li>
                                                            <div className="menu-item" onClick={() => toggleSubmenu('BUYNOW')}>
                                                                <a href="#">BUY NOW</a>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                )}

                                                {activeTab === 'categories' && (
                                                    <ul className="category-list">
                                                        <li><a href="#">Daily offers</a></li>
                                                        <li><a href="#">Gift Ideas</a></li>
                                                        <li><a href="#">Beds</a></li>
                                                        <li><a href="#">Lighting</a></li>
                                                        <li><a href="#">Sofas & Sleeper sofas</a></li>
                                                        <li><a href="#">Storage</a></li>
                                                        <li><a href="#">Armchairs & Chaises</a></li>
                                                        <li><a href="#">Decoration</a></li>
                                                        <li><a href="#">Kitchen Cabinets</a></li>
                                                        <li><a href="#">Coffee & Tables</a></li>
                                                        <li><a href="#">Outdoor Furniture</a></li>
                                                    </ul>
                                                )}
                                                <div className="social-icons">
                                                    <a href="#"><FaFacebookF className="media-icon facebook" /></a>
                                                    <a href="#"><FaTwitter className="media-icon twitter" /></a>
                                                    <a href="#"><FaGooglePlusG className="media-icon google" /></a>
                                                    <a href="#"><FaInstagram className="media-icon instagram" /></a>
                                                    <a href="#"><FaYoutube className="media-icon youtube" /></a>
                                                </div>
                                            </div>


                                        </div>
                                    )}
                                </div>
                                <div className="header-search-bar">
                                    <input type="text" placeholder="Search in..." size={30} />
                                    <LiaSearchSolid className="seacrh-icon" />
                                </div>

                                <div className="header-logo">
                                    <img src="assets/img/molla_header_logo.webp" alt="molla-logo" class />
                                </div>
                                <div className="header-right">
                                    <div className="wishlist">
                                        <IoMdHeartEmpty className="heart" />
                                        <span>My wishlist</span>
                                        <span className="count-wish">0</span>
                                    </div>
                                    <div className="qty">
                                        <IoCartOutline className="cart" />
                                        <span>$0.00</span>
                                        <span className="count-cart">0</span>
                                    </div>
                                </div>
                                <div className="media-search-bar">
                                    <div className="header-search-bar-new">
                                        <input type="text" placeholder="Search in..." size={40} />
                                    </div>
                                    <LiaSearchSolid className="seacrh-icon" />
                                </div>
                            </div>
                            {/* <div className="side">
                                <button className="toggle-button" onClick={toggleMenu}>
                                    <FaBars size={24} />
                                </button>

                                {isOpen && (
                                    <div className="sidebar">
                                        <div className="sidebar-header">
                                            <button className="close-btn" onClick={closeMenu}>×</button>
                                            <input type="text" placeholder="Search in..." /><LiaSearchSolid className="seacrh-icon" />
                                        </div>

                                        <div className="tab-toggle">
                                            <button
                                                className={activeTab === 'menu' ? 'active' : ''}
                                                onClick={() => setActiveTab('menu')}
                                            >
                                                MENU
                                            </button>
                                            <button
                                                className={activeTab === 'categories' ? 'active' : ''}
                                                onClick={() => setActiveTab('categories')}
                                            >
                                                CATEGORIES
                                            </button>
                                        </div>

                                        <div className="sidebar-scroll-area">
                                            {activeTab === 'menu' && (
                                                <ul className="menu-list">
                                                    <li>
                                                        <div className="menu-item" onClick={() => toggleSubmenu('HOME')}>
                                                            <a href="#">HOME</a> <span className="arrow">{expandedMenus.HOME ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}</span>
                                                        </div>
                                                        {expandedMenus.HOME && (
                                                            <ul className="submenu">
                                                                <li><a href="#">01-Fruniture Store</a></li>
                                                                <li><a href="#">01 - Furniture Store (RTL)</a></li>
                                                                <li><a href="#">02 - Furniture Store</a></li>
                                                                <li><a href="#">03 - Electronic Store</a></li>
                                                                <li><a href="#">04 - Electronic Store</a></li>
                                                                <li><a href="#">05 - Fashion Store</a></li>
                                                                <li><a href="#">06 - Fashion Store</a></li>
                                                                <li><a href="#">07 - Fashion Store</a></li>
                                                                <li><a href="#">08 - Fashion Store</a></li>
                                                                <li><a href="#">09 - Fashion Store</a></li>
                                                                <li><a href="#">10 - Shoes Store</a></li>
                                                                <li><a href="#">11 - Furniture Store</a></li>
                                                                <li><a href="#">12 - Fashion Store</a></li>
                                                                <li><a href="#">13 - Market Store</a></li>
                                                                <li><a href="#">14 - Fashion Store</a></li>
                                                                <li><a href="#">15 - Lookbook Store</a></li>
                                                                <li><a href="#">16 - Lookbook Store</a></li>
                                                                <li><a href="#">17 - Market Store</a></li>
                                                                <li><a href="#">18 - Fashion Store</a></li>
                                                                <li><a href="#">19 - Game Store</a></li>
                                                                <li><a href="#">20 - Book Store</a></li>
                                                                <li><a href="#">21 - Sport</a></li>
                                                                <li><a href="#">22 - Tools</a></li>
                                                                <li><a href="#">23 - Fashion</a></li>
                                                                <li><a href="#">24 - Extreme Sport</a></li>
                                                                <li><a href="#">25 - Jewelry<span className="new">New</span></a></li>
                                                                <li><a href="#">29 - T-Shirt Store<span className="new">New</span></a></li>
                                                                <li><a href="#">30 - One Product<span className="new">New</span></a></li>
                                                                <li><a href="#">31 - Yoga Store<span className="new">New</span></a></li>
                                                                <li><a href="#">28 - Food Market<span className="new">New</span></a></li>
                                                            </ul>
                                                        )}
                                                    </li>
                                                    <li>
                                                        <div className="menu-item" onClick={() => toggleSubmenu('SHOP')}>
                                                            <a href="#">SHOP</a> <span className="arrow">{expandedMenus.SHOP ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}</span>
                                                        </div>
                                                        {expandedMenus.SHOP && (
                                                            <ul className="submenu">
                                                                <li><a href="#">Shop List</a></li>
                                                                <li><a href="#">Shop Grid 4</a></li>
                                                                <li><a href="#">Shop Market</a></li>
                                                                <li><a href="#">Shop Boxed No Sidebar</a></li>
                                                                <li><a href="#">Shop Fullwidth No Sidebar</a></li>
                                                                <li><a href="#">Product Category Fullwidth</a></li>
                                                                <li><a href="#">Product Category Boxed</a></li>
                                                                <li><a href="#">Cart</a></li>
                                                                <li><a href="#">Checkout</a></li>
                                                                <li><a href="#">Wishlist</a></li>
                                                            </ul>
                                                        )}
                                                    </li>
                                                    <li>
                                                        <div className="menu-item" onClick={() => toggleSubmenu('PRODUCT')}>
                                                            <a href="#">PRODUCT</a> <span className="arrow">{expandedMenus.PRODUCT ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}</span>
                                                        </div>
                                                        {expandedMenus.PRODUCT && (
                                                            <ul className="submenu">
                                                                <li><a href="#">Default</a></li>
                                                                <li><a href="#">Centered</a></li>
                                                                <li><a href="#">Extended Info</a></li>
                                                                <li><a href="#">Gallery</a></li>
                                                                <li><a href="#">Sticky Info</a></li>
                                                                <li><a href="#">Boxed With Sidebar</a></li>
                                                                <li><a href="#">Full Width</a></li>
                                                                <li><a href="#">Masonry Sticky Info</a></li>
                                                            </ul>
                                                        )}
                                                    </li>
                                                    <li>
                                                        <div className="menu-item" onClick={() => toggleSubmenu('PAGES')}>
                                                            <a href="#">PAGES</a> <span className="arrow">{expandedMenus.PAGES ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}</span>
                                                        </div>
                                                        {expandedMenus.PAGES && (
                                                            <ul className="submenu">
                                                                <li><a href="#">About</a></li>
                                                                <li><a href="#">contact</a></li>
                                                                <li><a href="#">Login</a></li>
                                                                <li><a href="#">FAqs</a></li>
                                                                <li><a href="#">Error 404</a></li>
                                                                <li><a href="#">coming soon</a></li>
                                                            </ul>
                                                        )}
                                                    </li>
                                                    <li>
                                                        <div className="menu-item" onClick={() => toggleSubmenu('BLOG')}>
                                                            <a href="#">BLOG</a> <span className="arrow">{expandedMenus.BLOG ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}</span>
                                                        </div>
                                                        {expandedMenus.BLOG && (
                                                            <ul className="submenu">
                                                                <li><a href="#">Classic</a></li>
                                                                <li><a href="#">Listing</a></li>
                                                                <li><a href="#">Grid</a></li>
                                                                <li><a href="#">Masonry</a></li>
                                                                <li><a href="#">Mask</a></li>
                                                                <li><a href="#">Single post</a></li>
                                                            </ul>
                                                        )}
                                                    </li>
                                                    <li>
                                                        <div className="menu-item" onClick={() => toggleSubmenu('BUYNOW')}>
                                                            <a href="#">BUY NOW</a>
                                                        </div>
                                                    </li>
                                                </ul>
                                            )}

                                            {activeTab === 'categories' && (
                                                <ul className="category-list">
                                                    <li><a href="#">Daily offers</a></li>
                                                    <li><a href="#">Gift Ideas</a></li>
                                                    <li><a href="#">Beds</a></li>
                                                    <li><a href="#">Lighting</a></li>
                                                    <li><a href="#">Sofas & Sleeper sofas</a></li>
                                                    <li><a href="#">Storage</a></li>
                                                    <li><a href="#">Armchairs & Chaises</a></li>
                                                    <li><a href="#">Decoration</a></li>
                                                    <li><a href="#">Kitchen Cabinets</a></li>
                                                    <li><a href="#">Coffee & Tables</a></li>
                                                    <li><a href="#">Outdoor Furniture</a></li>
                                                </ul>
                                            )}
                                            <div className="social-icons">
                                                <a href="#"><FaFacebookF className="media-icon facebook" /></a>
                                                <a href="#"><FaTwitter className="media-icon twitter" /></a>
                                                <a href="#"><FaGooglePlusG className="media-icon google" /></a>
                                                <a href="#"><FaInstagram className="media-icon instagram" /></a>
                                                <a href="#"><FaYoutube className="media-icon youtube" /></a>
                                            </div>
                                        </div>


                                    </div>
                                )}
                            </div> */}
                            <div className="header-bottom-second">
                                <div className="header-bottom-nav">
                                    <ul type="none" className="nav-bar">
                                        <li className="active"><Link to={"/"} style={{ color: '#c96' }}>DEMO<MdKeyboardArrowDown className="nav-arrow" /></Link>
                                            <div className="sub-menu">
                                                <div className="sub-menu-parts">
                                                    <div className="sub-menu-part-one">
                                                        <ul className="sub-part-one" type="none">
                                                            <li><a href="#"><span className="menu-heading">HOME PAGES</span></a></li>
                                                            <li><a href="#">01-Fruniture Store <span className="popular">Popular</span></a></li>
                                                            <li><a href="#">01 - Furniture Store (RTL)</a></li>
                                                            <li><a href="#">02 - Furniture Store</a></li>
                                                            <li><a href="#">03 - Electronic Store<span className="popular">Popular</span></a></li>
                                                            <li><a href="#">04 - Electronic Store</a></li>
                                                            <li><a href="#">05 - Fashion Store</a></li>
                                                            <li><a href="#">06 - Fashion Store</a></li>
                                                            <li><a href="#">07 - Fashion Store</a></li>
                                                            <li><a href="#">08 - Fashion Store</a></li>
                                                            <li><a href="#">09 - Fashion Store<span className="popular">Popular</span></a></li>
                                                            <li><a href="#">10 - Shoes Store</a></li>
                                                            <li><a href="#">11 - Furniture Store</a></li>
                                                            <li><a href="#">12 - Fashion Store</a></li>
                                                            <li><a href="#">13 - Market Store<span className="popular">Popular</span></a></li>
                                                            <li><a href="#">14 - Fashion Store<span className="popular">Popular</span></a></li>
                                                            <li><a href="#">15 - Lookbook Store</a></li>
                                                            <li><a href="#">16 - Lookbook Store</a></li>
                                                            <li><a href="#">17 - Market Store<span className="popular">Popular</span></a></li>
                                                            <li><a href="#">18 - Fashion Store</a></li>
                                                            <li><a href="#">19 - Game Store</a></li>
                                                            <li><a href="#">20 - Book Store</a></li>
                                                        </ul>
                                                        <ul className="sub-part-two" type="none">
                                                            <li><a href="#">21 - Sport</a></li>
                                                            <li><a href="#">22 - Tools</a></li>
                                                            <li><a href="#">23 - Fashion</a></li>
                                                            <li><a href="#">24 - Extreme Sport</a></li>
                                                            <li><a href="#">25 - Jewelry<span className="popular">Popular</span></a></li>
                                                            <li><a href="#">26 - Market Store<span className="popular">Popular</span></a></li>
                                                            <li><a href="#">27 - Lookbook Store</a></li>
                                                            <li><a href="#">28 - Food Market</a></li>
                                                            <li><a href="#">29 - T-Shirt Store</a></li>
                                                            <li><a href="#">30 - One Product</a></li>
                                                            <li><a href="#">31 - Yoga Store</a></li>
                                                            <li><a href="#">32 - Sunglasses Store<span className="new">New</span></a></li>
                                                            <li><a href="#">33 - Cosmetics Store<span className="new">New</span></a></li>
                                                            <li><a href="#">34 - Car part<span className="new">New</span></a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="sub-menu-part-two">
                                                        <ul className="sub-part-third">
                                                            <li><a href="#"><span className="menu-heading">HEADER LAYOUTS</span></a></li>
                                                            <li><a href="#">Header 01</a></li>
                                                            <li><a href="#">Header 02</a></li>
                                                            <li><a href="#">Header 03</a></li>
                                                            <li><a href="#">Header 04</a></li>
                                                            <li><a href="#">Header 05</a></li>
                                                            <li><a href="#">Header 06</a></li>
                                                            <li><a href="#">Header 07</a></li>
                                                            <li><a href="#">Header 08</a></li>
                                                            <li><a href="#">Header 09</a></li>
                                                            <li><a href="#">Header 10</a></li>
                                                            <li><a href="#">Header 11</a></li>
                                                            <li><a href="#">Header 12</a></li>
                                                            <li><a href="#">Header 13</a></li>
                                                            <li><a href="#">Header 14</a></li>
                                                            <li><a href="#">Header 15</a></li>
                                                            <li><a href="#">Header 16</a></li>
                                                            <li><a href="#">Header 17</a></li>
                                                            <li><a href="#">Header 18</a></li>
                                                            <li><a href="#">Header 19</a></li>
                                                            <li><a href="#">Header 20</a></li>
                                                        </ul>
                                                        <ul className="sub-part-four">
                                                            <li><a href="#"><span className="menu-heading">FOOTER LAYOUTS</span></a></li>
                                                            <li><a href="#">Footer 01</a></li>
                                                            <li><a href="#">Footer 02</a></li>
                                                            <li><a href="#">Footer 03</a></li>
                                                            <li><a href="#">Footer 04</a></li>
                                                            <li><a href="#">Footer 05</a></li>
                                                            <li><a href="#">Footer 06</a></li>
                                                            <li><a href="#">Footer 07</a></li>
                                                            <li><a href="#"><span className="menu-heading">FEATURES</span><span className="save" style={{ fontWeight: '600' }}>SAVE</span></a></li>
                                                            <li><a href="#">Catalog mode</a></li>
                                                            <li><a href="#">Catalog mode</a></li>
                                                            <li><a href="#">Cookies law info</a></li>
                                                            <li><a href="#">Age verification</a></li>
                                                            <li><a href="#">Mega menu</a></li>
                                                            <li><a href="#">Hidden Search</a></li>
                                                            <li><a href="#">Variant images grouped</a></li>
                                                            <li><a href="#">Pickup Availability</a><span className="click">Selling</span></li>
                                                            <li><a href="#">Product Recommendations</a></li>
                                                            <li><a href="#">Predictive Search</a></li>
                                                        </ul>
                                                        <ul className="sub-part-five">
                                                            <li><a href="#">Compare</a></li>
                                                            <li><a href="#">Quick View</a></li>
                                                            <li><a href="#">Wishlist</a></li>
                                                            <li><a href="#"><span className="menu-heading">MOLLA</span><span className="save" style={{ fontWeight: '600' }}>EXCLUSIVE</span></a></li>
                                                            <li><a href="#">Auto add gift</a><span className="save">HOT</span></li>
                                                            <li><a href="#">Products upsell - Cart drawer</a></li>
                                                            <li><a href="#">Notify me</a></li>
                                                            <li><a href="#">Frequently Bought Together</a></li>
                                                            <li><a href="#">Hidden Price</a></li>
                                                            <li><a href="#">Auto Currency convert</a></li>
                                                            <li><a href="#">Product Metafields Editor<span className="popular">Popular</span></a></li>
                                                            <li><a href="#">Filter by Attributes</a></li>
                                                            <li><a href="#">Mix and Match</a><span className="click">Special</span></li>
                                                            <li><a href="#">Import demo</a><span className="click">1_click</span></li>
                                                            <li><a href="#">Import section</a><span className="click">2_click</span></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li><Link to={"/shop"}>SHOP<MdKeyboardArrowDown className="nav-arrow" /></Link>
                                            <div className="shop-sub-lists">
                                                <div className="shop-lists">
                                                    <div className="shop-list">
                                                        <ul className="shop-list-one shop-list-width" type="none">
                                                            <li><a href="#"><span className="shop-heading">Shop with sidebar</span></a></li>
                                                            <li><a href="#">Shop List</a></li>
                                                            <li><a href="#">Shop Grid 4 Columns</a></li>
                                                            <li><a href="#">Shop Grid 3 Columns</a></li>
                                                            <li><a href="#">Shop Grid 2 Columns</a></li>
                                                            <li><a href="#">Shop Market</a><span className="new">New</span></li>
                                                            <li><a href="#"><span className="shop-heading">Shop no sidebar</span></a></li>
                                                            <li><a href="#">Shop Boxed No Sidebar</a></li>
                                                            <li><a href="#">Shop Fullwidth No Sidebar</a><span className="save">HOT</span></li>
                                                        </ul>
                                                        <ul className="shop-list-two shop-list-width" type="none">
                                                            <li><a href="#"><span className="shop-heading">Product Category</span></a></li>
                                                            <li><a href="#">Product Category Fullwidth</a><span className="new">New</span></li>
                                                            <li><a href="#">Product Category Boxed</a></li>
                                                            <li><a href="#"><span className="shop-heading">Shop Pages</span></a></li>
                                                            <li><a href="#">My Account</a></li>
                                                            <li><a href="#">Wishlist</a></li>
                                                            <li><a href="#">Cart</a></li>
                                                            <li><a href="#">Cart dropdown</a></li>
                                                            <li><a href="#">Cart Popup</a><span className="new">New</span></li>
                                                        </ul>
                                                        <ul className="shop-list-third shop-list-width" type="none">
                                                            <li><a href="#">Cart Drawer</a><span className="save">HOT</span></li>
                                                            <li><a href="#">Shipping rates calculator</a></li>
                                                            <li><a href="#">Threshold free shipping</a><span className="save">HOT</span></li>
                                                            <li><a href="#"><span className="shop-heading">Shop Options</span></a></li>
                                                            <li><a href="#">Masonry Layout</a></li>
                                                            <li><a href="#">Load more button</a></li>
                                                            <li><a href="#">Infinit scrolling</a></li>
                                                            <li><a href="#">Filter sidebar</a></li>
                                                            <li><a href="#">Filter drawer</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="shop-img">
                                                        <img src="assets/img/shop_img.webp" alt="shop_img" />
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li><Link to={"/product"}>PRODUCT<MdKeyboardArrowDown className="nav-arrow" /></Link>
                                            <div className="product-sub-lists">
                                                <div className="product-lists">
                                                    <div className="product-list">
                                                        <ul className="product-list-one product-list-width" type="none">
                                                            <li><a href="#"><span className="product-heading">Product Details</span></a></li>
                                                            <li><a href="#">Default</a></li>
                                                            <li><a href="#">Centered</a></li>
                                                            <li><a href="#">Extended Info</a></li>
                                                            <li><a href="#">Gallery</a></li>
                                                            <li><a href="#">Sticky Info</a></li>
                                                            <li><a href="#">Boxed With Sidebar</a></li>
                                                            <li><a href="#">Full Width</a></li>
                                                            <li><a href="#">Masonry Sticky Info</a></li>
                                                            <li><a href="#">Disable default variant</a><span className="save">HOT</span></li>
                                                        </ul>
                                                        <ul className="product-list-two product-list-width" type="none">
                                                            <li><a href="#"><span className="product-heading">Product Options</span></a></li>
                                                            <li><a href="#">Product video 1</a></li>
                                                            <li><a href="#">Product 3D-AR</a><span className="new">New</span></li>
                                                            <li><a href="#">Product Pre-order</a></li>
                                                            <li><a href="#">Product External / Affiliate</a></li>
                                                            <li><a href="#">Products Grouped</a></li>
                                                            <li><a href="#">Products Grouped</a></li>
                                                            <li><a href="#">Variant images grouped</a></li>
                                                            <li><a href="#">Shipping info by location</a><span className="new">New</span></li>
                                                            <li><a href="#">Delivery period</a><span className="new">New</span></li>
                                                        </ul>

                                                    </div>
                                                    <div className="product-img">
                                                        <img src="assets/img/product_img.webp" alt="product_img" />
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li><Link to={"/page"}>PAGES<MdKeyboardArrowDown className="nav-arrow" /></Link>
                                            <div className="page-nav-bar">
                                                <ul className="page-list" type="none">
                                                    <li>
                                                        <a href="#">About<MdKeyboardArrowRight className="nav-arrow" /></a>
                                                        <ul className="page-sub-nav" type="none">
                                                            <li><a href="#">About 01</a></li>
                                                            <li><a href="#">About 02</a></li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <a href="#">Contact<MdKeyboardArrowRight className="nav-arrow" /></a>
                                                        <ul className="page-sub-nav" type="none">
                                                            <li><a href="#">Contact 01</a></li>
                                                            <li><a href="#">Contact 02</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="#">Login</a></li>
                                                    <li><a href="#">FAqs</a></li>
                                                    <li><a href="#">Error 404</a></li>
                                                    <li><a href="#">coming soon</a></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li><Link to={"/blog"}>BLOG<MdKeyboardArrowDown className="nav-arrow" /></Link>
                                            <div className="blog-nav-bar">
                                                <ul className="blog-list" type="none">
                                                    <li><a href="#">Classic</a></li>
                                                    <li><a href="#">Listing</a></li>
                                                    <li>
                                                        <a href="#">Grid<MdKeyboardArrowRight className="nav-arrow" /></a>
                                                        <ul className="blog-sub-nav" type="none">
                                                            <li><a href="#">Grid 2 columns</a></li>
                                                            <li><a href="#">Grid 3 columns</a></li>
                                                            <li><a href="#">Grid 4 columns</a></li>
                                                            <li><a href="#">Grid Sidebar</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="#">Masonry<MdKeyboardArrowRight className="nav-arrow" /></a>
                                                        <ul className="blog-sub-nav" type="none">
                                                            <li><a href="#">Block Masonry grid</a></li>
                                                            <li><a href="#">Block Masonry grid Sidebar</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="#">Mask<MdKeyboardArrowRight className="nav-arrow" /></a>
                                                        <ul className="blog-sub-nav" type="none">
                                                            <li><a href="#">Block Mask grid</a></li>
                                                            <li><a href="#">Block Mask Masonry</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="#">Single post<MdKeyboardArrowRight className="nav-arrow" /></a>
                                                        <ul className="blog-sub-nav" type="none">
                                                            <li><a href="#">Full width Sidebar</a></li>
                                                            <li><a href="#">Full width no Sidebar</a></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li><Link to={"/element"}>ELEMENTS<MdKeyboardArrowDown className="nav-arrow" /></Link>
                                            <div className="element-nav-bar">
                                                <ul className="element-list" type="none">
                                                    <li><a href="#">Titles</a></li>
                                                    <li><a href="#">Typography</a></li>
                                                    <li><a href="#">Tabs </a></li>
                                                    <li><a href="#">Accordians</a></li>
                                                    <li><a href="#">Icon Boxes</a></li>
                                                    <li><a href="#">Slideshow preset </a></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li><a href="#">BUY MOLLA <span className="sale">SALE</span></a></li>
                                    </ul>
                                    <div className="up-off">
                                        <span><IoDiamond className="diamond" />Clearance Up to 30% Off</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

        </>
    );
}

export default Header;