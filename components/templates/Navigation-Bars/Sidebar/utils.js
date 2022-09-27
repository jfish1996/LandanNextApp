import Link from "next/link";
import Header from "../../../atoms/List-Items/Header";
import Subtitle from "../../../atoms/List-Items/Subtitle";
import {
  StyledSpan,
  StyledUl,
  StyledCartListItem,
  StyledQuantityCircle,
} from "./styles";
import { useRouter } from "next/router";
import Title from "../../../atoms/Title/Title";
import TopBarSelctor from "../../../atoms/TopBarSelector/TopBarSelctor";
import { OverlappingFieldsCanBeMergedRule } from "graphql";
import {
  SMALL_SCREEN_FONTS,
  LARGE_SCREEN_FONTS,
  UL_MARGIN,
  TOP_BAR_UL_ITEMS,
  WHOLE_BODY_MOBILE_MARGIN,
} from "../../../../styles/constants";
import { useStateContext } from "../../../../lib/context";
import Flex from "../../../atoms/Styled-Containers/Flex/Flex";
import { returnNavData } from "../../../../lib/returnData";
export const SIDEBAR_DATA = [
  { link: "HOME", subLink: ["home archive"], href: "/", homeHref: "/home" },
  {
    link: "PORTFOLIO",
    subLink: ["pitch book", "case studies", "illustrations"],
  },
  {
    link: "SHMOCIAL SHMEDIA",
    subLink: [
      "stuff i make",
      "good finds",
      "the strange",
      "touchey feelys",
      "events places",
    ],
  },
  {
    link: "SHOP",
    subLink: ["stickers", "posters", "soft goods", "downloads", "cart"],
  },
  {
    link: "LINKS",
    subLink: [
      "Instagram",
      "LinkedIn",
      "Myspace",
      "totally legit reviews",
      "mailing list",
    ],
  },
];

export const handleCart = (
  subCategory,
  darkMode,
  currentRoute,
  lowerCaseCategory,
  lowerCaseSubCategory
) => {
  const { cartItems } = useStateContext();
  let totalCartItems = cartItems.reduce((curNumber, item) => {
    return curNumber + item.quantity;
  }, 0);

  return (
    <>
      <Subtitle>
        <Flex justifyContent={"flex-end"} gap={"10px"} alignItems={"center"}>
          <Link href={`/${lowerCaseCategory}/${lowerCaseSubCategory}`}>
            <StyledCartListItem
              darkMode={darkMode}
              smallScreenFont={SMALL_SCREEN_FONTS}
              largeScreenFont={LARGE_SCREEN_FONTS}
              colorHover={"#fff100"}
              active={
                currentRoute === `/${lowerCaseCategory}/${lowerCaseSubCategory}`
              }
            >
              {subCategory}
            </StyledCartListItem>
          </Link>
          <StyledCartListItem
            darkMode={darkMode}
            smallScreenFont={SMALL_SCREEN_FONTS}
            largeScreenFont={LARGE_SCREEN_FONTS}
          >
            <StyledQuantityCircle darkMode={darkMode}>
              {totalCartItems}
            </StyledQuantityCircle>
          </StyledCartListItem>
        </Flex>
      </Subtitle>
    </>
  );
};

