import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Brain, 
  Clock, 
  Users, 
  Trophy, 
  Play, 
  Calendar,
  Target,
  BarChart3,
  Star,
  CheckCircle,
  AlertCircle,
  Timer
} from 'lucide-react';
import { mockTests as mockTestsData, formatNumber, getDifficultyColor } from '../utils/mockData';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

const MockTests = () => {
  const [selectedExam, setSelectedExam] = useState('all');
  const navigate = useNavigate();

  const examTypes = [
    {
      id: 'jee-main',
      name: 'JEE Main',
      description: 'Joint Entrance Examination Main',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      tests: 25,
      duration: '3 hours',
      questions: 90
    },
    {
      id: 'jee-advanced',
      name: 'JEE Advanced',
      description: 'Joint Entrance Examination Advanced',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      tests: 15,
      duration: '3 hours',
      questions: 54
    },
    {
      id: 'cet',
      name: 'CET',
      description: 'Common Entrance Test',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      tests: 20,
      duration: '2.5 hours',
      questions: 80
    },
    {
      id: 'bitsat',
      name: 'BITSAT',
      description: 'BITS Admission Test',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      tests: 12,
      duration: '3 hours',
      questions: 150
    }
  ];

  const mockTests = [
    {
      id: 1,
      title: 'JEE Main Full Length Test 1',
      examType: 'jee-main',
      difficulty: 'medium',
      duration: '3 hours',
      questions: 90,
      attempts: 1250,
      avgScore: 78,
      bestScore: 95,
      isCompleted: false,
      isRecommended: true,
      topics: ['Physics', 'Chemistry', 'Mathematics'],
      lastAttempted: null
    },
    {
      id: 2,
      title: 'JEE Advanced Practice Test 1',
      examType: 'jee-advanced',
      difficulty: 'hard',
      duration: '3 hours',
      questions: 54,
      attempts: 890,
      avgScore: 65,
      bestScore: 88,
      isCompleted: true,
      isRecommended: false,
      topics: ['Physics', 'Chemistry', 'Mathematics'],
      lastAttempted: '2024-01-15'
    },
    {
      id: 3,
      title: 'CET Mock Test 1',
      examType: 'cet',
      difficulty: 'easy',
      duration: '2.5 hours',
      questions: 80,
      attempts: 2100,
      avgScore: 82,
      bestScore: 96,
      isCompleted: false,
      isRecommended: true,
      topics: ['Physics', 'Chemistry', 'Mathematics'],
      lastAttempted: null
    },
    {
      id: 4,
      title: 'BITSAT Full Test 1',
      examType: 'bitsat',
      difficulty: 'medium',
      duration: '3 hours',
      questions: 150,
      attempts: 750,
      avgScore: 72,
      bestScore: 89,
      isCompleted: false,
      isRecommended: false,
      topics: ['Physics', 'Chemistry', 'Mathematics', 'English', 'Logical Reasoning'],
      lastAttempted: null
    },
    {
      id: 5,
      title: 'JEE Main Physics Focus Test',
      examType: 'jee-main',
      difficulty: 'medium',
      duration: '1 hour',
      questions: 30,
      attempts: 1800,
      avgScore: 75,
      bestScore: 93,
      isCompleted: false,
      isRecommended: true,
      topics: ['Physics'],
      lastAttempted: null
    },
    {
      id: 6,
      title: 'JEE Advanced Chemistry Test',
      examType: 'jee-advanced',
      difficulty: 'hard',
      duration: '1 hour',
      questions: 18,
      attempts: 650,
      avgScore: 68,
      bestScore: 85,
      isCompleted: true,
      isRecommended: false,
      topics: ['Chemistry'],
      lastAttempted: '2024-01-10'
    },
    {
      id: 7,
      title: 'JEE Main Mathematics Special',
      examType: 'jee-main',
      difficulty: 'medium',
      duration: '1.5 hours',
      questions: 30,
      attempts: 1200,
      avgScore: 73,
      bestScore: 91,
      isCompleted: false,
      isRecommended: true,
      topics: ['Mathematics'],
      lastAttempted: null
    },
    {
      id: 8,
      title: 'CET Physics + Chemistry Test',
      examType: 'cet',
      difficulty: 'easy',
      duration: '2 hours',
      questions: 60,
      attempts: 1600,
      avgScore: 79,
      bestScore: 94,
      isCompleted: false,
      isRecommended: false,
      topics: ['Physics', 'Chemistry'],
      lastAttempted: null
    },
    {
      id: 9,
      title: 'BITSAT Logical Reasoning Test',
      examType: 'bitsat',
      difficulty: 'easy',
      duration: '45 minutes',
      questions: 25,
      attempts: 890,
      avgScore: 81,
      bestScore: 96,
      isCompleted: true,
      isRecommended: false,
      topics: ['Logical Reasoning'],
      lastAttempted: '2024-01-08'
    },
    {
      id: 10,
      title: 'JEE Advanced Full Mock Test 2',
      examType: 'jee-advanced',
      difficulty: 'hard',
      duration: '3 hours',
      questions: 54,
      attempts: 720,
      avgScore: 62,
      bestScore: 86,
      isCompleted: false,
      isRecommended: true,
      topics: ['Physics', 'Chemistry', 'Mathematics'],
      lastAttempted: null
    },
    {
      id: 11,
      title: 'JEE Main Rapid Fire Test',
      examType: 'jee-main',
      difficulty: 'hard',
      duration: '2 hours',
      questions: 60,
      attempts: 980,
      avgScore: 69,
      bestScore: 87,
      isCompleted: false,
      isRecommended: true,
      topics: ['Physics', 'Chemistry', 'Mathematics'],
      lastAttempted: null
    },
    {
      id: 12,
      title: 'CET Mathematics Marathon',
      examType: 'cet',
      difficulty: 'medium',
      duration: '1.5 hours',
      questions: 50,
      attempts: 1350,
      avgScore: 74,
      bestScore: 92,
      isCompleted: false,
      isRecommended: false,
      topics: ['Mathematics'],
      lastAttempted: null
    },
    {
      id: 13,
      title: 'BITSAT English Proficiency Test',
      examType: 'bitsat',
      difficulty: 'easy',
      duration: '30 minutes',
      questions: 40,
      attempts: 1100,
      avgScore: 85,
      bestScore: 98,
      isCompleted: true,
      isRecommended: false,
      topics: ['English'],
      lastAttempted: '2024-01-12'
    },
    {
      id: 14,
      title: 'JEE Advanced Paper 1 Simulation',
      examType: 'jee-advanced',
      difficulty: 'hard',
      duration: '3 hours',
      questions: 54,
      attempts: 620,
      avgScore: 58,
      bestScore: 79,
      isCompleted: false,
      isRecommended: true,
      topics: ['Physics', 'Chemistry', 'Mathematics'],
      lastAttempted: null
    },
    {
      id: 15,
      title: 'JEE Main Chemistry Focused Test',
      examType: 'jee-main',
      difficulty: 'medium',
      duration: '1 hour',
      questions: 30,
      attempts: 1450,
      avgScore: 77,
      bestScore: 95,
      isCompleted: false,
      isRecommended: true,
      topics: ['Chemistry'],
      lastAttempted: null
    },
    {
      id: 16,
      title: 'CET Previous Year Paper 2023',
      examType: 'cet',
      difficulty: 'medium',
      duration: '2.5 hours',
      questions: 80,
      attempts: 1800,
      avgScore: 80,
      bestScore: 97,
      isCompleted: false,
      isRecommended: true,
      topics: ['Physics', 'Chemistry', 'Mathematics'],
      lastAttempted: null
    },
    {
      id: 17,
      title: 'BITSAT Mock Test Series 1',
      examType: 'bitsat',
      difficulty: 'medium',
      duration: '3 hours',
      questions: 150,
      attempts: 680,
      avgScore: 73,
      bestScore: 88,
      isCompleted: false,
      isRecommended: false,
      topics: ['Physics', 'Chemistry', 'Mathematics', 'English', 'Logical Reasoning'],
      lastAttempted: null
    },
    {
      id: 18,
      title: 'JEE Main Numerical Value Questions',
      examType: 'jee-main',
      difficulty: 'hard',
      duration: '1.5 hours',
      questions: 30,
      attempts: 950,
      avgScore: 65,
      bestScore: 83,
      isCompleted: true,
      isRecommended: false,
      topics: ['Physics', 'Chemistry', 'Mathematics'],
      lastAttempted: '2024-01-14'
    },
    {
      id: 19,
      title: 'JEE Advanced Paper 2 Practice',
      examType: 'jee-advanced',
      difficulty: 'hard',
      duration: '3 hours',
      questions: 54,
      attempts: 580,
      avgScore: 60,
      bestScore: 82,
      isCompleted: false,
      isRecommended: true,
      topics: ['Physics', 'Chemistry', 'Mathematics'],
      lastAttempted: null
    },
    {
      id: 20,
      title: 'CET Speed Test Challenge',
      examType: 'cet',
      difficulty: 'hard',
      duration: '2 hours',
      questions: 100,
      attempts: 1200,
      avgScore: 71,
      bestScore: 89,
      isCompleted: false,
      isRecommended: false,
      topics: ['Physics', 'Chemistry', 'Mathematics'],
      lastAttempted: null
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'text-green-600 bg-green-50';
      case 'medium': return 'text-yellow-600 bg-yellow-50';
      case 'hard': return 'text-red-600 bg-red-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getDifficultyIcon = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return '🟢';
      case 'medium': return '🟡';
      case 'hard': return '🔴';
      default: return '⚪';
    }
  };

  const filteredTests = selectedExam === 'all' 
    ? mockTests 
    : mockTests.filter(test => test.examType === selectedExam);

  const userStats = {
    totalTests: 45,
    completedTests: 12,
    averageScore: 78,
    bestRank: 156,
    totalTime: '36 hours'
  };

  const handleStartTest = (test: any) => {
    toast.success(`Starting ${test.title}...`);
    // Simulate test start
    setTimeout(() => {
      toast.success(`Test started! Good luck!`);
      // In a real app, this would navigate to the test interface
      navigate('/mock-tests/test/' + test.id);
    }, 1000);
  };

  const handleReviewTest = (test: any) => {
    toast.info(`Opening review for ${test.title}`);
    // Simulate review opening
    setTimeout(() => {
      toast.success(`Review opened!`);
      // In a real app, this would navigate to the review interface
      navigate('/mock-tests/review/' + test.id);
    }, 1000);
  };

  const handleBookmarkTest = (test: any) => {
    toast.success(`${test.title} added to bookmarks!`);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Mock Tests</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Practice with our comprehensive mock tests designed to match the actual exam patterns. 
          Track your progress and improve your performance.
        </p>
      </div>

      {/* User Stats */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Your Progress</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">{userStats.totalTests}</div>
            <div className="text-sm text-gray-600">Total Tests</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">{userStats.completedTests}</div>
            <div className="text-sm text-gray-600">Completed</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600">{userStats.averageScore}%</div>
            <div className="text-sm text-gray-600">Avg Score</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-600">AIR {userStats.bestRank}</div>
            <div className="text-sm text-gray-600">Best Rank</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-indigo-600">{userStats.totalTime}</div>
            <div className="text-sm text-gray-600">Total Time</div>
          </div>
        </div>
        <div className="mt-4">
          <div className="flex justify-between text-sm mb-1">
            <span>Progress</span>
            <span>{Math.round((userStats.completedTests / userStats.totalTests) * 100)}%</span>
          </div>
          <Progress value={(userStats.completedTests / userStats.totalTests) * 100} className="h-2" />
        </div>
      </div>

      {/* Exam Type Tabs */}
      <Tabs defaultValue="all" className="w-full" onValueChange={setSelectedExam}>
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="all">All Exams</TabsTrigger>
          <TabsTrigger value="jee-main">JEE Main</TabsTrigger>
          <TabsTrigger value="jee-advanced">JEE Advanced</TabsTrigger>
          <TabsTrigger value="cet">CET</TabsTrigger>
          <TabsTrigger value="bitsat">BITSAT</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-6">
          {/* Exam Type Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {examTypes.map((exam) => (
              <Card key={exam.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className={`p-3 rounded-lg ${exam.bgColor}`}>
                      <Brain className={`w-6 h-6 ${exam.color}`} />
                    </div>
                    <div>
                      <CardTitle className={exam.color}>{exam.name}</CardTitle>
                      <CardDescription>{exam.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Available Tests:</span>
                      <span className="font-semibold">{exam.tests}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Duration:</span>
                      <span className="font-semibold">{exam.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Questions:</span>
                      <span className="font-semibold">{exam.questions}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Tests Grid */}
          <div>
            <h2 className="text-2xl font-bold mb-6">All Mock Tests</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTests.map((test) => (
                <Card key={test.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-lg line-clamp-2">{test.title}</CardTitle>
                        <CardDescription className="mt-2">
                          {test.topics.join(', ')}
                        </CardDescription>
                      </div>
                      {test.isRecommended && (
                        <Badge variant="secondary" className="bg-green-100 text-green-800">
                          Recommended
                        </Badge>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between text-sm">
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {test.duration}
                        </span>
                        <span className="flex items-center">
                          <Target className="w-4 h-4 mr-1" />
                          {test.questions} Qs
                        </span>
                      </div>
                      
                      <div className="flex items-center justify-between text-sm">
                        <span className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          {test.attempts} attempts
                        </span>
                        <span className="flex items-center">
                          <Trophy className="w-4 h-4 mr-1" />
                          {test.bestScore}% best
                        </span>
                      </div>

                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className={getDifficultyColor(test.difficulty)}>
                          {getDifficultyIcon(test.difficulty)} {test.difficulty}
                        </Badge>
                        <div className="flex items-center text-sm text-gray-600">
                          <Star className="w-4 h-4 mr-1 text-yellow-400 fill-current" />
                          {test.avgScore}% avg
                        </div>
                      </div>

                      {test.isCompleted ? (
                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-green-600">
                            <CheckCircle className="w-4 h-4 mr-1" />
                            Completed
                          </div>
                          <Button size="sm" variant="outline">
                            Review
                          </Button>
                        </div>
                      ) : (
                        <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700">
                          <Play className="w-4 h-4 mr-1" />
                          Start Test
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </TabsContent>

        {examTypes.map((exam) => (
          <TabsContent key={exam.id} value={exam.id} className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">{exam.name} Mock Tests</h2>
              <p className="text-gray-600 mb-4">
                Practice with {exam.name} specific mock tests designed to match the actual exam pattern.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="flex justify-between">
                  <span>Test Duration:</span>
                  <span className="font-semibold">{exam.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span>Total Questions:</span>
                  <span className="font-semibold">{exam.questions}</span>
                </div>
                <div className="flex justify-between">
                  <span>Available Tests:</span>
                  <span className="font-semibold">{exam.tests}</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTests
                .filter(test => test.examType === exam.id)
                .map((test) => (
                  <Card key={test.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-lg line-clamp-2">{test.title}</CardTitle>
                      <CardDescription>
                        {test.topics.join(', ')}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between text-sm">
                          <span className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {test.duration}
                          </span>
                          <span className="flex items-center">
                            <Target className="w-4 h-4 mr-1" />
                            {test.questions} Questions
                          </span>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <Badge variant="outline" className={getDifficultyColor(test.difficulty)}>
                            {getDifficultyIcon(test.difficulty)} {test.difficulty}
                          </Badge>
                          <div className="flex items-center text-sm text-gray-600">
                            <Trophy className="w-4 h-4 mr-1" />
                            {test.bestScore}% best
                          </div>
                        </div>

                        {test.isCompleted ? (
                          <div className="flex items-center justify-between">
                            <div className="flex items-center text-green-600">
                              <CheckCircle className="w-4 h-4 mr-1" />
                              Completed
                            </div>
                            <Button size="sm" variant="outline">
                              Review
                            </Button>
                          </div>
                        ) : (
                          <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700">
                            <Play className="w-4 h-4 mr-1" />
                            Start Test
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      {/* Quick Actions */}
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <h3 className="text-xl font-bold mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Button variant="outline" className="h-16 flex flex-col items-center justify-center">
            <Calendar className="w-6 h-6 mb-2" />
            Schedule Test
          </Button>
          <Button variant="outline" className="h-16 flex flex-col items-center justify-center">
            <BarChart3 className="w-6 h-6 mb-2" />
            View Analytics
          </Button>
          <Button variant="outline" className="h-16 flex flex-col items-center justify-center">
            <Target className="w-6 h-6 mb-2" />
            Set Goals
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MockTests; 