import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export default function AboutSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: leftRef, isVisible: leftVisible } = useScrollAnimation();
  const { ref: rightRef, isVisible: rightVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-20 bg-muted">
      <div className="container mx-auto px-6">
        <div
          ref={titleRef}
          className={`fade-in mb-16 ${titleVisible ? 'visible' : ''}`}
        >
          <h2 className="text-4xl md:text-5xl font-black text-center text-primary mb-4" data-testid="about-title">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Bio Text */}
          <div
            ref={leftRef}
            className={`slide-in-left space-y-6 ${leftVisible ? 'visible' : ''}`}
          >
            <div className="space-y-4">
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-6xl font-black text-border">01.</span>
                <h3 className="text-2xl font-bold text-primary">My Journey</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed" data-testid="about-journey">
                With over 5 years of experience in web development, I specialize in creating
                modern, responsive applications using React, Node.js, and cutting-edge technologies.
                My passion lies in transforming complex problems into elegant, user-friendly solutions.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-6xl font-black text-border">02.</span>
                <h3 className="text-2xl font-bold text-primary">My Passion</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed" data-testid="about-passion">
                I believe in the power of clean code and thoughtful design. Every project is an
                opportunity to learn something new and push the boundaries of what's possible on the web.
              </p>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div className="text-center">
                <div className="text-3xl font-black text-primary" data-testid="stat-projects">50+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-primary" data-testid="stat-experience">5+</div>
                <div className="text-sm text-muted-foreground">Years</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-primary" data-testid="stat-clients">30+</div>
                <div className="text-sm text-muted-foreground">Clients</div>
              </div>
            </div>
          </div>

          {/* Right: Supporting Images */}
          <div
            ref={rightRef}
            className={`slide-in-right ${rightVisible ? 'visible' : ''}`}
          >
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400"
                alt="Developer workspace"
                className="rounded-lg shadow-lg col-span-2 h-48 object-cover"
                data-testid="about-image-workspace"
              />
              <img
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
                alt="Coding on laptop"
                className="rounded-lg shadow-lg h-32 object-cover"
                data-testid="about-image-coding"
              />
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
                alt="Team collaboration"
                className="rounded-lg shadow-lg h-32 object-cover"
                data-testid="about-image-team"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
