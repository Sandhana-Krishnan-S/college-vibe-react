import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cpu, Zap, Settings, Building, TestTube, Atom } from "lucide-react";

const Departments = () => {
  const btechDepartments = [
    {
      name: "Computer Science & Engineering",
      icon: Cpu,
      description: "Leading-edge curriculum in AI, ML, software development, and emerging technologies.",
      intake: "120",
      established: "1985",
    },
    {
      name: "Electronics & Communication Engineering",
      icon: Zap,
      description: "Advanced studies in embedded systems, VLSI, communications, and IoT technologies.",
      intake: "90",
      established: "1997",
    },
    {
      name: "Mechanical Engineering",
      icon: Settings,
      description: "Comprehensive program covering design, manufacturing, thermal, and automotive engineering.",
      intake: "120",
      established: "1985",
    },
    {
      name: "Civil Engineering",
      icon: Building,
      description: "Infrastructure development, structural design, environmental engineering, and smart cities.",
      intake: "60",
      established: "1999",
    },
  ];

  const beDepartments = [
    {
      name: "Chemical Engineering",
      icon: TestTube,
      description: "Process engineering, petrochemicals, pharmaceuticals, and green technology solutions.",
      intake: "60",
      established: "2005",
    },
    {
      name: "Electrical Engineering",
      icon: Zap,
      description: "Power systems, renewable energy, electrical machines, and smart grid technologies.",
      intake: "90",
      established: "2003",
    },
    {
      name: "Biotechnology",
      icon: Atom,
      description: "Modern biotechnology applications in healthcare, agriculture, and environmental solutions.",
      intake: "30",
      established: "2010",
    },
  ];

  const DepartmentCard = ({ department, stream }: { department: any; stream: string }) => (
    <Card className="shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <CardHeader>
        <div className="flex items-center space-x-3 mb-2">
          <department.icon className="h-8 w-8 text-primary" />
          <Badge variant="outline" className="text-primary border-primary">
            {stream}
          </Badge>
        </div>
        <CardTitle className="text-xl text-primary">{department.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4 leading-relaxed">{department.description}</p>
        <div className="flex justify-between text-sm text-muted-foreground">
          <span><strong>Intake:</strong> {department.intake} students</span>
          <span><strong>Since:</strong> {department.established}</span>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary-light to-secondary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Academic Departments</h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              Comprehensive Engineering Programs Designed for Industry Excellence
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* B.Tech Departments */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Bachelor of Technology (B.Tech)</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Four-year undergraduate programs with a focus on practical learning and industry readiness
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {btechDepartments.map((department, index) => (
              <DepartmentCard key={index} department={department} stream="B.Tech" />
            ))}
          </div>
        </section>

        {/* B.E Departments */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Bachelor of Engineering (B.E)</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Specialized engineering programs with emphasis on research and innovation
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {beDepartments.map((department, index) => (
              <DepartmentCard key={index} department={department} stream="B.E" />
            ))}
          </div>
        </section>

        {/* Facilities & Features */}
        <section>
          <h2 className="text-3xl font-bold text-primary text-center mb-12">Department Facilities</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center shadow-md">
              <CardContent className="p-8">
                <TestTube className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-3">Modern Laboratories</h3>
                <p className="text-muted-foreground">
                  State-of-the-art labs equipped with the latest technology and equipment for hands-on learning.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-md">
              <CardContent className="p-8">
                <Settings className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-3">Industry Projects</h3>
                <p className="text-muted-foreground">
                  Real-world projects in collaboration with leading companies for practical experience.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-md">
              <CardContent className="p-8">
                <Atom className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-3">Research Centers</h3>
                <p className="text-muted-foreground">
                  Dedicated research centers promoting innovation and cutting-edge research activities.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Departments;