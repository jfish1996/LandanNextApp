import styled from "styled-components";
import GridItem from "../components/atoms/GridItem/GridItem";

const GridViewBox = styled.img`
  width: 200px;
  height: 200px;
  border: 1px solid black;
`;

export const returnPosts = (posts) => {
  return posts?.map((item, idx) => {
    console.log(item);
    const defaultURL = item.attributes.Img.data[0].attributes.url;
    const smallImgURL =
      item.attributes.Img.data[0].attributes.formats?.small?.url;
    return <GridItem defaultURL={defaultURL} smallURL={smallImgURL} />;
  });
};
