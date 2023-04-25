import React from 'react';
import aboutimg from '../../assets/codergif2.gif';
import { 
    AboutContainer,
    CenterContainer,
    DescriptionContainer,
    ProfileContainer,
    AboutTitle,
    Line,
    AboutDescription,
    AboutImg
} from './AboutElements';

const About = () => {
    return (
        <>
            <AboutContainer id='about'>
                <CenterContainer>
                    <DescriptionContainer>
                        <AboutTitle>
                            About Me
                        </AboutTitle>
                        <Line/>
                        <AboutDescription>
                            Currently a Full Stack Software Developer with 2+ years of industrial knowledge. Always looking for new opportunities that can challenge my potential to become the best developer I can be!
                        </AboutDescription>
                        <AboutDescription>
                            I am always interested in exploring new technologies and how it impacts the real world. Aside from that you can probably find me in the gym, working on projects, playing volleyball or gaming away!
                        </AboutDescription>
                    </DescriptionContainer>
                    <ProfileContainer>
                        <AboutImg src={aboutimg} alt="https://dribbble.com/shots/9078494-Developer"/>
                    </ProfileContainer>
                </CenterContainer>
                
            </AboutContainer>
        </>
    )
}

export default About