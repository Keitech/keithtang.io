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
                            Currently a 4th year computer engineering student with one year of industrial knowledge. Always looking for new opportunities that can challenge my potential to become the best developer I can be!
                        </AboutDescription>
                        <AboutDescription>
                            I am always interested in exploring new technologies and how it impacts the real world. Aside from that you can probably find me in the gym, working on projects, playing volleyball or gaming away!
                        </AboutDescription>
                    </DescriptionContainer>
                    <ProfileContainer>
                        <AboutImg src={aboutimg}/>
                    </ProfileContainer>
                </CenterContainer>
                
            </AboutContainer>
        </>
    )
}

export default About