import React, { useEffect, useState } from "react";
import Draggable from "react-draggable"; // The default
import { returnHomePageImage, returnCategoryData } from "../../lib/returnData";
import RichTextParagraph from "../../components/atoms/RichTextParagraph/RichTextParagraph";
import Flex from "../../components/atoms/Styled-Containers/Flex/Flex";
import SingleImagePost from "../../components/atoms/Image-Containers/SingleImagePost/SingleImagePost";
import Header from "../../components/atoms/List-Items/Header";
import styled from "styled-components";
import { HomeItemIMG, Container } from "./styledHomePage";
import Skeleton from "react-loading-skeleton";

const Home = () => {
  const { posts } = returnHomePageImage();
  const CATEGORY_NAME = "Home";
  const { markup } = returnCategoryData(CATEGORY_NAME);
  if (!posts) {
    return;
  }
  const imgURL = posts[0]?.attributes.Img.data[0]?.attributes.url;
  const imgAspectRatio = posts[0]?.attributes.aspectRatio;
  return (
    <>
      <Header textAlign={"left"} fontWeight={"700"} color={"black"}>
        {CATEGORY_NAME.toUpperCase()}
      </Header>
      <RichTextParagraph markup={markup} />
      <Draggable>
        <Container>
          {(
            <HomeItemIMG
              src={imgURL}
              aspectRatio={imgAspectRatio ? imgAspectRatio : "16/9"}
            />
          ) || <Skeleton />}
        </Container>
      </Draggable>
      <div
        style={{
          width: 100,
          height: 100,
          backgroundColor: "red",
          position: "relative",
          zIndex: -1,
          bottom: "120%",
          // right: "50%",
          // transform: "translate(-50%, -50%)",
        }}
      ></div>
    </>
  );
};
export default React.memo(Home);
