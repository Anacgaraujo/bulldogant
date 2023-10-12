import Image from "next/image";
import styles from "./page.module.css";
import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react";

import HeroSection from "./components/HeroSection";
import LandingPageCard from "./components/LandingPageCard";
import Heartbeat from "./components/Heartbeat";
import PicPega from "./components/picpega";

export default function Home() {
  return (
    <ChakraProvider>
      <ColorModeProvider options={{ defaultColorMode: "dark" }}>
        <main className={styles.main}>
          <div className={styles.description}>
            <HeroSection />
            <LandingPageCard />
            <Heartbeat />
            <PicPega />
          </div>
        </main>
      </ColorModeProvider>
    </ChakraProvider>
  );
}
