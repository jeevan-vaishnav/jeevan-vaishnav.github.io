'use client'
import { motion } from 'framer-motion'
import PageContainer from "../ui/page-container"
import { useRef } from 'react';
import { ArrowDown, FileText } from 'lucide-react';
import { useMousePosition } from '@/hooks/useMousePosition';

export default function HeroSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { x, y } = useMousePosition(containerRef as React.RefObject<HTMLDivElement>);
    return (
        <section
            ref={containerRef as React.RefObject<HTMLDivElement>}
            className='relative min-h-screen flex items-center justify-center overflow-hidden'>

            <div
                className="pointer-events-none absolute inset-0 transition-opacity duration-500"
                style={{
                    background: `radial-gradient(600px circle at ${x}px ${y}px, var(--glow-color), transparent 40%)`,
                }}
            />
            <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/10 rounded-full blur-[120px] animate-glow-pulse" />
            <PageContainer className='relative z-10'>
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.2, 0, 0, 1] }}
                >
                    <p className='font-mono text-sm text-primary mb-4' >Hi, I'm</p>
                    <h1 className='text-5xl md:text-7xl font-bold text-foreground  leading-[1.1] mb-4'>
                        Jeevan Vaishnav
                        <span className='text-primary'>.</span>
                    </h1>
                    <p className='text-xl md:text-2xl text-muted-foreground font-medium mb-2'>
                        Software Developer
                    </p>
                    <p className='text-muted-foreground max-w-xl mb-8 leading-relaxed'>
                        Building high-performance, scalable web applications with TypeScript, React, and modern cloud infrastructure.
                    </p>


                    <div className='flex flex-wrap gap-3'>
                        <motion.a
                            href="#projects"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                            className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-shadow hover:shadow-lg hover:shadow-primary/25"
                        >
                            View Projects
                            <ArrowDown size={16} strokeWidth={1.5} />
                        </motion.a>
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                            className="inline-flex items-center gap-2 rounded-xl border border-border bg-secondary px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary/80"
                        >
                            <FileText size={16} strokeWidth={1.5} />
                            Resume
                        </motion.a>
                    </div>

                </motion.div>

            </PageContainer>
        </section>
    )
}