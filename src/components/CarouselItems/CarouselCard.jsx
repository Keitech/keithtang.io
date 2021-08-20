import React from 'react';
import img1 from '../../assets/info.png';
import img2 from '../../assets/hacking.png';
import img3 from '../../assets/wifi.png';

import { 
    CardContainer,
    InnerCardContainer,
    Symbol,
    CardTitle,
    CardDesc,
    CardLanguages,
    HyperLink
} from './CarouselCardElements';

const CarouselItems = [
    {
        icon: img1,
        name: "QuickPass",
        description: "Working with a team of 6, we provided an automated real-time system that can allow and/or restrict visitors to enter a facility based on COVID-19 guidelines",
        languages: "TypeScript, Python, React, Rasa, Raspberry pi",
        link: "https://github.com/Capstone-QuickPass",
        border: '5px solid red'
    },
    {
        icon: img2,
        name: "Coming Soon",
        description: "Project Coming Soon!",
        languages: "coming soon",
        link: null,
        border: '5px solid green'
    },
    {
        icon: img3,
        name: "Coming Soon",
        description: "Project Coming Soon!",
        languages: "coming soon",
        link: null,
        border: '5px solid blue'
    }

]

const CarouselCard = () => {
    return CarouselItems.map((item,index) => {
        return(
            <>
                <CardContainer key={index}>
                    <InnerCardContainer border={item.border} >
                        <CardTitle>{item.name} <a href={item.link} target="_blank" rel="noreferrer"><HyperLink/></a> </CardTitle>
                        <CardLanguages>{item.languages}</CardLanguages>
                        <CardDesc>{item.description}</CardDesc>
                        <Symbol src={item.icon} alt="https://www.freepik.com"/>
                    </InnerCardContainer>
                </CardContainer>
            </>
        )
    })
}

export default CarouselCard