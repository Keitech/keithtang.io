import React, {useState} from 'react'
import { 
    ExperienceContainer,
    CenterContainer,
    ExperienceTitle,
    Line,
    TextContainer,
    LeftContainer,
    UnorderList,
    ExperienceList,
    RightContainer,
    ValuesTitle,
    ValuesDate,
    ValuesDesc,
    ListItem,
    ListLabel,
    RadioButton
} from './ExperienceElements';

const ExperienceValues = [
    {
        title: "Quality Engineer Co-op",
        date: "Jan 2020 - April 2020",
        description: "Produced an automation system for the development lifecycle with Java, utilizing the Apache Hadoop architecture for integration processes. Identified core issues and underlying bugs during the development onboarding pipeline, increasing productivity and developer ramp up rate."
    },
    {
        title: "UX Developer Co-op",
        date: "Sept 2020 - Dec 2020",
        description: "Worked on the front‐end team developing components with features and tests in React.js, ES6, and JSX. Implemented and integrated quality enhancements from user survey data which improved UI functionality and product user‐experience."
    },
    {
        title: "DevOps Engineer Co-op",
        date: "May 2021 - August 2021",
        description: "Worked on the Developer Operations team to improve quality analysis and streamline development workflow across the organization. Created Python scripts to access API from web‐based application life cycle management platforms to update release managers in CI/CD Jenkins build pipelines."
    }
]

const ExperienceItems = (feed) => {
    return(
        <>
            <ValuesTitle>{feed.title}</ValuesTitle>
            <ValuesDate>{feed.date}</ValuesDate>
            <ValuesDesc>{feed.description}</ValuesDesc>
        </>
    )
}
  
const Experience = () => {
    const [value, setValue] = useState('radio1')

    return (
        <>
            <ExperienceContainer id='experience'>
                <CenterContainer>
                    <ExperienceTitle>Experience</ExperienceTitle><Line/>
                    <TextContainer>
                        <LeftContainer>
                        <UnorderList>
                            <ListItem>
                            <RadioButton
                                id="radio1"
                                type="radio"
                                name="choice"
                                onChange={e => setValue(e.target.id)}
                                defaultChecked
                                />
                            <ListLabel for="radio1">
                                <ExperienceList>Micro Focus</ExperienceList>
                            </ListLabel>
                            </ListItem>
                            <ListItem>
                            <RadioButton
                                id="radio2"
                                type="radio"
                                name="choice"
                                onChange={e => setValue(e.target.id)}
                                />
                            <ListLabel for="radio2">
                                
                                <ExperienceList>Micro Focus</ExperienceList>
                            </ListLabel>
                            </ListItem>
                            <ListItem>
                            <RadioButton
                                id="radio3"
                                type="radio"
                                name="choice"
                                onChange={e => setValue(e.target.id)}
                                />
                            <ListLabel for="radio3">
                                <ExperienceList>Micro Focus</ExperienceList>
                            </ListLabel>
                            </ListItem>
                        </UnorderList>
                        </LeftContainer>
                        <RightContainer>
                            {value === "radio1" && <RightContainer>{ExperienceItems(ExperienceValues[2])}</RightContainer>}
                            {value === "radio2" && <RightContainer>{ExperienceItems(ExperienceValues[1])}</RightContainer>}
                            {value === "radio3" && <RightContainer>{ExperienceItems(ExperienceValues[0])}</RightContainer>}
                        </RightContainer>
                    </TextContainer>
                </CenterContainer>
            </ExperienceContainer>
        </>
    )
}

export default Experience