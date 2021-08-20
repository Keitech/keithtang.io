import styled from 'styled-components';

export const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: max-content;
  z-index: 1;
  padding: 20px 0;
`;

export const CenterContainer = styled.div`
  height: 90%;
  width: 80%;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 1024px) {
    width: 90%;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const SkillsTitle = styled.h3`
  margin-top: 0;
  padding-left: 50px;
  margin-bottom: 0;
  font-size: 40px;
  @media screen and (max-width: 768px) {
    font-size: 30px;
  }
`;

export const Line = styled.hr`
  width: 80px;
  margin-left: 50px;
  margin-top: 0;
  color: gray;
  font-weight: bold;
`;

export const ItemContainer = styled.div`
  height: 30%;
  width: auto;
`;

export const ItemTitle = styled.h4`
  margin-top: 10px;
  font-size: 25px;
  padding-left: 50px;
  margin-bottom: 20px;
`;

export const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 50px;
`;

export const ListItemFrame = styled.div`
  background: ${props => props.color};;
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 5px;
  height: 40px;
  margin-right: 10px;
  margin-bottom: 10px;
  border-radius: 10px;
`;

export const Icon = styled.p`
  display: flex;
  align-self: center;
  margin-right: 10px;
  padding-left: 5px;
  font-size: 20px;
  color: white;
`;

export const Item = styled.p`
  font-weight: bold;
  color: white;
  padding-right: 5px;
`;