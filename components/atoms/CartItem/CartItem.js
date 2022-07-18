import React from "react";
import { useStateContext } from "../../../lib/context";
import styled from "styled-components";
import Flex from "../Styled-Containers/Flex/Flex";

const StyledImgContainer = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
`;

const StyledCartItemContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 15px 0;
  margin: 20px 0;
  border-top: 1px solid lightgrey;
  border-bottom: 1px solid lightgrey;
  align-items: flex-start;
`;

export default function CartItem({ item }) {
  console.log(item.price);
  const { cartItems, onAdd, onRemove } = useStateContext();

  return (
    <StyledCartItemContainer>
      <Flex gap={"30px"} alignItems={"flex-start"}>
        <StyledImgContainer src={item.url} />
        {item.Title}
      </Flex>
      <Flex flexDirection={"column"}>
        <p>quantity: {item.quantity}</p>
        <p>$: {parseInt(item.quantity) * parseInt(item.Price)}</p>
        <Flex padding={"10px 0"}>
          <button onClick={() => onAdd(item)}>Add</button>
          <button onClick={() => onRemove(item)}>Remove</button>
        </Flex>
      </Flex>
    </StyledCartItemContainer>
  );
}
