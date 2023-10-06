import Banner from "../components/Banner";
import Footer from "../components/Footer";
import NavbarSection from "../components/NavbarSection";
import Services from "../components/Services";

const Home = () => {
    return (
        <div>
            <NavbarSection></NavbarSection>
            <Banner></Banner>
            <Services></Services>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;