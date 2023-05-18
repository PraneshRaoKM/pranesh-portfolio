import "./globals.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "Pranesh Rao K.M.",
  description: "My portfolio!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.className} bg-black`}>{children}</body>
    </html>
  );
}
