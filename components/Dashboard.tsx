import React from "react";
import {
  Github,
  Mail,
  Linkedin,
  Award,
  Book,
  Code,
  Terminal,
  Cpu,
  Server,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Portfolio = () => {
  const mainProjects = [
    {
      title: "TETARA – Layer 1 Blockchain",
      description: "Research and Development of Layer 1 Blockchain Network",
      tech: ["Blockchain", "Web3", "Solidity"],
      github: "https://bit.ly/3KWmTBp",
    },
    {
      title: "MERN – Persona",
      description: "Full-stack web application built with MERN stack",
      tech: ["MongoDB", "Express", "React", "Node.js"],
      github: "https://github.com/Qyuzet/mern-persona",
    },
    {
      title: "ENCRYPTO Software",
      description: ".docx cryptographer for secure document handling",
      tech: ["Java", "Encryption", "File Handling"],
      github: "https://bit.ly/3xu2Y9K",
    },
  ];

  const skills = {
    web: [
      "Next.js",
      "MERN Stack",
      "JavaScript (ES6+)",
      "Redux",
      "Tailwind CSS",
      "SASS",
    ],
    blockchain: ["Solidity", "EVM", "Smart Contracts", "dApps Development"],
    iot: ["IoT System Design", "Robotics", "Embedded Systems", "WebSockets"],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-black text-white">
      <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] opacity-10 bg-cover bg-center" />
      <div className="relative">
        {/* Header Section */}
        <header className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-4">Riki Awal Syahputra</h1>
            <p className="text-xl text-gray-300 mb-6">
              Software Engineer | Blockchain Enthusiast
            </p>
            <div className="flex justify-center gap-6">
              <a
                href="https://github.com/Qyuzet"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>

              <a
                href="mailto:riqyuzet@gmail.com"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </header>

        {/* About Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-md border-none text-white">
              <CardContent className="pt-6">
                <p className="leading-relaxed">
                  I am a dynamic Software Engineer with expertise in the MERN
                  stack, blockchain technology, and IoT innovation. I specialize
                  in crafting AI-integrated web apps, automating IoT systems,
                  and leading impactful projects that drive measurable results.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Expertise</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-white/10 backdrop-blur-md border-none text-white">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Code className="w-5 h-5" /> Web Development
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {skills.web.map((skill, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-md border-none text-white">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Terminal className="w-5 h-5" /> Blockchain
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {skills.blockchain.map((skill, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-md border-none text-white">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Cpu className="w-5 h-5" /> IoT & Electronics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {skills.iot.map((skill, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Featured Projects
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {mainProjects.map((project, index) => (
                <Card
                  key={index}
                  className="bg-white/10 backdrop-blur-md border-none text-white h-full"
                >
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription className="text-gray-300">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-white/20 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.github}
                      className="inline-flex items-center text-sm text-gray-300 hover:text-white"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View Project
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Achievements
            </h2>
            <Card className="bg-white/10 backdrop-blur-md border-none text-white">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Award className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                    <p>
                      1st Winner of Innovation Technology Competition TICA/AKTI
                      by Toyota (2020)
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Award className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                    <p>
                      3rd Winner National Scientific Writing and Research
                      (Maritime Problem Solving) (2020)
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Award className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                    <p>
                      6th best IoT Innovation Tech. West Java Province (2019)
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-4 text-center text-gray-400">
          <p>© 2025 Riki Awal Syahputra. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default Portfolio;
