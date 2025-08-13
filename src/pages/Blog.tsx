import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  Search, 
  Calendar, 
  User, 
  Eye, 
  Clock,
  BookOpen,
  Brain,
  Target,
  TrendingUp,
  Star
} from 'lucide-react';

// Import blog images
import blogJeeStrategy from '@/assets/blog-jee-strategy.jpg';
import blogPhysicsFormulas from '@/assets/blog-physics-formulas.jpg';
import blogChemistry from '@/assets/blog-chemistry.jpg';
import blogMathematics from '@/assets/blog-mathematics.jpg';
import blogTimeManagement from '@/assets/blog-time-management.jpg';
import blogJeeComparison from '@/assets/blog-jee-comparison.jpg';

const Blog = () => {
  const articles = [
    {
      id: 1,
      title: 'Complete JEE Main 2024 Preparation Strategy',
      excerpt: 'A comprehensive guide to prepare for JEE Main 2024 with effective study plans, important topics, and time management tips.',
      author: 'Dr. Rajesh Kumar',
      category: 'Study Tips',
      readTime: '8 min read',
      views: 1250,
      date: '2024-01-15',
      image: blogJeeStrategy,
      featured: true,
      tags: ['JEE Main', 'Study Strategy', 'Preparation']
    },
    {
      id: 2,
      title: 'Top 10 Physics Formulas You Must Remember',
      excerpt: 'Essential physics formulas that frequently appear in JEE and CET exams with examples and applications.',
      author: 'Prof. Meera Patel',
      category: 'Physics',
      readTime: '5 min read',
      views: 890,
      date: '2024-01-12',
      image: blogPhysicsFormulas,
      featured: false,
      tags: ['Physics', 'Formulas', 'JEE']
    },
    {
      id: 3,
      title: 'Organic Chemistry: Common Mistakes to Avoid',
      excerpt: 'Learn about the most common mistakes students make in organic chemistry and how to avoid them.',
      author: 'Dr. Amit Singh',
      category: 'Chemistry',
      readTime: '6 min read',
      views: 756,
      date: '2024-01-10',
      image: blogChemistry,
      featured: false,
      tags: ['Chemistry', 'Organic Chemistry', 'Mistakes']
    },
    {
      id: 4,
      title: 'Mathematics: Calculus Integration Techniques',
      excerpt: 'Master calculus integration with step-by-step techniques and practice problems for JEE preparation.',
      author: 'Prof. Neha Sharma',
      category: 'Mathematics',
      readTime: '10 min read',
      views: 634,
      date: '2024-01-08',
      image: blogMathematics,
      featured: false,
      tags: ['Mathematics', 'Calculus', 'Integration']
    },
    {
      id: 5,
      title: 'Time Management Tips for JEE Aspirants',
      excerpt: 'Effective time management strategies to balance studies, mock tests, and revision for JEE preparation.',
      author: 'Dr. Priya Verma',
      category: 'Study Tips',
      readTime: '7 min read',
      views: 1120,
      date: '2024-01-05',
      image: blogTimeManagement,
      featured: false,
      tags: ['Time Management', 'Study Tips', 'JEE']
    },
    {
      id: 6,
      title: 'JEE Advanced vs JEE Main: Key Differences',
      excerpt: 'Understanding the differences between JEE Main and JEE Advanced in terms of difficulty, pattern, and preparation.',
      author: 'Prof. Rahul Gupta',
      category: 'Exam Guide',
      readTime: '9 min read',
      views: 1450,
      date: '2024-01-03',
      image: blogJeeComparison,
      featured: false,
      tags: ['JEE Advanced', 'JEE Main', 'Comparison']
    }
  ];

  const categories = [
    { name: 'Study Tips', count: 25, icon: BookOpen },
    { name: 'Physics', count: 18, icon: Brain },
    { name: 'Chemistry', count: 22, icon: Brain },
    { name: 'Mathematics', count: 20, icon: Brain },
    { name: 'Exam Guide', count: 15, icon: Target },
    { name: 'Success Stories', count: 12, icon: TrendingUp }
  ];

  const featuredArticle = articles.find(article => article.featured);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Blog & Resources</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Get the latest study tips, exam updates, and expert guidance for your JEE/CET preparation.
        </p>
      </div>

      {/* Search */}
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <div className="relative max-w-md mx-auto">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Search articles..."
            className="pl-10"
          />
        </div>
      </div>

      {/* Featured Article */}
      {featuredArticle && (
        <Card className="overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="aspect-video bg-gray-100 lg:aspect-square">
              <img
                src={featuredArticle.image}
                alt={featuredArticle.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 lg:p-8 flex flex-col justify-center">
              <div className="flex items-center space-x-2 mb-4">
                <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                  Featured
                </Badge>
                <Badge variant="outline">{featuredArticle.category}</Badge>
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold mb-4">{featuredArticle.title}</h2>
              <p className="text-gray-600 mb-6">{featuredArticle.excerpt}</p>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    {featuredArticle.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {featuredArticle.date}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {featuredArticle.readTime}
                  </div>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Eye className="w-4 h-4 mr-1" />
                  {featuredArticle.views}
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                {featuredArticle.tags.map((tag, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700">
                Read Full Article
              </Button>
            </div>
          </div>
        </Card>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-3">
          <h2 className="text-2xl font-bold mb-6">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {articles.filter(article => !article.featured).map((article) => (
              <Card key={article.id} className="hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gray-100 rounded-t-lg">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover rounded-t-lg"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <Badge variant="outline">{article.category}</Badge>
                    <span className="text-sm text-gray-500">{article.readTime}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 line-clamp-2">{article.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{article.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Avatar className="w-6 h-6">
                        <AvatarFallback>{article.author[0]}</AvatarFallback>
                      </Avatar>
                      <span className="text-sm text-gray-500">{article.author}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Eye className="w-4 h-4 mr-1" />
                      {article.views}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          {/* Categories */}
          <Card>
            <CardHeader>
              <CardTitle>Categories</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {categories.map((category, index) => (
                  <div key={index} className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 cursor-pointer">
                    <div className="flex items-center space-x-2">
                      <category.icon className="w-4 h-4 text-gray-500" />
                      <span className="text-sm">{category.name}</span>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {category.count}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Popular Articles */}
          <Card>
            <CardHeader>
              <CardTitle>Popular Articles</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {articles.slice(0, 3).map((article) => (
                  <div key={article.id} className="flex items-start space-x-3">
                    <div className="w-16 h-12 bg-gray-100 rounded flex-shrink-0">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover rounded"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-medium line-clamp-2 mb-1">{article.title}</h4>
                      <div className="flex items-center text-xs text-gray-500">
                        <Eye className="w-3 h-3 mr-1" />
                        {article.views}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Newsletter */}
          <Card>
            <CardHeader>
              <CardTitle>Stay Updated</CardTitle>
              <CardDescription>
                Get the latest articles and exam updates
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input placeholder="Enter your email" />
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Subscribe
              </Button>
            </CardContent>
          </Card>

          {/* Tags */}
          <Card>
            <CardHeader>
              <CardTitle>Popular Tags</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">JEE Main</Badge>
                <Badge variant="outline">Study Tips</Badge>
                <Badge variant="outline">Physics</Badge>
                <Badge variant="outline">Chemistry</Badge>
                <Badge variant="outline">Mathematics</Badge>
                <Badge variant="outline">Mock Tests</Badge>
                <Badge variant="outline">Time Management</Badge>
                <Badge variant="outline">Success Stories</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Blog; 