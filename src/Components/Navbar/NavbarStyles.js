import styled from "styled-components";
import { Container } from "../../Globalstyles";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const Nav = styled.nav`
  background-color: none;
  margin-bottom: -80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: absolute;
  top: 0;
  z-index: 50;
  width: 100%;

  transition: background-color 0.3s ease-in;
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: start;
  height: 80px;

  ${Container}
`;

export const NavLogo = styled(Link)`
  color: black;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.3rem;
  display: flex;
  width: 500px;
  align-items: center;
  z-index: 50;
  @media screen and (max-width: 968px) {
    font-size: 0.8rem;
  }
`;

export const NavIcon = styled.img`
  margin-left: 0rem;
  margin-right: 0rem;
  margin-top: 0rem;

  width: 5rem;
  height: 4rem;
  @media screen and (max-width: 968px) {
    margin-left: 0rem;
    margin-right: 0rem;
    margin-top: 0rem;

    width: 3rem;
    height: 3rem;
  }
`;
export const NavName = styled.img`
  margin-left: -2rem;
  margin-right: 1rem;
  margin-top: 0rem;

  width: 8rem;
  height: 5rem;
  @media screen and (max-width: 968px) {
    margin-left: 0rem;
    margin-right: 1rem;
    margin-top: 0rem;

    width: 3rem;
    height: 3rem;
  }
`;

export const MobileIcon = styled.div`
  display: none;
  z-index: 50;

  @media screen and (max-width: 968px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    color: black;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled(motion.ul)`
  display: flex;

  align-items: center;
  list-style: none;
  text-align: center;
  width: 100%;

  @media screen and (max-width: 968px) {
    flex-direction: column;
    width: 100%;
    height: 100vh;
    position: fixed;
    padding-top: 30%;
    top: 0;
    left: 0;
    opacity: ${({ show }) => (show ? 1 : 0)};
    visibility: ${({ show }) => (show ? "visible" : "hidden")};
    transform: translateY(${({ show }) => (show ? "0" : "-10px")});
    transition: opacity 0.5s ease;
    background-color: #fff;
  }

  > li:first-child {
    margin-left: auto;
  }
`;

export const NavItem = styled.li`
  height: 80px;
  cursor: pointer;

  @media screen and (max-width: 968px) {
    width: 100%;

    &:hover {
      border: none;
    }
  }
`;

export const NavLinks = styled.h3`
  color: #112e6a;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  font-size: 18px;
  z-index: 1;
  &:after {
    background-color: #fff;
    color: #c8c9d8;
  }
  &:active {
    background-color: #fff;
    color: #c8c9d8;
    transition: all 0.3s ease;
  }

  @media screen and (max-width: 968px) {
    text-align: center;
    padding: 2rem;
    background-color: #fff;

    width: 100%;
    display: table;

    &:hover {
      color: #4b59f7;
      transition: all 0.3s ease;
    }
  }
`;

export const NavBtnLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 8px 16px;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
`;

export const Text = styled(motion.h3)`
  font-size: 35px;
  color: #112e6a;
  @media screen and (max-width: 968px) {
    font-size: 28px;
  }
`;
