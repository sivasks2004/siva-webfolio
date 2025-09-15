import { useScrollAnimation } from "@/hooks/use-scroll-animation";

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
          {/* Left: Bio Text */}
          <div
            ref={leftRef}
            className={`slide-in-left space-y-8 ${leftVisible ? "visible" : ""}`}
          >
            {/* Who I Am */}
            <div className="space-y-3 max-w-3xl">
              <div className="flex items-center space-x-3 mb-4">
                <span className="text-4xl md:text-6xl font-black text-border">
                  01.
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-primary">
                  Who I Am
                </h3>
              </div>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed text-justify">
                Curiosity about what data can achieve continues to fuel my
                journey of exploration and growth. I am Siva, a passionate data
                enthusiast with a strong interest in transforming complex
                information into meaningful insights that support strategic
                decision-making. My focus lies in solving real-world challenges,
                designing impactful dashboards, and aligning analytics with
                business objectives to drive measurable outcomes.
              </p>
            </div>

            {/* My Work */}
            <div className="space-y-3 max-w-3xl">
              <div className="flex items-center space-x-3 mb-4">
                <span className="text-4xl md:text-6xl font-black text-border">
                  02.
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-primary">
                  My Work
                </h3>
              </div>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed text-justify">
                I am currently pursuing my Master of Computer Applications at
                Kongu Engineering College, where I have gained valuable
                experience through hands-on projects that integrate both
                technical expertise and business relevance. These include
                developing a Smart City Waste Management System, creating an
                IoT-enabled Smart Irrigation and Automatic Water Sprinkler,
                building a Student Event Management Platform, designing a
                Festive Crackers Booking System, and conducting a research study
                on the impact of 5G electromagnetic radiation on animal behavior
                and health.
              </p>
            </div>

            {/* My Vision */}
            <div className="space-y-3 max-w-3xl">
              <div className="flex items-center space-x-3 mb-4">
                <span className="text-4xl md:text-6xl font-black text-border">
                  03.
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-primary">
                  My Vision
                </h3>
              </div>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed text-justify">
                I bring a strategic mindset and a collaborative spirit to every
                project. My goal is to keep learning, innovating, and creating
                solutions that make a meaningful difference in data and
                technology. I’m excited to connect and grow with like-minded
                people.
              </p>
            </div>
          </div>

          {/* Right: GIF + Academic Progress */}
          <div
            ref={rightRef}
            className={`slide-in-right space-y-12 ${
              rightVisible ? "visible" : ""
            }`}
          >
            {/* GIF */}
            <div className="flex justify-center">
              <img
                src="attached_assets/Data_Analyst_GIF.gif"
                alt="Coding animation"
                className="rounded-lg shadow-lg w-full max-w-sm md:max-w-lg object-cover"
                data-testid="about-image-gif"
              />
            </div>

            {/* Academic Progress Timeline */}
            <section id="education" className="py-6">
              <div className="relative border-l border-primary/40 pl-6">
                {/* MCA */}
                <div className="mb-8 relative">
                  <div className="absolute w-3 h-3 bg-primary rounded-full -left-[22px] top-1"></div>
                  <h3 className="text-lg md:text-xl font-semibold text-white">
                    MCA – Kongu Engineering College
                  </h3>
                  <span className="block text-xs md:text-sm text-accent font-medium mb-1">
                    2024 - Present
                  </span>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    Currently pursuing a Master’s in building intelligent apps
                    with seamless UI/UX
                  </p>
                </div>

                {/* BCA */}
                <div className="mb-8 relative">
                  <div className="absolute w-3 h-3 bg-primary rounded-full -left-[22px] top-1"></div>
                  <h3 className="text-lg md:text-xl font-semibold text-white">
                    B.Sc – Kongu Engineering College
                  </h3>
                  <span className="block text-xs md:text-sm text-accent font-medium mb-1">
                    2021 - 2024
                  </span>
                  <p className="text-xs md:text-sm text-muted-foreground">
                   Competent in the design and computer systems streams
                  </p>
                </div>

                {/* HSC */}
                <div className="mb-8 relative">
                  <div className="absolute w-3 h-3 bg-primary rounded-full -left-[22px] top-1"></div>
                  <h3 className="text-lg md:text-xl font-semibold text-white">
                    HSC – Kongu vellalar Matric Hr. Sec. School
                  </h3>
                  <span className="block text-xs md:text-sm text-accent font-medium mb-1">
                    2019 - 2021
                  </span>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    Earned 81.56% in Computer Science & Mathematics stream
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
