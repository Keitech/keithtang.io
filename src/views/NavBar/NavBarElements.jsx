import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

export const Nav = styled.nav`
  background: white;
  height: 100px;
  margin-top: -100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
      transition: 0.8s all ease;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
`;

export const NavLogo = styled(LinkR)`
  color: gray;
  /* justify-self: flex-start; */
  cursor: pointer;
  font-size: 2rem;
  display: flex;
  align-items: center;
  /* margin-left: 24px; */
  font-weight: bold;
  font-size: 24px;
  text-decoration: none;
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
      display: none;
  }
`;

export const NavItem = styled.li`
  height: 100px;
`;

export const NavLinks = styled(LinkS)`
  color: gray;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 20px;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &:hover{
    color: black;
  }

  &.active {
      color: black;
  }
`

export const ResumeLink = styled(LinkR)`
  color: gray;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 20px;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
      display: block;
      position: absolute;
      right: 0;
      transform: translate(-100%, 60%);
      font-size: 1.8rem;
      cursor: pointer;
      color: black;
  }
`