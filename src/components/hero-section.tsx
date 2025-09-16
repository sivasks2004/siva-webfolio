import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";


export default function HeroSection() {
  const { ref: leftRef, isVisible: leftVisible } = useScrollAnimation({
    triggerOnMount: true,
    delayMs: 0,
  });
  const { ref: rightRef, isVisible: rightVisible } = useScrollAnimation({
    triggerOnMount: true,
    delayMs: 150,
  });

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Auto-scroll to top on page load
  useEffect(() => {
    const heroSection = document.getElementById("home");
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: "auto" });
    }
  }, []);

  // Words for typing effect
  const words = ["Data Analyst", "Business Analyst", "Power BI Developer", "Tech Enthusiast"];
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [forward, setForward] = useState(true);
  const [blink, setBlink] = useState(true);

  // Typing effect
  useEffect(() => {
    if (index >= words.length) {
      setIndex(0);
      return;
    }

    if (subIndex === words[index].length + 1 && forward) {
      setTimeout(() => setForward(false), 3000);
      return;
    }

    if (subIndex === 0 && !forward) {
      setForward(true);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (forward ? 1 : -1));
    }, forward ? 120 : 60);

    return () => clearTimeout(timeout);
  }, [subIndex, forward, index]);

  // Cursor blinking
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Professional Photo */}
          <div
            ref={leftRef}
            className={`slide-in-left ${leftVisible ? "visible" : ""}`}
          >
            <img
              src="attached_assets\Professional_photo_3.jpeg"
              alt="Siva Kulanthaisamy professional Portrait"
              className="rounded-lg shadow-2xl w-full h-auto object-cover"
              data-testid="hero-portrait"
            />
          </div>

          {/* Right: Introduction */}
          <div
            ref={rightRef}
            className={`slide-in-right space-y-8 ${rightVisible ? "visible" : ""}`}
          >
            <div>
              <h1
                className="text-5xl md:text-7xl font-black text-primary mb-4"
                data-testid="hero-title"
              >
                Hi, I'm <span className="text-accent">Siva</span>
              </h1>

              {/* Typing animation */}
              <h2
                className="text-2xl md:text-3xl font-light text-muted-foreground mb-6"
                data-testid="hero-subtitle"
              >
                A Passionate{" "}
                <span className="text-primary font-semibold">
                  {words[index].substring(0, subIndex)}
                </span>
                <span className="ml-1">{blink ? "|" : " "}</span>
              </h2>

              <p
                className="text-xs md:text-sm text-muted-foreground leading-relaxed max-w-lg"
                data-testid="hero-description"
              >
                I bring a strategic mindset, attention to detail, and a
                collaborative spirit to everything I do. Whether it’s designing
                scalable solutions or contributing to data-backed strategies, I
                aim to deliver meaningful value through both analysis and
                action.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => scrollToSection("projects")}
                className="btn-primary bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-accent transition-all"
                data-testid="button-explore-projects"
              >
                Explore Projects
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="border border-primary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all"
                data-testid="button-contact-me"
              >
                Contact Me
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Background Animation Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 border border-border/20 rounded-full"></div>
        <div className="absolute bottom-1/4 left-1/4 w-32 h-32 border border-border/10 rounded-full"></div>
      </div>
    </section>
  );
}
