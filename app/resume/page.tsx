import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerContainer } from "@/components/animations/stagger-container"
import { StaggerItem } from "@/components/animations/stagger-item"
import { PageTransition } from "@/components/page-transition"
import { ParallaxBackground } from "@/components/parallax-background"

export default function ResumePage() {
  return (
    <PageTransition>
      <ParallaxBackground />
      <div className="container py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
              <h1 className="text-4xl font-bold">Resume</h1>
              <Button asChild className="transition-transform hover:scale-105">
                <Link href="/resume.pdf" download>
                  <Download className="mr-2 h-4 w-4" /> Download PDF
                </Link>
              </Button>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="border rounded-lg p-8 space-y-8">
              {/* Header */}
              <div className="text-center border-b pb-6">
                <h2 className="text-3xl font-bold">Your Name</h2>
                <p className="text-xl text-muted-foreground mt-2">System & Network Engineer</p>
                <div className="flex flex-wrap justify-center gap-4 mt-4 text-sm">
                  <span className="flex items-center">
                    <span className="font-medium">Email:</span>
                    <Link href="mailto:your.email@example.com" className="ml-1 text-primary hover:underline">
                      your.email@example.com
                    </Link>
                  </span>
                  <span className="flex items-center">
                    <span className="font-medium">LinkedIn:</span>
                    <Link href="https://linkedin.com/in/yourprofile" className="ml-1 text-primary hover:underline">
                      linkedin.com/in/yourprofile
                    </Link>
                  </span>
                  <span className="flex items-center">
                    <span className="font-medium">GitHub:</span>
                    <Link href="https://github.com/yourusername" className="ml-1 text-primary hover:underline">
                      github.com/yourusername
                    </Link>
                  </span>
                </div>
              </div>

              {/* Summary */}
              <FadeIn delay={0.2}>
                <section>
                  <h3 className="text-xl font-bold mb-3">Professional Summary</h3>
                  <p className="text-muted-foreground">
                    Dedicated System and Network Engineering student with hands-on experience in Linux administration,
                    network security, and infrastructure design. Passionate about building robust, secure, and scalable
                    systems. Strong problem-solving abilities and excellent communication skills.
                  </p>
                </section>
              </FadeIn>

              {/* Education */}
              <section>
                <FadeIn delay={0.3}>
                  <h3 className="text-xl font-bold mb-3">Education</h3>
                </FadeIn>
                <StaggerContainer className="space-y-4">
                  <StaggerItem>
                    <div className="transition-all duration-300 hover:translate-x-1">
                      <div className="flex justify-between">
                        <h4 className="font-bold">Bachelor of Science in System and Network Engineering</h4>
                        <span className="text-muted-foreground">2021 - Present</span>
                      </div>
                      <p>University Name, City, Country</p>
                      <p className="text-muted-foreground mt-1">
                        Relevant coursework: Network Infrastructure, System Administration, Cybersecurity, Cloud
                        Computing, IT Project Management
                      </p>
                    </div>
                  </StaggerItem>
                  <StaggerItem>
                    <div className="transition-all duration-300 hover:translate-x-1">
                      <div className="flex justify-between">
                        <h4 className="font-bold">Associate Degree in Computer Science</h4>
                        <span className="text-muted-foreground">2019 - 2021</span>
                      </div>
                      <p>College Name, City, Country</p>
                      <p className="text-muted-foreground mt-1">
                        Foundational studies in programming, computer architecture, and information systems
                      </p>
                    </div>
                  </StaggerItem>
                </StaggerContainer>
              </section>

              {/* Technical Skills */}
              <section>
                <FadeIn delay={0.4}>
                  <h3 className="text-xl font-bold mb-3">Technical Skills</h3>
                </FadeIn>
                <StaggerContainer>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <StaggerItem>
                      <div className="transition-all duration-300 hover:translate-x-1">
                        <h4 className="font-bold">Operating Systems</h4>
                        <p className="text-muted-foreground">Linux (Fedora, CentOS, Ubuntu), Windows Server, macOS</p>
                      </div>
                    </StaggerItem>
                    <StaggerItem>
                      <div className="transition-all duration-300 hover:translate-x-1">
                        <h4 className="font-bold">Networking</h4>
                        <p className="text-muted-foreground">TCP/IP, DNS, DHCP, VLANs, Firewalls, VPN, Routing</p>
                      </div>
                    </StaggerItem>
                    <StaggerItem>
                      <div className="transition-all duration-300 hover:translate-x-1">
                        <h4 className="font-bold">Security</h4>
                        <p className="text-muted-foreground">pfSense, iptables, Suricata IDS, Network Segmentation</p>
                      </div>
                    </StaggerItem>
                    <StaggerItem>
                      <div className="transition-all duration-300 hover:translate-x-1">
                        <h4 className="font-bold">Virtualization</h4>
                        <p className="text-muted-foreground">Proxmox VE, VMware ESXi, KVM, LXC Containers</p>
                      </div>
                    </StaggerItem>
                    <StaggerItem>
                      <div className="transition-all duration-300 hover:translate-x-1">
                        <h4 className="font-bold">Scripting & Automation</h4>
                        <p className="text-muted-foreground">Bash, PowerShell, Python, Git</p>
                      </div>
                    </StaggerItem>
                    <StaggerItem>
                      <div className="transition-all duration-300 hover:translate-x-1">
                        <h4 className="font-bold">Cloud Technologies</h4>
                        <p className="text-muted-foreground">AWS, Azure (Fundamentals)</p>
                      </div>
                    </StaggerItem>
                  </div>
                </StaggerContainer>
              </section>

              {/* Projects */}
              <section>
                <FadeIn delay={0.5}>
                  <h3 className="text-xl font-bold mb-3">Projects</h3>
                </FadeIn>
                <StaggerContainer className="space-y-4">
                  <StaggerItem>
                    <div className="transition-all duration-300 hover:translate-x-1">
                      <div className="flex justify-between">
                        <h4 className="font-bold">Network Security Lab</h4>
                        <span className="text-muted-foreground">2023</span>
                      </div>
                      <ul className="list-disc list-inside text-muted-foreground mt-1">
                        <li>Designed and implemented a secure network with VLANs and proper segmentation</li>
                        <li>Configured pfSense firewall with rule sets based on least privilege principle</li>
                        <li>Implemented and tuned Suricata IDS for network monitoring</li>
                        <li>Created detailed documentation of the security architecture</li>
                      </ul>
                      <div className="mt-1">
                        <span className="text-sm font-medium">Technologies:</span>
                        <span className="text-sm text-muted-foreground ml-1">pfSense, Wireshark, Suricata, VLANs</span>
                      </div>
                    </div>
                  </StaggerItem>
                  <StaggerItem>
                    <div className="transition-all duration-300 hover:translate-x-1">
                      <div className="flex justify-between">
                        <h4 className="font-bold">Linux Server Automation</h4>
                        <span className="text-muted-foreground">2022</span>
                      </div>
                      <ul className="list-disc list-inside text-muted-foreground mt-1">
                        <li>Developed Bash scripts for automating routine server administration tasks</li>
                        <li>Created system monitoring and alerting solutions</li>
                        <li>Implemented log rotation and analysis scripts</li>
                        <li>Designed backup and recovery procedures</li>
                      </ul>
                      <div className="mt-1">
                        <span className="text-sm font-medium">Technologies:</span>
                        <span className="text-sm text-muted-foreground ml-1">Bash, CentOS, Cron, Shell Scripting</span>
                      </div>
                    </div>
                  </StaggerItem>
                </StaggerContainer>
              </section>

              {/* Certifications */}
              <section>
                <FadeIn delay={0.6}>
                  <h3 className="text-xl font-bold mb-3">Certifications</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between transition-all duration-300 hover:translate-x-1">
                      <h4 className="font-bold">CompTIA Network+</h4>
                      <span className="text-muted-foreground">2023</span>
                    </div>
                    <div className="flex justify-between transition-all duration-300 hover:translate-x-1">
                      <h4 className="font-bold">Linux Professional Institute LPIC-1</h4>
                      <span className="text-muted-foreground">2022</span>
                    </div>
                  </div>
                </FadeIn>
              </section>

              {/* Languages */}
              <section>
                <FadeIn delay={0.7}>
                  <h3 className="text-xl font-bold mb-3">Languages</h3>
                </FadeIn>
                <StaggerContainer>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <StaggerItem>
                      <div className="transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                        <h4 className="font-bold">English</h4>
                        <p className="text-muted-foreground">Fluent</p>
                      </div>
                    </StaggerItem>
                    <StaggerItem>
                      <div className="transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                        <h4 className="font-bold">Dutch</h4>
                        <p className="text-muted-foreground">Native</p>
                      </div>
                    </StaggerItem>
                    <StaggerItem>
                      <div className="transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                        <h4 className="font-bold">French</h4>
                        <p className="text-muted-foreground">Intermediate</p>
                      </div>
                    </StaggerItem>
                    <StaggerItem>
                      <div className="transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                        <h4 className="font-bold">Romanian</h4>
                        <p className="text-muted-foreground">Basic</p>
                      </div>
                    </StaggerItem>
                  </div>
                </StaggerContainer>
              </section>
            </div>
          </FadeIn>
        </div>
      </div>
    </PageTransition>
  )
}
