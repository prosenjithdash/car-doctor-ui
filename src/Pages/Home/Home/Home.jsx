import About from "../About/About";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";

const Home = () => {
    return (
        <div className="max-w-[1240px] mx-auto">
            <Banner />
            <About />
            <Services/>
        </div>
    );
};

export default Home;