import styled from "styled-components";
import { floating, rotate, scale } from "../Hero/Herostyles";
import { motion } from "framer-motion";
export const Mainsection = styled.div`
  margin-top: 150px;
  scroll-margin-top: 70px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  align-items: center;
  gap: 100px;
  @media screen and (max-width: 968px) {
    gap: 30px;

    flex-direction: column;
    margin-top: 160px;
  }
`;
export const Halfsection = styled(motion.div)`
  font-family: "Bebas Neue";
  width: 50%;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  font-size: 30px;
  align-items: center;
  @media screen and (max-width: 968px) {
    width: 100%;
    height: 55vh;
  }
`;
export const Backimg = styled.img`
  object-fit: fill;
  width: 50%;
  margin-top: -30px;
  height: 80vh;
  position: absolute;
  z-index: -1;
  @media screen and (max-width: 968px) {
    object-fit: fill;
    margin-top: -60px;
    height: 70vh;

    width: 100%;
  }
`;

export const Oneelement = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  align-items: center;
  gap: 0px;
  width: 100%;
`;
export const Twoelement = styled(Oneelement)`
  gap: 150px;
  @media screen and (max-width: 968px) {
    gap: 50px;
  }
`;
export const Logo = styled.img`
  height: 40px;
  animation: ${floating} 2.5s infinite;

  width: 40px;
`;
export const Block = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 100;
  width: 70px;
  font-family: "Bebas Neue";
`;
export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: left;
  width: 80%;
  height: 150px;
`;
export const Boximg = styled.img`
  object-fit: fill;
  width: 40%;
  height: 120px;
  position: absolute;
  transform: rotate(${({ rotate }) => (rotate ? rotate : "-2deg")});

  z-index: -1;
  @media screen and (max-width: 968px) {
    object-fit: fill;
    margin-top: 0px;
    height: 15vh;
    width: 100%;
  }
`;
export const Head = styled.h1`
  margin-left: 20px;
  font-family: "Bebas Neue";
  font-size: 14px;
`;
export const Head2 = styled.h1`
  font-family: "Bebas Neue";
  margin-left: 20px;
  font-size: 24px;
`;
export const Head3 = styled.h2`
  margin-left: 20px;
  font-family: "Mulish";
  font-size: 10px;
  color: #828282;
`;
export const Colored = styled.h3`
  font-size: 30px;
  font-weight: 100;
  font-family: "Bebas Neue";
  animation: ${scale} 2.5s infinite;
  color: #112e6a;
  @media screen and (max-width: 968px) {
    font-size: 40px;
  }
`;
