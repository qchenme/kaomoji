import "../styles/globals.css";
require("typeface-noto-serif-jp");
require("typeface-open-sans-condensed");

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