export const sideBarBuilder = (data, currentSection) => {
  const { results } = returnNavData();
  const resultsFiltered = results?.filter((item) => {
    return item.attributes.name !== "Home" && item.attributes.name !== "Links";
  });
  const { darkMode } = useStateContext();
  const router = useRouter();
  const currentRoute = router.asPath;

  return (
    <>
      {results?.map((mainCategory, idx) => {
        const lowerCaseCategory = mainCategory.attributes.name.toLowerCase();
        const dataName = mainCategory.attributes.dataName.toLowerCase();
        return (
          <>
            <StyledUl key={idx + 1} margin={`${UL_MARGIN}px 0`}>
              <Header
                darkMode={darkMode}
                active={currentRoute === `/${dataName}`}
                url={lowerCaseCategory}
                key={idx}
                onClick={() => currentSection.setCurrentSection(dataName)}
              >
                <Link href={`/${dataName}`}>
                  <StyledSpan
                    darkMode={darkMode}
                    smallScreenFont={SMALL_SCREEN_FONTS}
                    largeScreenFont={LARGE_SCREEN_FONTS}
                  >
                    {mainCategory.attributes.name.toUpperCase()}
                  </StyledSpan>
                </Link>
              </Header>
              {mainCategory.attributes.sections?.data?.map(
                (subCategory, idx2) => {
                  const lowerCaseSubCategory =
                    subCategory.attributes.SectionName.toLowerCase().split(
                      "."
                    )[0];
                  const subLink = subCategory.attributes.dataName;
                  return subCategory.attributes.dataName === "cart" ? (
                    handleCart(
                      lowerCaseSubCategory,
                      darkMode,
                      currentRoute,
                      lowerCaseCategory,
                      lowerCaseSubCategory
                    )
                  ) : (
                    <Subtitle
                      darkMode={darkMode}
                      key={idx2}
                      active={currentRoute === `/${dataName}/${subLink}`}
                    >
                      <Link href={`/${dataName}/${subLink}`}>
                        <StyledSpan
                          darkMode={darkMode}
                          smallScreenFont={SMALL_SCREEN_FONTS}
                          largeScreenFont={LARGE_SCREEN_FONTS}
                        >
                          {lowerCaseSubCategory}
                        </StyledSpan>
                      </Link>
                    </Subtitle>
                  );
                }
              )}
            </StyledUl>
          </>
        );
      })}
    </>
  );

  // return data.map((mainCategory, idx) => {
  // let lowerCaseCategory = mainCategory.link.toLowerCase().replace(/ /g, "");
  //   let homeLink = mainCategory.href;

  //   return (
  //     <>
  //       <StyledUl key={idx + 1} margin={`${UL_MARGIN}px 0`}>
  //         <Header
  //           darkMode={darkMode}
  //           active={currentRoute === `/${lowerCaseCategory}`}
  //           url={lowerCaseCategory}
  //           key={idx}
  //           onClick={() => currentSection.setCurrentSection(lowerCaseCategory)}
  //         >
  //           <Link href={`/${lowerCaseCategory}`}>
  //             <StyledSpan
  //               darkMode={darkMode}
  //               smallScreenFont={SMALL_SCREEN_FONTS}
  //               largeScreenFont={LARGE_SCREEN_FONTS}
  //             >
  //               {mainCategory.link}
  //             </StyledSpan>
  //           </Link>
  //         </Header>

  // {mainCategory.subLink.map((subCategory, idx2) => {
  //   let lowerCaseSubCategory = subCategory
  //     .toLowerCase()
  //     .replace(/ /g, "");
  //   return lowerCaseSubCategory === "cart" ? (
  //     handleCart(
  //       subCategory,
  //       darkMode,
  //       currentRoute,
  //       lowerCaseCategory,
  //       lowerCaseSubCategory
  //     )
  //   ) : (
  //     <Subtitle
  //       darkMode={darkMode}
  //       key={idx2}
  //       active={
  //         currentRoute ===
  //         `/${lowerCaseCategory}/${lowerCaseSubCategory}`
  //       }
  //     >
  //       <Link href={`/${lowerCaseCategory}/${lowerCaseSubCategory}`}>
  //         <StyledSpan
  //           darkMode={darkMode}
  //           smallScreenFont={SMALL_SCREEN_FONTS}
  //           largeScreenFont={LARGE_SCREEN_FONTS}
  //         >
  //           {subCategory}
  //         </StyledSpan>
  //       </Link>
  //     </Subtitle>
  //   );
  // })}
  //       </StyledUl>
  //     </>
  //   );
  // });
};

export const topBarMainSection = (data, currentSection) => {
  const { results } = returnNavData();
  const { darkMode } = useStateContext();
  const router = useRouter();
  const currentRoute = router.asPath;
  return (
    <>
      <TopBarSelctor textAlign={"right"}>
        {results?.map((mainCategory, idx) => {
          const dataName = mainCategory.attributes.dataName.toLowerCase();
          return (
            <Subtitle
              smallScreenAnimation={true}
              darkMode={darkMode}
              key={idx}
              onClick={() => {
                currentSection.setCurrentSection(dataName);
              }}
              active={currentRoute === `/${dataName}`}
            >
              <Link href={`/${dataName}`}>
                <StyledSpan
                  smallScreenFont={TOP_BAR_UL_ITEMS}
                  padding={"10px 0 0  0"}
                  darkMode={darkMode}
                >
                  {mainCategory.attributes.name.toUpperCase()}
                </StyledSpan>
              </Link>
            </Subtitle>
          );
        })}
      </TopBarSelctor>
    </>
  );
};
export const topBarSubSection = (data, currentSection) => {
  const { results } = returnNavData();
  const { darkMode } = useStateContext();
  const router = useRouter();
  const currentRoute = router.asPath;
  return (
    <TopBarSelctor
      textAlign={"right"}
      marginRight={`${WHOLE_BODY_MOBILE_MARGIN}px`}
    >
      {results?.map((mainCategory, idx2) => {
        const lowerCaseCategory = mainCategory.attributes.dataName;
        if (currentRoute.includes(lowerCaseCategory)) {
          return mainCategory.attributes.sections?.data?.map(
            (subCategory, idx) => {
              const dataName = mainCategory.attributes.dataName.toLowerCase();
              const lowerCaseSubCategory =
                subCategory.attributes.SectionName.toLowerCase().split(".")[0];
              const subLink = subCategory.attributes.dataName;

              return subCategory.attributes.dataName === "cart" ? (
                handleCart(
                  lowerCaseSubCategory,
                  darkMode,
                  currentRoute,
                  lowerCaseCategory,
                  lowerCaseSubCategory
                )
              ) : (
                <Subtitle
                  smallScreenAnimation={true}
                  key={idx2}
                  active={currentRoute === `/${dataName}/${subLink}`}
                >
                  <Link href={`/${dataName}/${subLink}`}>
                    <StyledSpan
                      padding={"10px 0 0  0"}
                      darkMode={darkMode}
                      smallScreenFont={TOP_BAR_UL_ITEMS}
                    >
                      {lowerCaseSubCategory}
                    </StyledSpan>
                  </Link>
                </Subtitle>
              );
            }
          );
        }
      })}
    </TopBarSelctor>
  );
};
