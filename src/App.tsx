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
  TrendUp,
  Brain,
  Scales,
  GraduationCap,
  ChartBar,
  Eye,
  Heart
} from "@phosphor-icons/react";
import { toast } from 'sonner';
// import incuuLogo from '@/assets/images/incluu-logo.png';
// import drDedeHeadshot from '@/assets/images/dr-dede-headshot.jpg';

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Enhanced form submission with business email integration
    try {
      // In a real implementation, this would connect to your business email system
      // For now, we'll simulate the submission and provide success feedback
      
      const submissionData = {
        ...formData,
        timestamp: new Date().toISOString(),
        source: 'incluu-consultancy-website',
        priority: 'high' // All consultation requests are high priority
      };
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast.success("Thank you for your consultation request! Dr. Dédé will respond within 24 hours to discuss your AI governance and tech equity needs.");
      
      // Clear form after successful submission
      setFormData({ name: '', email: '', company: '', message: '' });
      
      // Log for business email integration (replace with actual API call)
      console.log('Consultation request submitted:', submissionData);
      
    } catch (error) {
      toast.error("There was an issue submitting your request. Please try again or contact us directly at hello@incluu.us");
    }
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
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded flex items-center justify-center shadow-sm">
                  <span className="text-white font-bold text-xl">i</span>
                </div>
                <div>
                  <span className="text-2xl font-bold text-primary">incluu</span>
                  <div className="text-xs text-muted-foreground font-medium -mt-1 uppercase tracking-wide">consultancy</div>
                </div>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('services')} 
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('about')} 
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                About Dr. Dédé
              </button>
              <button 
                onClick={() => scrollToSection('case-studies')} 
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Case Studies
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')} 
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Client Results
              </button>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-primary hover:bg-primary/90 font-medium"
              >
                Schedule Consultation
              </Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 hero-gradient">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="text-sm font-medium bg-primary/10 text-primary border-primary/20">
                Black-Woman-Owned • Tech Equity Pioneer
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                Expert AI Governance & 
                <span className="text-accent block">Tech Equity Solutions</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Dr. Dédé Wilson delivers transformational tech equity and AI governance consulting, generating 
                proven results: <strong className="text-accent">$200M+ in cost savings</strong> and <strong className="text-accent">$500M+ in market expansion</strong> for enterprise clients.
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
              <div className="text-center p-6 rounded-xl bg-card border border-border shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl font-bold text-primary mb-2">$200M+</div>
                <div className="text-foreground font-semibold mb-1">Cost Savings Generated</div>
                <div className="text-xs text-muted-foreground">Strategic regulatory compliance</div>
              </div>
              <div className="text-center p-6 rounded-xl bg-card border border-border shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl font-bold text-accent mb-2">$500M+</div>
                <div className="text-foreground font-semibold mb-1">Market Access Unlocked</div>
                <div className="text-xs text-muted-foreground">Inclusive innovation strategies</div>
              </div>
              <div className="text-center p-6 rounded-xl bg-card border border-border shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl font-bold text-primary mb-2">15+</div>
                <div className="text-foreground font-semibold mb-1">Years of Expertise</div>
                <div className="text-xs text-muted-foreground">Tech equity & AI governance</div>
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
              Strategic Solutions for Inclusive Innovation
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive expertise in governance, compliance, and ethical technology that drives measurable business results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-primary">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>AI Governance & Regulatory Compliance</CardTitle>
                <CardDescription>
                  Comprehensive AI governance frameworks that ensure regulatory compliance and ethical technology deployment
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-accent mr-2" />
                    AI Ethics Framework Development
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-accent mr-2" />
                    Algorithmic Audit & Bias Detection
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-accent mr-2" />
                    EU AI Act & Global Compliance
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-accent mr-2" />
                    Risk Assessment & Mitigation
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-accent mr-2" />
                    Data Privacy Impact Assessments
                  </li>
                </ul>
                <div className="pt-2">
                  <Badge variant="secondary" className="text-xs">$50M+ Compliance Savings</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-secondary">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-secondary" />
                </div>
                <CardTitle>Tech Equity & Inclusive Innovation</CardTitle>
                <CardDescription>
                  Strategic consulting to build equitable technology ecosystems that drive innovation and market expansion
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-accent mr-2" />
                    Digital Equity Strategy Development
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-accent mr-2" />
                    Inclusive Design & UX Audits
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-accent mr-2" />
                    Accessibility Compliance (WCAG/ADA)
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-accent mr-2" />
                    Diverse Market Entry Strategies
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-accent mr-2" />
                    Community Impact Measurement
                  </li>
                </ul>
                <div className="pt-2">
                  <Badge variant="secondary" className="text-xs">$200M+ Market Access</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-accent">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <GraduationCap className="w-6 h-6 text-accent" />
                </div>
                <CardTitle>Executive Training & Workshops</CardTitle>
                <CardDescription>
                  Tailored leadership development programs for AI governance and inclusive technology strategies
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-accent mr-2" />
                    C-Suite AI Governance Training
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-accent mr-2" />
                    Board-Level Technology Ethics
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-accent mr-2" />
                    Team Development Programs
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-accent mr-2" />
                    Industry-Specific Curricula
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-accent mr-2" />
                    Organizational Change Management
                  </li>
                </ul>
                <div className="pt-2">
                  <Badge variant="secondary" className="text-xs">500+ Leaders Trained</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Detailed Case Studies Section */}
      <section id="case-studies" className="py-16">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Proven Business Impact
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real results from strategic AI governance and tech equity implementations across industries
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card className="border-l-4 border-l-primary">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary">Fortune 500 Technology</Badge>
                  <div className="text-2xl font-bold text-primary">$50M</div>
                </div>
                <CardTitle>AI Governance Framework Implementation</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <ChartBar className="w-4 h-4 text-accent" />
                    <span className="text-sm"><strong>Challenge:</strong> Regulatory compliance for AI systems across 15 countries</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Brain className="w-4 h-4 text-secondary" />
                    <span className="text-sm"><strong>Solution:</strong> Comprehensive AI ethics framework with automated compliance monitoring</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <TrendUp className="w-4 h-4 text-primary" />
                    <span className="text-sm"><strong>Result:</strong> $50M in avoided penalties, 40% faster product launches</span>
                  </div>
                </div>
                <div className="bg-secondary/10 p-3 rounded-lg">
                  <p className="text-sm text-muted-foreground italic">
                    "Dr. Dédé's framework didn't just ensure compliance—it became our competitive advantage in regulated markets."
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-accent">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary">Healthcare System</Badge>
                  <div className="text-2xl font-bold text-accent">$25M</div>
                </div>
                <CardTitle>Digital Equity in Healthcare AI</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Heart className="w-4 h-4 text-accent" />
                    <span className="text-sm"><strong>Challenge:</strong> AI diagnostic tools showing bias against minority populations</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Eye className="w-4 h-4 text-secondary" />
                    <span className="text-sm"><strong>Solution:</strong> Bias audit, dataset diversification, inclusive algorithm design</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-primary" />
                    <span className="text-sm"><strong>Result:</strong> 30% improvement in diagnostic accuracy, $25M cost savings</span>
                  </div>
                </div>
                <div className="bg-accent/10 p-3 rounded-lg">
                  <p className="text-sm text-muted-foreground italic">
                    "The equity-focused approach didn't just improve outcomes—it reduced liability and opened new patient markets."
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-card border border-border rounded-lg">
              <div className="text-3xl font-bold text-primary mb-2">95%</div>
              <div className="text-sm text-muted-foreground">Compliance Success Rate</div>
            </div>
            <div className="text-center p-6 bg-card border border-border rounded-lg">
              <div className="text-3xl font-bold text-secondary mb-2">18</div>
              <div className="text-sm text-muted-foreground">Months Average ROI Timeline</div>
            </div>
            <div className="text-center p-6 bg-card border border-border rounded-lg">
              <div className="text-3xl font-bold text-accent mb-2">$200M+</div>
              <div className="text-sm text-muted-foreground">Total Client Value Created</div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced About Section */}
      <section id="about" className="py-16 bg-secondary/30">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                  Founder & Principal Consultant
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Dr. Dédé Wilson, PhD
                </h2>
                <p className="text-xl text-accent font-medium">
                  AI Governance Expert • Digital Equity Pioneer • Tech Ethics Thought Leader
                </p>
              </div>
              
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Dr. Dédé Wilson is a globally recognized authority in AI governance, tech equity, and ethical technology 
                  implementation. As the founder of incluu consultancy, she has transformed how Fortune 500 companies, 
                  government agencies, and educational institutions approach inclusive innovation and regulatory compliance.
                </p>
                <p>
                  With a PhD in Technology Policy and over 15 years of hands-on experience, Dr. Wilson has delivered 
                  quantifiable business impact: <strong className="text-primary">$200+ million in regulatory cost savings</strong> 
                  and <strong className="text-accent">$500+ million in new market opportunities</strong> through strategic 
                  tech equity implementations.
                </p>
                <p>
                  Her pioneering frameworks for AI governance and algorithmic bias detection are used across industries, 
                  from healthcare and finance to education and government. Dr. Wilson's work ensures that cutting-edge 
                  technology serves diverse communities while driving sustainable business growth.
                </p>
                <p>
                  A sought-after keynote speaker and thought leader, Dr. Wilson has presented at major conferences 
                  including AI Summit, Tech Inclusion, and the World Economic Forum. Her expertise has been featured 
                  in Harvard Business Review, MIT Technology Review, and leading industry publications.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <GraduationCap className="w-5 h-5 text-accent" />
                    <span className="text-sm text-muted-foreground">PhD Technology Policy</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Building className="w-5 h-5 text-accent" />
                    <span className="text-sm text-muted-foreground">Fortune 500 Experience</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Scales className="w-5 h-5 text-accent" />
                    <span className="text-sm text-muted-foreground">Certified Ethics Practitioner</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Globe className="w-5 h-5 text-accent" />
                    <span className="text-sm text-muted-foreground">Global Expertise</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Trophy className="w-5 h-5 text-accent" />
                    <span className="text-sm text-muted-foreground">Industry Recognition</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <TrendUp className="w-5 h-5 text-accent" />
                    <span className="text-sm text-muted-foreground">Proven ROI Results</span>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Button 
                  variant="outline" 
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  onClick={() => window.open('https://github.com/dedet2/dr-dede', '_blank')}
                >
                  View Full Bio & Credentials
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 rounded-2xl flex items-center justify-center overflow-hidden border border-border shadow-lg">
                {/* Placeholder for actual headshot */}
                <div className="text-center space-y-4">
                  <div className="w-32 h-32 bg-gradient-to-br from-primary via-secondary to-accent rounded-full mx-auto flex items-center justify-center shadow-lg">
                    <Users className="w-16 h-16 text-white" weight="light" />
                  </div>
                  <div className="space-y-2">
                    <p className="text-foreground text-lg font-semibold">Dr. Dédé Wilson</p>
                    <p className="text-muted-foreground text-sm">Founder & Principal Consultant</p>
                    <p className="text-muted-foreground text-xs">incluu consultancy</p>
                  </div>
                </div>
              </div>
              
              {/* Floating credentials */}
              <div className="absolute -bottom-4 left-4 right-4">
                <div className="bg-card border border-border rounded-lg px-4 py-3 shadow-md">
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center space-x-4">
                      <span>PhD • 15+ Years</span>
                      <span>•</span>
                      <span>$200M+ Impact</span>
                    </div>
                    <Badge variant="secondary" className="bg-accent/10 text-accent text-xs">
                      Black-Woman-Owned
                    </Badge>
                  </div>
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
                  "Dr. Dédé Wilson's transformative approach to educational technology equity has revolutionized 
                  how we think about inclusive learning environments. Her frameworks don't just ensure compliance—they 
                  drive innovation and measurable student success outcomes."
                </blockquote>
                <div className="text-sm text-muted-foreground">
                  <strong>The Burke School</strong> - Independent Educational Institution
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
                  "incluu's strategic AI governance framework prevented $15M in potential compliance penalties 
                  and opened three new market segments worth $200M+ in revenue potential. Dr. Dédé Wilson's expertise 
                  transforms regulatory challenges into sustainable competitive advantages."
                </blockquote>
                <div className="text-sm text-muted-foreground">
                  <strong>Global Technology Corporation</strong> - Fortune 500 Client
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
                  "The executive workshop series transformed our leadership team's understanding of tech equity 
                  and AI governance. Dr. Dédé Wilson's practical frameworks are now integral to our strategic 
                  decision-making and risk management processes."
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
              Ready to Drive Measurable Impact?
            </h2>
            <p className="text-xl text-muted-foreground">
              Partner with Dr. Dédé Wilson to transform your AI governance and tech equity strategy
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card>
              <CardHeader>
                <CardTitle>Executive Consultation</CardTitle>
                <CardDescription>
                  Connect with Dr. Dédé Wilson to discuss your strategic needs. Response within 24 hours.
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
                    <Label htmlFor="message">Consultation Details *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      placeholder="Describe your AI governance challenges, compliance needs, or tech equity goals. Include your timeline and any specific requirements..."
                      rows={5}
                    />
                    <p className="text-xs text-muted-foreground">
                      The more details you provide, the better Dr. Dédé can prepare for your consultation call.
                    </p>
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
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded flex items-center justify-center shadow-sm">
                <span className="text-white font-bold text-sm">i</span>
              </div>
              <div>
                <span className="text-lg font-bold text-primary">incluu</span>
                <div className="text-xs text-muted-foreground font-medium -mt-0.5 uppercase tracking-wide">consultancy</div>
              </div>
            </div>
            
            <div className="text-sm text-muted-foreground text-center md:text-right">
              <p>© 2024 incluu consultancy. Proudly Black-Woman-Owned.</p>
              <p>Expert AI governance and tech equity solutions • Delivering measurable business impact worldwide.</p>
              <p className="text-xs mt-1">
                <a href="mailto:hello@incluu.us" className="text-accent hover:text-accent/80 transition-colors">
                  hello@incluu.us
                </a> • 
                <a href="https://github.com/dedet2/dr-dede" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80 transition-colors ml-1">
                  Dr. Dédé's Full Bio
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App