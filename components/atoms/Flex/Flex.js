import React from "react";
import styled from "styled-components";

const FlexContainer = styled.div`
  max-width: ${(props) => props.width};
  display: flex;
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  flex-direction: ${(props) => props.flexDirection};
  gap: ${(props) => props.gap};
  margin: ${(props) => props.margin};
`;

export default function Flex({
  display,
  justifyContent,
  alignItems,
  flexDirection,
  gap,
  margin,
  children,
  width,
}) {
  return (
    <FlexContainer
      display={display}
      width={width}
      justifyContent={justifyContent}
      alignItems={alignItems}
      margin={margin}
      flexDirection={flexDirection}
      gap={gap}
    >
      {children}
    </FlexContainer>
  );
}
