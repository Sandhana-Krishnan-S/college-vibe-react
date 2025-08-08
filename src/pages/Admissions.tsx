import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, FileText, Users, CheckCircle, AlertCircle, Clock } from "lucide-react";

const Admissions = () => {
  const btechEligibility = [
    "Passed 10+2 with Physics, Chemistry, and Mathematics",
    "Minimum 75% marks in 10+2 (65% for SC/ST)",
    "Valid JEE Main score or State CET qualification",
    "Age limit: 25 years (30 years for SC/ST)"
  ];

  const beEligibility = [
    "Passed 10+2 with Physics, Chemistry, and Mathematics/Biology", 
    "Minimum 50% marks in qualifying examination",
    "Valid entrance exam score (State CET/University exam)",
    "Age limit: 25 years as on December 31st"
  ];

  const entranceExams = [
    {
      name: "JEE Main",
      description: "National level entrance exam for engineering admissions",
      eligibility: "For B.Tech programs",
      dates: "January & April 2024"
    },
    {
      name: "Maharashtra CET",
      description: "State level Common Entrance Test",
      eligibility: "For both B.Tech & B.E programs", 
      dates: "May 2024"
    },
    {
      name: "JEE Advanced", 
      description: "For top engineering institutes (if applicable)",
      eligibility: "JEE Main qualified candidates",
      dates: "June 2024"
    }
  ];

  const admissionSchedule = [
    {
      phase: "Application Release",
      date: "March 15, 2024",
      description: "Online application forms available"
    },
    {
      phase: "Last Date to Apply",
      date: "June 30, 2024", 
      description: "Final deadline for form submission"
    },
    {
      phase: "Merit List Release",
      date: "July 15, 2024",
      description: "Based on entrance exam scores"
    },
    {
      phase: "Counselling Rounds",
      date: "July 20 - Aug 10, 2024",
      description: "Document verification & seat allotment"
    },
    {
      phase: "Classes Commence",
      date: "August 15, 2024",
      description: "Academic session 2024-25 begins"
    }
  ];

  const feeStructure = [
    {
      program: "B.Tech (CSE, ECE)",
      tuitionFee: "₹1,25,000",
      otherFees: "₹25,000",
      totalFee: "₹1,50,000"
    },
    {
      program: "B.Tech (Mechanical, Civil)",
      tuitionFee: "₹1,15,000", 
      otherFees: "₹25,000",
      totalFee: "₹1,40,000"
    },
    {
      program: "B.E Programs",
      tuitionFee: "₹1,20,000",
      otherFees: "₹25,000", 
      totalFee: "₹1,45,000"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary-light to-secondary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Admissions 2024-25</h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              Begin Your Engineering Journey with skct - Applications Now Open
            </p>
            <div className="mt-8">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 font-semibold">
                Apply Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Important Dates */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">Important Dates</h2>
          <div className="bg-card rounded-lg p-6 shadow-md">
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {admissionSchedule.map((schedule, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold mx-auto mb-3">
                    {index + 1}
                  </div>
                  <h3 className="font-semibold text-primary mb-2">{schedule.phase}</h3>
                  <Badge variant="outline" className="mb-2 text-xs">{schedule.date}</Badge>
                  <p className="text-muted-foreground text-sm">{schedule.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Eligibility Criteria */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">Eligibility Criteria</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center text-primary">
                  <Users className="h-6 w-6 mr-2" />
                  B.Tech Programs
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {btechEligibility.map((criteria, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{criteria}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center text-primary">
                  <Users className="h-6 w-6 mr-2" />
                  B.E Programs
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {beEligibility.map((criteria, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{criteria}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Entrance Exams */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">Accepted Entrance Exams</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {entranceExams.map((exam, index) => (
              <Card key={index} className="shadow-md hover:shadow-lg transition-all">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">{exam.name}</CardTitle>
                  <Badge variant="outline" className="w-fit">{exam.eligibility}</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-3">{exam.description}</p>
                  <div className="flex items-center text-sm text-primary">
                    <Calendar className="h-4 w-4 mr-2" />
                    {exam.dates}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Fee Structure */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">Fee Structure (Per Year)</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-card rounded-lg shadow-md">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Program</th>
                  <th className="px-6 py-4 text-center">Tuition Fee</th>
                  <th className="px-6 py-4 text-center">Other Fees</th>
                  <th className="px-6 py-4 text-center">Total Fee</th>
                </tr>
              </thead>
              <tbody>
                {feeStructure.map((fee, index) => (
                  <tr key={index} className="border-b border-border">
                    <td className="px-6 py-4 font-medium">{fee.program}</td>
                    <td className="px-6 py-4 text-center">{fee.tuitionFee}</td>
                    <td className="px-6 py-4 text-center">{fee.otherFees}</td>
                    <td className="px-6 py-4 text-center font-semibold text-primary">{fee.totalFee}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 text-center">
            <p className="text-muted-foreground text-sm">
              * Fees are subject to annual revision. Hostel and mess charges are additional.
            </p>
          </div>
        </section>

        {/* Application Process */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">How to Apply</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center shadow-md">
              <CardContent className="p-6">
                <FileText className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-primary mb-2">Step 1</h3>
                <p className="text-muted-foreground text-sm">Fill the online application form</p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-md">
              <CardContent className="p-6">
                <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-primary mb-2">Step 2</h3>
                <p className="text-muted-foreground text-sm">Upload required documents</p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-md">
              <CardContent className="p-6">
                <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-primary mb-2">Step 3</h3>
                <p className="text-muted-foreground text-sm">Pay application fee online</p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-md">
              <CardContent className="p-6">
                <AlertCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-primary mb-2">Step 4</h3>
                <p className="text-muted-foreground text-sm">Attend counselling process</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact for Admissions */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-primary mb-4">Need Help with Admissions?</h2>
            <p className="text-muted-foreground mb-6">
              Our admission counsellors are here to guide you through the process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-primary to-secondary text-white">
                Start Application
              </Button>
              <Button variant="outline" className="border-primary text-primary">
                Contact Admissions Office
              </Button>
            </div>
            <div className="mt-6 text-sm text-muted-foreground">
              <p>📞 Helpline: +91-9876543210 | ✉️ admissions@skct.edu.in</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Admissions;