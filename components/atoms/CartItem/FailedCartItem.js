import React from "react";
import styled from "styled-components";
import Flex from "../Styled-Containers/Flex/Flex";
import { useStateContext } from "../../../lib/context";
import Image from "next/image";

const StyledCartItemContainer = styled.div`
  grid-column: 1/-1;
  display: flex;
  justify-content: space-between;
  padding: 40px 0;
  margin: 20px 0;
  border-radius: 3px;
  background-color: #fff100;
`;
export default function FailedCartItem({ failedText }) {
  const { darkMode } = useStateContext();
  return (
    <>
      <StyledCartItemContainer>
        <Flex gap={"30px"} alignItems={"flex-start"} padding={"0 10px"}>
          <p>{failedText}</p>
        </Flex>
      </StyledCartItemContainer>
    </>
  );
}
