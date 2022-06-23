type State = {
  isLoading: boolean;
  auth: any;
  modal: any;
  plugins: any;
  yScrollPosition: number;
  header: any;
};

export const state: State = {
  // ----- GLOBAL props -----
  isLoading: false,
  auth: {
    jwtToken: null,
    isLoggedIn: undefined,
  },
  modal: {
    name: null,
    isVisible: false,
  },
  plugins: {
    fullPage: null,
  },
  yScrollPosition: 0,
  header: {
    menu: {
      isOpened: false,
    },
  },
};
