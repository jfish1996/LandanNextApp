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
import { HomeItemIMG, Container } from "./styledHomePage";
import SkeletonHome from "../../components/molecules/SkeletonTemplate/SkeletonHome";
import EasterEgg from "../../components/atoms/EasterEgg/EasterEgg";
import { useStateContext } from "../../lib/context";
const Home = () => {
  const { fetching, posts } = returnHomePageImage();
  const { hiddenImgSrc, hiddenImgText } = returnHiddenHomeImage();
  const { darkMode } = useStateContext();
  const CATEGORY_NAME = "Home";
  const { markup } = returnCategoryData(CATEGORY_NAME);

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
