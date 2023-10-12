import Image from "next/image";
import styles from "./page.module.css";
import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react";

import TopBanner from "./components/topbanner";
import HeroSection from "./components/HeroSection";
import LandingPageCard from "./components/LandingPageCard";
import Heartbeat from "./components/Heartbeat";
import PicPega from "./components/picpega";
import Footer from "./components/Footer";
// import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <ChakraProvider>
      <ColorModeProvider options={{ defaultColorMode: "dark" }}>
        <main className={styles.main}>
          <div className={styles.description}>
            <TopBanner />
            {/* <Navbar /> */}
            <HeroSection />
            <LandingPageCard />
            <Heartbeat />
            <PicPega />
            <Footer />
          </div>
        </main>
      </ColorModeProvider>
    </ChakraProvider>
  );
}
