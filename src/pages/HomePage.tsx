import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  BookOpen, 
  Brain, 
  Users, 
  Trophy, 
  Play, 
  FileText, 
  BarChart3, 
  MessageSquare,
  ArrowRight,
  CheckCircle,
  Star,
  Target,
  Clock,
  Award
} from 'lucide-react';
import { toast } from 'sonner';

const HomePage = () => {
  const features = [
    {
      icon: BookOpen,
      title: 'Comprehensive Study Materials',
      description: 'Access high-quality notes, PDFs, and video lectures for Physics, Chemistry, and Mathematics.',
      color: 'text-blue-600'
    },
    {
      icon: Brain,
      title: 'AI-Powered Mock Tests',
      description: 'Practice with adaptive mock tests that match JEE Main, Advanced, and CET patterns.',
      color: 'text-purple-600'
    },
    {
      icon: BarChart3,
      title: 'Progress Analytics',
      description: 'Track your performance with detailed analytics and personalized improvement suggestions.',
      color: 'text-green-600'
    },
    {
      icon: MessageSquare,
      title: 'Expert Doubt Solving',
      description: 'Get your doubts cleared by subject experts and connect with fellow aspirants.',
      color: 'text-orange-600'
    },
    {
      icon: Trophy,
      title: 'Rank Predictor',
      description: 'Predict your JEE rank based on mock test performance and get college recommendations.',
      color: 'text-red-600'
    },
    {
      icon: Users,
      title: 'Career Counseling',
      description: 'Get guidance on college selection, branch preferences, and career paths.',
      color: 'text-indigo-600'
    }
  ];

  const stats = [
    { number: '50K+', label: 'Active Students', icon: Users },
    { number: '1000+', label: 'Mock Tests', icon: Brain },
    { number: '95%', label: 'Success Rate', icon: Trophy },
    { number: '24/7', label: 'Expert Support', icon: MessageSquare }
  ];

  const testimonials = [
    {
      name: 'Rahul Sharma',
      rank: 'AIR 156',
      college: 'IIT Bombay',
      text: 'The mock tests and study materials helped me understand my weak areas and improve significantly.',
      rating: 5
    },
    {
      name: 'Priya Patel',
      rank: 'AIR 234',
      college: 'IIT Delhi',
      text: 'The doubt solving forum and expert guidance were game-changers for my preparation.',
      rating: 5
    },
    {
      name: 'Amit Kumar',
      rank: 'AIR 567',
      college: 'NIT Surathkal',
      text: 'The progress tracker helped me stay motivated and focused throughout my preparation.',
      rating: 5
    }
  ];

  const handleGetStarted = () => {
    toast.success('Welcome to JEE-CET Prep Hub! Let\'s start your preparation journey.');
  };

  const handleFeatureClick = (feature: any) => {
    toast.info(`Exploring ${feature.title}...`);
  };

  const handleTestimonialClick = (testimonial: any) => {
    toast.success(`Thank you for sharing your success story, ${testimonial.name}!`);
  };

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-4xl mx-auto px-4">
          <Badge variant="secondary" className="mb-4">
            🚀 Trusted by 50,000+ Students
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Master JEE & CET
            <br />
            <span className="text-gray-900">Like a Pro</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Your comprehensive platform for engineering entrance exam preparation. 
            Access quality study materials, AI-powered mock tests, and expert guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700" onClick={handleGetStarted}>
              <Link to="/register">
                Start Free Trial
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/study-materials">
                <Play className="mr-2 w-4 h-4" />
                Explore Materials
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-2">
                  <stat.icon className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything You Need to Succeed</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From comprehensive study materials to AI-powered analytics, we've got you covered
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg bg-gray-100`}>
                      <feature.icon className={`w-6 h-6 ${feature.color}`} />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Success Journey?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of students who have already achieved their dream ranks
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/mock-tests">
                Take Free Mock Test
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-blue-600">
              <Link to="/study-materials">
                Browse Study Materials
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Students Say</h2>
            <p className="text-xl text-gray-600">
              Success stories from students who achieved their dream ranks
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  <CardDescription>
                    <Badge variant="secondary" className="mr-2">{testimonial.rank}</Badge>
                    {testimonial.college}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose JEE-CET Prep Hub?</h2>
            <p className="text-xl text-gray-600">
              We provide the most comprehensive and effective preparation platform
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Target className="w-12 h-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Targeted Preparation</h3>
              <p className="text-gray-600">Focus on your weak areas with personalized study plans</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Clock className="w-12 h-12 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Access</h3>
              <p className="text-gray-600">Study anytime, anywhere with our mobile-friendly platform</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Award className="w-12 h-12 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Proven Results</h3>
              <p className="text-gray-600">95% success rate with thousands of successful students</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <CheckCircle className="w-12 h-12 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Support</h3>
              <p className="text-gray-600">Get help from subject experts and mentors</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage; 