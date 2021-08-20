import styled from 'styled-components';

export const AboutContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: max-content;
  z-index: 1;
`;

export const CenterContainer = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 1024px) {
    width: 90%;
    align-items: center;
    flex-direction: column;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const DescriptionContainer = styled.div`
  width: 60%;
  @media screen and (max-width: 1024px) {
    width: 100%
  }
  @media screen and (max-width: 768px) {
    width: 100%
  }
`;

export const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 40%;
`;

export const AboutTitle = styled.h3`
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

export const AboutDescription = styled.p`
  font-size: 23px;
  padding: 0 50px;
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

export const AboutImg = styled.img`
  width: 90%;
  height: 80%;
  align-self: center;
  @media screen and (max-width: 1440px) {
    height: 50%;
  }
`;