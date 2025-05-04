import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Download, Github, Linkedin } from "lucide-react"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerContainer } from "@/components/animations/stagger-container"
import { StaggerItem } from "@/components/animations/stagger-item"
import { ProfilePhoto } from "@/components/profile-photo"

export default function HomePage() {
  return (
    <div className="container">
      {/* Hero Section */}
      <section className="py-20 md:py-28 flex flex-col md:flex-row items-center text-center md:text-left gap-8 md:gap-12">
        <div className="md:w-1/3 flex justify-center">
          <ProfilePhoto
            src="/placeholder.svg?height=300&width=300"
            alt="Nicolas Varga"
            className="w-64 h-64 md:w-80 md:h-80"
          />
        </div>
        <div className="md:w-2/3">
          <FadeIn>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-2">Hello, I'm</h1>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-primary mb-6">Nicolas Varga</h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-10">
              I'm a system and network engineering student at Howest, passionate about building robust infrastructure
              and solving complex networking challenges.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button asChild size="lg" className="transition-transform hover:scale-105">
                <Link href="/projects">
                  View My Projects <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="transition-transform hover:scale-105">
                <Link href="/resume">
                  Download Resume <Download className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="flex gap-6 mt-12 justify-center md:justify-start">
              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-110"
              >
                <Github className="h-8 w-8 text-muted-foreground hover:text-foreground transition-colors" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-110"
              >
                <Linkedin className="h-8 w-8 text-muted-foreground hover:text-foreground transition-colors" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Personal Bio Section */}
      <section className="py-16 border-t">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Hello! I'm Nicolas Varga, a passionate system and network engineering student based in Belgium. I'm
              dedicated to building secure, efficient, and scalable infrastructure solutions.
            </p>
            <p className="text-lg text-muted-foreground">
              When I'm not configuring networks or managing servers, you can find me hiking in nature, experimenting
              with home lab setups, or contributing to open-source projects.
            </p>
            <Button asChild variant="link" size="lg" className="mt-6">
              <Link href="/about">
                Learn more about me{" "}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </FadeIn>
      </section>

      {/* Featured Skills Section */}
      <section className="py-16 border-t">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Core Skills</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Specialized in system administration and network infrastructure
            </p>
          </div>
        </FadeIn>
        <StaggerContainer>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StaggerItem>
              <div className="border rounded-lg p-6 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <h3 className="text-xl font-bold mb-3">Operating Systems</h3>
                <p className="text-muted-foreground mb-4">Linux (Fedora, CentOS), Windows Server, macOS</p>
                <Link href="/skills" className="text-primary hover:underline inline-flex items-center group">
                  Learn more <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="border rounded-lg p-6 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <h3 className="text-xl font-bold mb-3">Networking</h3>
                <p className="text-muted-foreground mb-4">DNS, Firewalls, SSH, VLANs, pfSense, Routing</p>
                <Link href="/skills" className="text-primary hover:underline inline-flex items-center group">
                  Learn more <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="border rounded-lg p-6 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <h3 className="text-xl font-bold mb-3">Tools & Automation</h3>
                <p className="text-muted-foreground mb-4">Git, Bash, Wireshark, firewalld, systemd</p>
                <Link href="/skills" className="text-primary hover:underline inline-flex items-center group">
                  Learn more <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </StaggerItem>
          </div>
        </StaggerContainer>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 border-t">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A selection of my recent work and academic projects
            </p>
          </div>
        </FadeIn>
        <StaggerContainer>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <StaggerItem>
              <div className="border rounded-lg overflow-hidden hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <div className="bg-muted h-48 flex items-center justify-center">
                  <span className="text-muted-foreground">Project Screenshot</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Network Security Lab</h3>
                  <p className="text-muted-foreground mb-4">
                    Implemented a secure network with VLANs, firewall rules, and intrusion detection systems.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-muted text-muted-foreground px-2 py-1 rounded text-xs">pfSense</span>
                    <span className="bg-muted text-muted-foreground px-2 py-1 rounded text-xs">Wireshark</span>
                    <span className="bg-muted text-muted-foreground px-2 py-1 rounded text-xs">Suricata</span>
                  </div>
                  <Link href="/projects" className="text-primary hover:underline inline-flex items-center group">
                    View details <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="border rounded-lg overflow-hidden hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <div className="bg-muted h-48 flex items-center justify-center">
                  <span className="text-muted-foreground">Project Screenshot</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Linux Server Automation</h3>
                  <p className="text-muted-foreground mb-4">
                    Created Bash scripts to automate common server administration tasks and system monitoring.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-muted text-muted-foreground px-2 py-1 rounded text-xs">Bash</span>
                    <span className="bg-muted text-muted-foreground px-2 py-1 rounded text-xs">CentOS</span>
                    <span className="bg-muted text-muted-foreground px-2 py-1 rounded text-xs">Cron</span>
                  </div>
                  <Link href="/projects" className="text-primary hover:underline inline-flex items-center group">
                    View details <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </StaggerItem>
          </div>
        </StaggerContainer>
        <FadeIn delay={0.4}>
          <div className="text-center mt-10">
            <Button asChild variant="outline" className="transition-transform hover:scale-105">
              <Link href="/projects">
                View All Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </FadeIn>
      </section>
    </div>
  )
}
