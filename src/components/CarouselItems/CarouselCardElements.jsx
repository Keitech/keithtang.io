import styled from 'styled-components';
import * as FiIcons from 'react-icons/fi';

// this container removes borders from carousel so shadows can be seen by inner container
export const CardContainer = styled.div`
  width: 450px;
  height: 450px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
      width: 90%;
      height: 90%;
  }
  
`;

export const InnerCardContainer = styled.div`
  width: 400px;
  height: 300px;
  border-radius: 5px;
  box-shadow: 0px 30px 40px -20px;
  display: flex;
  flex-direction: column;
  border-top: ${props => props.border};
  /* background: blue; */
`;

export const CardTitle = styled.h3`
  font-size: 30px;
  padding-left: 20px;
  margin-bottom: 0;
`;

export const CardLanguages = styled.p`
  padding-left: 20px;
  margin-top: 0;
  margin-bottom: 1px;
  color: gray;
`;

export const CardDesc = styled.p`
  padding: 0 20px;
  margin-bottom: 0;

`;

export const Symbol = styled.img`
  width: 50px;
  height: 60px;
  border-radius: 50%;
  margin-left: auto;
  padding-right: 25px;
  @media screen and (max-width: 414px) {
      display: none;
  }
`;

export const HyperLink = styled(FiIcons.FiExternalLink)`
  color: lightblue;
  height: 20px;
  width: 20px;
  cursor: pointer;
`;