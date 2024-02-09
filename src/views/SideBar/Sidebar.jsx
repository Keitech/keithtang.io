import React from 'react'
import resume from '../../assets/KeithTangResume2024.pdf'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SidebarResume } from './SidebarElements';

const Sidebar = ({ toggle, isOpen }) => {
    return(
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle}
                    smooth={true} duration={500} spy={true} exact='true' offset={-100}>
                        about
                    </SidebarLink>
                    <SidebarLink to="projects" onClick={toggle}
                    smooth={true} duration={500} spy={true} exact='true' offset={-100}>
                        projects
                    </SidebarLink>
                    <SidebarLink to="skills" onClick={toggle}
                    smooth={true} duration={500} spy={true} exact='true' offset={-100}>
                        skills
                    </SidebarLink>
                    <SidebarLink to="experience" onClick={toggle}
                    smooth={true} duration={500} spy={true} exact='true' offset={-100}>
                        experience
                    </SidebarLink>
                    <SidebarResume to={resume} target='_blank' rel="noopener noreferrer">
                        resume
                    </SidebarResume>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar