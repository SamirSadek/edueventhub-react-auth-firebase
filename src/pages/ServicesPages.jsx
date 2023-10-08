import { Navbar } from "@material-tailwind/react";
import Services from "../components/Services";
import NavbarSection from "../components/NavbarSection";
import Footer from "../components/Footer";

const ServicesPages = () => {
    return (
        <div>
            <NavbarSection></NavbarSection>
            <Services></Services>
            <Footer></Footer>
        </div>
    );
};

export default ServicesPages;