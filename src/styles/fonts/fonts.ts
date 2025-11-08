import {
  Poppins,
  Playfair_Display,
  Lato,
  Source_Sans_3,
} from "next/font/google";

export const poppins = Poppins({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const playfair = Playfair_Display({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const lato = Lato({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-lato",
});

// New project-wide sans: Source Sans 3 (exported as `sans3`)
export const sans3 = Source_Sans_3({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-sans3",
});
