import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Atom, Calculator, Zap } from "lucide-react";

const Subjects = () => {
  const subjects = [
    {
      icon: Atom,
      title: "Physics",
      description: "Mechanics, Thermodynamics, Optics, Modern Physics, and more",
      topics: ["Kinematics", "Electrostatics", "Waves", "Nuclear Physics"],
      color: "text-primary",
      bgColor: "bg-primary/10",
      borderColor: "border-primary/20"
    },
    {
      icon: Calculator,
      title: "Chemistry", 
      description: "Organic, Inorganic, Physical Chemistry with detailed explanations",
      topics: ["Organic Reactions", "Periodic Table", "Chemical Bonding", "Thermochemistry"],
      color: "text-secondary",
      bgColor: "bg-secondary/10", 
      borderColor: "border-secondary/20"
    },
    {
      icon: Zap,
      title: "Mathematics",
      description: "Calculus, Algebra, Trigonometry, Coordinate Geometry, and more",
      topics: ["Differential Calculus", "Matrices", "Probability", "3D Geometry"],
      color: "text-accent",
      bgColor: "bg-accent/10",
      borderColor: "border-accent/20"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Master All{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              PCM Subjects
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive coverage of Physics, Chemistry, and Mathematics with topic-wise breakdown and practice questions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {subjects.map((subject, index) => (
            <Card key={index} className={`p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 ${subject.borderColor} ${subject.bgColor}`}>
              <div className="space-y-6">
                <div className={`inline-flex p-4 rounded-full bg-background ${subject.color} mx-auto`}>
                  <subject.icon className="h-8 w-8" />
                </div>
                
                <h3 className="text-2xl font-bold text-card-foreground">
                  {subject.title}
                </h3>
                
                <p className="text-muted-foreground">
                  {subject.description}
                </p>

                <div className="space-y-2">
                  <h4 className="font-semibold text-sm text-card-foreground">Key Topics:</h4>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {subject.topics.map((topic, topicIndex) => (
                      <span 
                        key={topicIndex}
                        className="px-3 py-1 bg-background rounded-full text-xs font-medium text-muted-foreground border"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                <Button variant="outline" className="w-full">
                  Start Learning
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Ready to Begin Your Journey?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of students who have successfully cracked JEE and CET with our proven methodology and comprehensive study materials.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="text-lg px-8 py-6">
              Start Free Trial
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              Take Mock Test
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subjects;