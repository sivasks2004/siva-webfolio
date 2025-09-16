import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  codeUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Festive Crackers Booking",
    description: `Festive Crackers Booking (FBS) is a full-stack e-commerce web application built using React JS and Firebase.
It provides a smooth and user-friendly platform for customers to browse, select, and purchase festive crackers online.
The system is modular, responsive, and ensures secure data handling with Firebase Authentication and Firestore Database.`,
    image: "attached_assets/FCB_Logo.png",
    technologies: ["React", "Node.js", "Firebase"],
    codeUrl: "https://github.com/sivasks2004/Festive_Crackers_Booking"
  },
  {
    id: 2,
    title: "E-Commerce Sales Dashboard",
    description:
      "An interactive and visually rich dashboard designed in Power BI to analyze sales performance, profit trends, and customer behavior in the e-commerce domain.",
    image: "attached_assets/BI_image.png",
    technologies: ["Power BI"],
    codeUrl: "https://github.com/sivasks2004/E-Commerce-Sales-Dashboard/blob/main/README.md"
  },
  {
    id: 3,
    title: "Student Event Management System",
    description:
      "The Student Event Management System is designed to streamline event management within an educational institution. This platform is used by both students and teachers, ensuring an efficient and engaging event experience.",
    image: "attached_assets/KEC.jpg",
    technologies: ["Flutter", "NodeJS", "MongoDB"],
    codeUrl: "https://github.com/sivasks2004/Student_Event_Management_System_SEMS/blob/main/README.md"
  },
  {
    id: 4,
    title: "EcoTrack360 – Real-Time Smart Bin Monitoring System",
    description:
      "EcoTrack360 is an IoT-enabled smart waste management system that improves waste segregation, monitoring, and collection efficiency. It uses smart bins, sensors, AI-powered waste classification, and a mobile application to reduce environmental hazards, operational costs, and inefficiencies in traditional waste management.",
    image: "attached_assets/Eco_track 360 BW.png",
    technologies: ["C++", "Arduino UNO", "React Native", "IoT devices"],
    codeUrl: "https://github.com/sivasks2004/EcoTrack_360/blob/main/README.md"
  },
  {
    id: 5,
    title: "Automatic Water Sprinkling Machine using Smart Irrigation System",
    description:
      "Maintaining a healthy garden, backyard, or agricultural field requires consistent and efficient watering. Traditional manual watering can be time-consuming, labour-intensive, and inefficient. This project introduces a Smart Irrigation System that automates watering using real-time soil conditions, ensuring optimal water usage and enhanced plant health.",
    image: "attached_assets/Farmer.jpg",
    technologies: ["Arduino UNO", "C++", "IoT devices"],
    codeUrl: "https://github.com/sivasks2004/Automatic_Water_Sprinkler_Machine_Using_Smart_Irrigation_System/blob/main/README.md"
  }
];

export default function ProjectsSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();

  const handleViewCode = (project: Project) => {
    if (project.codeUrl) {
      window.open(project.codeUrl, "_blank"); // 👈 Opens GitHub repo in new tab
    } else {
      console.log(`No source code available for ${project.title}`);
    }
  };

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div
          ref={titleRef}
          className={`fade-in mb-16 ${titleVisible ? "visible" : ""}`}
        >
          <h2
            className="text-4xl md:text-5xl font-black text-center text-primary mb-4"
            data-testid="projects-title"
          >
            My Projects
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
          <p
            className="text-center text-muted-foreground mt-6 max-w-2xl mx-auto"
            data-testid="projects-description"
          >
            Highlights from my journey of exploring new technologies, solving
            real-world challenges, and turning ideas into meaningful solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onViewCode={handleViewCode}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  onViewCode
}: {
  project: Project;
  onViewCode: (project: Project) => void;
}) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <Card
      ref={ref}
      className={`project-card bg-card border border-border rounded-lg overflow-hidden fade-in ${isVisible ? "visible" : ""
        }`}
      data-testid={`project-card-${project.id}`}
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-contain p-2"
        data-testid={`project-image-${project.id}`}
      />

      <CardContent className="p-6">
        <h3
          className="text-xl font-bold text-primary mb-2"
          data-testid={`project-title-${project.id}`}
        >
          {project.title}
        </h3>
        <p
          className="text-sm text-muted-foreground mb-4 leading-relaxed"
          data-testid={`project-description-${project.id}`}
        >
          {project.description}
        </p>
        <div className="flex gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded"
              data-testid={`project-tech-${project.id}-${index}`}
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          <Button
            variant="outline"
            onClick={() => onViewCode(project)}
            className="border border-primary text-primary px-4 py-2 rounded text-sm font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
            data-testid={`button-view-code-${project.id}`}
          >
            View Code
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
