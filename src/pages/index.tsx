// pages/index.tsx
import dynamic from "next/dynamic";

// Main.tsx가 src/pages에 있을 경우:
const Main = dynamic(() => import("../pages/Main"), { ssr: false });

export default function HomePage() {
  return <Main />;
}
