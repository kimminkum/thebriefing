import type { AppProps } from "next/app";
import GlobalFonts from "../styles/GlobalFonts";
import GlobalStyles from "../styles/GlobalStyles";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalFonts />
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}
