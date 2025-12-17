import {
  Share2,
  PenTool,
  TrendingUp,
  Search,
  Megaphone,
  DollarSign,
  Code,
  BarChart3,
  Palette,
  Image,
  Lightbulb,
  BookOpen
} from "lucide-react";

const skills = [
  { name: "Social Media Management", icon: Share2, level: 90 },
  { name: "Content Creation", icon: PenTool, level: 80 },
  { name: "Canva (Design & Content)", icon: Palette, level: 90 },
  { name: "Adobe Photoshop", icon: Image, level: 90 },
  { name: "Digital Marketing Fundamentals", icon: TrendingUp, level: 80 },
  { name: "SEO Fundamentals", icon: Search, level: 75 },
  { name: "Meta Ads (Learning)", icon: Megaphone, level: 75 },
  { name: "Google Ads (Learning)", icon: DollarSign, level: 75 },
  { name: "Web Development", icon: Code, level: 90 },
  { name: "Analytics Basics", icon: BarChart3, level: 75 },
];


export function AboutSection() {
  return (
    <section id="about" className="py-12 md:py-20 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* LEFT CONTENT */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Lightbulb className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">About Me</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
              Building Skills in{" "}
              <span className="gradient-text">
                Digital Marketing & Web Development
              </span>
            </h2>

            <p className="text-lg text-muted-foreground mb-6">
              I’m Lahiru, an IT graduate from the University of Colombo with a strong
interest in digital marketing, social media management, and web
development. I focus on building practical skills through hands-on
projects, certifications, and continuous learning.

            </p>

            <p className="text-lg text-muted-foreground mb-8">
  I enjoy creating social media content, learning digital marketing
  strategies, and developing modern, responsive websites. My goal is to
  start my career in the digital industry as a social media handler,
  digital marketer with web developer while continuously improving my
  skills.
</p>


            {/* SMALL CARDS */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-secondary/50 border border-border hover:border-primary/50 transition-colors duration-300">
                <BookOpen className="w-10 h-10 text-primary mb-3" />
                <h3 className="font-display font-semibold mb-2">
                  Learning Focused
                </h3>
                <p className="text-sm text-muted-foreground">
                  Actively improving skills through courses, certifications, and
                  practice projects.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-secondary/50 border border-border hover:border-primary/50 transition-colors duration-300">
                <Code className="w-10 h-10 text-primary mb-3" />
                <h3 className="font-display font-semibold mb-2">
                  Hands-On Practice
                </h3>
                <p className="text-sm text-muted-foreground">
                  Applying what I learn through real-world inspired digital and
                  web projects.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT – SKILLS */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-3xl blur-2xl" />

            <div className="relative p-6 md:p-8 rounded-3xl bg-card/50 backdrop-blur-xl border border-border">
              <h3 className="text-xl font-display font-semibold mb-2">
                Skills I’m Developing
              </h3>
              <p className="text-sm text-muted-foreground mb-6">
                Skill levels represent my current learning progress and hands-on
                practice.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className="group p-4 rounded-2xl bg-secondary/30 border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2.5 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 text-primary group-hover:from-primary group-hover:to-primary/80 group-hover:text-primary-foreground transition-all duration-300 shadow-sm">
                        <skill.icon className="w-5 h-5" />
                      </div>
                    </div>

                    <h4 className="font-semibold text-sm mb-1 group-hover:text-primary transition-colors">
                      {skill.name}
                    </h4>

                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-1.5 rounded-full bg-secondary overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-primary to-cyan-400 transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                      <span className="text-xs text-muted-foreground font-medium">
                        {skill.level}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
