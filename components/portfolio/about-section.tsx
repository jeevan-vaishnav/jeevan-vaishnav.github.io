'use client'

import { motion } from "framer-motion"
import PageContainer from "../ui/page-container"
import SectionHeading from "./section-heading"


export default function AboutSection() {
    return (
        <section id="about" className='py-20 md:py-28' >
            <PageContainer>
                <SectionHeading title="About" description="A brief introduction." />
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.4, delay: 0.1, ease: [0.2, 0, 0, 1] }}
                    className="card-base glow-border max-w-3xl"
                >
                    <p className="text-muted-foreground leading-relaxed mb-4">
                        I'm a Software Develoepr with experiance building production grade web applications. I specialize in
                        <span className="text-foreground font-medium"> React</span>, <span className="text-foreground font-medium">Next.js</span>, <span className="text-foreground font-medium">Node.js</span>, and  <span className="text-foreground font-medium">TypeScript</span>, with a focus on performance, clean architecture, and user experience.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                        I enjoy working on complex problems, building developer tools, and contributing to open-source projects. Currently focused on building scalable SaaS platforms and e-commerce solutions.
                    </p>
                </motion.div>
            </PageContainer>
        </section >
    )
}