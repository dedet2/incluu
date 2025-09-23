import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Shield, 
  Users, 
  Trophy, 
  Envelope, 
  Phone, 
  Calendar,
  CheckCircle,
  ArrowRight,
  Star,
  Building,
  Globe,
  TrendUp
} from "@phosphor-icons/react";
import { toast } from 'sonner';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast.success("Thank you for your inquiry! We'll be in touch within 24 hours.");
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const scrollToSection = (elementId: string) => {
    const element = document.getElementById(elementId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <header className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Shield className="w-8 h-8 text-primary" weight="fill" />
              <span className="text-2xl font-bold text-primary">Incluu</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('services')} 
                className="text-foreground hover:text-primary transition-colors"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('about')} 
                className="text-foreground hover:text-primary transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')} 
                className="text-foreground hover:text-primary transition-colors"
              >
                Testimonials
              </button>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-accent hover:bg-accent/90"
              >
                Get Consultation
              </Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="text-sm">
                Black-Woman-Owned Tech Equity Consultancy
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                Transform Your Organization with 
                <span className="text-accent block">Tech Equity & AI Governance</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Led by Dr. Dédé, Incluu delivers measurable results: over $200M in cost savings 
                and $500M in new market access through strategic tech equity and governance solutions.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                onClick={() => scrollToSection('contact')}
                className="bg-primary hover:bg-primary/90 text-lg px-8 py-6"
              >
                Schedule Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection('services')}
                className="text-lg px-8 py-6"
              >
                Explore Services
              </Button>
            </div>

            {/* Impact Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">$200M+</div>
                <div className="text-muted-foreground">Cost Savings Generated</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">$500M+</div>
                <div className="text-muted-foreground">Market Access Unlocked</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">15+</div>
                <div className="text-muted-foreground">Years of Expertise</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-secondary/50">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Comprehensive Tech Equity Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Expert guidance across governance, compliance, and ethical technology implementation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Tech Governance & Regulatory Compliance</CardTitle>
                <CardDescription>
                  Navigate complex regulatory landscapes with strategic compliance frameworks
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-accent mr-2" />
                    AI governance framework development
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-accent mr-2" />
                    Regulatory compliance audits
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-accent mr-2" />
                    Risk assessment and mitigation
                  </li>
                </ul>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <CardTitle>Tech Equity & Ethics Consulting</CardTitle>
                <CardDescription>
                  Build inclusive technology ecosystems that drive innovation and growth
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-accent mr-2" />
                    Equity assessment and strategy
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-accent mr-2" />
                    Bias detection and mitigation
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-accent mr-2" />
                    Inclusive design principles
                  </li>
                </ul>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Trophy className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Custom Workshops</CardTitle>
                <CardDescription>
                  Tailored training programs for teams and leadership development
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-accent mr-2" />
                    Executive leadership training
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-accent mr-2" />
                    Team development sessions
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-accent mr-2" />
                    Industry-specific curricula
                  </li>
                </ul>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Meet Dr. Dédé
                </h2>
                <p className="text-xl text-accent font-medium">
                  Leading Expert in Tech Equity & AI Governance
                </p>
              </div>
              
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Dr. Dédé brings over 15 years of expertise in technology equity, artificial intelligence governance, 
                  and regulatory compliance. As the founder of Incluu, she has helped Fortune 500 companies and 
                  educational institutions navigate complex tech challenges while building more inclusive ecosystems.
                </p>
                <p>
                  Her strategic approach has generated over $200 million in cost savings and unlocked $500 million 
                  in new market opportunities for clients across various industries. Dr. Dédé's work spans from 
                  developing AI governance frameworks to implementing comprehensive equity assessments.
                </p>
                <p>
                  Recognized as a thought leader in the intersection of technology and social impact, she regularly 
                  speaks at industry conferences and advises organizations on creating sustainable, ethical tech practices.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="flex items-center space-x-2">
                  <Building className="w-5 h-5 text-accent" />
                  <span className="text-sm text-muted-foreground">Fortune 500 Experience</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Globe className="w-5 h-5 text-accent" />
                  <span className="text-sm text-muted-foreground">Global Expertise</span>
                </div>
                <div className="flex items-center space-x-2">
                  <TrendUp className="w-5 h-5 text-accent" />
                  <span className="text-sm text-muted-foreground">Proven Results</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Trophy className="w-5 h-5 text-accent" />
                  <span className="text-sm text-muted-foreground">Industry Recognition</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-32 h-32 bg-primary/20 rounded-full mx-auto flex items-center justify-center">
                    <Users className="w-16 h-16 text-primary" weight="light" />
                  </div>
                  <p className="text-muted-foreground text-sm">Professional headshot placeholder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 bg-secondary/50">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Client Success Stories
            </h2>
            <p className="text-xl text-muted-foreground">
              Trusted by leading organizations across industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-l-4 border-l-accent">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-accent" weight="fill" />
                    ))}
                  </div>
                  <Badge variant="secondary">Education</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <blockquote className="text-lg text-foreground italic">
                  "Dr. Dédé's expertise in tech equity transformed our approach to educational technology. 
                  Her guidance helped us create more inclusive learning environments while ensuring regulatory compliance."
                </blockquote>
                <div className="text-sm text-muted-foreground">
                  <strong>Burke School</strong> - Educational Institution
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-primary">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-accent" weight="fill" />
                    ))}
                  </div>
                  <Badge variant="secondary">Enterprise</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <blockquote className="text-lg text-foreground italic">
                  "Incluu's strategic approach to AI governance saved us millions in potential compliance 
                  issues while opening new market opportunities we hadn't considered."
                </blockquote>
                <div className="text-sm text-muted-foreground">
                  <strong>Fortune 500 Technology Company</strong> - Corporate Client
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-accent">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-accent" weight="fill" />
                    ))}
                  </div>
                  <Badge variant="secondary">Healthcare</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <blockquote className="text-lg text-foreground italic">
                  "The custom workshop series revolutionized our leadership's understanding of tech equity. 
                  The practical frameworks are now integral to our decision-making process."
                </blockquote>
                <div className="text-sm text-muted-foreground">
                  <strong>Regional Healthcare System</strong> - Healthcare Organization
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-primary">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-accent" weight="fill" />
                    ))}
                  </div>
                  <Badge variant="secondary">Financial</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <blockquote className="text-lg text-foreground italic">
                  "Dr. Dédé's regulatory compliance expertise helped us navigate complex fintech regulations 
                  while maintaining our commitment to inclusive financial services."
                </blockquote>
                <div className="text-sm text-muted-foreground">
                  <strong>Financial Services Firm</strong> - Banking & Finance
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="container mx-auto max-w-4xl px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Ready to Transform Your Organization?
            </h2>
            <p className="text-xl text-muted-foreground">
              Schedule a consultation to discuss your tech equity and governance needs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card>
              <CardHeader>
                <CardTitle>Schedule Consultation</CardTitle>
                <CardDescription>
                  Fill out this form and we'll contact you within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Your full name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="company">Company/Organization</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Your organization"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Project Details *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      placeholder="Tell us about your tech equity or governance challenges..."
                      rows={4}
                    />
                  </div>

                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                    Send Consultation Request
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Envelope className="w-5 h-5 text-accent" />
                    <span className="text-muted-foreground">hello@incluu.us</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-accent" />
                    <span className="text-muted-foreground">Available by appointment</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-5 h-5 text-accent" />
                    <span className="text-muted-foreground">Consultations available worldwide</span>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">What to Expect</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-0.5" />
                    <span className="text-muted-foreground">Initial consultation call within 24 hours</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-0.5" />
                    <span className="text-muted-foreground">Customized proposal based on your needs</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-0.5" />
                    <span className="text-muted-foreground">Flexible engagement models and timelines</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-0.5" />
                    <span className="text-muted-foreground">Ongoing support and partnership options</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <Shield className="w-6 h-6 text-primary" weight="fill" />
              <span className="text-lg font-bold text-primary">Incluu</span>
            </div>
            
            <div className="text-sm text-muted-foreground text-center md:text-right">
              <p>© 2024 Incluu. Black-Woman-Owned Tech Equity Consultancy.</p>
              <p>Transforming organizations through strategic tech equity and AI governance.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App