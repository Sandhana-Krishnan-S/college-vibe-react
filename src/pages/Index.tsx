import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  GraduationCap, 
  Users, 
  Building, 
  Award, 
  ArrowRight, 
  BookOpen, 
  Cpu,
  Briefcase,
  MapPin
} from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Index = () => {
  const highlights = [
    { icon: Users, title: "15,000+", subtitle: "Happy Alumni", color: "text-blue-600" },
    { icon: Building, title: "7", subtitle: "Departments", color: "text-green-600" },
    { icon: Award, title: "NAAC A+", subtitle: "Accredited", color: "text-purple-600" },
    { icon: Briefcase, title: "95%", subtitle: "Placements", color: "text-orange-600" },
  ];

  const quickLinks = [
    {
      title: "About SKCT",
      description: "Learn about our legacy, mission, and values",
      icon: BookOpen,
      link: "/about",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Departments", 
      description: "Explore our B.Tech & B.E programs",
      icon: Cpu,
      link: "/departments",
      color: "from-green-500 to-green-600"
    },
    {
      title: "Placements",
      description: "View our placement records and success stories",
      icon: Briefcase,
      link: "/placements", 
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Admissions",
      description: "Apply for the upcoming academic session",
      icon: GraduationCap,
      link: "/admissions",
      color: "from-orange-500 to-orange-600"
    }
  ];

  const announcements = [
    {
      title: "Admissions Open 2024-25",
      description: "Applications are now open for B.Tech & B.E programs",
      date: "Valid till June 30, 2024",
      urgent: true
    },
    {
      title: "Placement Drive",
      description: "TCS, Infosys, and Amazon campus recruitment ongoing",
      date: "March 2024",
      urgent: false
    },
    {
      title: "Cultural Fest 2024",
      description: "Annual cultural festival 'Techno-Spandan' announced",
      date: "April 15-17, 2024",
      urgent: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/70"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Welcome to <span className="text-secondary">SKCT College</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed">
            Shaping Future Engineers Since 1985 • Excellence in Technical Education
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 font-semibold">
              Apply Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white text-primary">
              Virtual Campus Tour
            </Button>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <Card key={index} className="text-center shadow-md hover:shadow-lg transition-all">
                <CardContent className="p-8">
                  <highlight.icon className={`h-12 w-12 mx-auto mb-4 ${highlight.color}`} />
                  <h3 className="text-3xl font-bold text-primary mb-2">{highlight.title}</h3>
                  <p className="text-muted-foreground">{highlight.subtitle}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Explore SKCT</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover what makes us one of the leading engineering institutions in India
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((link, index) => (
              <Link key={index} to={link.link}>
                <Card className="h-full shadow-md hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${link.color} flex items-center justify-center`}>
                      <link.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-primary mb-2">{link.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{link.description}</p>
                    <ArrowRight className="h-5 w-5 text-primary mx-auto" />
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Announcements */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Latest Announcements</h2>
            <p className="text-lg text-muted-foreground">Stay updated with the latest news and events</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {announcements.map((announcement, index) => (
              <Card key={index} className="shadow-md hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  {announcement.urgent && (
                    <Badge variant="destructive" className="mb-3">Urgent</Badge>
                  )}
                  <h3 className="text-lg font-semibold text-primary mb-2">{announcement.title}</h3>
                  <p className="text-muted-foreground text-sm mb-3">{announcement.description}</p>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <MapPin className="h-3 w-3 mr-1" />
                    {announcement.date}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Engineering Journey?</h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of successful engineers who started their career at SKCT
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/admissions">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 font-semibold">
                Apply for Admission
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white text-primary">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
