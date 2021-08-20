import React, {useState} from 'react';
import NavBar from '../views/NavBar/NavBar';
import Home from '../views/Home/Home';
import About from '../views/About/About';
import Projects from '../views/Projects/Projects';
import Skills from '../views/Skills/Skills';
import Experience from '../views/Experience/Experience';
import Footer from '../components/Footer/Footer';
import Sidebar from '../views/SideBar/Sidebar';

const HomePage = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <NavBar toggle={toggle}/>
            <Home/>
            <About/>
            <Projects/>
            <Skills/>
            <Experience/>
            <Footer/>
        </>
    )
}

export default HomePage