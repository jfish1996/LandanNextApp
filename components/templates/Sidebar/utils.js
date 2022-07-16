import Link from "next/link";
import Header from "../../atoms/ListItem/Header";
import Subtitle from "../../atoms/ListItem/Subtitle";
import { StyledSpan } from "./styles";
import { useRouter } from "next/router";
import Title from "../../atoms/Title/Title";

export const SIDEBAR_DATA = [
  { link: "HOME", subLink: ["Home Archive"], href: "/" },
  {
    link: "PORTFOLIO",
    subLink: ["PitchBook", "Case Studies", "Illustrations"],
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
  const router = useRouter();
  const currentRoute = router.pathname;
  return data.map((mainCategory, idx) => {
    let lowerCaseCategory = mainCategory.link.toLowerCase().replace(/ /g, "");
    let homeLink = mainCategory.href;
    return (
      <>
        <ul key={idx + 1}>
          <Header
            active={currentRoute === `/${lowerCaseCategory}`}
            url={lowerCaseCategory}
            key={idx}
            onClick={() => currentSection.setCurrentSection(lowerCaseCategory)}
          >
            <Link href={`/${homeLink || lowerCaseCategory}`}>
              <StyledSpan>{mainCategory.link}</StyledSpan>
            </Link>
          </Header>

          {mainCategory.subLink.map((subCategory, idx2) => {
            let lowerCaseSubCategory = subCategory
              .toLowerCase()
              .replace(/ /g, "");
            return (
              <Subtitle
                key={idx2}
                onClick={() =>
                  currentSection.setCurrentSection(lowerCaseSubCategory)
                }
                active={
                  currentRoute ===
                  `/${lowerCaseCategory}/${lowerCaseSubCategory}`
                }
              >
                <Link href={`/${lowerCaseCategory}/${lowerCaseSubCategory}`}>
                  <StyledSpan>{subCategory}</StyledSpan>
                </Link>
              </Subtitle>
            );
          })}
        </ul>
      </>
    );
  });
};
