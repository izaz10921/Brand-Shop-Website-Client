import AboutUS from "./AboutUS";
import Banner from "./Banner";
import BrandCard from "./BrandCard";
import Committed from "./Committed";
import Footer from "./Footer";
import { useLoaderData } from "react-router-dom";


const Home = () => {

    const cardsData = useLoaderData();


    return (
        <div className="bg-white ">
            <Banner></Banner>

            <h3 className="text-center text-black text-2xl font-bold mb-7 mt-7">Brands</h3>
            <div className="lg:grid lg:grid-cols-2 gap-7 ">
           {
                cardsData.map(card => <BrandCard  key={card.id} brandCard={card}></BrandCard> )
            }
           </div>
            <h3 className="text-center text-black text-2xl font-bold mb-7 mt-7">We are committed</h3>
            <Committed></Committed>
            <h3 className="text-center text-black text-2xl font-bold mb-7 mt-7">About Us</h3>
            <AboutUS></AboutUS>
            <Footer></Footer>
        </div>
    );
};

export default Home;