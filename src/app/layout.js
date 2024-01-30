import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
// import ClientSideProviderTest from "@/components/clientSideProviderTest";

const outfit = Outfit({
  weight: ["100", "200", "300", "400", "500"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    default: "The Bulldog Ant",
  },
  description: "Online presence for small businesses",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        {/* <ClientSideProviderTest> */}
        <div className="container">
          <Navbar />
          {children}
          <Footer />
        </div>
        {/* </ClientSideProviderTest> */}
      </body>
    </html>
  );
}
