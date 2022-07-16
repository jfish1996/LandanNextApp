import React, { useState, useEffect } from "react";
import axios from "axios";
import GridItem from "../../components/atoms/GridItem/GridItem";

export default function homearchive({ feedView }) {
  const [homeArchivePosts, setHomeArchivePosts] = useState([]);
  let { getter, setter } = feedView;
  useEffect(() => {
    const data = axios
      .get(
        "https://shielded-sea-51712.herokuapp.com/api/home-archives?populate=*"
      )
      .then((returnData) => {
        console.log(returnData);
        setHomeArchivePosts(returnData.data.data);
      });
  }, []);
  return (
    <>
      {homeArchivePosts.map((item, idx) => {
        const itemURL = item?.attributes?.Img?.data[0].attributes.url;
        return (
          <GridItem
            onClick={() => setter(!getter)}
            defaultURL={itemURL}
          ></GridItem>
        );
      })}
    </>
  );
}
