import { useRouter } from "next/router";
import React from "react";
import SkeletonTemplate from "../../components/molecules/SkeletonTemplate/SkeletonTemplate";
import PortfolioPage from "../../components/sections/Portfolio";
import ShopPage from "../../components/sections/Shop";
import SocialPage from "../../components/sections/Social";
import { returnPageType } from "../../lib/returnpageToRender";

import NoContent from "../../components/sections/NoContent";
import { createSpacesFromDashes } from "../../lib/helperFunctions";

export default function Section({ feedView, currentId }) {
  const router = useRouter();
  const cleanedRouteFirstParam = router.asPath.split("/")[1];
  const cleanedRouteSecondParam = router.asPath.split("/")[2];
  const multiWord = createSpacesFromDashes(cleanedRouteSecondParam);
  const { fetching, result, filtering, items, markup, richText } =
    returnPageType(cleanedRouteFirstParam, cleanedRouteSecondParam);

  return fetching ? (
    <SkeletonTemplate />
  ) : result === "posts" && filtering ? (
    <PortfolioPage
      fetching={fetching}
      pageTitle={multiWord.toLowerCase()}
      pageMarkup={markup}
      feedView={feedView}
      currentId={currentId}
      posts={items}
      category={false}
    />
  ) : result === "posts" && !filtering ? (
    <SocialPage
      fetching={fetching}
      pageTitle={multiWord.toLowerCase()}
      pageMarkup={markup}
      feedView={feedView}
      currentId={currentId}
      posts={items}
    />
  ) : result === "products" ? (
    <ShopPage
      fetching={fetching}
      pageTitle={multiWord.toLowerCase()}
      pageMarkup={richText}
      feedView={feedView}
      currentId={currentId}
      posts={items}
    />
  ) : result === "no result" ? (
    <NoContent pageTitle={multiWord.toLowerCase()} pageMarkup={markup} />
  ) : (
    <NoContent pageTitle={multiWord.toLowerCase()} pageMarkup={markup} />
  );
}
