import React from 'react';
import useDencrypt from 'use-dencrypt-effect';
import SocialItems from '../../components/SocialItems/SocialItems';
import image from '../../assets/codergif3.gif';
import {Link} from 'react-scroll'
import * as FiIcons from 'react-icons/fi';

import { 
    HomeContainer, CenterContainer, SocialContainer, DescriptionContainer, ProfileContainer, ProfileImg, Name, Status, Description, DownContainer
} from './HomeElements';

const values = ["Student", "Computer Engineer", "Gamer", "BodyBuilder", "Designer", "Doer"];

const StatusText = () => {
    const { result, dencrypt } = useDencrypt();
  
    React.useEffect(() => {
      let i = 0;
  
      const action = setInterval(() => {
        dencrypt(values[i]);
  
        i = i === values.length - 1 ? 0 : i + 1;
      }, 2000);
  
      return () => clearInterval(action);
    }, );
  
    return result
  };


const Home = () => {
    return (
        <>
            <HomeContainer>
                <CenterContainer>
                    <SocialContainer>
                        <SocialItems/>
                    </SocialContainer>
                    <ProfileContainer>
                        <ProfileImg src={image} alt="https://www.pinterest.ca/pin/567523990538356835/"/>
                    </ProfileContainer>
                    <DescriptionContainer>
                        <Name>Hi, I am Keith</Name>
                        <Status>{StatusText()}</Status>
                        <Description>Passionate to learn new technology and continuously improve my development knowledge!</Description>
                    </DescriptionContainer>
                </CenterContainer>
                <DownContainer>
                    <Link to='about' smooth={true} duration={500} spy={true} exact='true' offset={-100}>
                        <FiIcons.FiChevronsDown />
                    </Link>
                </DownContainer>
            </HomeContainer>
        </>
    )
}

export default Home