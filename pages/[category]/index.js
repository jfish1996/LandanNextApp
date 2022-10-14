import { useRouter } from "next/router";
import React, { useState, useEffect, useRef } from "react";
import SkeletonTemplate from "../../components/molecules/SkeletonTemplate/SkeletonTemplate";
import PortfolioPage from "../../components/sections/Portfolio";
import { returnPageType } from "../../lib/returnpageToRender";
import SocialPage from "../../components/sections/Social";
import ShopPage from "../../components/sections/Shop";
import { createSpacesFromDashes } from "../../lib/helperFunctions";

export default function Category({ feedView, currentId }) {
  const router = useRouter();
  const cleanedRoute = router.asPath.split("/")[1];
  const title = createSpacesFromDashes(cleanedRoute);
  const { fetching, result, filtering, items, markup, richText } =
    returnPageType(cleanedRoute);

  return fetching ? (
    <SkeletonTemplate pageTitle={cleanedRoute} />
  ) : result === "posts" && filtering ? (
    <PortfolioPage
      fetching={fetching}
      pageTitle={title.toUpperCase()}
      pageMarkup={markup}
      feedView={feedView}
      currentId={currentId}
      posts={items}
      category={true}
    />
  ) : result === "posts" && !filtering ? (
    <SocialPage
      fetching={fetching}
      pageTitle={title.toUpperCase()}
      pageMarkup={markup}
      feedView={feedView}
      currentId={currentId}
      posts={items}
    />
  ) : result === "products" ? (
    <ShopPage
      fetching={fetching}
      pageTitle={title.toUpperCase()}
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
