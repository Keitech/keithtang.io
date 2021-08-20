import React from 'react'
import * as BiIcons from 'react-icons/bi';
import { FooterContainer, FooterTitle, Copyright } from './FooterElements';

const Footer = () => {
    return(
        <FooterContainer>
            <FooterTitle>Made with <BiIcons.BiHeartCircle/> and <BiIcons.BiCoffee/> </FooterTitle>
            <Copyright>Copyright © 2021 Keith Tang </Copyright>
        </FooterContainer>
    )
}

export default Footer