import React, { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import GridItem from "../../atoms/GridItem/GridItem";
import Flex from "../../atoms/Styled-Containers/Flex/Flex";

const StyledPostBar = styled.div`
  grid-row: ${(props) => (props.gridRow ? props.gridRow : 4)};
  /* background-color: red; */
  overflow-y: scroll;
  padding: ${(props) => (props.withFilter ? "10px 0 15px 0" : "10px 0px")};
  border-top: ${(props) => (props.withFilter ? null : "1px solid lightgrey")};
  border-bottom: 1px solid lightgrey;
  position: sticky;
  top: 0;
  background-color: white;
`;

const PostBar = ({
  feedView,
  posts,
  currentId,
  filtering,
  gridRow,
  withFilter,
}) => {
  const route = useRouter();
  const path = route.pathname;
  const scrolling = feedView?.feedViewProp;
  const setGridOrFeed = feedView?.setFeedViewProp;
  const feedRefs = useRef([]);
  useEffect(() => {
    let feedToScroll = feedRefs.current.filter(
      (value) => value.id === currentId
    );

    feedToScroll[0]?.scrollIntoView({
      inline: "end",
    });
  }, [feedRefs, currentId, path]);

  useEffect(() => {
    feedRefs.current = [];
  }, []);

  const addToRefs = (el) => {
    if (el && !feedRefs.current.includes(el)) {
      feedRefs.current.push(el);
    }
  };
  return (
    scrolling && (
      <StyledPostBar gridRow={gridRow} withFilter={withFilter}>
        <Flex
          width={"100%"}
          overflow={"scroll"}
          alignItems={"center"}
          scrollBehavior={"smooth"}
        >
          <div
            onClick={() => setGridOrFeed(!scrolling)}
            style={{
              width: "50px",
              height: "50px",
              backgroundColor: "black",
              position: "sticky",
              flexShrink: 0,
              left: 0,
            }}
          ></div>
          <Flex>
            {posts?.map((item, idx) => {
              const defaultURL =
                item?.attributes?.Img?.data[0]?.attributes?.url;
              const smallImgURL =
                item?.attributes?.Img?.data[0]?.attributes?.formats?.small?.url;
              return (
                <GridItem
                  key={idx}
                  width={"50px"}
                  height={"50px"}
                  defaultURL={defaultURL}
                  smallURL={smallImgURL}
                  margin={"0 5px"}
                  id={item.id}
                  ref={addToRefs}
                  active={item.id === currentId}
                />
              );
            })}
          </Flex>
        </Flex>
      </StyledPostBar>
    )
  );
};

const forwardPostBar = React.forwardRef(PostBar);
export default forwardPostBar;
