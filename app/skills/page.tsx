import { CheckCircle2 } from "lucide-react"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerContainer } from "@/components/animations/stagger-container"
import { StaggerItem } from "@/components/animations/stagger-item"
import { SkillBar } from "@/components/skill-bar"

export default function SkillsPage() {
  return (
    <div className="container py-12 md:py-16">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <h1 className="text-4xl font-bold mb-4">Skills</h1>
          <p className="text-xl text-muted-foreground mb-12">
            My technical expertise and competencies in system and network engineering.
          </p>
        </FadeIn>

        <div className="space-y-12">
          {/* Technical Skills with Animated Bars */}
          <section>
            <FadeIn>
              <h2 className="text-2xl font-bold mb-6 pb-2 border-b">Technical Proficiency</h2>
            </FadeIn>
            <div className="space-y-6 mt-8">
              <SkillBar name="Linux System Administration" percentage={90} />
              <SkillBar name="Network Security" percentage={85} />
              <SkillBar name="Cloud Infrastructure" percentage={75} />
              <SkillBar name="Virtualization" percentage={88} />
              <SkillBar name="Scripting & Automation" percentage={80} />
              <SkillBar name="Windows Server" percentage={82} />
              <SkillBar name="Firewall Configuration" percentage={87} />
            </div>
          </section>

          {/* Operating Systems */}
          <section>
            <FadeIn>
              <h2 className="text-2xl font-bold mb-6 pb-2 border-b">Operating Systems</h2>
            </FadeIn>
            <StaggerContainer>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <StaggerItem>
                  <div className="border rounded-lg p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                    <h3 className="text-xl font-bold mb-4">Linux</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                        <span>Fedora, CentOS, Ubuntu, Debian</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                        <span>System administration and configuration</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                        <span>Service management with systemd</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                        <span>Package management</span>
                      </li>
                    </ul>
                  </div>
                </StaggerItem>
                <StaggerItem>
                  <div className="border rounded-lg p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                    <h3 className="text-xl font-bold mb-4">Windows</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                        <span>Windows Server 2016/2019/2022</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                        <span>Active Directory management</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                        <span>Group Policy configuration</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                        <span>PowerShell scripting</span>
                      </li>
                    </ul>
                  </div>
                </StaggerItem>
              </div>
            </StaggerContainer>
          </section>

          {/* Networking */}
          <section>
            <FadeIn>
              <h2 className="text-2xl font-bold mb-6 pb-2 border-b">Networking</h2>
            </FadeIn>
            <StaggerContainer>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <StaggerItem>
                  <div className="border rounded-lg p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                    <h3 className="text-xl font-bold mb-4">Network Protocols & Services</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                        <span>TCP/IP, DNS, DHCP, SSH</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                        <span>VPN configuration and management</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                        <span>Routing and switching fundamentals</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                        <span>Network troubleshooting</span>
                      </li>
                    </ul>
                  </div>
                </StaggerItem>
                <StaggerItem>
                  <div className="border rounded-lg p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                    <h3 className="text-xl font-bold mb-4">Network Security</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                        <span>Firewall configuration (iptables, firewalld)</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                        <span>pfSense implementation</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                        <span>VLAN segmentation</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                        <span>Intrusion detection systems</span>
                      </li>
                    </ul>
                  </div>
                </StaggerItem>
              </div>
            </StaggerContainer>
          </section>

          {/* Tools & Automation */}
          <section>
            <FadeIn>
              <h2 className="text-2xl font-bold mb-6 pb-2 border-b">Tools & Automation</h2>
            </FadeIn>
            <StaggerContainer>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <StaggerItem>
                  <div className="border rounded-lg p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                    <h3 className="text-xl font-bold mb-4">Scripting & Automation</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                        <span>Bash scripting</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                        <span>PowerShell</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                        <span>Python for automation</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                        <span>Cron job scheduling</span>
                      </li>
                    </ul>
                  </div>
                </StaggerItem>
                <StaggerItem>
                  <div className="border rounded-lg p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                    <h3 className="text-xl font-bold mb-4">System Tools</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                        <span>Git version control</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                        <span>Wireshark network analysis</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                        <span>System monitoring tools</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                        <span>Virtualization management</span>
                      </li>
                    </ul>
                  </div>
                </StaggerItem>
              </div>
            </StaggerContainer>
          </section>

          {/* Virtualization & Cloud */}
          <section>
            <FadeIn>
              <h2 className="text-2xl font-bold mb-6 pb-2 border-b">Virtualization & Cloud</h2>
            </FadeIn>
            <StaggerContainer>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <StaggerItem>
                  <div className="border rounded-lg p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                    <h3 className="text-xl font-bold mb-4">Virtualization</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                        <span>Proxmox VE</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                        <span>VMware ESXi</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                        <span>KVM/QEMU</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                        <span>LXC containers</span>
                      </li>
                    </ul>
                  </div>
                </StaggerItem>
                <StaggerItem>
                  <div className="border rounded-lg p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                    <h3 className="text-xl font-bold mb-4">Cloud Technologies</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                        <span>AWS fundamentals</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                        <span>Azure basics</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                        <span>Cloud networking concepts</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                        <span>IaaS, PaaS, SaaS models</span>
                      </li>
                    </ul>
                  </div>
                </StaggerItem>
              </div>
            </StaggerContainer>
          </section>

          {/* Soft Skills */}
          <section>
            <FadeIn>
              <h2 className="text-2xl font-bold mb-6 pb-2 border-b">Soft Skills</h2>
            </FadeIn>
            <StaggerContainer>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <StaggerItem>
                  <div className="border rounded-lg p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                    <h3 className="text-xl font-bold mb-4">Communication</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                        <span>Technical documentation</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                        <span>Knowledge sharing</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                        <span>Explaining technical concepts</span>
                      </li>
                    </ul>
                  </div>
                </StaggerItem>
                <StaggerItem>
                  <div className="border rounded-lg p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                    <h3 className="text-xl font-bold mb-4">Problem Solving</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                        <span>Analytical thinking</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                        <span>Troubleshooting methodology</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                        <span>Root cause analysis</span>
                      </li>
                    </ul>
                  </div>
                </StaggerItem>
                <StaggerItem>
                  <div className="border rounded-lg p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                    <h3 className="text-xl font-bold mb-4">Teamwork</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                        <span>Collaboration</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                        <span>Time management</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                        <span>Adaptability</span>
                      </li>
                    </ul>
                  </div>
                </StaggerItem>
              </div>
            </StaggerContainer>
          </section>
        </div>
      </div>
    </div>
  )
}
