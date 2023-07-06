import Banner from "../Homepage/Banner";
import Contact from "../Homepage/Contact";
import Footer from "../Homepage/Footer";
import Projects from "../Homepage/Projects";
import Skills from "../Homepage/Skills";

const Main = () => {
    return (
        <main className="max-w-7xl mx-auto bg-slate-700 min-h-screen overflow-hidden">
            <div className="p-5 md:p-10 relative">
                <Banner></Banner>
                <Skills></Skills>
                <Projects></Projects>
                <Contact></Contact>
                <Footer></Footer>
            </div>
        </main>
    );
};

export default Main;