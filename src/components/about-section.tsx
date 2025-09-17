import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { motion } from "framer-motion";
import { Button } from "react-day-picker";
import Tilt from "react-parallax-tilt";

export default function AboutSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: leftRef, isVisible: leftVisible } = useScrollAnimation();
  const { ref: rightRef, isVisible: rightVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-20 bg-muted">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div
          ref={titleRef}
          className={`fade-in mb-16 ${titleVisible ? "visible" : ""}`}
        >
          <h2
            className="text-3xl md:text-5xl font-black text-center text-primary mb-4"
            data-testid="about-title"
          >
            About Me
          </h2>
          <div className="w-20 md:w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left: Bio Text in Card */}
          <motion.div
            ref={leftRef}
            initial={{ opacity: 0, x: -80 }}
            animate={leftVisible ? { opacity: 1, x: 0 } : {}}
            whileHover={{
              scale: 1.02, // Slight zoom
              boxShadow: "0 0 20px rgba(132, 173, 173, 0.5)" // Glow effect
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-background p-8 rounded-2xl shadow-lg space-y-6 cursor-pointer"
          >
            <h3 className="text-xl md:text-2xl font-bold text-primary mb-4">
              My Journey
            </h3>
            <p className="text-xs md:text-sm text-primary">
              Curiosity about the power of data has always driven my journey of exploration and growth.
            </p>
            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed text-left">
              I am{" "}
              <span className="font text-primary">Siva</span>, a
              passionate learner who believes in the power of data and
              technology to solve real-world problems. Currently pursuing my{" "}
              <span className="font-medium">
                Master of Computer Applications
              </span>{" "}
              at Kongu Engineering College, I’ve brought my ideas to life through projects that combine innovation with impact.
            </p>
            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed text-left">
              From designing a Smart City Waste Management System and
              an IoT-enabled Smart Irrigation & Automatic Water Sprinkler to developing a
              Student Event Management Platform and a Festive Crackers Booking System,
              I’ve explored how technology can address real challenges.
              I’ve also conducted research on the impact of 5G electromagnetic radiation on animal behavior and health.

            </p>
            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed text-left">
              Each opportunity evolved me into an architect and a visionary
              who combines technical abilities with significant solutions.
              I'm constantly authored my tale, but each stage represents the passion
              for turning insight into thoughts and concepts into actions.
            </p>
            <div className="flex justify-end mt-6">
              <div className="relative group">
                <a
                  href="https://drive.google.com/file/d/1wQn7r2yQwKJv8vQn9vQn9vQn9vQn9vQn/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary bg-primary text-primary-foreground px-4 py-2 rounded-md font-semibold transition-all text-sm shadow-lg z-10 relative overflow-hidden group-hover:scale-105 group-active:scale-95 duration-300"
                  data-testid="button-explore-projects"
                >
                 Resume » 
                </a>
                {/* Glowing effect */}
                <span className="absolute inset-0 rounded-md pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0 animate-pulse"
                  style={{
                    boxShadow: '0 0 32px 16px rgba(59,130,246,0.4), 0 0 64px 32px rgba(59,130,246,0.2)'
                  }}
                />
              </div>
            </div>
          </motion.div>


          {/* Right: GIF + Academic Progress */}
          <motion.div
            ref={rightRef}
            initial={{ opacity: 0, x: 80 }}
            animate={rightVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-10"
          >
            {/* GIF with 3D Tilt */}
            {/* GIF with 3D Tilt */}
            <Tilt glareEnable={true} glareMaxOpacity={0.2} scale={1.05}>
              <div className="flex justify-center">
                <img
                  src="public/Data_Analyst_GIF.gif"
                  alt="Coding animation"
                  className="rounded-xl shadow-lg w-full max-w-[220px] md:max-w-[280px] h-auto object-cover"
                  data-testid="about-image-gif"
                />
              </div>
            </Tilt>



            {/* Academic Progress Timeline */}
            <section id="education" className="py-4">
              <div className="relative border-l border-primary/40 pl-6">
                {/* MCA */}
                <div className="mb-6 relative">
                  <div className="absolute w-2.5 h-2.5 bg-primary rounded-full -left-[28px] top-1"></div>
                  <h3 className="text-sm md:text-base font-semibold text-white">
                    MCA – Kongu Engineering College
                  </h3>
                  <span className="block text-[10px] md:text-xs text-accent font-medium mb-1">
                    2024 - Present
                  </span>
                  <p className="text-[10px] md:text-xs text-muted-foreground">
                    Currently pursuing a Master’s in building intelligent apps
                    with seamless UI/UX
                  </p>
                </div>

                {/* BCA */}
                <div className="mb-6 relative">
                  <div className="absolute w-2.5 h-2.5 bg-primary rounded-full -left-[28px] top-1"></div>
                  <h3 className="text-sm md:text-base font-semibold text-white">
                    B.Sc – Kongu Engineering College
                  </h3>
                  <span className="block text-[10px] md:text-xs text-accent font-medium mb-1">
                    2021 - 2024
                  </span>
                  <p className="text-[10px] md:text-xs text-muted-foreground">
                    Competent in the design and computer systems streams
                  </p>
                </div>

                {/* HSC */}
                <div className="mb-6 relative">
                  <div className="absolute w-2.5 h-2.5 bg-primary rounded-full -left-[28px] top-1"></div>
                  <h3 className="text-sm md:text-base font-semibold text-white">
                    HSC – Kongu Vellalar Matric Hr. Sec. School
                  </h3>
                  <span className="block text-[10px] md:text-xs text-accent font-medium mb-1">
                    2019 - 2021
                  </span>
                  <p className="text-[10px] md:text-xs text-muted-foreground">
                    Earned 81.56% in Computer Science & Mathematics stream
                  </p>
                </div>
              </div>
            </section>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
