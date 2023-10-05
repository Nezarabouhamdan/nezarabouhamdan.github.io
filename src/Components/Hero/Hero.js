import React, { useEffect, useState } from "react";
import {
  Colored,
  Column,
  Head,
  Head2,
  Head3,
  Heroimg,
  Herosection,
  Image,
  Imagediv,
  Shape,
  Space,
  Textdiv,
  Row2,
  Underline,
  Webonly,
  Arrow,
} from "./Herostyles";
import back from "../../assets/all shapes@2x (4).png";
import dot from "../../assets/Done.png";
import { useAnimation } from "framer-motion";
import { Button, Button2, Row } from "../../Globalstyles";
import cir from "../../assets/Ellipse 47 (1).png";
import cir1 from "../../assets/Rectangle 1 (1).png";
import tri from "../../assets/Polygon 4.png";
import arrow from "../../assets/icons8-expand-arrow-64.png";
import { useInView } from "react-intersection-observer";
import { useHistory, useLocation } from "react-router-dom";

export default function Hero() {
  // const pdf =
  //   "https://nezarabouhamdan.github.io/portofolio/Software_Developer.pdf";
  // const Downloadpdf = (url) => {
  //   const filename = url.split("/").pop();
  //   const aTag = document.createElement("a");
  //   aTag.href = url;
  //   aTag.setAttribute("download", filename);
  //   document.body.appendChild(aTag);
  //   aTag.click();
  //   aTag.remove();
  // };
  const initial = { opacity: 0, y: 10 };
  const animation = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.2 });
  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        y: 1,
      });
    }
  }, [inView, animation]);
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  const scrollTo = (id) => {
    const element = document.getElementById(id);

    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  const closeMobileMenu = (to, id) => {
    if (id) {
      scrollTo(id);
    }

    setShow(false);
  };
  return (
    <Herosection>
      <Heroimg src={back} />
      <Column back="s">
        <br></br>
        <Shape
          initial={initial}
          transition={{ delay: 0.3, duration: 0.5 }}
          animate={animation}
          src={dot}
          back="top"
          left=""
        />
      </Column>
      <Space />
      <Space />
      <Textdiv>
        <div ref={ref}>
          <Row2>
            <div>
              {" "}
              <Shape
                initial={initial}
                transition={{ delay: 0.5, duration: 0.5 }}
                animate={animation}
                src={cir}
              />
            </div>
            <Space /> <Space />
            <Space />
            <Space />
            <Shape
              initial={initial}
              transition={{ delay: 0.7, duration: 0.5 }}
              animate={animation}
              space="s"
              src={cir1}
            />
          </Row2>
          <br></br>
          <br></br>
          <Head2
            initial={initial}
            transition={{ delay: 0.9, duration: 0.5 }}
            animate={animation}
          >
            <Row
              initial={initial}
              transition={{ delay: 1.1, duration: 0.5 }}
              animate={animation}
            >
              Nezar <Colored>Saab</Colored>
              Abouhamdan
            </Row>{" "}
            <Row
              initial={initial}
              transition={{ delay: 1.3, duration: 0.5 }}
              animate={animation}
            >
              Software Engineer
            </Row>
          </Head2>
        </div>
        <Head3
          initial={initial}
          transition={{ delay: 1.5, duration: 0.5 }}
          animate={animation}
        >
          {" "}
          Experienced software developer with a passion for problem-solving and
          innovation , Committed to delivering efficient and user-centric
          solutions to drive business success
          <br></br>.{" "}
        </Head3>
        <br></br>
        <Imagediv
          initial={initial}
          transition={{ delay: 1.7, duration: 0.5 }}
          animate={animation}
        >
          <Button onClick={() => closeMobileMenu("/", "Experience")}>
            Scroll down
          </Button>
        </Imagediv>
      </Textdiv>{" "}
      <Column>
        <br></br>
        <Shape
          initial={initial}
          transition={{ delay: 1.9, duration: 0.5 }}
          animate={animation}
          src={tri}
          back=""
          left="s"
        />
        <br></br> <br></br> <br></br>{" "}
        <Shape
          initial={initial}
          transition={{ delay: 2.1, duration: 0.5 }}
          animate={animation}
          src={dot}
          back="s"
          left="left"
        />
      </Column>
      <Space />
    </Herosection>
  );
}
