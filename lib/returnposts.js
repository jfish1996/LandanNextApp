import styled from "styled-components";

const GridViewBox = styled.img`
  width: 150px;
  height: 150px;
  border: 1px solid black;
`;

export const returnPosts = (posts) => {
  return posts?.map((item, idx) => {
    const imgURL = item.attributes.Img.data[0].attributes.formats?.small?.url;
    return <GridViewBox src={imgURL} key={idx}></GridViewBox>;
  });
};
