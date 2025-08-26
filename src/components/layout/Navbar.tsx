import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { BookOpen, Brain, Users, FileText, BarChart3, MessageSquare, Calendar, User, LogOut, Settings } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { toast } from 'sonner';

const Navbar = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    {
      title: 'Study Materials',
      href: '/study-materials',
      icon: BookOpen,
      children: [
        { 
          title: 'Physics', 
          href: '/study-materials/physics',
          description: 'Mechanics, Electromagnetism, Thermodynamics, Optics, Modern Physics'
        },
        { 
          title: 'Chemistry', 
          href: '/study-materials/chemistry',
          description: 'Organic, Inorganic, Physical Chemistry, Chemical Bonding'
        },
        { 
          title: 'Mathematics', 
          href: '/study-materials/mathematics',
          description: 'Calculus, Algebra, Trigonometry, Coordinate Geometry, Vectors'
        },
        { 
          title: 'Video Lectures', 
          href: '/study-materials/videos',
          description: 'Interactive video lessons for all subjects'
        },
        { 
          title: 'Physics Formulas', 
          href: '/study-materials/formulas/physics',
          description: 'Mechanics, Waves, Thermodynamics, Electromagnetism formulas'
        },
        { 
          title: 'Chemistry Formulas', 
          href: '/study-materials/formulas/chemistry',
          description: 'Organic reactions, Inorganic compounds, Physical chemistry'
        },
        { 
          title: 'Mathematics Formulas', 
          href: '/study-materials/formulas/mathematics',
          description: 'Calculus, Trigonometry, Algebra, Coordinate geometry'
        },
        { 
          title: 'Sample Papers', 
          href: '/study-materials/papers',
          description: 'Previous year papers and practice sets'
        },
      ],
    },
    {
      title: 'Mock Tests',
      href: '/mock-tests',
      icon: Brain,
      children: [
        { 
          title: 'JEE Main', 
          href: '/mock-tests/jee-main',
          description: 'Full-length JEE Main practice tests with detailed analysis and performance insights'
        },
        { 
          title: 'JEE Advanced', 
          href: '/mock-tests/jee-advanced',
          description: 'JEE Advanced pattern tests for IIT preparation with comprehensive solutions'
        },
        { 
          title: 'MH CET', 
          href: '/mock-tests/cet',
          description: 'Maharashtra CET mock tests for engineering & medical with state-specific patterns'
        },
        { 
          title: 'BITSAT', 
          href: '/mock-tests/bitsat',
          description: 'BITS Admission Test practice papers with adaptive testing simulation'
        },
        { 
          title: 'WBJEE', 
          href: '/mock-tests/wbjee',
          description: 'West Bengal Joint Entrance Exam mock tests with detailed topic analysis'
        },
        { 
          title: 'KCET', 
          href: '/mock-tests/kcet',
          description: 'Karnataka Common Entrance Test practice with state board focus'
        },
        { 
          title: 'COMEDK', 
          href: '/mock-tests/comedk',
          description: 'COMEDK UGET mock tests for engineering with difficulty progression'
        },
        { 
          title: 'VITEEE', 
          href: '/mock-tests/viteee',
          description: 'VIT Engineering Entrance Exam tests with computer-based simulation'
        },
      ],
    },
    {
      title: 'Question Bank',
      href: '/question-bank',
      icon: FileText,
    },
    {
      title: 'Progress Tracker',
      href: '/progress-tracker',
      icon: BarChart3,
    },
    {
      title: 'Discussion Forum',
      href: '/discussion-forum',
      icon: MessageSquare,
    },
    {
      title: 'Blog',
      href: '/blog',
      icon: Calendar,
    },
    {
      title: 'Counseling',
      href: '/counseling',
      icon: Users,
    },
  ];

  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              JEE-CET Prep Hub
            </span>
          </Link>

          {/* Navigation Menu */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              {navItems.map((item) => (
                <NavigationMenuItem key={item.href}>
                  {item.children ? (
                    <>
                      <NavigationMenuTrigger
                        className={`${isActive(item.href) ? 'text-blue-600' : ''}`}
                      >
                        <item.icon className="w-4 h-4 mr-2" />
                        {item.title}
                      </NavigationMenuTrigger>
                       <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                          {item.children.map((child) => (
                            <li key={child.href}>
                              <NavigationMenuLink asChild>
                                <Link
                                  to={child.href}
                                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                >
                                  <div className="text-sm font-medium leading-none">{child.title}</div>
                                  {child.description && (
                                    <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                                      {child.description}
                                    </p>
                                  )}
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <NavigationMenuLink asChild>
                      <Link
                        to={item.href}
                        className={`flex items-center px-4 py-2 text-sm font-medium transition-colors hover:text-blue-600 ${
                          isActive(item.href) ? 'text-blue-600' : ''
                        }`}
                      >
                        <item.icon className="w-4 h-4 mr-2" />
                        {item.title}
                      </Link>
                    </NavigationMenuLink>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={user?.avatar} alt={`@${user?.firstName}`} />
                      <AvatarFallback>{user?.firstName?.charAt(0)}{user?.lastName?.charAt(0)}</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuItem onClick={() => navigate('/dashboard')}>
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigate('/dashboard')}>
                    <BarChart3 className="mr-2 h-4 w-4" />
                    <span>Dashboard</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => {
                    logout();
                    toast.success('Logged out successfully');
                    navigate('/');
                  }}>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>
                <Button variant="ghost" asChild>
                  <Link to="/login">Login</Link>
                </Button>
                <Button asChild>
                  <Link to="/register">Get Started</Link>
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 