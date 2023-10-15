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
import TopBarSelctor from "../../../atoms/TopBarSelector/TopBarSelctor";
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
import SkeletonSideBar from "../../../molecules/SkeletonTemplate/SkeletonSideBar";

export const handleCart = (
  subCategory,
  darkMode,
  currentRoute,
  lowerCaseCategory,
  lowerCaseSubCategory,
  mobile,
  firstVisit
) => {
  const { cartItems } = useStateContext();
  let totalCartItems = cartItems.reduce((curNumber, item) => {
    return curNumber + item.quantity;
  }, 0);

  return (
    <>
      <Subtitle
        textAlign={"right"}
        smallScreenAnimation={firstVisit === true ? true : false}
      >
        <Flex
          justifyContent={mobile ? "flex-start" : "flex-end"}
          gap={"10px"}
          alignItems={"left"}
          padding={mobile ? "10px 0 0 0" : null}
        >
          <Link href={`/${lowerCaseCategory}/${lowerCaseSubCategory}`}>
            <StyledSpan>
              <StyledCartListItem
                darkMode={darkMode}
                // smallScreenFont={mobile ? "1.1rem" : null}
                // largeScreenFont={LARGE_SCREEN_FONTS}
                colorHover={"#fff100"}
                active={
                  currentRoute ===
                  `/${lowerCaseCategory}/${lowerCaseSubCategory}`
                }
              >
                {subCategory}
              </StyledCartListItem>
            </StyledSpan>
          </Link>
          <StyledCartListItem
            darkMode={darkMode}
            // smallScreenFont={mobile ? "1.1rem" : null}
            // smallScreenFont={SMALL_SCREEN_FONTS}
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
  const { results, fetching } = returnNavData();
  const resultsFiltered = results?.filter((item) => {
    return item.attributes.name !== "Home" && item.attributes.name !== "Links";
  });
  const { darkMode } = useStateContext();
  const router = useRouter();
  const currentRoute = router.asPath;

  return (
    <>
      {fetching ? (
        <SkeletonSideBar />
      ) : (
        results?.map((mainCategory, idx) => {
          const lowerCaseCategory = mainCategory.attributes.name.toLowerCase();
          const dataName = mainCategory.attributes.dataName.toLowerCase();
          return (
            <>
              <StyledUl key={idx + "UL"} margin={`${UL_MARGIN}px 0`}>
                <Header
                  darkMode={darkMode}
                  active={currentRoute === `/${dataName}`}
                  url={lowerCaseCategory}
                  key={lowerCaseCategory}
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
                        key={lowerCaseSubCategory}
                        active={currentRoute === `/${dataName}/${subLink}`}
                        smallScreenAnimation={false}
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
        })
      )}
    </>
  );
};

export const topBarMainSection = (data, currentSection) => {
  const { results } = returnNavData();
  const { darkMode, firstVisit } = useStateContext();
  const router = useRouter();
  const currentRoute = router.asPath;
  return (
    <>
      <TopBarSelctor textAlign={"right"} margin={"5px 0 0 5px"}>
        {results?.map((mainCategory, idx) => {
          const dataName = mainCategory.attributes.dataName.toLowerCase();
          return (
            <Subtitle
              smallScreenAnimation={firstVisit === true ? true : false}
              darkMode={darkMode}
              textAlign={"left"}
              key={idx + dataName}
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
                  key={idx + "SPAN"}
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
export const topBarSubSection = () => {
  const { results } = returnNavData();
  const { darkMode, firstVisit } = useStateContext();
  const router = useRouter();
  const currentRoute = router.asPath;
  return (
    <TopBarSelctor
      textAlign={"right"}
      marginRight={`${WHOLE_BODY_MOBILE_MARGIN}px`}
      margin={"5px 0 0 5px"}
    >
      {results?.map((mainCategory, idx2) => {
        const lowerCaseCategory = mainCategory.attributes.dataName;
        if (currentRoute.includes(lowerCaseCategory)) {
          // as sort is an inplace operation, making a copy to not mutate other areas of the code that use this data.
          const mainCategoryCopy = [
            ...mainCategory?.attributes?.sections?.data,
          ];
          return mainCategoryCopy
            ?.sort((a, b) => {
              const Aa = a?.attributes.SectionName.toLowerCase().split(".")[0];
              const Bb = b?.attributes?.SectionName.toLowerCase().split(".")[0];
              if (Aa === "cart") {
                return -1;
              } else {
                return 0;
              }
            })
            .map((subCategory, idx) => {
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
                  lowerCaseSubCategory,
                  true,
                  firstVisit
                )
              ) : (
                <Subtitle
                  smallScreenAnimation={firstVisit === true ? true : false}
                  key={lowerCaseSubCategory}
                  active={currentRoute === `/${dataName}/${subLink}`}
                  textAlign={"left"}
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
            });
        }
      })}
    </TopBarSelctor>
  );
};
