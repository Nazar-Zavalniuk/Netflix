import { roboto, ubuntu } from "@/common/fonts";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`fonts ${roboto.variable} ${ubuntu.variable} bg-black`}
    >
      <body>{children}</body>
    </html>
  );
}
