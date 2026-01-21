import { Inter, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SmoothScroll from "./components/SmoothScroll";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const dm = DM_Serif_Display({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-dm",
  display: "swap",
});

export const metadata = {
  title: "Brasil Tube - Explore um universo cinematográfico como nunca antes",
  description:
    "Explore um universo cinematográfico como nunca antes com nosso site de filmes, desenvolvido pela API TMDB. Mergulhe em uma vasta coleção de filmes e descubra preciosidades escondidas. Com integração perfeita, assista aos seus filmes favoritos instantaneamente. Seu destino ideal para entretenimento sem fim aguarda você: descubra, assista e vivencie a magia do cinema hoje mesmo!!",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${dm.variable}`}>
        <SmoothScroll>
          <Header />
          {children}
          <Footer />
          <Analytics />
        </SmoothScroll>
      </body>
    </html>
  );
}
