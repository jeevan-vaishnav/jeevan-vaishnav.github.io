'use client'
import { motion } from "framer-motion";
import PageContainer from "../ui/page-container";
import SectionHeading from "./section-heading";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";


const projects = [
    {
        title: "NAPDOL — Public Defenders Platform",
        description: "Official platform for the National Association of Public Defenders of Liberia. Includes organizational info, leadership details, announcements system, and role-based structure. Designed for accessibility and public legal awareness.",
        tech: ["Next.js", "Tailwind CSS", "ShadCN UI", "Framer Motion"],
        link: "https://napdol.org",
        github: "Private Repository",
    },
    {
        title: "Swarnakarshan — E-commerce",
        description: "Spiritual e-commerce site built with Next.js, Sanity, and Shadcn UI. Features include product management, cart system, and secure checkout.",
        tech: ["Next.js", "Sanity", "Clerk", "Shadcn UI", "Razorpay"],
        link: "https://swarnakarshan.com",
        github: "Private Repository",
    },
    {
        title: "SUXTECH IT Services",
        description: "IT consultancy platform developed with Next.js and Tailwind CSS. Responsive design with CMS integration and SEO optimization.",
        tech: ["Next.js", "Tailwind CSS", "Vercel"],
        link: "https://suxtech.vercel.app",
        github: "Private Repository",
    },
    {
        title: "Money Market Finance Website",
        description: "Finance website for money market loans with real-time data, user dashboards, and secure authentication.",
        tech: ["Next.js", "TypeScript", "TailwindCSS", "ShadCN", "Nodemailer"],
        link: "https://moneymarketloans.com",
        github: "Private Repository",
    },
];


const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.2, 0, 0, 1] as const } },
};


export default function ProjectsSection() {
    return (
        <section id="projects" className="py-20 md:py-28">
            <PageContainer>
                <SectionHeading title="Featured Projects" description="Some of the projects I've worked on." />
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-80px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {
                        projects.map((project) => (
                            <motion.div
                                variants={item} className="card-base glow-border card-hover group"
                                key={project.title}
                            >
                                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-1.5 mb-5">
                                    {project.tech.map((t) => (
                                        <span key={t} className="font-mono text-[11px] px-2 py-1 rounded-md bg-secondary text-muted-foreground border border-border">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex gap-3">
                                    <Link
                                        href={project.link}
                                        className="inline-flex items-center gap-1.5 text-xs font-medium text-foreground hover:text-primary transition-colors"
                                    >
                                        <ExternalLink size={14} strokeWidth={1.5} /> View Project
                                    </Link>
                                    <Link
                                        href={project.github}
                                        className="inline-flex items-center gap-1.5 text-xs font-medium text-foreground hover:text-primary transition-colors"
                                    >
                                        <Github size={14} strokeWidth={1.5} /> GitHub
                                    </Link>
                                </div>
                            </motion.div>
                        ))
                    }
                </motion.div>
            </PageContainer>
        </section>
    )

}