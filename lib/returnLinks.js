import GridItem from "../components/atoms/GridItem/GridItem";
import Link from "next/link";

export const returnLinks = (links, feedViewProp, customURL) => {
  return links?.map((item, idx) => {
    const defaultURL = item?.attributes?.Img?.data[0]?.attributes?.url;
    const smallImgURL =
      item?.attributes?.Img?.data[0]?.attributes?.formats?.small?.url;
    return customURL ? (
      <a target="_blank" href={customURL}>
        <GridItem
          key={idx}
          defaultURL={defaultURL}
          smallURL={smallImgURL}
          id={item.id}
        />
      </a>
    ) : (
      <Link
        href={
          customURL ||
          `/links/${item?.attributes?.Title.toLowerCase().replace(/ /g, "")}`
        }
      >
        <GridItem
          key={idx}
          defaultURL={defaultURL}
          smallURL={smallImgURL}
          id={item.id}
        />
      </Link>
    );
  });
};
