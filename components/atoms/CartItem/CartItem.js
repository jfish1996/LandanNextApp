import React from "react";
import { useStateContext } from "../../../lib/context";
import styled from "styled-components";
import Flex from "../Styled-Containers/Flex/Flex";
import toast, { Toaster } from "react-hot-toast";
import Plus from "../SVGs/Plus";
import Minus from "../SVGs/Minus";
import { theme } from "../../../styles/constants";

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

export default function CartItem({ item, defaultItem }) {
  const { cartItems, onAdd, onRemove, darkMode } = useStateContext();

  const notify = () => {
    toast("Hi");
  };
  if (defaultItem) {
    return (
      <>
        <StyledCartItemContainer>
          <Flex gap={"30px"} alignItems={"flex-start"}>
            <StyledPlaceHolderContainer darkMode={darkMode} />
            {"product"}
          </Flex>
          <Flex flexDirection={"column"}>
            <p>quantity: 4</p>
            <p>total: $20</p>
          </Flex>
        </StyledCartItemContainer>
      </>
    );
  }
  return (
    <StyledCartItemContainer>
      <Flex gap={"30px"} alignItems={"flex-start"}>
        <StyledImgContainer src={item.url} />
        {item.Title}
      </Flex>
      <Flex flexDirection={"column"}>
        <p>quantity: {item.quantity}</p>
        <p>$: {item.quantity * item.Price}</p>
        <Flex padding={"10px 0"}>
          <Plus
            fill={theme.light.sidebar}
            hover="yellow"
            active={"black"}
            onClick={() => {
              onAdd(item);
            }}
          />
          <Minus
            fill={theme.light.sidebar}
            hover="yellow"
            active={"black"}
            onClick={() => onRemove(item)}
          />

          <Toaster position="bottom-right" reverseOrder={false} />
        </Flex>
      </Flex>
    </StyledCartItemContainer>
  );
}
