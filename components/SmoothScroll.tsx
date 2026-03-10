"use client";

import { useEffect } from "react";

export default function SmoothScroll() {
    useEffect(() => {
        let isScrolling = false;
        let scrollTimeout: NodeJS.Timeout;
        let lastScrollY = 0;

        const handleScroll = () => {
            if (isScrolling) return;

            const currentScrollY = window.scrollY;
            const isScrollingDown = currentScrollY > lastScrollY;

            // 위로 스크롤하는 경우 스냅 적용 안 함
            if (!isScrollingDown) {
                lastScrollY = currentScrollY;
                return;
            }

            clearTimeout(scrollTimeout);

            scrollTimeout = setTimeout(() => {
                const sections = Array.from(
                    document.querySelectorAll(".snap-section"),
                ) as HTMLElement[];
                const viewportHeight = window.innerHeight;

                // 현재 보이는 섹션 찾기
                let currentSectionIndex = -1;
                sections.forEach((section, index) => {
                    const rect = section.getBoundingClientRect();
                    if (
                        rect.top <= viewportHeight / 2 &&
                        rect.bottom > viewportHeight / 2
                    ) {
                        currentSectionIndex = index;
                    }
                });

                // 다음 섹션이 있는지 확인
                if (
                    currentSectionIndex !== -1 &&
                    currentSectionIndex < sections.length - 1
                ) {
                    const nextSection = sections[currentSectionIndex + 1];
                    const nextRect = nextSection.getBoundingClientRect();

                    // 다음 섹션의 20%가 화면에 보이면 다음 섹션으로 스냅
                    const nextSectionVisible = viewportHeight - nextRect.top;
                    const nextSectionHeight = nextRect.height;
                    const visiblePercentage =
                        (nextSectionVisible / nextSectionHeight) * 100;

                    if (visiblePercentage >= 20) {
                        isScrolling = true;

                        nextSection.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                        });

                        setTimeout(() => {
                            isScrolling = false;
                        }, 1000);
                    }
                }

                lastScrollY = currentScrollY;
            }, 500);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
            clearTimeout(scrollTimeout);
        };
    }, []);

    return null;
}
