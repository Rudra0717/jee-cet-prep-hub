import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  MessageSquare, 
  Search, 
  Plus, 
  ThumbsUp, 
  MessageCircle, 
  Clock, 
  User, 
  Filter,
  BookOpen,
  Brain,
  FileText
} from 'lucide-react';
import { toast } from 'sonner';
import { useAuth } from '../contexts/AuthContext';

const DiscussionForum = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('all');
  const [selectedFilter, setSelectedFilter] = useState('latest');
  const [showAskQuestion, setShowAskQuestion] = useState(false);
  const [questionData, setQuestionData] = useState({
    title: '',
    content: '',
    subject: '',
    tags: ''
  });
  const { isAuthenticated } = useAuth();

  const subjects = [
    { id: 'physics', name: 'Physics', icon: BookOpen, color: 'text-blue-600' },
    { id: 'chemistry', name: 'Chemistry', icon: Brain, color: 'text-green-600' },
    { id: 'mathematics', name: 'Mathematics', icon: FileText, color: 'text-purple-600' }
  ];

  const questions = [
    {
      id: '1',
      title: 'How to solve projectile motion problems in JEE?',
      content: 'I\'m having trouble understanding the concept of projectile motion. Can someone explain the key formulas and approach to solve such problems?',
      author: {
        name: 'Rahul Sharma',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
        isExpert: false
      },
      subject: 'physics',
      tags: ['projectile-motion', 'mechanics', 'jee-main'],
      answers: 8,
      votes: 15,
      views: 234,
      isResolved: true,
      createdAt: '2 hours ago',
      answersList: [
        {
          id: '1',
          content: 'Projectile motion can be broken down into horizontal and vertical components. The key formulas are...',
          author: {
            name: 'Dr. Priya Patel',
            avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
            isExpert: true
          },
          votes: 12,
          isAccepted: true,
          createdAt: '1 hour ago'
        }
      ]
    },
    {
      id: '2',
      title: 'Organic Chemistry: SN1 vs SN2 reactions',
      content: 'I\'m confused about when to use SN1 vs SN2 mechanisms. What are the key differences and factors that determine which mechanism occurs?',
      author: {
        name: 'Amit Kumar',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
        isExpert: false
      },
      subject: 'chemistry',
      tags: ['organic-chemistry', 'reaction-mechanisms', 'jee-advanced'],
      answers: 5,
      votes: 8,
      views: 156,
      isResolved: false,
      createdAt: '4 hours ago',
      answersList: []
    },
    {
      id: '3',
      title: 'Integration by parts technique',
      content: 'Can someone explain the integration by parts formula and when to use it? I\'m struggling with choosing u and dv.',
      author: {
        name: 'Sneha Reddy',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
        isExpert: false
      },
      subject: 'mathematics',
      tags: ['calculus', 'integration', 'jee-main'],
      answers: 3,
      votes: 6,
      views: 98,
      isResolved: false,
      createdAt: '6 hours ago',
      answersList: []
    }
  ];

  const handleAskQuestion = () => {
    if (!isAuthenticated) {
      toast.error('Please login to ask a question');
      return;
    }
    setShowAskQuestion(true);
  };

  const handleSubmitQuestion = () => {
    if (!questionData.title || !questionData.content || !questionData.subject) {
      toast.error('Please fill in all required fields');
      return;
    }
    
    toast.success('Question submitted successfully!');
    setShowAskQuestion(false);
    setQuestionData({ title: '', content: '', subject: '', tags: '' });
  };

  const handleVote = (questionId: string, type: 'up' | 'down') => {
    toast.success(`Vote ${type === 'up' ? 'upvoted' : 'downvoted'} successfully!`);
  };

  const handleAnswer = (questionId: string) => {
    if (!isAuthenticated) {
      toast.error('Please login to answer questions');
      return;
    }
    toast.info('Opening answer form...');
  };

  const filteredQuestions = questions.filter(question => {
    const matchesSearch = question.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         question.content.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSubject = selectedSubject === 'all' || question.subject === selectedSubject;
    return matchesSearch && matchesSubject;
  });

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Discussion Forum</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Ask questions, share knowledge, and connect with fellow aspirants and experts. 
          Get your doubts cleared and help others in their preparation journey.
        </p>
      </div>

      {/* Ask Question Button */}
      <div className="flex justify-center">
        <Button size="lg" onClick={handleAskQuestion} className="bg-gradient-to-r from-blue-600 to-purple-600">
          <Plus className="mr-2 w-4 h-4" />
          Ask a Question
        </Button>
      </div>

      {/* Ask Question Modal */}
      {showAskQuestion && (
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Ask a Question</CardTitle>
            <CardDescription>Share your doubt and get help from the community</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium">Question Title *</label>
              <Input
                placeholder="Enter a clear, descriptive title"
                value={questionData.title}
                onChange={(e) => setQuestionData({ ...questionData, title: e.target.value })}
              />
            </div>
            <div>
              <label className="text-sm font-medium">Question Details *</label>
              <Textarea
                placeholder="Describe your question in detail..."
                rows={4}
                value={questionData.content}
                onChange={(e) => setQuestionData({ ...questionData, content: e.target.value })}
              />
            </div>
            <div>
              <label className="text-sm font-medium">Subject *</label>
              <Select value={questionData.subject} onValueChange={(value) => setQuestionData({ ...questionData, subject: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Select subject" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="physics">Physics</SelectItem>
                  <SelectItem value="chemistry">Chemistry</SelectItem>
                  <SelectItem value="mathematics">Mathematics</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-sm font-medium">Tags</label>
              <Input
                placeholder="Add tags separated by commas (e.g., mechanics, jee-main)"
                value={questionData.tags}
                onChange={(e) => setQuestionData({ ...questionData, tags: e.target.value })}
              />
            </div>
            <div className="flex gap-2">
              <Button onClick={handleSubmitQuestion}>Submit Question</Button>
              <Button variant="outline" onClick={() => setShowAskQuestion(false)}>Cancel</Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Filters */}
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          <Select value={selectedSubject} onValueChange={setSelectedSubject}>
            <SelectTrigger className="w-full md:w-48">
              <SelectValue placeholder="Select Subject" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Subjects</SelectItem>
              <SelectItem value="physics">Physics</SelectItem>
              <SelectItem value="chemistry">Chemistry</SelectItem>
              <SelectItem value="mathematics">Mathematics</SelectItem>
            </SelectContent>
          </Select>
          <Select value={selectedFilter} onValueChange={setSelectedFilter}>
            <SelectTrigger className="w-full md:w-48">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="latest">Latest</SelectItem>
              <SelectItem value="popular">Most Popular</SelectItem>
              <SelectItem value="unanswered">Unanswered</SelectItem>
              <SelectItem value="resolved">Resolved</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Subject Tabs */}
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="all">All Questions</TabsTrigger>
          <TabsTrigger value="physics">Physics</TabsTrigger>
          <TabsTrigger value="chemistry">Chemistry</TabsTrigger>
          <TabsTrigger value="mathematics">Mathematics</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-6">
          {/* Questions List */}
          <div className="space-y-4">
            {filteredQuestions.map((question) => (
              <Card key={question.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    {/* Vote Section */}
                    <div className="flex flex-col items-center space-y-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleVote(question.id, 'up')}
                      >
                        <ThumbsUp className="w-4 h-4" />
                      </Button>
                      <span className="text-sm font-medium">{question.votes}</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleVote(question.id, 'down')}
                      >
                        <ThumbsUp className="w-4 h-4 rotate-180" />
                      </Button>
                    </div>

                    {/* Question Content */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-lg font-semibold hover:text-blue-600 cursor-pointer">
                          {question.title}
                        </h3>
                        {question.isResolved && (
                          <Badge variant="secondary" className="bg-green-100 text-green-800">
                            Resolved
                          </Badge>
                        )}
                      </div>
                      
                      <p className="text-gray-600 mb-3 line-clamp-2">{question.content}</p>
                      
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                        <div className="flex items-center gap-1">
                          <MessageCircle className="w-4 h-4" />
                          {question.answers} answers
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {question.createdAt}
                        </div>
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {question.views} views
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Avatar className="w-6 h-6">
                            <AvatarImage src={question.author.avatar} />
                            <AvatarFallback>{question.author.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <span className="text-sm font-medium">{question.author.name}</span>
                          {question.author.isExpert && (
                            <Badge variant="secondary" className="bg-blue-100 text-blue-800 text-xs">
                              Expert
                            </Badge>
                          )}
                        </div>
                        
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline" onClick={() => handleAnswer(question.id)}>
                            Answer
                          </Button>
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex gap-2 mt-3">
                        {question.tags.map((tag, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DiscussionForum; 