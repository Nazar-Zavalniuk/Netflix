import { roboto, ubuntu } from "@/common/fonts";
import "./globals.css";
import { IChildren } from "@/common/types";

export default function RootLayout({ children }: Readonly<IChildren>) {
  return (
    <html
      lang="en"
      className={`fonts ${roboto.variable} ${ubuntu.variable} bg-black`}
    >
      <body>{children}</body>
    </html>
  );
}
