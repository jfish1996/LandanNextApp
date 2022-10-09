import React from "react";
import styled from "styled-components";
import Flex from "../Styled-Containers/Flex/Flex";
import { useStateContext } from "../../../lib/context";
import Image from "next/image";
const StyledImgContainer = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
`;
const StyledPlaceHolderContainer = styled.div`
  width: 80px;
  height: 80px;
  background-color: ${(props) =>
    props.darkMode ? props.theme.dark.sidebar : props.theme.light.sidebar};
`;

const StyledCartItemContainer = styled.div`
  grid-column: 1/-1;
  display: flex;
  justify-content: space-between;
  padding: 15px 0;
  margin: 20px 0;
  border-top: 1px solid lightgrey;
  border-bottom: 1px solid lightgrey;
  align-items: flex-start;
`;
export default function SuccessCartItem({ successText }) {
  const { darkMode } = useStateContext();
  return (
    <>
      <StyledCartItemContainer>
        <Flex gap={"30px"} alignItems={"flex-start"}>
          <Image
            src="/assets/checkout-success.png"
            width={"80px"}
            height={"80px"}
          ></Image>
          <p>{successText}</p>
        </Flex>
      </StyledCartItemContainer>
    </>
  );
}
