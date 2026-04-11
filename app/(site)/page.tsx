import About from "@/components/features/About";
import Contact from "@/components/features/Contact";
import Hero from "@/components/features/Hero";
import Map from "@/components/features/Map";
import Qualification from "@/components/features/Qualification";
import Services from "@/components/features/Services";

export default function Home() {
    return (
        <main>
            <Hero />
            <About />
            <Services />
            <Qualification />
            <Contact />
            <Map />
        </main>
    );
}
