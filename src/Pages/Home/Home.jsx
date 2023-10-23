import AboutUS from "./AboutUS";
import Banner from "./Banner";
import Committed from "./Committed";
import Footer from "./Footer";


const Home = () => {
    return (
        <div className="bg-white">
            <Banner></Banner>

            <h3 className="text-center text-black text-2xl font-bold">Brands</h3>
            <h3 className="text-center text-black text-2xl font-bold">We are committed</h3>
            <Committed></Committed>
            <h3 className="text-center text-black text-2xl font-bold">About Us</h3>
            <AboutUS></AboutUS>
            <Footer></Footer>
        </div>
    );
};

export default Home;