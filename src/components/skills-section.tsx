import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useEffect, useState } from "react";

interface Skill {
  name: string;
  percentage: number;
  category: string;
}

interface SkillCategory {
  name: string;
  icon: string;
  skills: { name: string; percentage: number }[];
}

const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    icon: "💻",
    skills: [
      { name: "React", percentage: 95 },
      { name: "JavaScript", percentage: 90 },
      { name: "TypeScript", percentage: 85 },
      { name: "CSS/Tailwind", percentage: 92 }
    ]
  },
  {
    name: "Backend",
    icon: "⚙️",
    skills: [
      { name: "Node.js", percentage: 88 },
      { name: "Express", percentage: 85 },
      { name: "Python", percentage: 75 },
      { name: "PostgreSQL", percentage: 80 }
    ]
  },
  {
    name: "Tools",
    icon: "🛠️",
    skills: [
      { name: "Git", percentage: 90 },
      { name: "Docker", percentage: 75 },
      { name: "AWS", percentage: 70 },
      { name: "Webpack", percentage: 82 }
    ]
  },
  {
    name: "Design",
    icon: "🎨",
    skills: [
      { name: "Figma", percentage: 85 },
      { name: "UI/UX", percentage: 88 },
      { name: "Photoshop", percentage: 75 },
      { name: "Prototyping", percentage: 80 }
    ]
  }
];

const progressSkills: Skill[] = [
  { name: "React Development", percentage: 80, category: "frontend" },
  { name: "Backend APIs", percentage: 70, category: "backend" },
  { name: "UI/UX Design", percentage: 90, category: "design" },
  { name: "DevOps", percentage: 75, category: "tools" }
];

export default function SkillsSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: progressRef, isVisible: progressVisible } = useScrollAnimation();
  const [animateProgress, setAnimateProgress] = useState(false);

  useEffect(() => {
    if (progressVisible && !animateProgress) {
      setAnimateProgress(true);
    }
  }, [progressVisible, animateProgress]);

  return (
    <section id="skills" className="py-20 bg-muted">
      <div className="container mx-auto px-6">
        <div
          ref={titleRef}
          className={`fade-in mb-16 ${titleVisible ? 'visible' : ''}`}
        >
          <h2 className="text-4xl md:text-5xl font-black text-center text-primary mb-4" data-testid="skills-title">
            My Skills
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
          <p className="text-center text-muted-foreground mt-6 max-w-2xl mx-auto" data-testid="skills-description">
            Here are the technologies and tools I use to bring ideas to life.
          </p>
        </div>

        {/* Skills Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <SkillCategoryCard key={category.name} category={category} index={index} />
          ))}
        </div>

        {/* Progress Circles */}
        <div ref={progressRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {progressSkills.map((skill, index) => (
            <ProgressCircle
              key={skill.name}
              skill={skill}
              index={index}
              animate={animateProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillCategoryCard({ category, index }: { category: SkillCategory; index: number }) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`skill-category p-6 rounded-lg text-center fade-in ${isVisible ? 'visible' : ''}`}
      data-testid={`skill-category-${index}`}
    >
      <div className="text-4xl mb-4">
        <span>{category.icon}</span>
      </div>
      <h3 className="text-xl font-bold text-primary mb-4">{category.name}</h3>
      <div className="space-y-2 text-muted-foreground">
        {category.skills.map((skill, skillIndex) => (
          <div key={skill.name} className="flex justify-between" data-testid={`skill-item-${index}-${skillIndex}`}>
            <span>{skill.name}</span>
            <span>{skill.percentage}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProgressCircle({ skill, index, animate }: { skill: Skill; index: number; animate: boolean }) {
  const { ref, isVisible } = useScrollAnimation();
  const circumference = 2 * Math.PI * 50;
  const strokeDashoffset = animate ? circumference - (circumference * skill.percentage / 100) : circumference;

  return (
    <div
      ref={ref}
      className={`text-center fade-in ${isVisible ? 'visible' : ''}`}
      data-testid={`progress-circle-${index}`}
    >
      <div className="progress-circle mx-auto mb-4 relative">
        <svg width="120" height="120">
          <circle
            className="progress-ring"
            cx="60"
            cy="60"
            r="50"
          />
          <circle
            className="progress-bar"
            cx="60"
            cy="60"
            r="50"
            style={{
              strokeDashoffset: strokeDashoffset,
              transition: animate ? 'stroke-dashoffset 2s ease-in-out' : 'none'
            }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-bold text-primary" data-testid={`progress-percentage-${index}`}>
            {skill.percentage}%
          </span>
        </div>
      </div>
      <h4 className="font-semibold text-primary" data-testid={`progress-skill-name-${index}`}>
        {skill.name}
      </h4>
    </div>
  );
}
