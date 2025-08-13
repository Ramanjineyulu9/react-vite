import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {  
  Shield,
  BarChart3,
  Brain,
  Code, 
  Database, 
  Smartphone, 
  Settings,
  ArrowRight,
  Workflow 
} from "lucide-react";

const Services = () => {
  const services = [
    {
    icon: Code,
    title: "Web Application Development",
    description: "Build scalable, secure, and modern web applications tailored to your business needs.",
    features: ["Custom Web Solutions", "Frontend & Backend", "Responsive Design"]
  },
  {
    icon: BarChart3,
    title: "Data Analysis & Business Intelligence",
    description: "Uncover insights from data to drive informed decisions and strategic growth.",
    features: ["Data Visualization", "Reporting Dashboards", "KPI Monitoring"]
  },
  {
    icon: Brain,
    title: "Data Science & Machine Learning",
    description: "Leverage advanced ML models and AI to automate processes and extract value from data.",
    features: ["Model Development", "Predictive Analytics", "AI Integration"]
  },
  {
    icon: Workflow, // Or use a more specific icon like 'Cog' or 'Bot'
    title: "Workflow Automation",
    description: "Eliminate repetitive tasks with custom automations for your business processes.",
    features: [
      "Social Media Auto-Posting", 
      "Data Sync Between Tools", 
      "Custom Scripting & Bots"
    ]
  }
    
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive IT solutions designed to accelerate your business growth and digital transformation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="bg-gradient-card shadow-card-custom hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <service.icon className="w-6 h-6" />
                </div>
                <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full group">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <div className="mt-12 text-center">
  <h3 className="text-2xl font-semibold mb-4">Need a custom solution?</h3>
  <p className="text-muted-foreground mb-6">
    Combine services like Automation + Web Development for end-to-end efficiency.
  </p>
  <Button>Get a Free Consultation</Button>
</div>
    </section>
  );
};

export default Services;