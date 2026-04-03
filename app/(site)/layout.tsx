import Footer from "@/components/features/Footer";
import Header from "@/components/features/Header";
import ScrollToTop from "@/components/ui/ScrollToTop";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header />
            {children}
            <Footer />
            <ScrollToTop />
        </>
    );
}
