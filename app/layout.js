import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import TopBanner from "./components/topbanner";
import Footer from "./components/Footer";

import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "The Bulldog Ant",
  description: "Online Solutions for Small Businesses",
  author: "Ana Araujo",
  content: "Website and Marketing Campaigns Accessible for Small Business",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ChakraProvider>
          <ColorModeProvider options={{ defaultColorMode: "dark" }}>
            {" "}
            <TopBanner />
            <Navbar />
            {children}
            <Footer />
          </ColorModeProvider>
        </ChakraProvider>
      </body>
    </html>
  );
}
