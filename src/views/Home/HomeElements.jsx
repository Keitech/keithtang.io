import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  z-index: 1;
`;

export const CenterContainer = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 90%;
  @media screen and (max-width: 1200px) {
    margin-top: 0;
    width: 100%;
  }
  @media screen and (max-width: 1024px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
  @media screen and (max-width: 414px) {
    margin-top: 100px;
  }
`;

export const SocialContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 20%;
  @media screen and (max-width: 414px) {
    width: 90%;
    justify-content: center;
    height: 10%;
    margin-top: 10px;
  }
`;

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30%;
  @media screen and (max-width: 1200px) {
    width: 20%;
  }
`;

export const ProfileImg = styled.img`
  width: 90%;
  height: 100%;
  border-radius: 15px;
  @media screen and (max-width: 1200px) {
    height: 200px;
    width: 200px;
  }
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  @media screen and (max-width: 1024px) {
    width: 100%;
    text-align: center;
  }
`;

export const Name = styled.h3`
  padding: 0 50px;
  font-size: 60px;
  margin-bottom: 0;
  @media screen and (max-width: 1024px) {
    margin-top: 25px;
    font-size: 50px;
  }
  @media screen and (max-width: 768px) {
    font-size: 45px;
  }
  @media screen and (max-width: 414px) {
    font-size: 40px;
    margin-top: 10px;
  }
`;

export const Status = styled.p`
  margin: 0;
  padding: 0 50px;
  font-size: 30px;
  color: gray;
  font-weight: bold;
  @media screen and (max-width: 1024px) {
    font-size: 25px;
  }
  @media screen and (max-width: 768px) {
    font-size: 22px;
  }
  @media screen and (max-width: 414px) {
    font-size: 20px;
  }
`;

export const Description = styled.p`
  color: gray;
  padding: 0 50px;
  font-size: 25px;
  @media screen and (max-width: 1024px) {
    font-size: 22px;
  }
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
  @media screen and (max-width: 414px) {
    font-size: 18px;
  }
`;

export const DownContainer = styled.div`
  margin-top: 100px;
  cursor: pointer;
  @media screen and (max-width: 1200px) {
    display: none;
  }
`;