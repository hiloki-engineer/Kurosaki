import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GYOZA SHAMPOO | 餃子シャンプー公式",
  description: "洗うたびに、餃子のようなツヤ髪へ。パリモチ処方の餃子シャンプー、公式サイト。",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
