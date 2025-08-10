import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: [
        "Sri Krishna College of Technology",
        "Kovaipudur Coimbatore",
        "Tamilnadu - 641105, India"
      ]
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: [
        "Main Office: +91-755-2345678",
        "Admissions: +91-9876543210",
        "Placement Cell: +91-9876543211"
      ]
    },
    {
      icon: Mail,
      title: "Email Addresses",
      details: [
        "info@skct.edu.in",
        "admissions@skct.edu.in",
        "placements@skct.edu.in"
      ]
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: [
        "Monday - Friday: 9:00 AM - 6:00 PM",
        "Saturday: 9:00 AM - 2:00 PM",
        "Sunday: Closed"
      ]
    }
  ];

  const departments = [
    { name: "Admissions Office", phone: "+91-9876543210", email: "admissions@skct.edu.in" },
    { name: "Academic Office", phone: "+91-755-2345679", email: "academic@skct.edu.in" },
    { name: "Placement Cell", phone: "+91-9876543211", email: "placements@skct.edu.in" },
    { name: "Student Affairs", phone: "+91-755-2345680", email: "students@skct.edu.in" },
    { name: "Finance Office", phone: "+91-755-2345681", email: "finance@skct.edu.in" },
    { name: "IT Support", phone: "+91-755-2345682", email: "it@skct.edu.in" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary-light to-secondary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6"></h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              Get in touch with us for any queries regarding admissions, academics, or general information
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Contact Form and Info */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary flex items-center">
                    <Send className="h-6 w-6 mr-2" />
                    Send us a Message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Enter your phone number"
                        />
                      </div>
                      <div>
                        <Label htmlFor="subject">Subject *</Label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                          placeholder="Subject of your inquiry"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        placeholder="Write your message here..."
                      />
                    </div>

                    <Button type="submit" className="w-full bg-gradient-to-r from-primary to-secondary text-white">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="shadow-md">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-3">
                        <info.icon className="h-6 w-6 text-primary mt-1" />
                        <div>
                          <h3 className="font-semibold text-primary mb-2">{info.title}</h3>
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="text-muted-foreground text-sm mb-1">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Department Contacts */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">Department Contacts</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept, index) => (
              <Card key={index} className="shadow-md hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-primary mb-3">{dept.name}</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center text-muted-foreground">
                      <Phone className="h-4 w-4 mr-2" />
                      {dept.phone}
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Mail className="h-4 w-4 mr-2" />
                      {dept.email}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Map Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">Find Us</h2>
          <Card className="shadow-lg overflow-hidden">
            <div className="h-96 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-2">Campus Location</h3>
                <p className="text-muted-foreground">
                  Interactive map integration would be implemented here<br/>
                  with Google Maps or similar service
                </p>
              </div>
            </div>
          </Card>
        </section>

        {/* Emergency Contacts */}
        <section>
          <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-lg p-8 border border-red-200">
            <h2 className="text-2xl font-bold text-red-800 text-center mb-6">Emergency Contacts</h2>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <h3 className="font-semibold text-red-700 mb-2">Security</h3>
                <p className="text-red-600">+91-9876543299</p>
              </div>
              <div>
                <h3 className="font-semibold text-red-700 mb-2">Medical Emergency</h3>
                <p className="text-red-600">+91-9876543298</p>
              </div>
              <div>
                <h3 className="font-semibold text-red-700 mb-2">Warden Office</h3>
                <p className="text-red-600">+91-9876543297</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;