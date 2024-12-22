import { Roboto, Ubuntu } from "next/font/google";

export const roboto = Roboto({
  subsets: ["latin", "cyrillic"],
  variable: "--font-roboto",
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const ubuntu = Ubuntu({
  subsets: ["latin", "cyrillic"],
  variable: "--font-ubuntu",
  weight: ["300", "400", "500", "700"],
});
