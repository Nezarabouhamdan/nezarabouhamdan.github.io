import { motion } from "framer-motion";
import styled, { keyframes } from "styled-components";
export const rotate = keyframes`
from{  
  transform: skew(10deg, 20deg);
  //transform: scale3d(2.5, 1.2, 0.3);
},
  to {   
    transform: skew(0deg, 0deg);
  }
`;
export const scale = keyframes`
0% { transform: scale(0.8); }
50%  { transform: scale(1); }
100%   { transform: scale(0.8); }   
`;

export const floating = keyframes` 
  0% { transform: translate(0,  2px); }
  50%  { transform: translate(0, -4px); }
  100%   { transform: translate(0, 2px); }   
`;
const shake = keyframes`
  0% { transform: translate(0, 0) rotate(0deg); }
  25% { transform: translate(1px, 1px) rotate(3deg); }
  50% { transform: translate(0, 0) rotate(0eg); }
  75% { transform: translate(-1px, 1px) rotate(-3deg); }
  100% { transform: translate(0, 0) rotate(0deg); }
`;
export const Herosection = styled.div`
  height: 100vh;
  background-position: center;
  background-size: cover;
  display: flex;
  object-fit: cover;
  color: white;
  background-color: white;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  align-items: center;
  @media screen and (max-width: 968px) {
    height: 80vh;
    justify-content: center;
    align-content: center;
    align-items: center;
  }
`;

export const Heroimg = styled.img`
  object-fit: fill;
  width: 90%;
  height: 100vh;
  position: absolute;
  animation: ${rotate} 2.5s;

  z-index: 0;
  @media screen and (max-width: 968px) {
    object-fit: fill;
    height: 80vh;

    width: 90%;
  }
`;
export const Shape = styled(motion.img)`
  object-fit: fill;
  postion: relative;
  animation: ${floating} 2.5s infinite;

  margin-top: ${({ back }) => (back ? "260px" : "0px")};
  margin-left: ${({ left }) => (left ? "-100px" : "-60px")};

  width: 4.5%;
  height: 10vh;
  position: absolute;
  z-index: 1;
  @media screen and (max-width: 968px) {
    object-fit: fill;
    margin-top: ${({ back }) => (back ? "370px" : "0px")};

    margin-left: ${({ left }) => (left ? "-45px" : "0px")};
    width: 10%;
    height: 6vh;
  }
`;
export const Space = styled.div`
  width: 190px;
  height: 1px;
  @media screen and (max-width: 968px) {
    width: 0px;
  }
`;
export const Column = styled.div`
height:70vh;
z-index:1;
width:3.5%:
display: flex;
margin-left: ${({ back }) => (back ? "150px" : "0px")};

flex-direction: column;
justify-content: space-around;
align-content:space-around;
align-items: center;  @media screen and (max-width: 968px) {

  margin-left: 0px;

}

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
    height: 50px;
    justify-content: space-around;
    margin-bottom: 50px;
  }
`;
export const Textdiv = styled.div`
  width: 100%;
  height: 100vh;
  z-index: 1;
  background-color: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  margin-top: 3%;

  @media screen and (max-width: 968px) {
    width: 80%;
    align-items: center;

    margin-top: 35%;
    margin-left: 0%;
  }
`;
export const Imagediv = styled(motion.div)`
  width: 60%;
  z-index: 1;
  text-align: center;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-family: "Bebas Neue";
  color: #333333;
  height: 150px;

  @media screen and (max-width: 968px) {
    height: 150px;
    justify-content: space-between;
    margin-top: 100px;
    align-items: center;
  }
`;
export const Button2 = styled.div`
  width: 60%;
  height: 10vh;
`;
export const Webonly = styled.div`
  height: 1px;
  width: 1px;
  @media screen and (max-width: 968px) {
    height: 0px;
    width: 0px;
    z-index: -9;
  }
`;
export const Image = styled.img`
  height: 300px;
  width: 20vw;
  transform: scale(1.1);
`; //#f4c3bc
export const Head = styled.div`
  font-size: 20px;
  font-weight: bold;

  color: black;
  @media screen and (max-width: 968px) {
    font-size: 11px;
  }
`;
export const Head2 = styled(motion.div)`
  padding-top: 2px;
  padding-bottom: 2px;
  font-size: 60px;
  font-family: "Bebas Neue";
  color: #18181b;
  font-weight: 100;

  @media screen and (max-width: 968px) {
    text-align: center;
    font-size: 40px;
  }
`;
export const Head3 = styled(motion.div)`
  font-size: 18px;
  font-weight: 400;
  font-family: "Mulish";
  padding-top: 15px;
  padding-bottom: 15px;
  width: 70%;
  color: #828282;
  @media screen and (max-width: 968px) {
    font-size: 12px;
    width: 100%;

    margin-top: 0px;
    padding-bottom: 0px;
  }
`;
export const Underline = styled.div`
  height: 2px;
  width: 90%;
  background-color: #daa520;
`;
export const Colored = styled.h3`
  font-size: 60px;
  font-weight: 100;
  font-family: "Bebas Neue";
  animation: ${floating} 2.5s infinite;
  color: #112e6a;
  @media screen and (max-width: 968px) {
    font-size: 40px;
  }
`;
export const Arrow = styled(motion.img)`
  height: 60px;
  width: 60px;

  animation: ${floating} 2.5s infinite;
  @media screen and (max-width: 968px) {
    margin-top: 0px;
  }
`;
