import React from "react";
import styled from "styled-components";
import { useSwipeable } from "react-swipeable";

const StyledMenu = styled.div`
  text-align: ${(props) => props.textAlign};
  overflow: scroll;
  margin: ${(props) => props.margin};
  margin-right: ${(props) => props.marginRight};
`;

export default function TopBarSelctor({
  children,
  textAlign,
  marginRight,
  onScroll,
  onSwipeUp,
  onSwipedDown,
  margin,
}) {
  const handlers = useSwipeable({
    onSwipedDown: onSwipedDown,
    onSwipedUp: onSwipeUp,
  });

  return (
    <StyledMenu
      margin={margin}
      textAlign={textAlign}
      marginRight={marginRight}
      onScroll={onScroll}
      {...handlers}
    >
      {children}
    </StyledMenu>
  );
}
