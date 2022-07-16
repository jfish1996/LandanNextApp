import styled from "styled-components";

export const StyledSidebar = styled.div`
  display: ${(props) => props.display};
  flex-direction: column;
  width: 350px;
  height: 100vh;
  background-color: #ececed;
  overflow: scroll;
  padding: 75px;
  position: fixed;
  @media (min-width: 850px) {
    display: ${(props) => props.bigScreenDisplay};
  }
`;

export const StyledSpan = styled.p`
  margin: 0;
  padding: 0;
  &:hover {
    color: #fff100;
    cursor: pointer;
  }
`;
