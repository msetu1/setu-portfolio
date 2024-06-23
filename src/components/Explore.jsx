import About from "../dashboard/About";
import Contact from "../dashboard/Contact";
import Education from "../dashboard/Education";
import Educations from "../dashboard/Educations";
import Projects from "../dashboard/Projects";
import Skills from "../dashboard/Skills";
import Banner from "./Banner";

const Explore = () => {
    return (
        <div className="">
            <Banner></Banner>
            <About></About>
            <Skills></Skills>
            <Educations></Educations>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Explore;