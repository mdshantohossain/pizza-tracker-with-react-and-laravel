import FoodProvider from "../context/FoodProvider.jsx";
import Navbar from "../../layouts/Navbar.jsx";


const NavWrapper = () => {

    return <FoodProvider>
        <Navbar />
    </FoodProvider>
}


export default NavWrapper;