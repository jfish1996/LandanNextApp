//CSS constants might be moved to another file

//Navigation Variables
export const TOP_NAV_HEIGHT = 90;
export const SIDE_NAV_WIDTH = 350;
export const SIDE_NAV_PADDING = 65;
export const SIDE_NAV_MARGIN = SIDE_NAV_WIDTH + SIDE_NAV_PADDING;

//--Naigation Item Variables
export const UL_MARGIN = SIDE_NAV_PADDING / 2;
export const BIG_NAME_BOTTOM_PADDING_SIDEBAR = UL_MARGIN;
export const BIG_NAME_BOTTOM_PADDING_BODY = UL_MARGIN * 2;
export const GAP_BETWEEN_UL_ITEMS = UL_MARGIN / 2;

//Grid Variables
export const GRID_BOX_WIDTH = 200;
export const GRID_BOX_HEIGHT = 200;
export const GRID_GAP = 10;
export const MIN_WINDOW_WITH = GRID_BOX_WIDTH * 2 + GRID_GAP;
export const MAX_WINDOW_WIDTH = GRID_BOX_WIDTH * 4 + GRID_GAP * 3;

//Mobile
export const WHOLE_BODY_MOBILE_MARGIN = 5;
export const TOP_PARAGRAPH_SECTION_PADDING = 15;

//Desktop
export const HEADER_AND_SCROLLBAR_PADDING = GAP_BETWEEN_UL_ITEMS - GRID_GAP;

//Feed View Post Variables
export const MARGIN_BETWEEN_POSTS = GAP_BETWEEN_UL_ITEMS - GRID_GAP;

//FONT-SIZES
export const UL_SECTION_TITLE = 1.3;
export const BODY_SECTION_TITLE = UL_SECTION_TITLE;
export const SMALL_SCREEN_FONTS = 1.2;
export const LARGE_SCREEN_FONTS = 1;
export const TOP_BAR_UL_ITEMS = 1;

//Z-INDEX LIBRARY
export const Z_INDEXS = {
  scrollBars: 2,
  sidebar: 1,
  arrows: 1,
};

export const TRANSITION_TIMES = {
  sidebar: 200,
  body: 300,
  text: 300,
};

export const POST_TRANSITION_TIMES = {
  intial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  transition: { delay: 0.09 },
};

export const theme = {
  nav_padding: "75px",
  light: {
    sidebar: "#ececed",
    body: "#FFFFFF",
    text: "#000000",
    skeletonStart: "(240, 3%, 93%)",
    skeletonEnd: "(240, 3%, 24%)",
  },
  dark: {
    sidebar: "#3A3B3c",
    body: "#18191A",
    text: "#FFFFFF",
  },
};
