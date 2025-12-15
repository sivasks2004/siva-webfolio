import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { motion } from "framer-motion";
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiTailwindcss,
  SiNodedotjs,
  SiPython,
  SiMongodb,
  SiFirebase,
  SiFlutter,
  SiFigma,
  SiMysql,
  SiPostgresql,
  SiGit,
  SiArduino,
  SiC,
  SiPowers,
  SiCss3,
  SiSqlite,
  SiAjv,

} from "react-icons/si";

interface Skill {
  name: string;
  icon: JSX.Element;
  category: string;
}

const skills: Skill[] = [
  // Frontend

  //{ name: "HTML", icon: <SiHtml5 />, category: "Frontend" },
  //{ name: "CSS", icon: <SiCss3/>, category: "Frontend" },
  // Backend
  { name: "SQL", icon: <SiSqlite />, category: "languages" },
  { name: "PowerBI", icon: <SiPowers />, category: "Tools" },
  {name: "Python", icon: <SiPython />, category: "languages" },
  {name: "java", icon: <SiAjv />, category: "languages" },
  { name: "MySQL", icon: <SiMysql />, category: "Database" },
  { name: "PostgreSQL", icon: <SiPostgresql />, category: "Backend" },
  { name: "Node.js", icon: <SiNodedotjs />, category: "Backend" },
  { name: "MongoDB", icon: <SiMongodb />, category: "Database" },
  { name: "Firebase", icon: <SiFirebase />, category: "Database" },
  // Tools
  { name: "Git", icon: <SiGit />, category: "Tools" },
  { name: "Arduino UNO", icon: <SiArduino />, category: "Tools" },
  
  
];
 
export default function SkillsSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="skills" className="py-20 bg-black text-white">
      <div className="container mx-auto px-6 text-center">
        <h2
          ref={ref}
          className={`text-4xl md:text-5xl font-black mb-4 fade-in ${
            isVisible ? "visible" : ""
          }`}
        >
          My Skills
        </h2>
        <div className="w-24 h-1 bg-white mx-auto"></div>
        <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
          Technologies and tools I’ve become familiarized with through practice.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10 mt-12">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col items-center justify-center space-y-3"
            >
              <div className="text-6xl transition-colors hover:text-gray-300">
                {skill.icon}
              </div>
              {/* remove this <p> if you want icons only */}
              <p className="text-sm font-medium">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
