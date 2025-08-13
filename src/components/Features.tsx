import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BookOpen, Target, TrendingUp, Users, Clock, Award } from "lucide-react";
import studyMaterials from "@/assets/study-materials.jpg";
import mockTests from "@/assets/mock-tests.jpg";

const Features = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Comprehensive Study Materials",
      description: "Subject-wise notes, video lectures, and PDFs for Physics, Chemistry, and Mathematics",
      image: studyMaterials,
      color: "text-primary"
    },
    {
      icon: Target,
      title: "Mock Tests & Practice",
      description: "Full-length mock tests with JEE/CET patterns, previous year papers, and detailed solutions",
      image: mockTests,
      color: "text-secondary"
    },
    {
      icon: TrendingUp,
      title: "Progress Analytics",
      description: "AI-powered performance analysis, rank prediction, and personalized weak area identification",
      color: "text-accent"
    },
    {
      icon: Users,
      title: "Expert Mentorship",
      description: "Live doubt solving sessions, Q&A forums, and guidance from experienced educators",
      color: "text-primary"
    },
    {
      icon: Clock,
      title: "Flexible Learning",
      description: "Study at your own pace with 24/7 access to all materials and practice tests",
      color: "text-secondary"
    },
    {
      icon: Award,
      title: "Success Tracking",
      description: "Monitor your progress, compare with toppers, and get strategic preparation plans",
      color: "text-accent"
    }
  ];

  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Everything You Need to{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Succeed
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive platform provides all the tools and resources you need to excel in JEE, CET, and other engineering entrance exams.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/20">
              <div className="space-y-4">
                {feature.image && (
                  <div className="rounded-lg overflow-hidden mb-4">
                    <img 
                      src={feature.image} 
                      alt={feature.title}
                      className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                
                <div className={`inline-flex p-3 rounded-lg bg-background ${feature.color}`}>
                  <feature.icon className="h-6 w-6" />
                </div>
                
                <h3 className="text-xl font-semibold text-card-foreground">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="hero" size="lg" className="text-lg px-8 py-6">
            Explore All Features
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Features;