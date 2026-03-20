'use client'
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import PageContainer from "../ui/page-container";
import { Button } from "../ui/button";
import { ThemeToggle } from "../theme-toggle";

const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Blog", href: "#blog" },
    { label: "Contact", href: "#contact" },
];
export default function NavigationBar() {
    const [open, setOpen] = useState(false);
    return (
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
            <PageContainer className="flex h-16 items-center justify-between">
                <div className="flex items-center gap-2">
                    <a href="#" className="font-mono text-lg font-semibold text-foreground">
                        JV<span className="text-primary">.</span>
                    </a>
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>
                </div>
                <div className="flex items-center gap-2">
                    <ThemeToggle />
                    <Button
                        variant="ghost"
                        size="icon"
                        className="md:hidden"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? (
                            <X className="h-5 w-5" />
                        ) : (
                            <Menu className="h-5 w-5" />
                        )}
                    </Button>
                </div>
            </PageContainer>
            {/* mobile  nav */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-xl overflow-hidden"
                    >
                        <PageContainer className="py-4 flex flex-col gap-3">
                            {navLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setOpen(false)}
                                    className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </PageContainer>
                    </motion.div>
                )}
            </AnimatePresence>

        </header >
    );
}
