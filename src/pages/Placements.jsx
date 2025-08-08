import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, Building2, Users, Award, Quote } from "lucide-react";

const Placements = () => {
  const placementStats = [
    { icon: TrendingUp, title: "95%", subtitle: "Placement Rate", color: "text-primary" },
    { icon: Users, title: "500+", subtitle: "Students Placed", color: "text-primary" },
    { icon: Building2, title: "150+", subtitle: "Partner Companies", color: "text-primary" },
    { icon: Award, title: "₹25 LPA", subtitle: "Highest Package", color: "text-secondary" },
  ];

  const topRecruiters = [
    "TCS", "Infosys", "Wipro", "Accenture", "IBM", "Microsoft",
    "Amazon", "Google", "Flipkart", "Paytm", "Cognizant", "HCL",
    "L&T", "Bajaj", "Mahindra", "Hero MotoCorp", "Reliance", "ISRO"
  ];

  const testimonials = [
    {
      name: "Rahul Sharma",
      company: "Microsoft",
      package: "₹18 LPA",
      year: "2023",
      department: "Computer Science",
      quote: "SIET provided me with excellent technical foundation and soft skills that helped me crack the Microsoft interview. The placement cell's support was outstanding."
    },
    {
      name: "Priya Gupta",
      company: "Amazon",
      package: "₹22 LPA",
      year: "2023",
      department: "Electronics & Communication",
      quote: "The hands-on projects and industry exposure at SIET prepared me well for the challenges at Amazon. Grateful for the amazing faculty guidance."
    },
    {
      name: "Vikash Kumar",
      company: "L&T",
      package: "₹12 LPA",
      year: "2023",
      department: "Civil Engineering",
      quote: "SIET's strong industry connections and practical approach to learning gave me the confidence to excel in my career at L&T."
    }
  ];

  const placementProcess = [
    {
      step: "1",
      title: "Pre-Placement Training",
      description: "Comprehensive training on aptitude, technical skills, communication, and interview preparation."
    },
    {
      step: "2", 
      title: "Company Registration",
      description: "Leading companies register for campus recruitment drives throughout the academic year."
    },
    {
      step: "3",
      title: "Selection Process",
      description: "Multi-round selection including written tests, technical interviews, and HR rounds."
    },
    {
      step: "4",
      title: "Final Placement",
      description: "Selected candidates receive offer letters and join their respective organizations."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary-light to-secondary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Placement Success Stories</h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              Bridging the Gap Between Academic Excellence and Industry Success
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Placement Statistics */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">Placement Highlights 2023</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {placementStats.map((stat, index) => (
              <Card key={index} className="text-center shadow-md hover:shadow-lg transition-all">
                <CardContent className="p-8">
                  <stat.icon className={`h-12 w-12 mx-auto mb-4 ${stat.color}`} />
                  <h3 className="text-3xl font-bold text-primary mb-2">{stat.title}</h3>
                  <p className="text-muted-foreground">{stat.subtitle}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Top Recruiters */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">Our Recruitment Partners</h2>
          <div className="bg-card rounded-lg p-8 shadow-md">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {topRecruiters.map((company, index) => (
                <div key={index} className="text-center p-4 bg-primary/5 rounded-lg hover:bg-primary/10 transition-colors">
                  <div className="h-16 flex items-center justify-center mb-2">
                    <Building2 className="h-8 w-8 text-primary" />
                  </div>
                  <p className="font-medium text-sm text-primary">{company}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Student Testimonials */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">Success Stories</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="shadow-md hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="flex items-center space-x-2 mb-2">
                    <Quote className="h-5 w-5 text-primary" />
                    <Badge variant="outline" className="bg-secondary/10 text-secondary border-secondary">
                      {testimonial.package}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  <p className="text-muted-foreground">{testimonial.company} • {testimonial.department}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <p className="text-right text-sm text-primary mt-4">- Class of {testimonial.year}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Placement Process */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">Our Placement Process</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {placementProcess.map((process, index) => (
              <Card key={index} className="text-center shadow-md">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                    {process.step}
                  </div>
                  <h3 className="text-lg font-semibold text-primary mb-3">{process.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{process.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-primary mb-4">Ready to Launch Your Career?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join SIET and be part of our success story. Get placed in top companies with excellent packages.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-primary to-secondary text-white">
                Apply for Admission
              </Button>
              <Button variant="outline" className="border-primary text-primary">
                Download Placement Brochure
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Placements;