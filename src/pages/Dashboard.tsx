import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { 
  BarChart3, 
  BookOpen, 
  Brain, 
  Calendar, 
  Clock, 
  Target, 
  Trophy, 
  TrendingUp,
  Users,
  FileText,
  MessageSquare,
  Play,
  ArrowRight,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

const Dashboard = () => {
  const userStats = {
    totalStudyTime: '45 hours',
    testsCompleted: 12,
    averageScore: 78,
    rank: 156,
    streak: 7,
    totalQuestions: 450
  };

  const recentActivities = [
    {
      id: 1,
      type: 'test',
      title: 'Completed JEE Main Mock Test 3',
      score: 85,
      time: '2 hours ago',
      icon: Brain
    },
    {
      id: 2,
      type: 'study',
      title: 'Studied Physics - Electromagnetism',
      duration: '45 minutes',
      time: '4 hours ago',
      icon: BookOpen
    },
    {
      id: 3,
      type: 'question',
      title: 'Asked question in Discussion Forum',
      topic: 'Organic Chemistry',
      time: '6 hours ago',
      icon: MessageSquare
    },
    {
      id: 4,
      type: 'test',
      title: 'Completed Chemistry Quiz',
      score: 92,
      time: '1 day ago',
      icon: Brain
    }
  ];

  const upcomingTests = [
    {
      id: 1,
      title: 'JEE Main Full Length Test 4',
      date: '2024-01-20',
      time: '10:00 AM',
      duration: '3 hours',
      questions: 90
    },
    {
      id: 2,
      title: 'Physics Chapter Test - Optics',
      date: '2024-01-22',
      time: '2:00 PM',
      duration: '1 hour',
      questions: 30
    }
  ];

  const weakAreas = [
    { subject: 'Physics', topic: 'Electromagnetism', score: 65 },
    { subject: 'Chemistry', topic: 'Organic Chemistry', score: 72 },
    { subject: 'Mathematics', topic: 'Calculus', score: 68 }
  ];

  const quickActions = [
    {
      title: 'Start Mock Test',
      description: 'Take a practice test',
      icon: Play,
      color: 'bg-blue-500',
      href: '/mock-tests'
    },
    {
      title: 'Study Materials',
      description: 'Access study resources',
      icon: BookOpen,
      color: 'bg-green-500',
      href: '/study-materials'
    },
    {
      title: 'Ask Question',
      description: 'Get help from experts',
      icon: MessageSquare,
      color: 'bg-purple-500',
      href: '/discussion-forum'
    },
    {
      title: 'View Progress',
      description: 'Check your analytics',
      icon: BarChart3,
      color: 'bg-orange-500',
      href: '/progress-tracker'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-lg">
        <h1 className="text-3xl font-bold mb-2">Welcome back, Rahul!</h1>
        <p className="text-blue-100">
          You're making great progress. Keep up the excellent work!
        </p>
        <div className="mt-4 flex items-center space-x-4 text-sm">
          <div className="flex items-center">
            <Target className="w-4 h-4 mr-1" />
            Target: AIR 100
          </div>
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-1" />
            JEE Main: 45 days
          </div>
          <div className="flex items-center">
            <Trophy className="w-4 h-4 mr-1" />
            Current Rank: AIR 156
          </div>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Study Time</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{userStats.totalStudyTime}</div>
            <p className="text-xs text-muted-foreground">
              +2.5 hours this week
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tests Completed</CardTitle>
            <Brain className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{userStats.testsCompleted}</div>
            <p className="text-xs text-muted-foreground">
              +3 this week
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Score</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{userStats.averageScore}%</div>
            <p className="text-xs text-muted-foreground">
              +5% from last week
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Study Streak</CardTitle>
            <Trophy className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{userStats.streak} days</div>
            <p className="text-xs text-muted-foreground">
              Keep it up!
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Quick Actions */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>
                Get started with your preparation
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {quickActions.map((action, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="w-full justify-start h-auto p-4"
                >
                  <div className={`w-8 h-8 rounded-lg ${action.color} flex items-center justify-center mr-3`}>
                    <action.icon className="w-4 h-4 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="font-medium">{action.title}</div>
                    <div className="text-sm text-muted-foreground">{action.description}</div>
                  </div>
                </Button>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Recent Activities */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Recent Activities</CardTitle>
              <CardDescription>
                Your latest study activities and achievements
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivities.map((activity) => (
                  <div key={activity.id} className="flex items-center space-x-4 p-3 rounded-lg border">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <activity.icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium">{activity.title}</div>
                      <div className="text-sm text-muted-foreground">
                        {activity.type === 'test' && `Score: ${activity.score}%`}
                        {activity.type === 'study' && `Duration: ${activity.duration}`}
                        {activity.type === 'question' && `Topic: ${activity.topic}`}
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {activity.time}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Weak Areas */}
        <Card>
          <CardHeader>
            <CardTitle>Areas for Improvement</CardTitle>
            <CardDescription>
              Focus on these topics to improve your performance
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {weakAreas.map((area, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-medium">{area.subject}</div>
                      <div className="text-sm text-muted-foreground">{area.topic}</div>
                    </div>
                    <Badge variant="secondary">{area.score}%</Badge>
                  </div>
                  <Progress value={area.score} className="h-2" />
                </div>
              ))}
            </div>
            <Button className="w-full mt-4" variant="outline">
              View Detailed Analysis
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </CardContent>
        </Card>

        {/* Upcoming Tests */}
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Tests</CardTitle>
            <CardDescription>
              Your scheduled mock tests and quizzes
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingTests.map((test) => (
                <div key={test.id} className="p-4 border rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <div className="font-medium">{test.title}</div>
                    <Badge variant="outline">{test.date}</Badge>
                  </div>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <div>Time: {test.time}</div>
                    <div>Duration: {test.duration}</div>
                    <div>Questions: {test.questions}</div>
                  </div>
                  <Button size="sm" className="mt-3">
                    <Calendar className="w-4 h-4 mr-2" />
                    Schedule Reminder
                  </Button>
                </div>
              ))}
            </div>
            <Button className="w-full mt-4" variant="outline">
              View All Tests
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Progress Overview */}
      <Card>
        <CardHeader>
          <CardTitle>Overall Progress</CardTitle>
          <CardDescription>
            Your preparation progress across all subjects
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-medium">Physics</span>
                <span className="text-sm text-muted-foreground">75%</span>
              </div>
              <Progress value={75} className="h-2" />
              <div className="text-sm text-muted-foreground">
                150/200 topics completed
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-medium">Chemistry</span>
                <span className="text-sm text-muted-foreground">68%</span>
              </div>
              <Progress value={68} className="h-2" />
              <div className="text-sm text-muted-foreground">
                136/200 topics completed
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-medium">Mathematics</span>
                <span className="text-sm text-muted-foreground">82%</span>
              </div>
              <Progress value={82} className="h-2" />
              <div className="text-sm text-muted-foreground">
                164/200 topics completed
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard; 