import React from 'react'
import resume from '../../assets/2021resume.pdf'
import { FaBars } from 'react-icons/fa';
import {animateScroll as scroll} from 'react-scroll';
import {
    Nav, 
    NavContainer,
    NavLogo,
    NavMenu,
    NavItem,
    NavLinks,
    ResumeLink,
    MobileIcon
} from './NavBarElements'

const NavBar = ({toggle}) => {

    const toggleHome = () => {
        scroll.scrollToTop()
    }

    return (
        <>
            <Nav>
                <NavContainer>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavLogo to='/' onClick={toggleHome}>Keith</NavLogo>
                    <NavMenu>
                        <NavItem >
                            <NavLinks to='about'
                            smooth={true} duration={500} spy={true} exact='true' offset={-100}>
                                about
                            </NavLinks>
                        </NavItem>
                        <NavItem >
                            <NavLinks to='projects'
                            smooth={true} duration={500} spy={true} exact='true' offset={-100}>
                                projects
                            </NavLinks>
                        </NavItem>
                        <NavItem >
                            <NavLinks to='skills'
                            smooth={true} duration={500} spy={true} exact='true' offset={-100}>
                                skills
                            </NavLinks>
                        </NavItem>
                        <NavItem >
                            <NavLinks to='experience'
                            smooth={true} duration={500} spy={true} exact='true' offset={-100}>
                                experience
                            </NavLinks>
                        </NavItem>
                        <NavItem >
                            <ResumeLink to={resume} target='_blank' rel="noopener noreferrer">resume</ResumeLink>
                        </NavItem>
                    </NavMenu>
                </NavContainer>
            </Nav>
        </>
    )
}

export default NavBar