import React, { useEffect } from "react";
import {
  Box,
  Counterrow,
  Desc,
  Item,
  Projectslogo,
  Projectssection,
  Sectionimg,
  Column,
  Row2,
  CustomDiv,
} from "./Projectsstyles";
import ipsum from "../../assets/logo.png";
import bendita from "../../assets/moh.79747f33.png";
import meta from "../../assets/rent.jpg";
import nat from "../../assets/ALHARAM.png";
import ios from "../../assets/alhamwi.jpg";
import aty from "../../assets/aty.png";
import nft from "../../assets/almajal.svg";
import elite from "../../assets/elite.png";
import back from "../../assets/Group 1 (1).png";
import VisibilitySensor from "react-visibility-sensor";
import NumberCounter from "number-counter";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
function Projects() {
  const initial = { opacity: 0, x: 10 };
  const animation = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.2 });
  useEffect(() => {
    if (inView) {
      console.log("sss");
      animation.start({
        opacity: 1,
        x: 1,
      });
    }
  }, [inView, animation]);
  return (
    <Projectssection>
      My Status
      <Counterrow id="Status" ref={ref}>
        {" "}
        <Sectionimg src={back} />
        <Box
          initial={initial}
          transition={{ delay: 0.3, duration: 0.5 }}
          animate={animation}
        >
          {" "}
          <VisibilitySensor partialVisibility offset={{ bottom: 10 }}>
            {({ isVisible }) => (
              <Item>
                {isVisible ? (
                  <NumberCounter
                    end={50}
                    delay={2}
                    className="increment"
                    // preFix="Up revenue:"
                    postFix="+"
                  />
                ) : null}{" "}
                <Desc> Projects</Desc>
              </Item>
            )}
          </VisibilitySensor>
        </Box>{" "}
        <Box
          initial={initial}
          transition={{ delay: 0.5, duration: 0.5 }}
          animate={animation}
        >
          {" "}
          <VisibilitySensor partialVisibility offset={{ bottom: 10 }}>
            {({ isVisible }) => (
              <Item>
                {isVisible ? (
                  <NumberCounter
                    end={35}
                    delay={1.5}
                    className="increment"
                    // preFix="Up revenue:"
                    postFix="+"
                  />
                ) : null}{" "}
                <Desc> customers</Desc>
              </Item>
            )}
          </VisibilitySensor>{" "}
        </Box>{" "}
        <Box
          initial={initial}
          transition={{ delay: 0.7, duration: 0.5 }}
          animate={animation}
        >
          {" "}
          <VisibilitySensor partialVisibility offset={{ bottom: 10 }}>
            {({ isVisible }) => (
              <Item>
                {isVisible ? (
                  <NumberCounter
                    end={10}
                    delay={1.5}
                    className="increment"
                    // preFix="Up revenue:"
                    postFix="+"
                  />
                ) : null}{" "}
                <Desc> Programming languages</Desc>
              </Item>
            )}
          </VisibilitySensor>
        </Box>
        <Box
          initial={initial}
          transition={{ delay: 0.9, duration: 0.5 }}
          animate={animation}
        >
          {" "}
          <VisibilitySensor partialVisibility offset={{ bottom: 10 }}>
            {({ isVisible }) => (
              <Item>
                {isVisible ? (
                  <NumberCounter
                    end={5}
                    delay={1.5}
                    className="increment"
                    // preFix="Up revenue:"
                    postFix="+"
                  />
                ) : null}{" "}
                <Desc> Total Experince</Desc>
              </Item>
            )}
          </VisibilitySensor>
        </Box>
      </Counterrow>
      My Recent Projects
      <Row2 id="Projects" height="50vh">
        <Sectionimg src={back} />{" "}
        <CustomDiv>
          {" "}
          <Column
            initial={initial}
            transition={{ delay: 0.3, duration: 0.5 }}
            animate={animation}
          >
            {" "}
            <Projectslogo
              onClick={(event) => {
                event.preventDefault();
                window.open("https://renterz.com/");
              }}
              src={meta}
            ></Projectslogo>{" "}
            Renterz Real Estate{" "}
          </Column>
          <Column
            initial={initial}
            transition={{ delay: 0.5, duration: 0.5 }}
            animate={animation}
          >
            {" "}
            <Projectslogo
              onClick={(event) => {
                event.preventDefault();
                window.open("https://www.ipsumsportsbarcelona.com/");
              }}
              src={ipsum}
            ></Projectslogo>
            ipsum sports barcelona
          </Column>
          <Column
            initial={initial}
            transition={{ delay: 0.7, duration: 0.5 }}
            animate={animation}
          >
            {" "}
            <Projectslogo
              onClick={(event) => {
                event.preventDefault();
                window.open("https://en.majalla.com/");
              }}
              src={nft}
            ></Projectslogo>{" "}
            Al Majalla{" "}
          </Column>
          <Column
            initial={initial}
            transition={{ delay: 0.9, duration: 0.5 }}
            animate={animation}
          >
            {" "}
            <Projectslogo
              onClick={(event) => {
                event.preventDefault();
                window.open("http://bendita-locura.com/");
              }}
              src={bendita}
            ></Projectslogo>{" "}
            BENDITA-LOUCRA{" "}
          </Column>
        </CustomDiv>{" "}
        <CustomDiv>
          {" "}
          <Column
            initial={initial}
            transition={{ delay: 1.1, duration: 0.5 }}
            animate={animation}
          >
            {" "}
            <Projectslogo
              onClick={(event) => {
                event.preventDefault();
                window.open("https://hamwi-int.com/");
              }}
              src={ios}
            ></Projectslogo>{" "}
            {"AL HAMWI Co.Ltd "}
          </Column>{" "}
          <Column
            initial={initial}
            transition={{ delay: 1.3, duration: 0.5 }}
            animate={animation}
          >
            {" "}
            <Projectslogo
              onClick={(event) => {
                event.preventDefault();
                window.open(" https://elitegrafic.com/");
              }}
              src={elite}
            ></Projectslogo>{" "}
            ELITE GRAFIC{" "}
          </Column>
          <Column
            initial={initial}
            transition={{ delay: 1.5, duration: 0.5 }}
            animate={animation}
          >
            {" "}
            <Projectslogo
              onClick={(event) => {
                event.preventDefault();
                window.open("https://www.instagram.com/p/Cpa3vf4jgQB/");
              }}
              src={aty}
            ></Projectslogo>{" "}
            ATYPICAL{" "}
          </Column>
          <Column
            initial={initial}
            transition={{ delay: 1.7, duration: 0.5 }}
            animate={animation}
          >
            {" "}
            <Projectslogo
              onClick={(event) => {
                event.preventDefault();
                window.open(" https://haram-transfer.com/");
              }}
              src={nat}
            ></Projectslogo>{" "}
            Al Haram Bank Transfers{" "}
          </Column>
        </CustomDiv>
      </Row2>
    </Projectssection>
  );
}
export default Projects;
