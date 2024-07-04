import { NavLink} from "react-router-dom";


const Navbar = () => {

    return (
        <ul>
            <li><a href="/">Home</a></li>
            <li>
                <span className="opener"></span>
                <a href="javascript:void(0)">Shop</a>
                <ul className="dropdown-content">
                    <li><NavLink to="/food-list">Shop List</NavLink></li>
                    <li><NavLink to="/food-detail">Shop Detail</NavLink></li>
                    <li><NavLink to="/cart">Cart</NavLink></li>
                    <li><NavLink to="/checkout">Checkout</NavLink></li>
                </ul>
            </li>
            <li>
                <span className="opener"></span>
                <a href="javascript:void(0)">Pages</a>
                <ul className="dropdown-content">
                    <li><NavLink to="/about-us">About Us</NavLink></li>
                    <li><NavLink to="/our-menu">Our Menu</NavLink></li>
                    <li><NavLink to="/our-team">Our Team</NavLink></li>
                    <li><NavLink to="/book-now">Book Now</NavLink></li>
                </ul>
            </li>
            <li>
                <NavLink to="/blogs">Blog</NavLink>
            </li>
            <li><NavLink to="/contact-us">Contact</NavLink></li>
        </ul>
    )
 }

 export default Navbar