import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerContainer } from "@/components/animations/stagger-container"
import { StaggerItem } from "@/components/animations/stagger-item"

export default function ProjectsPage() {
  return (
    <div className="container py-12 md:py-16">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <h1 className="text-4xl font-bold mb-4">Projects</h1>
          <p className="text-xl text-muted-foreground mb-12">
            A collection of my academic projects and personal work in system and network engineering.
          </p>
        </FadeIn>

        <StaggerContainer className="space-y-12">
          {/* Project 1 */}
          <StaggerItem>
            <div className="border rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              <div className="bg-muted h-64 flex items-center justify-center">
                <span className="text-muted-foreground">Project Screenshot</span>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-2xl font-bold">Network Security Lab</h2>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" asChild className="transition-transform hover:scale-110">
                      <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                        <Github className="h-5 w-5" />
                        <span className="sr-only">GitHub</span>
                      </Link>
                    </Button>
                    <Button variant="ghost" size="icon" asChild className="transition-transform hover:scale-110">
                      <Link href="#" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-5 w-5" />
                        <span className="sr-only">External Link</span>
                      </Link>
                    </Button>
                  </div>
                </div>
                <p className="text-muted-foreground mb-6">
                  Designed and implemented a comprehensive network security lab environment using pfSense, Wireshark,
                  and Suricata. The project focused on creating a secure network infrastructure with proper
                  segmentation, firewall rules, and intrusion detection capabilities.
                </p>
                <div className="mb-6">
                  <h3 className="font-bold mb-2">Key Features:</h3>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li className="transition-all duration-300 hover:translate-x-1">
                      VLAN segmentation for network isolation
                    </li>
                    <li className="transition-all duration-300 hover:translate-x-1">
                      Firewall rule configuration based on least privilege principle
                    </li>
                    <li className="transition-all duration-300 hover:translate-x-1">
                      Intrusion detection system implementation and tuning
                    </li>
                    <li className="transition-all duration-300 hover:translate-x-1">
                      Network traffic analysis and security monitoring
                    </li>
                    <li className="transition-all duration-300 hover:translate-x-1">
                      Detailed documentation of security architecture
                    </li>
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-muted text-muted-foreground px-2 py-1 rounded text-xs">pfSense</span>
                  <span className="bg-muted text-muted-foreground px-2 py-1 rounded text-xs">Wireshark</span>
                  <span className="bg-muted text-muted-foreground px-2 py-1 rounded text-xs">Suricata</span>
                  <span className="bg-muted text-muted-foreground px-2 py-1 rounded text-xs">VLANs</span>
                  <span className="bg-muted text-muted-foreground px-2 py-1 rounded text-xs">Security</span>
                </div>
              </div>
            </div>
          </StaggerItem>

          {/* Project 2 */}
          <StaggerItem>
            <div className="border rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              <div className="bg-muted h-64 flex items-center justify-center">
                <span className="text-muted-foreground">Project Screenshot</span>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-2xl font-bold">Linux Server Automation</h2>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" asChild className="transition-transform hover:scale-110">
                      <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                        <Github className="h-5 w-5" />
                        <span className="sr-only">GitHub</span>
                      </Link>
                    </Button>
                  </div>
                </div>
                <p className="text-muted-foreground mb-6">
                  Developed a suite of Bash scripts to automate common server administration tasks on CentOS Linux. The
                  project aimed to streamline routine maintenance, improve system monitoring, and reduce manual
                  intervention for system administrators.
                </p>
                <div className="mb-6">
                  <h3 className="font-bold mb-2">Key Features:</h3>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li className="transition-all duration-300 hover:translate-x-1">
                      Automated system updates and security patches
                    </li>
                    <li className="transition-all duration-300 hover:translate-x-1">
                      Log rotation and analysis scripts
                    </li>
                    <li className="transition-all duration-300 hover:translate-x-1">
                      System resource monitoring and alerting
                    </li>
                    <li className="transition-all duration-300 hover:translate-x-1">
                      User account management automation
                    </li>
                    <li className="transition-all duration-300 hover:translate-x-1">Backup and recovery procedures</li>
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-muted text-muted-foreground px-2 py-1 rounded text-xs">Bash</span>
                  <span className="bg-muted text-muted-foreground px-2 py-1 rounded text-xs">CentOS</span>
                  <span className="bg-muted text-muted-foreground px-2 py-1 rounded text-xs">Cron</span>
                  <span className="bg-muted text-muted-foreground px-2 py-1 rounded text-xs">Shell Scripting</span>
                  <span className="bg-muted text-muted-foreground px-2 py-1 rounded text-xs">Automation</span>
                </div>
              </div>
            </div>
          </StaggerItem>

          {/* Project 3 */}
          <StaggerItem>
            <div className="border rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              <div className="bg-muted h-64 flex items-center justify-center">
                <span className="text-muted-foreground">Project Screenshot</span>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-2xl font-bold">Virtualization Infrastructure</h2>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" asChild className="transition-transform hover:scale-110">
                      <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                        <Github className="h-5 w-5" />
                        <span className="sr-only">GitHub</span>
                      </Link>
                    </Button>
                    <Button variant="ghost" size="icon" asChild className="transition-transform hover:scale-110">
                      <Link href="#" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-5 w-5" />
                        <span className="sr-only">External Link</span>
                      </Link>
                    </Button>
                  </div>
                </div>
                <p className="text-muted-foreground mb-6">
                  Designed and implemented a virtualization infrastructure using Proxmox VE. The project focused on
                  creating an efficient, scalable environment for hosting multiple virtual machines and containers with
                  proper resource allocation and management.
                </p>
                <div className="mb-6">
                  <h3 className="font-bold mb-2">Key Features:</h3>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li className="transition-all duration-300 hover:translate-x-1">
                      Proxmox VE cluster configuration
                    </li>
                    <li className="transition-all duration-300 hover:translate-x-1">
                      Resource allocation and optimization
                    </li>
                    <li className="transition-all duration-300 hover:translate-x-1">
                      VM templates and container management
                    </li>
                    <li className="transition-all duration-300 hover:translate-x-1">Storage configuration with ZFS</li>
                    <li className="transition-all duration-300 hover:translate-x-1">
                      High availability setup and testing
                    </li>
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-muted text-muted-foreground px-2 py-1 rounded text-xs">Proxmox</span>
                  <span className="bg-muted text-muted-foreground px-2 py-1 rounded text-xs">KVM</span>
                  <span className="bg-muted text-muted-foreground px-2 py-1 rounded text-xs">LXC</span>
                  <span className="bg-muted text-muted-foreground px-2 py-1 rounded text-xs">ZFS</span>
                  <span className="bg-muted text-muted-foreground px-2 py-1 rounded text-xs">Virtualization</span>
                </div>
              </div>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </div>
  )
}
