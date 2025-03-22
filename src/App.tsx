import { useEffect } from "react";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
// import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Contact from "./components/Contact";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
    // Scroll to top on page refresh
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="w-full flex flex-col">
            <Header />
            <About />
            <Services />
            <Projects />
            <Testimonials />
            <Contact />
            <Footer />
			<ScrollToTop />
        </div>
    );
};

export default App;
