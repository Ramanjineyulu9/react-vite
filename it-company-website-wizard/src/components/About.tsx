import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, Clock, Target } from "lucide-react";
import teamImage from "@/assets/team-collaboration.jpg";

const About = () => {
  const stats = [
    { icon: Users, label: "Happy Clients", value: "9+" },
    { icon: Award, label: "Projects Completed", value: "9+" },
    { icon: Clock, label: "Years Experience", value: "1" },
    { icon: Target, label: "Success Rate", value: "99%" }
  ];

  return (
    <section id="about" className="py-20 bg-accent/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              About <span className="text-primary">ZustNext</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              With over a decade of experience in the IT industry, ZustNextSolutions has been 
              at the forefront of digital transformation, helping businesses leverage 
              technology to achieve their goals.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our team of certified professionals combines technical expertise with 
              business acumen to deliver solutions that drive real results. We pride 
              ourselves on building long-term partnerships with our clients.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => (
                <Card key={stat.label} className="bg-background shadow-card-custom">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <stat.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Button variant="tech" size="lg">
              Learn More About Us
            </Button>
          </div>

          {/* Team Image */}
          <div className="relative animate-slide-in">
            <div className="relative overflow-hidden rounded-2xl shadow-elegant">
              <img
                src={teamImage}
                alt="Professional IT team collaborating in modern office"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-primary opacity-10"></div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-8 -left-8 w-20 h-20 bg-primary-glow rounded-full opacity-20 animate-glow-pulse"></div>
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-primary rounded-full opacity-15 animate-glow-pulse" style={{ animationDelay: '0.5s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;