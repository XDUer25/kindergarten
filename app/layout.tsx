import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://tianlanlan-kindergarten.example"),
  title: {
    default: "罗山县天蓝蓝幼儿园 | 科学与艺术共生的童年",
    template: "%s | 罗山县天蓝蓝幼儿园"
  },
  description:
    "罗山县天蓝蓝幼儿园面向家长展示园所环境、教育理念、师资力量、特色课程与招生信息。",
  keywords: [
    "罗山县天蓝蓝幼儿园",
    "罗山幼儿园",
    "信阳幼儿园",
    "中科院幼儿园信阳教育实验园",
    "幼儿园招生"
  ],
  openGraph: {
    title: "罗山县天蓝蓝幼儿园",
    description: "给孩子一个科学与艺术共生的童年。",
    images: ["/images/69bc74f12522aa3bfd6ae08c389dc876_高清.jpg"],
    locale: "zh_CN",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
