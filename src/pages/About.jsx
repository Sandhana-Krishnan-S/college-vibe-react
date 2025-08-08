import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Users, BookOpen, Globe } from "lucide-react";

const About = () => {
  const achievements = [
    { icon: Users, title: "15,000+", subtitle: "Alumni Worldwide" },
    { icon: BookOpen, title: "50+", subtitle: "Programs Offered" },
    { icon: Award, title: "NAAC A+", subtitle: "Accreditation" },
    { icon: Globe, title: "25+", subtitle: "Industry Partners" },
  ];

  const accreditations = [
    { name: "UGC", status: "Approved" },
    { name: "AICTE", status: "Approved" },
    { name: "NAAC", status: "A+ Grade" },
    { name: "NBA", status: "Accredited" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary-light to-secondary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About SIET College</h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              Shaping Future Engineers Since 1995 - Where Innovation Meets Excellence in Technical Education
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Institution Overview */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Our Legacy</h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Sagar Institute of Engineering & Technology (SIET) was established in 1995 with a vision to provide 
                world-class technical education to students from all backgrounds. Located in the heart of India, 
                we have been at the forefront of engineering education for over 25 years.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Our commitment to academic excellence, industry-relevant curriculum, and holistic development 
                has made us one of the most sought-after engineering institutions in the region.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="text-center shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <achievement.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                    <h3 className="text-2xl font-bold text-primary mb-1">{achievement.title}</h3>
                    <p className="text-muted-foreground text-sm">{achievement.subtitle}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  To provide quality technical education that empowers students with knowledge, skills, and 
                  values needed to excel in their chosen fields and contribute meaningfully to society. 
                  We strive to foster innovation, creativity, and entrepreneurship among our students.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  To be recognized as a premier institution for engineering education, research, and innovation, 
                  producing globally competent engineers and technologists who can address the challenges of 
                  the 21st century with ethical values and social responsibility.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Accreditations */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-primary text-center mb-8">Accreditations & Approvals</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {accreditations.map((accreditation, index) => (
              <Card key={index} className="text-center shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-2">{accreditation.name}</h3>
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    {accreditation.status}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Core Values */}
        <section>
          <h2 className="text-3xl font-bold text-primary text-center mb-8">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We strive for the highest standards in everything we do, from teaching and research 
                  to student services and infrastructure.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We encourage creative thinking, research, and the development of innovative solutions 
                  to real-world problems.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Integrity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We uphold the highest ethical standards in all our interactions and maintain transparency 
                  in our operations.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;