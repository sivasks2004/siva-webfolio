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
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution built with React, Node.js, and MongoDB featuring payment integration and admin dashboard.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
    technologies: ["React", "Node.js", "MongoDB"]
  },
  {
    id: 2,
    title: "Analytics Dashboard",
    description: "Real-time analytics dashboard with interactive charts, data visualization, and performance metrics.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
    technologies: ["Vue.js", "D3.js", "Express"]
  },
  {
    id: 3,
    title: "Mobile App",
    description: "Cross-platform mobile application with offline capabilities, push notifications, and seamless user experience.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
    technologies: ["React Native", "Firebase", "Redux"]
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "Personal portfolio website with custom animations, responsive design, and optimized performance.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
    technologies: ["Next.js", "Tailwind", "Framer Motion"]
  },
  {
    id: 5,
    title: "Task Manager",
    description: "Collaborative task management application with real-time updates, team collaboration, and project tracking.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
    technologies: ["React", "Socket.io", "PostgreSQL"]
  },
  {
    id: 6,
    title: "RESTful API",
    description: "Scalable RESTful API service with authentication, rate limiting, and comprehensive documentation.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
    technologies: ["Node.js", "Express", "JWT"]
  }
];

export default function ProjectsSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();

  const handleViewLive = (project: Project) => {
    console.log(`Opening live demo for ${project.title}`);
  };

  const handleViewCode = (project: Project) => {
    console.log(`Opening source code for ${project.title}`);
  };

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div
          ref={titleRef}
          className={`fade-in mb-16 ${titleVisible ? 'visible' : ''}`}
        >
          <h2 className="text-4xl md:text-5xl font-black text-center text-primary mb-4" data-testid="projects-title">
            My Projects
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
          <p className="text-center text-muted-foreground mt-6 max-w-2xl mx-auto" data-testid="projects-description">
            Here are some of my recent projects that showcase my skills and experience in web development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onViewLive={handleViewLive}
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
  onViewLive, 
  onViewCode 
}: { 
  project: Project; 
  onViewLive: (project: Project) => void; 
  onViewCode: (project: Project) => void; 
}) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <Card
      ref={ref}
      className={`project-card bg-card border border-border rounded-lg overflow-hidden fade-in ${isVisible ? 'visible' : ''}`}
      data-testid={`project-card-${project.id}`}
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover"
        data-testid={`project-image-${project.id}`}
      />
      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-primary mb-2" data-testid={`project-title-${project.id}`}>
          {project.title}
        </h3>
        <p className="text-muted-foreground mb-4" data-testid={`project-description-${project.id}`}>
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
            onClick={() => onViewLive(project)}
            className="bg-primary text-primary-foreground px-4 py-2 rounded text-sm font-semibold hover:bg-accent transition-colors"
            data-testid={`button-view-live-${project.id}`}
          >
            View Live
          </Button>
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
