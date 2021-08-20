import styled from 'styled-components';

export const ExperienceContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: max-content;
  z-index: 1;
  padding: 40px 0;
  padding-bottom: 100px;
`;

export const CenterContainer = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 1024px) {
    width: 90%;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const ExperienceTitle = styled.h3`
  margin-top: 0;
  padding-left: 50px;
  margin-bottom: 0;
  font-size: 40px;
  @media screen and (max-width: 768px) {
    font-size: 30px;
  }
`;

export const Line = styled.hr`
  width: 100px;
  margin-left: 50px;
  margin-top: 0;
  color: gray;
  font-weight: bold;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  @media screen and (max-width: 768px) {
      flex-direction: column;
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  height: 100%;
  width: 50%;
  @media screen and (max-width: 768px) {
      width: 100%;
  }
`;

export const UnorderList = styled.ul`
  list-style: none;
  flex: 0 0 20rem;
  padding-left: 150px;
`;

export const ListLabel = styled.label`
	display: flex;
	align-items: center;
	color: #1E90FF;
	font-size: 1.25rem;
	text-transform: uppercase;
	cursor: pointer;
	transition: all 0.25s linear;
  &:before{
    display: inline-block;
    content: "";
    height: 1.125rem;
    width: 1.125rem;
    margin-right: 0.625rem;
    border: 0.5rem solid #1E90FF;
    border-radius: 50%;
    transition: all 0.25s linear;
  }
`;

export const ListItem = styled.li`
  position: relative;
	&:hover > ${ListLabel} {
		color: #282828;
		&:before {
    border: 0.5rem solid #282828;
    margin-right: 2rem;
		}
	}
`;

export const RadioButton = styled.input`
  position: absolute;
	opacity: 0;
	visibility: hidden;
	&:checked + ${ListLabel} {
		color: #282828;
		&::before {
    margin-right: 2rem;
    border: 0.5rem solid #282828;
    background: #1E90FF;
		}
	}
`;

export const ExperienceList = styled.p`
  font-size: 20px;
  float: right;
  font-weight: bold;
`;

export const RightContainer = styled.div`
  /* background: lightpink; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
  @media screen and (max-width: 1024px) {
    width: 90%;
    align-items: center;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;

export const ValuesTitle = styled.h3`
  font-size: 35px;
  margin-bottom: 0;
  padding: 0 20px;
  @media screen and (max-width: 768px) {
    font-size: 30px;
  }
`;

export const ValuesDate = styled.p`
  font-size: 18px;
  color: gray;
  padding: 0 20px;
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

export const ValuesDesc = styled.p`
  font-size: 20px;
  padding: 0 20px;
  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`;