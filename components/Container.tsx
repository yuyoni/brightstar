import { ReactNode } from "react"

interface ContainerProps {
  children: ReactNode
  className?: string
}

export default function Container({ children, className = "" }: ContainerProps) {
  return (
    <section className={`max-w-6xl mx-auto px-6 py-24 ${className}`}>
      {children}
    </section>
  )
}
