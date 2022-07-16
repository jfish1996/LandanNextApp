import { useEffect, useState } from "react";
import { returnCategoryData } from "../lib/returnData";
import RichTextParagraph from "../components/atoms/RichTextParagraph/RichTextParagraph";
import Flex from "../components/atoms/Styled-Containers/Flex/Flex";
import { MAX_WINDOW_WIDTH } from "../styles/constants";
import styled from "styled-components";
import axios from "axios";
export default function Home() {
  const StyledContainer = styled.div`
    grid-column: 1/-1;
    object-fit: contain;
  `;
  const [heroImg, setHeroImg] = useState([]);
  const sendGet = async () => {
    let itemHolder = [];
    let fromPostsOrigin = false;
    const postResponse = await axios.get(
      "https://shielded-sea-51712.herokuapp.com/api/posts?populate=*"
    );

    const homeArchiveResponse = await axios.get(
      "https://shielded-sea-51712.herokuapp.com/api/home-archives?populate=*"
    );

    for (let homepagePost of homeArchiveResponse.data.data) {
      if (homepagePost.attributes.HomepageHero) {
        console.log("were in the falsey section");
        setHeroImg(homepagePost);
        fromPostsOrigin = false;
      } else {
        fromPostsOrigin = true;
      }
    }

    if (fromPostsOrigin) {
      console.log("were in the truthy section");
      for (let post of postResponse?.data?.data) {
        if (post.attributes.HomepageHero) {
          itemHolder.push(post);
        } else {
        }
      }
      console.log(itemHolder);
      setHeroImg(itemHolder[0]);
      calcHomeArchivePush(itemHolder[0], homeArchiveResponse.data.data);
    }
  };

  useEffect(() => {
    sendGet();
  }, [sendGet]);

  const calcHomeArchivePush = (item, data) => {
    let filterCheck = data.filter((post) => {
      return post?.attributes?.Title === item?.attributes?.Title;
    });

    if (filterCheck.length) {
      console.log("tooLong!!! Already pushed to Home Archive");
      return;
    } else {
      if (!item) {
        console.log("no data");
        return;
      } else {
        console.log(item, "item to see");
        axios({
          method: "POST",
          url: `https://shielded-sea-51712.herokuapp.com/api/home-archives`,
          data: {
            data: {
              Title: item?.attributes.Title,
              Img: item?.attributes.Img.data,
            },
          },
        })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
        console.log("yay!");
        return;
      }
    }
  };
  const CATEGORY_NAME = "Home";
  const { markup } = returnCategoryData(CATEGORY_NAME);
  const heroImgURL = heroImg?.attributes?.Img?.data[0].attributes.url;
  return (
    <>
      <RichTextParagraph markup={markup} />
      <StyledContainer backgroundImage={heroImgURL}>
        <img src={heroImgURL} style={{ objectFit: "contain", width: "100%" }} />
      </StyledContainer>
    </>
  );
}
