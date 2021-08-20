import React from 'react';
import { 
    Technologies,
    Interests,
    Hobbies
} from './SkillsItems'
import { 
    SkillsContainer,
    CenterContainer,
    SkillsTitle,
    Line,
    ItemContainer,
    ItemTitle,
    Icon,
    Item,
    ListContainer,
    ListItemFrame,

} from './SkillsElements';

const TechItems = (listItem, color) => {
    return (
    listItem.map((item,index) => {
        return (
            <ListItemFrame key={index} color={color}>
                <Icon>{item.icon}</Icon>
                <Item>{item.technology}</Item>
            </ListItemFrame>
        )
    }))
}


const Skills = () => {
    return (
        <>
            <SkillsContainer id='skills'>
                <CenterContainer>
                    <SkillsTitle>Skills</SkillsTitle><Line/>
                    <ItemContainer>
                        <ItemTitle>Technologies</ItemTitle>
                        <ListContainer >
                            {TechItems(Technologies, '#666699')}
                        </ListContainer>
                    </ItemContainer>
                    <ItemContainer>
                        <ItemTitle>Interests</ItemTitle>
                        <ListContainer>
                            {TechItems(Interests, '#800000')}
                        </ListContainer>
                    </ItemContainer>
                    <ItemContainer>
                        <ItemTitle>Hobbies</ItemTitle>
                        <ListContainer>
                            {TechItems(Hobbies, '#2f4f4f')}
                        </ListContainer>
                    </ItemContainer>
                </CenterContainer>
            </SkillsContainer>
        </>
    )
}

export default Skills