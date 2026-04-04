import Hero from "@/components/features/Hero";
import About from "@/components/features/About";
import Services from "@/components/features/Services";
import Qualification from "@/components/features/Qualification";
import Process from "@/components/features/Process";
import Contact from "@/components/features/Contact";
import Map from "@/components/features/Map";

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
