import styled from 'styled-components'

export const ProjectsContainer = styled.div`
  /* background: lightblue; */
  display: flex;
  justify-content: center;
  align-items: center;
  height: max-content;
  z-index: 1;
  padding: 20px 0;
`;

export const CenterContainer = styled.div`
  /* background: pink; */
  width: 80%;
  height: 95%;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 1024px) {
      width: 90%;
  }
  @media screen and (max-width: 768px) {
      width: 100%;
  }
`;

export const TitleContainer = styled.div`
  /* background: green; */
`;

export const CarouselContainer = styled.div`
  /* background: lightcoral; */
  padding: 50px 0;
  height: 85%;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  @media screen and (max-width: 768px) {
      width: 100%;
  }
`;

export const ProjectsTitle = styled.h3`
  /* padding-top: 10px; */
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