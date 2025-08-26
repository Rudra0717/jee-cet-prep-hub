import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, 
  Target, 
  Users, 
  Trophy, 
  Star, 
  ArrowRight,
  CheckCircle,
  Clock,
  TrendingUp,
  Award
} from "lucide-react";
import heroEducation from "@/assets/hero-education.jpg";
import studyMaterials from "@/assets/study-materials.jpg";
import mockTests from "@/assets/mock-tests.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Comprehensive Study Materials",
      description: "Access detailed notes, formulas, and concepts for Physics, Chemistry, and Mathematics",
      image: studyMaterials,
      link: "/study-materials"
    },
    {
      icon: Target,
      title: "Mock Tests & Practice",
      description: "Take unlimited mock tests with detailed analysis and performance tracking",
      image: mockTests,
      link: "/mock-tests"
    },
    {
      icon: Users,
      title: "Expert Guidance",
      description: "Get guidance from experienced teachers and mentors",
      link: "/counseling"
    },
    {
      icon: TrendingUp,
      title: "Progress Tracking",
      description: "Monitor your preparation with detailed analytics and insights",
      link: "/progress-tracker"
    }
  ];

  const stats = [
    { number: "50K+", label: "Students Enrolled", icon: Users },
    { number: "500+", label: "Mock Tests", icon: Target },
    { number: "95%", label: "Success Rate", icon: Trophy },
    { number: "24/7", label: "Support", icon: Clock }
  ];

  const testimonials = [
    {
      name: "Arjun Patel",
      exam: "JEE Advanced 2024",
      rank: "AIR 156",
      quote: "The mock tests and study materials helped me crack JEE with confidence!"
    },
    {
      name: "Priya Sharma", 
      exam: "MHT CET 2024",
      rank: "Rank 89",
      quote: "Amazing platform with comprehensive preparation materials and expert guidance."
    },
    {
      name: "Rahul Kumar",
      exam: "JEE Main 2024", 
      rank: "99.8 Percentile",
      quote: "The progress tracking feature kept me motivated throughout my preparation."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-accent/10 py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="outline" className="w-fit">
                  <Trophy className="w-3 h-3 mr-1" />
                  #1 JEE & CET Preparation Platform
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Master <span className="text-primary">JEE & CET</span> with 
                  <br />Expert Guidance
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Join thousands of successful students who cracked JEE and CET exams with our comprehensive study materials, mock tests, and expert mentorship.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="text-lg px-8">
                  <Link to="/register">
                    Start Free Trial
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg px-8">
                  <Link to="/mock-tests">
                    Take Mock Test
                  </Link>
                </Button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center space-y-2">
                    <stat.icon className="w-8 h-8 mx-auto text-primary" />
                    <div className="text-2xl font-bold">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img 
                src={heroEducation} 
                alt="Students studying for JEE and CET exams" 
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-semibold">98% Success Rate</span>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 bg-background border p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-primary" />
                  <span className="font-semibold">Expert Mentors</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="mb-4">Features</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold">
              Everything You Need to Succeed
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive platform provides all the tools and resources you need to excel in JEE and CET examinations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {feature.image && (
                    <img 
                      src={feature.image} 
                      alt={feature.title}
                      className="rounded-lg w-full h-32 object-cover"
                    />
                  )}
                  <CardDescription className="text-center">
                    {feature.description}
                  </CardDescription>
                  <Button asChild variant="outline" className="w-full">
                    <Link to={feature.link}>
                      Explore More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="mb-4">Success Stories</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold">
              What Our Students Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join thousands of students who have achieved their dreams with our platform.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                      <CardDescription>{testimonial.exam}</CardDescription>
                    </div>
                    <Badge variant="secondary">{testimonial.rank}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic">
                    "{testimonial.quote}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Ready to Start Your Success Journey?
            </h2>
            <p className="text-lg opacity-90">
              Join thousands of students who have already started their preparation with us. Get access to premium study materials, mock tests, and expert guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-lg px-8">
                <Link to="/register">
                  Get Started Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link to="/study-materials">
                  Explore Materials
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;