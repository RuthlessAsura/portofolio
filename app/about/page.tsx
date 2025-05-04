import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerContainer } from "@/components/animations/stagger-container"
import { StaggerItem } from "@/components/animations/stagger-item"
import { ProfilePhoto } from "@/components/profile-photo"

export default function AboutPage() {
  return (
    <div className="container py-12 md:py-16">
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col items-center mb-12">
          <ProfilePhoto src="/placeholder.svg?height=300&width=300" alt="Nicolas Varga" className="w-48 h-48 mb-8" />
          <FadeIn>
            <h1 className="text-4xl font-bold mb-4 text-center">About Me</h1>
            <p className="text-xl text-muted-foreground text-center max-w-2xl">
              System and Network Engineering student with a passion for building secure and efficient infrastructure
            </p>
          </FadeIn>
        </div>

        <div className="space-y-8">
          <FadeIn>
            <section>
              <h2 className="text-2xl font-bold mb-4">Background</h2>
              <p className="text-muted-foreground mb-4">
                I'm a dedicated student pursuing a degree in System and Network Engineering at Howest. My journey in
                technology began with a fascination for how complex systems work together to create the digital
                infrastructure we rely on daily.
              </p>
              <p className="text-muted-foreground">
                With a strong foundation in both theoretical concepts and practical applications, I'm constantly
                expanding my knowledge and skills in this rapidly evolving field.
              </p>
            </section>
          </FadeIn>

          <FadeIn delay={0.1}>
            <section>
              <h2 className="text-2xl font-bold mb-4">Personal Interests</h2>
              <p className="text-muted-foreground mb-4">
                Beyond my professional pursuits, I enjoy hiking in nature and exploring new trails. I'm also an avid
                reader of science fiction and technical literature. On weekends, you might find me tinkering with my
                home lab setup, experimenting with new technologies, or contributing to open-source projects.
              </p>
              <p className="text-muted-foreground">
                I believe in continuous learning and regularly participate in online courses, workshops, and tech
                meetups to stay current with industry trends and best practices.
              </p>
            </section>
          </FadeIn>

          <FadeIn delay={0.2}>
            <section>
              <h2 className="text-2xl font-bold mb-4">Education</h2>
              <div className="border-l-2 pl-4 space-y-4">
                <div className="transition-all duration-300 hover:pl-2">
                  <h3 className="font-bold">Bachelor of Science in System and Network Engineering</h3>
                  <p className="text-muted-foreground">Howest • 2021 - Present</p>
                  <p className="mt-2">
                    Coursework includes: Network Infrastructure, System Administration, Cybersecurity, Cloud Computing,
                    and IT Project Management.
                  </p>
                </div>
                <div className="transition-all duration-300 hover:pl-2">
                  <h3 className="font-bold">Associate Degree in Computer Science</h3>
                  <p className="text-muted-foreground">College Name • 2019 - 2021</p>
                  <p className="mt-2">
                    Foundational studies in programming, computer architecture, and information systems.
                  </p>
                </div>
              </div>
            </section>
          </FadeIn>

          <FadeIn delay={0.3}>
            <section>
              <h2 className="text-2xl font-bold mb-4">Technical Interests</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li className="transition-all duration-300 hover:translate-x-1">
                  Linux system administration and server management
                </li>
                <li className="transition-all duration-300 hover:translate-x-1">
                  Network security and infrastructure design
                </li>
                <li className="transition-all duration-300 hover:translate-x-1">
                  Automation and scripting for IT operations
                </li>
                <li className="transition-all duration-300 hover:translate-x-1">
                  Virtualization and containerization technologies
                </li>
                <li className="transition-all duration-300 hover:translate-x-1">
                  Cloud infrastructure (AWS, Azure, GCP)
                </li>
              </ul>
            </section>
          </FadeIn>

          <section>
            <FadeIn delay={0.3}>
              <h2 className="text-2xl font-bold mb-4">Soft Skills</h2>
            </FadeIn>
            <StaggerContainer>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <StaggerItem>
                  <div className="border rounded-lg p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                    <h3 className="font-bold mb-2">Problem Solving</h3>
                    <p className="text-muted-foreground">
                      Analytical approach to troubleshooting complex system and network issues.
                    </p>
                  </div>
                </StaggerItem>
                <StaggerItem>
                  <div className="border rounded-lg p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                    <h3 className="font-bold mb-2">Communication</h3>
                    <p className="text-muted-foreground">
                      Clear documentation and explanation of technical concepts to non-technical stakeholders.
                    </p>
                  </div>
                </StaggerItem>
                <StaggerItem>
                  <div className="border rounded-lg p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                    <h3 className="font-bold mb-2">Teamwork</h3>
                    <p className="text-muted-foreground">
                      Collaborative approach to projects with effective coordination in group settings.
                    </p>
                  </div>
                </StaggerItem>
                <StaggerItem>
                  <div className="border rounded-lg p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                    <h3 className="font-bold mb-2">Adaptability</h3>
                    <p className="text-muted-foreground">
                      Quick to learn new technologies and adjust to changing requirements.
                    </p>
                  </div>
                </StaggerItem>
              </div>
            </StaggerContainer>
          </section>

          <section>
            <FadeIn delay={0.4}>
              <h2 className="text-2xl font-bold mb-4">Languages</h2>
            </FadeIn>
            <StaggerContainer>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                <StaggerItem>
                  <div className="border rounded-lg p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                    <h3 className="font-bold">English</h3>
                    <p className="text-muted-foreground">Fluent</p>
                  </div>
                </StaggerItem>
                <StaggerItem>
                  <div className="border rounded-lg p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                    <h3 className="font-bold">Dutch</h3>
                    <p className="text-muted-foreground">Native</p>
                  </div>
                </StaggerItem>
                <StaggerItem>
                  <div className="border rounded-lg p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                    <h3 className="font-bold">French</h3>
                    <p className="text-muted-foreground">Intermediate</p>
                  </div>
                </StaggerItem>
                <StaggerItem>
                  <div className="border rounded-lg p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                    <h3 className="font-bold">Romanian</h3>
                    <p className="text-muted-foreground">Basic</p>
                  </div>
                </StaggerItem>
              </div>
            </StaggerContainer>
          </section>

          <FadeIn delay={0.5}>
            <div className="flex justify-center pt-6">
              <Button asChild className="transition-transform hover:scale-105">
                <Link href="/contact">
                  Get in Touch <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  )
}
