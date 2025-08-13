import { Button } from "@/components/ui/button";
import heroEducation from "@/assets/hero-education.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-background via-primary/5 to-accent/10 flex items-center">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                Master{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  JEE & CET
                </span>{" "}
                with Confidence
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Unlock your potential with comprehensive study materials, mock tests, and expert guidance. 
                Join thousands of students achieving their engineering dreams.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                Start Free Practice
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                View Study Materials
              </Button>
            </div>
            
            <div className="flex items-center gap-8 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">50K+</div>
                <div className="text-sm text-muted-foreground">Students</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary">10K+</div>
                <div className="text-sm text-muted-foreground">Mock Tests</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">95%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={heroEducation} 
                alt="Students studying for engineering entrance exams"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-6 -left-6 bg-card p-4 rounded-xl shadow-lg border">
              <div className="text-sm font-medium text-card-foreground">Physics</div>
              <div className="text-2xl font-bold text-primary">85%</div>
              <div className="text-xs text-muted-foreground">Completed</div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-card p-4 rounded-xl shadow-lg border">
              <div className="text-sm font-medium text-card-foreground">Next Mock Test</div>
              <div className="text-lg font-bold text-accent">Tomorrow</div>
              <div className="text-xs text-muted-foreground">JEE Main Pattern</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;