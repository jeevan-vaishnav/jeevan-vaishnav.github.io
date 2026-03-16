'use client'
import { Github, Linkedin, Twitter } from "lucide-react";
import PageContainer from "../ui/page-container";

export default function Footer() {
    return (
        <footer className="border-t border-border py-8">
            <PageContainer className="flex flex-col md:flex-row items-center justify-between gap-4">
                <p>@ {new Date().getFullYear()} Jeevan Vaishnav. All rights reserved. </p>
                <div className="flex items-center gap-4">
                    <a href="https://github.com/jeevan-vaishnav" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                        <Github size={18} strokeWidth={1.5} />
                    </a>
                    <a href="https://www.linkedin.com/in/jeevanvaishnav0109/" className="text-muted-foreground hover:text-foreground transition-colors">
                        <Linkedin size={18} strokeWidth={1.5} />
                    </a>
                    <a href="https://x.com/jeevanv01" className="text-muted-foreground hover:text-foreground transition-colors">
                        <Twitter size={18} strokeWidth={1.5} />
                    </a>
                </div>
            </PageContainer>
        </footer>
    )
}
