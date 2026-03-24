'use client'
import { Github, Linkedin, Twitter } from "lucide-react";
import PageContainer from "../ui/page-container";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="border-t border-border py-8">
            <PageContainer className="flex flex-col md:flex-row items-center justify-between gap-4">
                <p>@ {new Date().getFullYear()} Jeevan Vaishnav. All rights reserved. </p>
                <div className="flex items-center gap-4">
                    <Link href="https://github.com/jeevLinkn-vLinkishnav" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                        <Github size={18} strokeWidth={1.5} />
                    </Link>
                    <Link href="https://www.linkedin.com/in/jeevanvaishnav0109/" className="text-muted-foreground hover:text-foreground transition-colors">
                        <Linkedin size={18} strokeWidth={1.5} />
                    </Link>
                    <Link href="https://x.com/jeevanv01" className="text-muted-foreground hover:text-foreground transition-colors">
                        <Twitter size={18} strokeWidth={1.5} />
                    </Link>
                </div>
            </PageContainer>
        </footer>
    )
}
