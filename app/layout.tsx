import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LXXI",
  description: "LXXI is a leading investment and trading company focused on Africa's growth sectors, including commodity trading, capital goods, private equity, and financial advisory services. We are committed to driving sustainable development and economic growth across the continent through strategic investments and innovative solutions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-black m-0 p-0">
        {children}
      </body>
    </html>
  );
}
