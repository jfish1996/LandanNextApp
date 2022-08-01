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
import ShopPage from "../../components/sections/Shop";
import SocialPage from "../../components/sections/Social";
import { returnPageType } from "../../lib/returnpageToRender";
import { TOP_NAV_HEIGHT } from "../../styles/constants";
import NoContent from "../../components/sections/NoContent";

export default function Section({ feedView, currentId }) {
  const router = useRouter();
  const cleanedRouteFirstParam = router.asPath.split("/")[1];
  const cleanedRouteSecondParam = router.asPath.split("/")[2];
  const { fetching, result, filtering, items, markup, richText } =
    returnPageType(cleanedRouteFirstParam, cleanedRouteSecondParam);

  return fetching ? (
    <SkeletonTemplate pageTitle={cleanedRouteSecondParam} />
  ) : result === "posts" && filtering ? (
    <PortfolioPage
      fetching={fetching}
      pageTitle={cleanedRouteSecondParam}
      pageMarkup={markup}
      feedView={feedView}
      currentId={currentId}
      posts={items}
      category={false}
    />
  ) : result === "posts" && !filtering ? (
    <SocialPage
      fetching={fetching}
      pageTitle={cleanedRouteSecondParam}
      pageMarkup={markup}
      feedView={feedView}
      currentId={currentId}
      posts={items}
    />
  ) : result === "products" ? (
    <ShopPage
      fetching={fetching}
      pageTitle={cleanedRouteSecondParam}
      pageMarkup={richText}
      feedView={feedView}
      currentId={currentId}
      posts={items}
    />
  ) : result === "no result" ? (
    <NoContent pageTitle={cleanedRouteSecondParam} pageMarkup={markup} />
  ) : (
    <NoContent pageTitle={cleanedRouteSecondParam} pageMarkup={markup} />
  );
}
