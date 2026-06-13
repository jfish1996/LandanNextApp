import React from "react";
import styled from "styled-components";
import Flex from "../Styled-Containers/Flex/Flex";
import Image from "next/image";

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
  return (
    <>
      <StyledCartItemContainer>
        <Flex gap={"30px"} alignItems={"flex-start"}>
          <Image
            src="/assets/checkout-success.png"
            width={"80px"}
            height={"80px"}
            alt=""
          />
          <p>{successText}</p>
        </Flex>
      </StyledCartItemContainer>
    </>
  );
}
