import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
  title: "부산 화명동 심리상담 | 빛나는 별 심리상담센터",
  description: "부산 북구 화명동에 위치한 심리상담센터. 개인상담, 아동상담, 가족상담을 통해 마음의 회복과 성장을 돕습니다.",
  openGraph: {
    title: "부산 화명동 심리상담 | 빛나는 별 심리상담센터",
    description: "부산 북구 화명동에 위치한 심리상담센터. 개인상담, 아동상담, 가족상담을 통해 마음의 회복과 성장을 돕습니다.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="font-pretendard">
        <Header />
        {children}
        <Footer />
        <ScrollToTop />
        <SmoothScroll />
      </body>
    </html>
  );
}
