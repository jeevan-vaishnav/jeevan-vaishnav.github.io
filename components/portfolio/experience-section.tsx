'use client'
import { motion } from 'framer-motion'
import PageContainer from "../ui/page-container";
import SectionHeading from "./section-heading";


const experiences = [
    {
        period: "2025 — Present",
        role: "Software Developer",
        company: "SUXTECH INC",
        description: "Working on project-based web application development using Next.js, React, and Tailwind CSS. Contributed to multiple projects by designing scalable frontend architectures, building reusable components, and implementing CI/CD pipelines. Actively enhancing problem-solving skills."
    },
    {
        period: "Feb 2023 — April 2024",
        role: "Junior Software Developer",
        company: "ActioHX Solutions Pvt Ltd",
        description: "Developed and maintained full-stack web applications using Vue.js and Quasar. Worked with JavaScript, Firebase, and Google Cloud Platform (GCP), and built responsive UI using HTML, CSS, and Tailwind CSS. Integrated data visualization using ApexCharts.js and managed version control with GitLab."
    }
];

export default function ExperienceSection() {
    return (
        <section id="experience" className="py-20 md:py-28">
            <PageContainer>
                <SectionHeading title="Experience" description="My professional journey." />
                <div className="relative">
                    <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border" />
                    <div className='space-y-8 ml-6 md:ml-16'>
                        {
                            experiences.map((exp, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -16 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-80px" }}
                                    transition={{ duration: 0.4, delay: i * 0.1, ease: [0.2, 0, 0, 1] }}
                                    className="relative"
                                >
                                    <div className='absolute -left-6 md:-left-16 top-2 w-3 h-3 rounded-full bg-primary ring-4 ring-background' />

                                    <div className='card-base glow-border'>
                                        <p className='font-mono text-xs text-primary mb-1' >{exp.period}</p>
                                        <h3 className='text-lg font-semibold text-foreground'>{exp.role}</h3>
                                        <p className='text-sm text-muted-foreground mb-3'>{exp.company}</p>
                                        <p className='text-sm text-muted-foreground leading-relaxed'>{exp.description}</p>
                                    </div>

                                </motion.div>
                            ))
                        }
                    </div>
                </div>
            </PageContainer>
        </section>
    )
}