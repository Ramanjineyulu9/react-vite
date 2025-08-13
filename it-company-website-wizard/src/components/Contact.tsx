import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "zustnext.com@gmail.com",
      link: "mailto:zustnext.com@gmail.com?subject=Inquiry%20from%20Website"
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+91 9182117269",
      link: "tel:+919182117269"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "Brodipet 4th line Guntur",
      link: "https://www.google.com/maps?q=16.3067,80.4365"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get in <span className="text-primary">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your business with innovative IT solutions? Let's discuss your project.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Let's Start a Conversation
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Whether you're looking to modernize your infrastructure, develop custom software, 
                or enhance your cybersecurity, our team is here to help you succeed.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info) => (
                <Card key={info.title} className="bg-gradient-card shadow-card-custom hover:shadow-elegant transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                        <a 
                          href={info.link}
                          className="text-muted-foreground hover:text-primary transition-colors duration-300"
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          {info.content}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact Form - Using FormSubmit */}
          <Card className="bg-gradient-card shadow-elegant">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form 
                action="https://formsubmit.co/zustnext.com@gmail.com" 
                method="POST"
                className="space-y-6"
              >
                {/* FormSubmit required fields */}
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_next" value="https://yourwebsite.com/thank-you" />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input 
                      id="firstName" 
                      name="firstName" 
                      placeholder="" 
                      className="mt-1" 
                      required 
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input 
                      id="lastName" 
                      name="lastName" 
                      placeholder="" 
                      className="mt-1" 
                      required 
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    placeholder="your@email.com" 
                    className="mt-1" 
                    required 
                  />
                </div>
                <div>
                  <Label htmlFor="email">Contact No</Label>
                  <Input 
                    id="number" 
                    name="Number" 
                    type="number" 
                    placeholder="Contact no" 
                    className="mt-1" 
                    required 
                  />
                </div>
                
                <div>
                  <Label htmlFor="company">Company</Label>
                    <Input 
                      id="company" 
                      name="company" 
                      placeholder="Your Company" 
                      className="mt-1" 
                    />
                </div>
                
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    placeholder="Tell us about your project..." 
                    className="mt-1 min-h-[120px]" 
                    required 
                  />
                </div>
                
                <Button 
                  type="submit" 
                  variant="hero" 
                  size="lg" 
                  className="w-full group"
                >
                  Send Message
                  <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;