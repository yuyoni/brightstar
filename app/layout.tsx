import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
    title: "빛나는 별 심리상담센터 | 별자리 심리학",
    description: "별자리 심리학을 통한 상담, 빛나는 별 심리상담센터 ",
    openGraph: {
        title: "빛나는 별 심리상담센터 | 별자리 심리학",
        description: "별자리 심리학을 통한 상담, 빛나는 별 심리상담센터 ",
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
