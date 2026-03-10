"use client";

import { useEffect, useState } from "react";

export default function ScrollToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const container = document.getElementById("scroll-container");
        if (!container) return;

        const handleScroll = () => {
            setVisible(container.scrollTop > 0);
        };

        container.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            container.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollTop = () => {
        const container = document.getElementById("scroll-container");
        if (!container) return;

        container.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <button
            onClick={scrollTop}
            className={`fixed bottom-8 right-8 z-50 bg-slate-900 text-white p-3 rounded-full shadow-lg transition-all duration-300
      ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        >
            ↑
        </button>
    );
}
