import React from "react";
import styled from "styled-components";

const FlexContainer = styled.div`
  max-width: ${(props) => props.width};
  display: flex;
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  flex-direction: ${(props) => props.flexDirection};
  padding: ${(props) => props.padding};
  gap: ${(props) => props.gap};
  margin: ${(props) => props.margin};
  overflow: ${(props) => props.overflow};
  scroll-behavior: ${(props) => props.scrollBehavior};
`;

export default function Flex({
  display,
  justifyContent,
  alignItems,
  flexDirection,
  padding,
  gap,
  margin,
  children,
  overflow,
  width,
  scrollBehavior,
}) {
  return (
    <FlexContainer
      display={display}
      padding={padding}
      width={width}
      justifyContent={justifyContent}
      alignItems={alignItems}
      margin={margin}
      overflow={overflow}
      flexDirection={flexDirection}
      gap={gap}
      scrollBehavior={scrollBehavior}
    >
      {children}
    </FlexContainer>
  );
}
