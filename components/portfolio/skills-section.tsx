'use client'
import { motion } from "framer-motion";
import PageContainer from "../ui/page-container";
import SectionHeading from "./section-heading";

const skillGroups = [
    {
        title: "Frontend",
        skills: ["Vue.js", "React.js", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Shadcn UI"],
    },
    {
        title: "Backend",
        skills: ["Java", "Python", "Node.js", "Express", "PostgreSQL", "MongoDB", "MySQL", "REST APIs"],
    },
    {
        title: "Tools",
        skills: ["GitHub", "GitLab", "VS Code", "Vercel", "GitHub Actions"],
    },
    {
        title: "Integrations",
        skills: ["Stripe", "Sanity CMS", "Clerk", "Firebase", "GCP",],
    },
];

const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08 } },
};


const item = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.2, 0, 0, 1] as const } },
};


export default function SkillsSection() {
    return (
        <section id="skills" className="py-20 md:py-28">
            <PageContainer>
                <SectionHeading title="Skills" description="Technologies I work with daily." />
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-80px" }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                    {skillGroups.map((group) => (
                        <motion.div key={group.title} variants={item} className="card-base glow-border card-hover">
                            <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-primary mb-4">
                                {group.title}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {group.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="font-mono text-xs px-3 py-1.5 rounded-lg bg-secondary text-secondary-foreground border border-border"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </PageContainer>
        </section>
    )
}