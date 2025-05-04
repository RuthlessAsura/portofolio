import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full border-t py-6 md:py-8">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Portfolio. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <Link
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-110"
          >
            <Github className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-110"
          >
            <Linkedin className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link href="mailto:your.email@example.com" className="transition-transform hover:scale-110">
            <Mail className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
            <span className="sr-only">Email</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}
