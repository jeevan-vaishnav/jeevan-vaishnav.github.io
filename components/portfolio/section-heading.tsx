'use client'
import { motion } from "framer-motion"

type Props = {
    title: string,
    description: string,
    id?: string
}
export default function SectionHeading({ title, description, id }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4, ease: [0.2, 0, 0, 1] }}
            className="mb-12"
            id={id}
        >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                {title}
            </h2>
            {description && <p className="mt-3 text-muted-foreground max-w-2xl">{description}</p>}
        </motion.div>
    )
}