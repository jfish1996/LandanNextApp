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
} from "../../../../styles/constants";
import { useStateContext } from "../../../../lib/context";
import Flex from "../../../atoms/Styled-Containers/Flex/Flex";
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
  const { darkMode } = useStateContext();
  const router = useRouter();
  const currentRoute = router.pathname;
  return data.map((mainCategory, idx) => {
    let lowerCaseCategory = mainCategory.link.toLowerCase().replace(/ /g, "");
    let homeLink = mainCategory.href;

    return (
      <>
        <StyledUl key={idx + 1} margin={`${UL_MARGIN}px 0`}>
          <Header
            darkMode={darkMode}
            active={currentRoute === `/${lowerCaseCategory}`}
            url={lowerCaseCategory}
            key={idx}
            onClick={() => currentSection.setCurrentSection(lowerCaseCategory)}
          >
            <Link href={`/${lowerCaseCategory}`}>
              <StyledSpan
                darkMode={darkMode}
                smallScreenFont={SMALL_SCREEN_FONTS}
                largeScreenFont={LARGE_SCREEN_FONTS}
              >
                {mainCategory.link}
              </StyledSpan>
            </Link>
          </Header>

          {mainCategory.subLink.map((subCategory, idx2) => {
            let lowerCaseSubCategory = subCategory
              .toLowerCase()
              .replace(/ /g, "");
            return lowerCaseSubCategory === "cart" ? (
              handleCart(
                subCategory,
                darkMode,
                currentRoute,
                lowerCaseCategory,
                lowerCaseSubCategory
              )
            ) : (
              <Subtitle
                darkMode={darkMode}
                key={idx2}
                active={
                  currentRoute ===
                  `/${lowerCaseCategory}/${lowerCaseSubCategory}`
                }
              >
                <Link href={`/${lowerCaseCategory}/${lowerCaseSubCategory}`}>
                  <StyledSpan
                    darkMode={darkMode}
                    smallScreenFont={SMALL_SCREEN_FONTS}
                    largeScreenFont={LARGE_SCREEN_FONTS}
                  >
                    {subCategory}
                  </StyledSpan>
                </Link>
              </Subtitle>
            );
          })}
        </StyledUl>
      </>
    );
  });
};

export const topBarMainSection = (data, currentSection) => {
  const { darkMode } = useStateContext();
  const router = useRouter();
  const currentRoute = router.pathname;
  return (
    <>
      <TopBarSelctor textAlign={"right"}>
        {data.map((mainCategory, idx) => {
          let lowerCaseCategory = mainCategory.link
            .toLowerCase()
            .replace(/ /g, "");
          let homeLink = mainCategory.href;
          return (
            <Subtitle
              smallScreenAnimation={true}
              darkMode={darkMode}
              key={idx}
              onClick={() => {
                currentSection.setCurrentSection(lowerCaseCategory);
              }}
              active={currentRoute === `/${lowerCaseCategory}`}
            >
              <Link href={`/${lowerCaseCategory}`}>
                <StyledSpan
                  darkMode={darkMode}
                  smallScreenFont={SMALL_SCREEN_FONTS}
                  largeScreenFont={LARGE_SCREEN_FONTS}
                >
                  {mainCategory.link}
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
  const { darkMode } = useStateContext();
  const router = useRouter();
  const currentRoute = router.pathname;
  return (
    <TopBarSelctor textAlign={"right"}>
      {data.map((mainCategory, idx2) => {
        let lowerCaseCategory = mainCategory.link
          .toLowerCase()
          .replace(/ /g, "");
        if (currentRoute.includes(lowerCaseCategory)) {
          return mainCategory.subLink.map((subCategory, idx) => {
            let lowerCaseSubCategory = subCategory
              .toLowerCase()
              .replace(/ /g, "");
            return (
              <Subtitle
                smallScreenAnimation={true}
                key={idx2}
                active={
                  currentRoute ===
                  `/${lowerCaseCategory}/${lowerCaseSubCategory}`
                }
              >
                <Link href={`/${lowerCaseCategory}/${lowerCaseSubCategory}`}>
                  <StyledSpan
                    darkMode={darkMode}
                    smallScreenFont={SMALL_SCREEN_FONTS}
                    largeScreenFont={LARGE_SCREEN_FONTS}
                  >
                    {subCategory}
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
