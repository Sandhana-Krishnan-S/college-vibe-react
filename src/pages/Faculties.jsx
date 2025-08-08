import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, LinkedinIcon, GraduationCap } from "lucide-react";

const Faculties = () => {
  const faculties = [
    {
      name: "Dr. Rajesh Kumar",
      designation: "Professor & HOD",
      department: "Computer Science & Engineering",
      qualification: "Ph.D. in Computer Science, IIT Delhi",
      experience: "15 years",
      specialization: "Artificial Intelligence, Machine Learning",
      email: "rajesh.kumar@siet.edu.in",
      image: "/api/placeholder/300/300",
    },
    {
      name: "Dr. Priya Sharma",
      designation: "Associate Professor",
      department: "Electronics & Communication",
      qualification: "Ph.D. in ECE, IISc Bangalore",
      experience: "12 years",
      specialization: "VLSI Design, Embedded Systems",
      email: "priya.sharma@siet.edu.in",
      image: "/api/placeholder/300/300",
    },
    {
      name: "Prof. Amit Singh",
      designation: "Professor",
      department: "Mechanical Engineering",
      qualification: "M.Tech, Ph.D. in Mechanical Engg.",
      experience: "18 years",
      specialization: "Thermal Engineering, CFD",
      email: "amit.singh@siet.edu.in",
      image: "/api/placeholder/300/300",
    },
    {
      name: "Dr. Sunita Patel",
      designation: "Associate Professor",
      department: "Civil Engineering",
      qualification: "Ph.D. in Structural Engineering",
      experience: "10 years",
      specialization: "Earthquake Engineering, Smart Materials",
      email: "sunita.patel@siet.edu.in",
      image: "/api/placeholder/300/300",
    },
    {
      name: "Dr. Vikram Gupta",
      designation: "Assistant Professor",
      department: "Chemical Engineering",
      qualification: "Ph.D. in Chemical Engineering",
      experience: "8 years",
      specialization: "Process Control, Green Chemistry",
      email: "vikram.gupta@siet.edu.in",
      image: "/api/placeholder/300/300",
    },
    {
      name: "Prof. Anjali Verma",
      designation: "Professor",
      department: "Electrical Engineering",
      qualification: "Ph.D. in Power Systems",
      experience: "20 years",
      specialization: "Renewable Energy, Smart Grids",
      email: "anjali.verma@siet.edu.in",
      image: "/api/placeholder/300/300",
    },
  ];

  const departmentColors = {
    "Computer Science & Engineering": "bg-blue-100 text-blue-800",
    "Electronics & Communication": "bg-green-100 text-green-800",
    "Mechanical Engineering": "bg-purple-100 text-purple-800",
    "Civil Engineering": "bg-orange-100 text-orange-800",
    "Chemical Engineering": "bg-red-100 text-red-800",
    "Electrical Engineering": "bg-yellow-100 text-yellow-800",
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary-light to-secondary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Distinguished Faculty</h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              Meet our experienced educators and researchers who are shaping the future of engineering
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Faculty Stats */}
        <section className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="bg-card p-6 rounded-lg shadow-md">
              <h3 className="text-3xl font-bold text-primary mb-2">50+</h3>
              <p className="text-muted-foreground">Faculty Members</p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-md">
              <h3 className="text-3xl font-bold text-primary mb-2">35+</h3>
              <p className="text-muted-foreground">Ph.D. Holders</p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-md">
              <h3 className="text-3xl font-bold text-primary mb-2">200+</h3>
              <p className="text-muted-foreground">Research Papers</p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-md">
              <h3 className="text-3xl font-bold text-primary mb-2">15+</h3>
              <p className="text-muted-foreground">Years Avg. Experience</p>
            </div>
          </div>
        </section>

        {/* Faculty Grid */}
        <section>
          <h2 className="text-3xl font-bold text-primary text-center mb-12">Meet Our Faculty</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {faculties.map((faculty, index) => (
              <Card key={index} className="shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  {/* Faculty Image */}
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <GraduationCap className="h-16 w-16 text-primary" />
                  </div>

                  {/* Faculty Details */}
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-primary mb-1">{faculty.name}</h3>
                    <p className="text-muted-foreground font-medium mb-3">{faculty.designation}</p>
                    
                    <Badge 
                      variant="outline" 
                      className={`mb-4 ${departmentColors[faculty.department] || 'text-primary border-primary'}`}
                    >
                      {faculty.department}
                    </Badge>

                    <div className="text-left space-y-2 text-sm">
                      <p><strong>Qualification:</strong> {faculty.qualification}</p>
                      <p><strong>Experience:</strong> {faculty.experience}</p>
                      <p><strong>Specialization:</strong> {faculty.specialization}</p>
                    </div>

                    {/* Contact */}
                    <div className="flex justify-center space-x-3 mt-4 pt-4 border-t">
                      <a 
                        href={`mailto:${faculty.email}`}
                        className="text-primary hover:text-primary-light transition-colors"
                        title="Email"
                      >
                        <Mail className="h-5 w-5" />
                      </a>
                      <a 
                        href="#"
                        className="text-primary hover:text-primary-light transition-colors"
                        title="LinkedIn"
                      >
                        <LinkedinIcon className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-primary mb-4">Join Our Academic Community</h2>
            <p className="text-muted-foreground mb-6">
              We are always looking for passionate educators and researchers to join our team.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg hover:shadow-lg transition-all"
            >
              Contact HR Department
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Faculties;