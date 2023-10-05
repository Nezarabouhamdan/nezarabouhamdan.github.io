import React, { useEffect } from "react";
import {
  Backimg,
  Block,
  Box,
  Boximg,
  Halfsection,
  Head,
  Head2,
  Head3,
  Logo,
  Mainsection,
  Colored,
  Oneelement,
  Twoelement,
} from "./Knowledgestyles";
import dart from "../../assets/icons8-dart-64.png";
import html from "../../assets/icons8-html-64.png";
import css from "../../assets/icons8-css-64.png";
import js from "../../assets/icons8-js-64.png";
import git from "../../assets/icons8-git-64.png";
import react from "../../assets/icons8-react-native-64.png";
import flutter from "../../assets/icons8-flutter-64.png";
import Node from "../../assets/icons8-nodejs-64.png";
import c1 from "../../assets/icons8-c-64.png";
import c2 from "../../assets/icons8-c-sharp-logo-64.png";
import back from "../../assets/Circles.png";
import box from "../../assets/box.png";
import { Row } from "../../Globalstyles";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
function Knowledge() {
  const initial = { opacity: 0 };
  const animation = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.3 });
  useEffect(() => {
    if (inView) {
      console.log("sss");
      animation.start({
        opacity: 1,
      });
    }
  }, [inView, animation]);
  return (
    <Mainsection id="Experience">
      {" "}
      <Halfsection
        initial={initial}
        transition={{ delay: 0.3, duration: 0.5 }}
        animate={animation}
        ref={ref}
      >
        <Backimg src={back} />
        <Oneelement>
          <Block>
            <Logo src={html}></Logo> html
          </Block>
        </Oneelement>
        <Twoelement>
          <Block>
            {" "}
            <Logo src={css}></Logo> css{" "}
          </Block>
          <Block>
            <Logo src={js}></Logo> js
          </Block>
        </Twoelement>
        <Twoelement>
          <Block>
            <Logo src={git}></Logo> git
          </Block>
          <Block>
            {" "}
            <Logo src={react}></Logo>react js
          </Block>
        </Twoelement>
        <Twoelement>
          <Block>
            {" "}
            <Logo src={Node}></Logo>Node js
          </Block>
          <Block>
            {" "}
            <Logo src={c1}></Logo>c#
          </Block>
        </Twoelement>
        <Twoelement>
          <Block>
            <Logo src={c2}></Logo>c++
          </Block>
          <Block>
            {" "}
            <Logo src={dart}></Logo>dart
          </Block>
        </Twoelement>
        <Oneelement>
          <Block>
            {" "}
            <Logo src={flutter}></Logo>flutter
          </Block>
        </Oneelement>
      </Halfsection>
      <Halfsection
        initial={initial}
        transition={{ delay: 0.6, duration: 0.5 }}
        animate={animation}
        ref={ref}
      >
        <Row>
          {" "}
          I'm <Colored>specialized</Colored> in
        </Row>
        <Box>
          <Boximg src={box} rotate="-1.5deg" />
          <Head>1</Head>
          <Head2>WEB sites/App Development</Head2>{" "}
          <Head3>
            {" "}
            creating, building, and maintaining websites and web applications
          </Head3>
        </Box>
        <Box>
          {" "}
          <Boximg src={box} rotate="" />
          <Head>2</Head>
          <Head2>Android App Development</Head2>{" "}
          <Head3> Build, test, and deploy android mobile applications</Head3>
        </Box>{" "}
        <Box>
          {" "}
          <Boximg src={box} rotate="-1.5deg" />
          <Head>3</Head>
          <Head2>Systems Development</Head2>{" "}
          <Head3>
            defining, designing, testing, and implementing a new software
            application or program
          </Head3>
        </Box>{" "}
      </Halfsection>
    </Mainsection>
  );
}

export default Knowledge;
