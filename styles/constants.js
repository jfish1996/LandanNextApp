//CSS constants might be moved to another file

//Grid Variables
export const GRID_BOX_WIDTH = 200;
export const GRID_BOX_HEIGHT = 200;
export const GRID_GAP = 10;
export const MIN_WINDOW_WITH = GRID_BOX_WIDTH * 2 + GRID_GAP;
export const MAX_WINDOW_WIDTH = GRID_BOX_WIDTH * 4 + GRID_GAP * 3;

//Navigation Variables

export const TOP_NAV_HEIGHT = 80;
export const SIDE_NAV_WIDTH = 350;
export const SIDE_NAV_PADDING = 75;
export const SIDE_NAV_MARGIN = SIDE_NAV_WIDTH + SIDE_NAV_PADDING;

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

export const Z_INDEXS = {
  scrollBars: 2,
  arrows: 1,
};

export const theme = {
  light: {
    sidebar: "#ececed",
    body: "#FFFFFF",
    text: "#000000",
  },
  dark: {
    sidebar: "#3A3B3c",
    body: "#18191A",
    text: "#FFFFFF",
  },
};
