import { useEffect } from "react";
import type { AppProps } from "next/app";
import GlobalFonts from "../styles/GlobalFonts";
import GlobalStyles from "../styles/GlobalStyles";

export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const repositionInShadowDom = () => {
      const portal = document.querySelector("nextjs-portal") as HTMLElement;

      if (portal && portal.shadowRoot) {
        const toast = portal.shadowRoot.querySelector(
          "[data-nextjs-toast]"
        ) as HTMLElement;
        if (toast) {
          toast.style.top = "0";
          toast.style.marginTop = "16px";
          toast.style.left = "16px";
          toast.style.bottom = "auto";
          toast.style.right = "auto";
          toast.style.position = "fixed";
          toast.style.zIndex = "100";
        }
      }
    };

    // 최초 적용
    repositionInShadowDom();

    // 변화 감지
    const observer = new MutationObserver(() => repositionInShadowDom());
    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <GlobalFonts />
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}
