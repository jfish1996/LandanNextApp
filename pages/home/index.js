import React, { useEffect, useState } from "react";
import Draggable from "react-draggable"; // The default
import {
  returnHomePageImage,
  returnCategoryData,
  returnHiddenHomeImage,
} from "../../lib/returnData";
import RichTextParagraph from "../../components/atoms/RichTextParagraph/RichTextParagraph";
import Flex from "../../components/atoms/Styled-Containers/Flex/Flex";
import SingleImagePost from "../../components/atoms/Image-Containers/SingleImagePost/SingleImagePost";
import Header from "../../components/atoms/List-Items/Header";
import styled from "styled-components";
import SkeletonHome from "../../components/molecules/SkeletonTemplate/SkeletonHome";
import EasterEgg from "../../components/atoms/EasterEgg/EasterEgg";
import { useStateContext } from "../../lib/context";
import { Z_INDEXS } from "../../styles/constants";
export const Container = styled.div`
  width: 100%;
  background-color: ${(props) =>
    props.darkMode ? props.theme.dark.sidebar : props.theme.light.sidebar};

  grid-column: 1/-1;
  -webkit-user-drag: none;
  z-index: ${Z_INDEXS.homePageHero};
`;

export const HomeItemIMG = styled.img`
  width: 100%;
  object-fit: contain;
  aspect-ratio: ${(props) => props.aspectRatio};
  object-fit: contain;
  grid-row: ${(props) => props.gridRow};
  grid-column: ${(props) => props.gridColumn};
  -webkit-user-drag: none;
`;

const Home = ({ feedView }) => {
  const { fetching, posts } = returnHomePageImage();
  const { hiddenImgSrc, hiddenImgText } = returnHiddenHomeImage();
  const { darkMode } = useStateContext();
  const CATEGORY_NAME = "Home";
  const { markup } = returnCategoryData(CATEGORY_NAME);

  useEffect(() => {
    feedView.setFeedViewProp(false);
  }, []);
  return fetching ? (
    <SkeletonHome pageTitle={CATEGORY_NAME} height={"400px"} />
  ) : (
    <>
      <Header textAlign={"left"} fontWeight={"700"} color={"black"}>
        {CATEGORY_NAME.toUpperCase()}
      </Header>
      <RichTextParagraph markup={markup} />
      <Draggable>
        <Container darkMode={darkMode}>
          {(
            <HomeItemIMG
              src={posts[0]?.attributes?.Img?.data[0]?.attributes?.url}
              aspectRatio={
                posts[0]?.attributes?.aspectRatio
                  ? posts[0]?.attributes?.aspectRatio
                  : "16/9"
              }
            />
          ) || <Skeleton />}
        </Container>
      </Draggable>
      <EasterEgg imgSrc={hiddenImgSrc} text={hiddenImgText} />
    </>
  );
};
export default React.memo(Home);
