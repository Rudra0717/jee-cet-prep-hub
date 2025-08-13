import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  BarChart3, 
  TrendingUp, 
  Target, 
  Clock, 
  Trophy, 
  Calendar,
  BookOpen,
  Brain,
  Users,
  ArrowUp,
  ArrowDown,
  CheckCircle
} from 'lucide-react';

const ProgressTracker = () => {
  const overallStats = {
    totalStudyTime: '45 hours',
    testsCompleted: 12,
    averageScore: 78,
    rank: 156,
    improvement: '+5%',
    questionsAttempted: 450
  };

  const subjectProgress = [
    {
      subject: 'Physics',
      progress: 75,
      completed: 150,
      total: 200,
      score: 82,
      trend: 'up'
    },
    {
      subject: 'Chemistry',
      progress: 68,
      completed: 136,
      total: 200,
      score: 75,
      trend: 'up'
    },
    {
      subject: 'Mathematics',
      progress: 82,
      completed: 164,
      total: 200,
      score: 88,
      trend: 'up'
    }
  ];

  const recentTests = [
    {
      id: 1,
      title: 'JEE Main Mock Test 3',
      date: '2024-01-15',
      score: 85,
      rank: 234,
      improvement: '+8%'
    },
    {
      id: 2,
      title: 'Physics Chapter Test',
      date: '2024-01-12',
      score: 92,
      rank: 156,
      improvement: '+5%'
    },
    {
      id: 3,
      title: 'Chemistry Quiz',
      date: '2024-01-10',
      score: 78,
      rank: 345,
      improvement: '+3%'
    }
  ];

  const weakTopics = [
    { topic: 'Electromagnetism', subject: 'Physics', score: 65, questions: 25 },
    { topic: 'Organic Chemistry', subject: 'Chemistry', score: 72, questions: 30 },
    { topic: 'Calculus', subject: 'Mathematics', score: 68, questions: 28 }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Progress Tracker</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Track your preparation progress, analyze performance, and identify areas for improvement.
        </p>
      </div>

      {/* Overall Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Study Time</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{overallStats.totalStudyTime}</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <TrendingUp className="w-3 h-3 mr-1 text-green-600" />
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
            <div className="text-2xl font-bold">{overallStats.testsCompleted}</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <TrendingUp className="w-3 h-3 mr-1 text-green-600" />
              +3 this week
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Score</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{overallStats.averageScore}%</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <TrendingUp className="w-3 h-3 mr-1 text-green-600" />
              {overallStats.improvement} from last week
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Current Rank</CardTitle>
            <Trophy className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">AIR {overallStats.rank}</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <TrendingUp className="w-3 h-3 mr-1 text-green-600" />
              Improved by 15 ranks
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Subject Progress */}
        <Card>
          <CardHeader>
            <CardTitle>Subject Progress</CardTitle>
            <CardDescription>
              Your progress across all subjects
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {subjectProgress.map((subject, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-medium">{subject.subject}</div>
                      <div className="text-sm text-muted-foreground">
                        {subject.completed}/{subject.total} topics completed
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">{subject.score}%</div>
                      <div className="text-sm text-muted-foreground flex items-center">
                        {subject.trend === 'up' ? (
                          <ArrowUp className="w-3 h-3 mr-1 text-green-600" />
                        ) : (
                          <ArrowDown className="w-3 h-3 mr-1 text-red-600" />
                        )}
                        {subject.trend === 'up' ? 'Improving' : 'Declining'}
                      </div>
                    </div>
                  </div>
                  <Progress value={subject.progress} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Test Performance */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Test Performance</CardTitle>
            <CardDescription>
              Your latest test results and improvements
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentTests.map((test) => (
                <div key={test.id} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex-1">
                    <div className="font-medium">{test.title}</div>
                    <div className="text-sm text-muted-foreground">{test.date}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">{test.score}%</div>
                    <div className="text-sm text-muted-foreground">
                      Rank: {test.rank}
                    </div>
                    <div className="text-sm text-green-600 flex items-center">
                      <ArrowUp className="w-3 h-3 mr-1" />
                      {test.improvement}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Weak Areas */}
      <Card>
        <CardHeader>
          <CardTitle>Areas for Improvement</CardTitle>
          <CardDescription>
            Focus on these topics to boost your performance
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {weakTopics.map((topic, index) => (
              <div key={index} className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <div className="font-medium">{topic.topic}</div>
                    <div className="text-sm text-muted-foreground">{topic.subject}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">{topic.score}%</div>
                    <div className="text-sm text-muted-foreground">
                      {topic.questions} questions
                    </div>
                  </div>
                </div>
                <Progress value={topic.score} className="h-2" />
                <Button size="sm" className="w-full mt-3" variant="outline">
                  Practice {topic.topic}
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Detailed Analytics */}
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="subjects">Subjects</TabsTrigger>
          <TabsTrigger value="tests">Tests</TabsTrigger>
          <TabsTrigger value="timeline">Timeline</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Study Time Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Physics</span>
                    <span className="font-medium">18 hours (40%)</span>
                  </div>
                  <Progress value={40} className="h-2" />
                  
                  <div className="flex justify-between items-center">
                    <span>Chemistry</span>
                    <span className="font-medium">15 hours (33%)</span>
                  </div>
                  <Progress value={33} className="h-2" />
                  
                  <div className="flex justify-between items-center">
                    <span>Mathematics</span>
                    <span className="font-medium">12 hours (27%)</span>
                  </div>
                  <Progress value={27} className="h-2" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Performance Trends</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Week 1</span>
                    <span className="font-medium">72%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Week 2</span>
                    <span className="font-medium">75%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Week 3</span>
                    <span className="font-medium">78%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Week 4</span>
                    <span className="font-medium">82%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="subjects" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {subjectProgress.map((subject, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{subject.subject}</CardTitle>
                  <CardDescription>Detailed analysis</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold">{subject.score}%</div>
                      <div className="text-sm text-muted-foreground">Average Score</div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Topics Completed</span>
                        <span>{subject.completed}/{subject.total}</span>
                      </div>
                      <Progress value={subject.progress} className="h-2" />
                    </div>
                    <Button className="w-full" variant="outline">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="tests" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Test History</CardTitle>
              <CardDescription>All your test attempts and results</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentTests.map((test) => (
                  <div key={test.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Brain className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="font-medium">{test.title}</div>
                        <div className="text-sm text-muted-foreground">{test.date}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">{test.score}%</div>
                      <div className="text-sm text-muted-foreground">Rank: {test.rank}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="timeline" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Study Timeline</CardTitle>
              <CardDescription>Your study journey over time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <div className="font-medium">Completed Physics Mechanics</div>
                    <div className="text-sm text-muted-foreground">2 days ago</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <Brain className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-medium">Scored 85% in JEE Main Mock Test</div>
                    <div className="text-sm text-muted-foreground">1 week ago</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <BookOpen className="w-4 h-4 text-purple-600" />
                  </div>
                  <div>
                    <div className="font-medium">Started Chemistry Organic</div>
                    <div className="text-sm text-muted-foreground">2 weeks ago</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProgressTracker; 