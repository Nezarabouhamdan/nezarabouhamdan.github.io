import { motion } from "framer-motion";
import styled from "styled-components";
export const Projectssection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-content: center;
  align-items: center;
  margin-top: 100px;
  font-size: 40px;
  font-weight: 100;
  font-family: "Bebas Neue";
  color: black;
`;
export const Row2 = styled.div`
  height: ${({ height }) => (height ? height : height)};
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-content: center;
  align-items: center;
  background-color: ${({ color }) => (color ? "#112e6a" : "none")};
  @media screen and (max-width: 968px) {
    flex-direction: column;
    height: 30vh;
    justify-content: space-around;
    margin-bottom: 50px;
  }
`;
export const Projectslogo = styled.img`
  height: ${({ height }) => (height ? height : "120px")};
  background-color: #112e6a;
  object-fit: fill;
  cursor: pointer;
  border-radius: 5px;
  width: ${({ width }) => (width ? width : "120px")};
  @media screen and (max-width: 968px) {
    height: 70px;
    width: 70px;
  }
`;
export const CustomDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  @media screen and (max-width: 968px) {
    flex-direction: row;
  }
`;
export const Column = styled(motion.div)`
  display: flex;
  margin-top: 20px;
  flex-direction: Column;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  @media screen and (max-width: 968px) {
    font-size: 8.5px;
  }
`;
export const Item = styled.div`
  width: 22vw;
  z-index: 1;
  height: 50vh;
  display: flex;
  flex-direction: Column;
  justify-content: center;
  align-items: center;
  text-align: center;
  @media screen and (max-width: 968px) {
    font-size: 25px;
  }
`;

export const Desc = styled.h2`
  font-size: 25px;
  color: black;
  @media screen and (max-width: 968px) {
    font-size: 10px;
  }
`;
export const Counterrow = styled.div`
  display: flex;
  height: 50vh;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 968px) {
    height: 30vh;
  }
  gap: 2%;
`;
export const Sectionimg = styled.img`
  object-fit: fill;
  width: 98%;
  opacity: 0.6;
  position: absolute;
  transform: rotate(${({ rotate }) => (rotate ? rotate : "-2deg")});
  height: 100%;
  z-index: -1;
  @media screen and (max-width: 968px) {
    object-fit: fill;
    margin-top: 0px;
    height: 15vh;
    width: 100%;
  }
`;
export const Box = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid black;
  border-radius: 0px;
  transition: 0.65s;
  color: #112e6a;

  height: 160px;
  @media screen and (max-width: 968px) {
    height: 120px;
  }
  &:hover {
    z-index: 1;
    background-color: #112e6a;

    color: white;
  }
`;
