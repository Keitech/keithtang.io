import React from 'react'
import * as AiIcons from 'react-icons/ai';
import * as SiIcons from 'react-icons/si';
import { SocialList, IconLink } from './SocialItemsElements';

const SocialItemsData = [
    {
      icon: <AiIcons.AiFillLinkedin />,
      path: 'https://www.linkedin.com/in/keith-tang28/',
      color: 'dodgerblue',
    },
    {
      icon: <AiIcons.AiFillGithub />,
      path: 'https://github.com/Keitech',
      color: 'black',
    },
    {
      icon: <SiIcons.SiGmail />,
      path: 'mailto:keithtang28@gmail.com',
      color: 'red',
    },
]

const renderSocialItems = () => {
    return SocialItemsData.map((item, index) => {
        return (
            <li key={index}>
                <IconLink href={item.path} target="_blank" rel="noopener noreferrer" color={item.color}>
                    {item.icon}
                </IconLink>
            </li>
        )
    }) 
}

const SocialItems = () => {
    return (
        <SocialList>
            {renderSocialItems()}
        </SocialList>
    )
}

export default SocialItems