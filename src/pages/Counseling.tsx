import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  Users, 
  Building, 
  Target, 
  Star, 
  MapPin,
  Phone,
  Mail,
  Calendar,
  Clock,
  TrendingUp,
  Award,
  BookOpen
} from 'lucide-react';

const Counseling = () => {
  const counselors = [
    {
      id: 1,
      name: 'Dr. Rajesh Kumar',
      specialization: 'IIT Counseling',
      experience: '15+ years',
      rating: 4.9,
      reviews: 156,
      avatar: '/api/placeholder/80/80',
      online: true,
      fee: '₹2000/session'
    },
    {
      id: 2,
      name: 'Prof. Meera Patel',
      specialization: 'Career Guidance',
      experience: '12+ years',
      rating: 4.8,
      reviews: 134,
      avatar: '/api/placeholder/80/80',
      online: false,
      fee: '₹1800/session'
    },
    {
      id: 3,
      name: 'Dr. Amit Singh',
      specialization: 'NIT Counseling',
      experience: '10+ years',
      rating: 4.9,
      reviews: 189,
      avatar: '/api/placeholder/80/80',
      online: true,
      fee: '₹1500/session'
    }
  ];

  const colleges = [
    {
      id: 1,
      name: 'IIT Bombay',
      location: 'Mumbai, Maharashtra',
      rank: 1,
      cutoff: 'AIR 100-500',
      branches: ['Computer Science', 'Mechanical', 'Electrical'],
      rating: 4.9,
      image: '/api/placeholder/200/120'
    },
    {
      id: 2,
      name: 'IIT Delhi',
      location: 'New Delhi',
      rank: 2,
      cutoff: 'AIR 200-800',
      branches: ['Computer Science', 'Chemical', 'Civil'],
      rating: 4.8,
      image: '/api/placeholder/200/120'
    },
    {
      id: 3,
      name: 'NIT Surathkal',
      location: 'Karnataka',
      rank: 15,
      cutoff: 'AIR 500-2000',
      branches: ['Computer Science', 'Information Technology'],
      rating: 4.6,
      image: '/api/placeholder/200/120'
    }
  ];

  const services = [
    {
      title: 'College Selection',
      description: 'Get personalized college recommendations based on your rank and preferences',
      icon: Building,
      price: '₹1500'
    },
    {
      title: 'Career Guidance',
      description: 'Expert advice on choosing the right branch and career path',
      icon: Target,
      price: '₹2000'
    },
    {
      title: 'Application Support',
      description: 'Complete assistance with college applications and documentation',
      icon: BookOpen,
      price: '₹1000'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Career Counseling</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Get expert guidance for college selection, career planning, and admission assistance from experienced counselors.
        </p>
      </div>

      {/* Services Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <service.icon className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-blue-600">{service.price}</span>
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                  Book Now
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Expert Counselors */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Expert Counselors</CardTitle>
              <CardDescription>
                Connect with experienced counselors for personalized guidance
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {counselors.map((counselor) => (
                  <div key={counselor.id} className="flex items-start space-x-4 p-4 border rounded-lg">
                    <Avatar className="w-16 h-16">
                      <AvatarImage src={counselor.avatar} />
                      <AvatarFallback>{counselor.name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-lg font-semibold">{counselor.name}</h3>
                          <p className="text-gray-600">{counselor.specialization}</p>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center space-x-1 mb-1">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span className="font-medium">{counselor.rating}</span>
                            <span className="text-gray-500">({counselor.reviews})</span>
                          </div>
                          <div className={`w-2 h-2 rounded-full ${counselor.online ? 'bg-green-500' : 'bg-gray-300'}`} />
                        </div>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                        <span>Experience: {counselor.experience}</span>
                        <span>Fee: {counselor.fee}</span>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                          Book Session
                        </Button>
                        <Button size="sm" variant="outline">
                          View Profile
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                <Target className="w-4 h-4 mr-2" />
                Get College Recommendations
              </Button>
              <Button className="w-full" variant="outline">
                <Calendar className="w-4 h-4 mr-2" />
                Schedule Free Consultation
              </Button>
              <Button className="w-full" variant="outline">
                <BookOpen className="w-4 h-4 mr-2" />
                Download Brochure
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact Us</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-gray-500" />
                <span className="text-sm">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-gray-500" />
                <span className="text-sm">counseling@jee-cet-prep.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-4 h-4 text-gray-500" />
                <span className="text-sm">Mon-Sat: 9 AM - 6 PM</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* College Recommendations */}
      <Card>
        <CardHeader>
          <CardTitle>Top College Recommendations</CardTitle>
          <CardDescription>
            Based on your current rank and preferences
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {colleges.map((college) => (
              <div key={college.id} className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gray-100">
                  <img
                    src={college.image}
                    alt={college.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold">{college.name}</h3>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium">{college.rating}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
                    <MapPin className="w-4 h-4" />
                    <span>{college.location}</span>
                  </div>
                  <div className="space-y-2 mb-3">
                    <div className="text-sm">
                      <span className="font-medium">Rank:</span> #{college.rank}
                    </div>
                    <div className="text-sm">
                      <span className="font-medium">Cutoff:</span> {college.cutoff}
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm font-medium">Popular Branches:</div>
                    <div className="flex flex-wrap gap-1">
                      {college.branches.map((branch, index) => (
                        <span key={index} className="text-xs bg-gray-100 px-2 py-1 rounded">
                          {branch}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Button className="w-full mt-3" size="sm">
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Success Stories */}
      <Card>
        <CardHeader>
          <CardTitle>Success Stories</CardTitle>
          <CardDescription>
            Hear from students who achieved their dream colleges
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 border rounded-lg">
              <div className="flex items-center space-x-3 mb-3">
                <Avatar>
                  <AvatarImage src="/api/placeholder/40/40" />
                  <AvatarFallback>R</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">Rahul Sharma</div>
                  <div className="text-sm text-gray-500">AIR 156 → IIT Bombay</div>
                </div>
              </div>
              <p className="text-gray-600 text-sm">
                "The counseling session helped me understand the right approach for JEE preparation. 
                I got into my dream college with Computer Science branch."
              </p>
            </div>
            <div className="p-4 border rounded-lg">
              <div className="flex items-center space-x-3 mb-3">
                <Avatar>
                  <AvatarImage src="/api/placeholder/40/40" />
                  <AvatarFallback>P</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">Priya Patel</div>
                  <div className="text-sm text-gray-500">AIR 234 → IIT Delhi</div>
                </div>
              </div>
              <p className="text-gray-600 text-sm">
                "Expert guidance on branch selection and career planning was invaluable. 
                Now I'm pursuing Chemical Engineering at IIT Delhi."
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
            <div className="text-sm text-gray-600">Students Counseled</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">95%</div>
            <div className="text-sm text-gray-600">Success Rate</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
            <div className="text-sm text-gray-600">Expert Counselors</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">100+</div>
            <div className="text-sm text-gray-600">Colleges Partnered</div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Counseling; 