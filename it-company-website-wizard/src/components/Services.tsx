import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  SiReact, 
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiPython,
  SiTableau,
  SiPandas,
  SiJupyter,
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiOpenai,
  SiZapier,
  SiGoogle,
  SiAmazon,
  SiLangchain
} from "react-icons/si";
import {  
  BarChart3,
  Brain,
  Code, 
  ArrowRight,
  Workflow
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import React from "react";

const Services = () => {
  const [selectedService, setSelectedService] = React.useState(null);
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

  const services = [
    {
      icon: Code,
      title: "Web Application Development",
      description: "Build scalable, secure, and modern web applications tailored to your business needs.",
      features: ["Custom Web Solutions", "Frontend & Backend", "Responsive Design"],
      tools: ["React.js", "Next.js", "TypeScript", "Node.js", "Express", "PostgreSQL"],
      process: [
        "Requirement analysis & planning",
        "UI/UX design & prototyping",
        "Frontend & backend development",
        "Quality assurance & testing",
        "Deployment & maintenance"
      ]
    },
    {
      icon: BarChart3,
      title: "Data Analysis & Business Intelligence",
      description: "Uncover insights from data to drive informed decisions and strategic growth.",
      features: ["Data Visualization", "Reporting Dashboards", "KPI Monitoring"],
      tools: ["Python", "SQL", "Tableau", "Power BI", "Pandas", "Jupyter"],
      process: [
        "Data collection & cleaning",
        "Exploratory data analysis",
        "Dashboard design & implementation",
        "Insight generation",
        "Report delivery & presentation"
      ]
    },
    {
      icon: Brain,
      title: "Data Science & Machine Learning",
      description: "Leverage advanced ML models and AI to automate processes and extract value from data.",
      features: ["Model Development", "Predictive Analytics", "AI Integration"],
      tools: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "OpenAI API", "LangChain"],
      process: [
        "Problem definition & data collection",
        "Feature engineering & model selection",
        "Model training & evaluation",
        "Deployment & integration",
        "Monitoring & optimization"
      ]
    },
    {
      icon: Workflow,
      title: "Workflow Automation",
      description: "Eliminate repetitive tasks with custom automations for your business processes.",
      features: [
        "Social Media Auto-Posting", 
        "Data Sync Between Tools", 
        "Custom Scripting & Bots"
      ],
      tools: ["Python", "Zapier", "Make.com", "Google Apps Script", "AWS Lambda"],
      process: [
        "Process analysis & automation potential",
        "Tool selection & architecture",
        "Automation development",
        "Testing & refinement",
        "Deployment & documentation"
      ]
    }
  ];

  const techIcons = {
    "React.js": <SiReact className="w-4 h-4 mr-1" />,
    "Next.js": <SiNextdotjs className="w-4 h-4 mr-1" />,
    "TypeScript": <SiTypescript className="w-4 h-4 mr-1" />,
    "Node.js": <SiNodedotjs className="w-4 h-4 mr-1" />,
    "Express": <SiExpress className="w-4 h-4 mr-1" />,
    "PostgreSQL": <SiPostgresql className="w-4 h-4 mr-1" />,
    "Python": <SiPython className="w-4 h-4 mr-1" />,
    "Tableau": <SiTableau className="w-4 h-4 mr-1" />,
    "Pandas": <SiPandas className="w-4 h-4 mr-1" />,
    "Jupyter": <SiJupyter className="w-4 h-4 mr-1" />,
    "TensorFlow": <SiTensorflow className="w-4 h-4 mr-1" />,
    "PyTorch": <SiPytorch className="w-4 h-4 mr-1" />,
    "Scikit-learn": <SiScikitlearn className="w-4 h-4 mr-1" />,
    "OpenAI API": <SiOpenai className="w-4 h-4 mr-1" />,
    "LangChain": <SiLangchain className="w-4 h-4 mr-1" />,
    "Zapier": <SiZapier className="w-4 h-4 mr-1" />,
    "Google Apps Script": <SiGoogle className="w-4 h-4 mr-1" />,
    "AWS Lambda": <SiAmazon className="w-4 h-4 mr-1" />,
    "Make.com": <SiGoogle className="w-4 h-4 mr-1" />
  };

  const handleLearnMore = (service) => {
    setSelectedService(service);
    setIsDialogOpen(true);
  };

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
                <Button 
                  variant="outline" 
                  className="w-full group"
                  onClick={() => handleLearnMore(service)}
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[625px] max-h-[80vh] overflow-y-auto">
          {selectedService && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                    <selectedService.icon className="w-6 h-6" />
                  </div>
                  <DialogTitle>{selectedService.title}</DialogTitle>
                </div>
                <DialogDescription>{selectedService.description}</DialogDescription>
              </DialogHeader>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">Key Features</h3>
                  <ul className="space-y-2">
                    {selectedService.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Technologies We Use</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedService.tools.map((tool) => (
                      <span 
                        key={tool} 
                        className="px-3 py-1 bg-accent text-accent-foreground text-sm rounded-full flex items-center"
                      >
                        {techIcons[tool] || <Code className="w-4 h-4 mr-1" />}
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Our Process</h3>
                  <ol className="space-y-2">
                    {selectedService.process.map((step, index) => (
                      <li key={index} className="flex items-start">
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold mr-3">
                          {index + 1}
                        </span>
                        <span className="text-sm">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      <div className="mt-12 text-center">
        <h3 className="text-2xl font-semibold mb-4">Need a custom solution?</h3>
        <p className="text-muted-foreground mb-6">
          Combine services like Automation + Web Development for end-to-end efficiency.
        </p>
        <Button onClick={() => {
  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  window.history.pushState(null, "", "#contact");
}}>
  Get a Free Consultation
</Button>
      </div>
    </section>
  );
};

export default Services;