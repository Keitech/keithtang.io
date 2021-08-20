import styled from 'styled-components';

export const SocialList = styled.ul`
  display: flex;
  list-style: none;
  flex-direction: column;
  align-self: center;
  margin-left: 90px;
  font-size: 35px;
  @media screen and (max-width: 1024px) {
      flex-direction: row;
      margin-left: 0;
      padding-left: 0;
  }
  @media screen and (max-width: 768px) {
      
  }
  @media screen and (max-width: 414px) {
      flex-direction: row;
      margin-left: 0;
  }
`;

export const IconLink = styled.a`
  color: ${props => props.color};
  /* background-color: white; */
  padding: 0 8px;
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: transform;
  transition-property: transform;
  &:hover {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
`;