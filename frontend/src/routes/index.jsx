import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "../pages/home/index.jsx";
import Food from "../pages/food/index.jsx";
import FoodDetail from "../pages/food/FoodDetail.jsx";
import Header from "../layouts/Header.jsx";
import OurMenu from "../pages/our-menu/index.jsx";
import Footer from "../layouts/Footer.jsx";
import OurTeam from "../pages/our-team/index.jsx";
import Cart from "../pages/cart/index.jsx";
import Checkout from "../pages/checkout/index.jsx";
import BookNow from "../pages/book-now/index.jsx";
import About from "../pages/about/index.jsx";
import Blog from "../pages/blog/index.jsx";
import BlogDetail from "../pages/blog/BlogDetail.jsx";
import Contact from "../pages/contact/index.jsx";
import Error from "../pages/error/index.jsx";


const Routers = () => {


    return(
        <BrowserRouter>
            <Header />
            <Routes>
                <Route index element={<Home />} />
                <Route path="/food-list" element={<Food />} />
                <Route path="/food-detail" element={<FoodDetail />} />
                <Route path="/our-menu" element={<OurMenu />} />
                <Route path="/our-team" element={<OurTeam />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/about-us" element={<About />} />
                <Route path="/contact-us" element={<Contact />} />
                <Route path="/blogs" element={<Blog />} />
                <Route path="/Blog-detail" element={<BlogDetail />} />
                <Route path="/book-now" element={<BookNow />} />
                <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default Routers