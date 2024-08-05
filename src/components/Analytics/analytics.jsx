import ReactGA from "react-ga";

const TRACKING_ID = "G-HK29QKPVZ4"; // Buraya Google Analytics izleme kimliğinizi ekleyin
ReactGA.initialize(TRACKING_ID);

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname + window.location.search);
};
