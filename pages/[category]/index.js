import { useRouter } from "next/router";
import React, { useState, useEffect, useRef } from "react";
import SkeletonTemplate from "../../components/molecules/SkeletonTemplate/SkeletonTemplate";
import Header from "../../components/atoms/List-Items/Header";
import Filterbar from "../../components/molecules/Filterbar.js/Filterbar";
import PostBar from "../../components/molecules/PostBar/PostBar";
import { returnPosts } from "../../lib/returnposts";
import { useIntersectionArray } from "../../hooks/useIntersectionArray";
import RichTextParagraph from "../../components/atoms/RichTextParagraph/RichTextParagraph";
import {
  returnCategoryData,
  returnShopCategoryData,
} from "../../lib/returnData";
import PortfolioPage from "../../components/sections/Portfolio";
import { returnPageType } from "../../lib/returnpageToRender";
import { TOP_NAV_HEIGHT } from "../../styles/constants";
import SocialPage from "../../components/sections/Social";
import ShopPage from "../../components/sections/Shop";

export default function Category({ feedView, currentId }) {
  const router = useRouter();
  const cleanedRoute = router.asPath.split("/")[1];

  const { fetching, result, filtering, items, markup, richText } =
    returnPageType(cleanedRoute);

  return fetching ? (
    <SkeletonTemplate pageTitle={cleanedRoute} />
  ) : result === "posts" && filtering ? (
    <PortfolioPage
      fetching={fetching}
      pageTitle={cleanedRoute}
      pageMarkup={markup}
      feedView={feedView}
      currentId={currentId}
      posts={items}
      category={true}
    />
  ) : result === "posts" && !filtering ? (
    <SocialPage
      fetching={fetching}
      pageTitle={cleanedRoute}
      pageMarkup={markup}
      feedView={feedView}
      currentId={currentId}
      posts={items}
    />
  ) : result === "products" ? (
    <ShopPage
      fetching={fetching}
      pageTitle={cleanedRoute}
      pageMarkup={richText}
      feedView={feedView}
      currentId={currentId}
      posts={items}
    />
  ) : result === "no result" ? (
    <>Nothing here</>
  ) : (
    <></>
  );
}
