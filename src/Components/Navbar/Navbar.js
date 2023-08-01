import React, { useState, useEffect } from "react";
import { FaRProject, FaTimes } from "react-icons/fa";
import { CgMenuRight } from "react-icons/cg";
import { IconContext } from "react-icons";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { FiAlignRight, FiXCircle, FiChevronDown } from "react-icons/fi";
import "./nav.css";

import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavLinks,
  NavItem,
  Text,
} from "./NavbarStyles.js";

import { useLocation, useHistory } from "react-router-dom";
import { MainHeading } from "../../Globalstyles";
import { data } from "../../data/NavbarData";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// import logo from "../../assets/logo.png";
// import Services from "../Services/Services";

const Navbar = () => {
  const initial = { opacity: 0 };
  const animation = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.3 });
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (inView) {
      console.log("sss");
      animation.start({
        opacity: 1,
      });
    }
  }, [inView, animation]);
  let history = useHistory();
  let location = useLocation();

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
    if (id && location.pathname === "/") {
      scrollTo(id);
    }

    history.push(to);
    setShow(false);
  };
  return (
    <IconContext.Provider value={{ color: "#ff" }}>
      <Nav ref={ref}>
        <NavbarContainer>
          <NavLogo to="/">
            <Text
              initial={initial}
              transition={{ delay: 0, duration: 0.1 }}
              animate={animation}
            >
              Portofolio
            </Text>
          </NavLogo>
          <MobileIcon onClick={handleClick}>
            {show ? <FaTimes /> : <CgMenuRight />}
          </MobileIcon>
          <NavMenu
            initial={initial}
            transition={{ delay: 0.1, duration: 0.2 }}
            animate={animation}
            show={show}
          >
            {data.map((el, index) => (
              <NavItem key={index}>
                <NavLinks onClick={() => closeMobileMenu(el.to, el.id)}>
                  {el.text}
                </NavLinks>
              </NavItem>
            ))}
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
  );
};

export default Navbar;
