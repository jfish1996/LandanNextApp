import Link from "next/link";
import Header from "../../../atoms/List-Items/Header";
import Subtitle from "../../../atoms/List-Items/Subtitle";
import { StyledSpan, StyledUl } from "./styles";
import { useRouter } from "next/router";
import Title from "../../../atoms/Title/Title";
import TopBarSelctor from "../../../atoms/TopBarSelector/TopBarSelctor";
import { OverlappingFieldsCanBeMergedRule } from "graphql";
// import { fontColors } from "../../../../styles/constants";
import { useStateContext } from "../../../../lib/context";
export const SIDEBAR_DATA = [
  { link: "HOME", subLink: ["Home Archive"], href: "/" },
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

export const sideBarBuilder = (data, currentSection) => {
  const { darkMode } = useStateContext();
  const router = useRouter();
  const currentRoute = router.pathname;
  return data.map((mainCategory, idx) => {
    let lowerCaseCategory = mainCategory.link.toLowerCase().replace(/ /g, "");
    let homeLink = mainCategory.href;
    return (
      <>
        <StyledUl key={idx + 1} margin="10px 0">
          <Header
            darkMode={darkMode}
            active={currentRoute === `/${lowerCaseCategory}`}
            url={lowerCaseCategory}
            key={idx}
            onClick={() => currentSection.setCurrentSection(lowerCaseCategory)}
          >
            <Link href={`/${homeLink || lowerCaseCategory}`}>
              <StyledSpan darkMode={darkMode}>{mainCategory.link}</StyledSpan>
            </Link>
          </Header>

          {mainCategory.subLink.map((subCategory, idx2) => {
            let lowerCaseSubCategory = subCategory
              .toLowerCase()
              .replace(/ /g, "");
            return (
              <Subtitle
                darkMode={darkMode}
                key={idx2}
                active={
                  currentRoute ===
                  `/${lowerCaseCategory}/${lowerCaseSubCategory}`
                }
              >
                <Link href={`/${lowerCaseCategory}/${lowerCaseSubCategory}`}>
                  <StyledSpan darkMode={darkMode}>{subCategory}</StyledSpan>
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
              darkMode={darkMode}
              key={idx}
              onClick={() => {
                currentSection.setCurrentSection(mainCategory);
              }}
              active={currentRoute === `/${lowerCaseCategory}`}
            >
              <Link href={`/${homeLink || lowerCaseCategory}`}>
                <StyledSpan darkMode={darkMode}>{mainCategory.link}</StyledSpan>
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
        if (mainCategory === currentSection.currentSection) {
          let lowerCaseCategory = mainCategory.link
            .toLowerCase()
            .replace(/ /g, "");
          return mainCategory.subLink.map((subCategory, idx) => {
            let lowerCaseSubCategory = subCategory
              .toLowerCase()
              .replace(/ /g, "");
            return (
              <Subtitle
                key={idx2}
                active={
                  currentRoute ===
                  `/${lowerCaseCategory}/${lowerCaseSubCategory}`
                }
              >
                <Link href={`/${lowerCaseCategory}/${lowerCaseSubCategory}`}>
                  <StyledSpan darkMode={darkMode}>{subCategory}</StyledSpan>
                </Link>
              </Subtitle>
            );
          });
        }
      })}
    </TopBarSelctor>
  );
};
