import type { Metadata } from "next";
import "./globals.css";

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
                {children}
            </body>
        </html>
    );
}
