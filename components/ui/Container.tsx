import { ReactNode } from "react";

interface ContainerProps {
    children: ReactNode;
    className?: string;
    id?: string;
}

export default function Container({
    children,
    className = "",
    id,
}: ContainerProps) {
    return (
        <section
            id={id}
            className={`snap-start min-h-screen max-w-6xl mx-auto px-6 py-24 flex flex-col justify-center ${className}`}
        >
            {children}
        </section>
    );
}
