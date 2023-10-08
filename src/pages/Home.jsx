import Banner from "../components/Banner";
import Featured from "../components/Featured";
import Footer from "../components/Footer";
import NavbarSection from "../components/NavbarSection";
import NewsLetter from "../components/NewsLetter";
import Services from "../components/Services";
import Team from "../components/Team";
import WhyChooseUs from "../components/WhyChooseUs";

const Home = () => {
    return (
        <div>
            
            <NavbarSection></NavbarSection>
            <Banner></Banner>
            <WhyChooseUs></WhyChooseUs>
            <Featured></Featured>
            <Services></Services>
            <NewsLetter></NewsLetter>
            <Team></Team>     
            <Footer></Footer>

            
        </div>
    );
};

export default Home;