import React from "react";
import { useQuery } from "urql";
import { PRODUCT_SECTION_QUERY } from "../../lib/query";
import { returnShopSectionData } from "../../lib/returnData";
import { returnPosts } from "../../lib/returnposts";
import RichTextParagraph from "../../components/atoms/RichTextParagraph/RichTextParagraph";

export default function Posters({ feedView }) {
  const SECTION_NAME = "Posters.shop";
  const { products, richText } = returnShopSectionData(SECTION_NAME);
  return (
    <>
      <RichTextParagraph markup={richText} />
      {returnPosts(products, feedView)}
    </>
  );
}
