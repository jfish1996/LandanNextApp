import React from "react";
import styled from "styled-components";
import StyledSvgContainer from "./StyledSvgContainer";
const { motion } = require("framer-motion");

const StyledDiv = styled(motion.div)`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

const StyledSVG = styled(motion.svg)`
  fill: ${(props) => props.fill};
  &:hover {
    fill: ${(props) => props.hover};
  }
  &:active {
    fill: ${(props) => props.active};
  }
`;

export default function Fart({
  width,
  height,
  stroke,
  hover,
  fill,
  active,
  strokeWidth,
  onClick,
  scale = { scale },
}) {
  return (
    <StyledDiv
      width={"50px"}
      height={"50px"}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 1 }}
      onClick={onClick}
    >
      <StyledSVG
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 300 300"
        fill={fill}
        active={active}
        hover={hover}
      >
        <path
          class="cls-1"
          d="M280.5,53.56h0s0-.02,.02-.03c.08-.13,.14-.27,.2-.41,.03-.07,.04-.14,.06-.21,.02-.09,.05-.17,.07-.26,.01-.09,.01-.17,.02-.26,0-.07,.01-.15,.01-.22,0-.15-.03-.29-.06-.43,0-.02,0-.04,0-.06h0c-.04-.16-.09-.32-.16-.47-.03-.07-.07-.13-.11-.19-.04-.08-.08-.16-.14-.23-.05-.07-.11-.13-.17-.2-.05-.06-.1-.12-.15-.17-.11-.1-.22-.18-.34-.26-.02-.01-.03-.03-.05-.04-.05-.03-.11-.05-.16-.08-.09-.05-.18-.1-.28-.13-.09-.03-.19-.05-.28-.07-.06-.02-.12-.04-.19-.05-.11-.02-.21-.02-.32-.02-.06,0-.11-.01-.17,0-.14,0-.28,.03-.42,.06-.02,0-.04,0-.07,0l-132.15,31.91c-.64-1.12-1.38-2.23-2.22-3.3-6.54-8.3-17.76-12.42-33.3-12.21-1.33-.03-18.42-.18-28.93,11.54-6.32,7.05-8.85,16.79-7.53,28.97-16.58,.97-26.89,8.04-28.11,8.92-1.17,.73-11.47,7.37-19.1,19.5-7.38,11.73-13.51,30.9-.74,55.69,12.37,24.02,31.97,30.64,46.22,31.97,2.22,.21,4.38,.29,6.44,.29,.09,0,.18,0,.27,0,2.62,6.27,13.54,27.15,42.75,27.15,2.6,0,5.34-.17,8.24-.52,12-1.48,19.66-6.48,24.54-12.57,8.05,2.49,15.41,3.75,22.05,3.75,8.05,0,15.05-1.83,20.92-5.49,13.64-8.51,15.91-23.68,16-24.31,2.21-15.06-.15-26.95-7-35.41l74.38-122.12h0Z"
        />
      </StyledSVG>
    </StyledDiv>
    // </StyledSvgContainer>
  );
}
