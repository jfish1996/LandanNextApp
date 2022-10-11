import React, { useState } from "react";
import styled from "styled-components";
import { animate, motion } from "framer-motion";

const StyledModal = styled(motion.div)`
  max-width: 60%;
  /* max-width: 500px; */
  min-width: 500px;
  position: absolute;
  background-color: white;
  border: 1px solid black;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  /* flex-direction: column; */
`;
const StyledBackdrop = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: black;
  z-index: 9;
  opacity: 0.9;
`;
export default function Modal({ modalActive, children, onClickBackDrop }) {
  return modalActive ? (
    <>
      <StyledBackdrop onClick={onClickBackDrop} />
      <StyledModal
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.09 }}
      >
        {children}
      </StyledModal>
    </>
  ) : null;
}
