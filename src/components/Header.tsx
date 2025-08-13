import { Button } from "@/components/ui/button";
import { GraduationCap, Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-lg">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">JEE CET Prep Hub</h1>
              <p className="text-xs text-muted-foreground">Excellence in Engineering</p>
            </div>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors font-medium">
              Home
            </a>
            <a href="#subjects" className="text-foreground hover:text-primary transition-colors font-medium">
              Subjects
            </a>
            <a href="#mock-tests" className="text-foreground hover:text-primary transition-colors font-medium">
              Mock Tests
            </a>
            <a href="#study-materials" className="text-foreground hover:text-primary transition-colors font-medium">
              Study Materials
            </a>
            <a href="#results" className="text-foreground hover:text-primary transition-colors font-medium">
              Results
            </a>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="hidden sm:inline-flex">
              Login
            </Button>
            <Button variant="default">
              Get Started
            </Button>
            
            {/* Mobile Menu Button */}
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;