import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Search, 
  Filter, 
  BookOpen, 
  Target, 
  Clock, 
  Users,
  Play,
  FileText,
  Brain
} from 'lucide-react';

const QuestionBank = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [selectedYear, setSelectedYear] = useState('all');

  const subjects = [
    { id: 'physics', name: 'Physics', color: 'text-blue-600', bgColor: 'bg-blue-50' },
    { id: 'chemistry', name: 'Chemistry', color: 'text-green-600', bgColor: 'bg-green-50' },
    { id: 'mathematics', name: 'Mathematics', color: 'text-purple-600', bgColor: 'bg-purple-50' }
  ];

  const questionSets = [
    {
      id: 1,
      title: 'JEE Main 2023 Physics Questions',
      subject: 'physics',
      year: '2023',
      exam: 'JEE Main',
      questions: 150,
      difficulty: 'medium',
      attempts: 1250,
      avgScore: 72,
      topics: ['Mechanics', 'Electromagnetism', 'Optics']
    },
    {
      id: 2,
      title: 'JEE Advanced 2022 Chemistry',
      subject: 'chemistry',
      year: '2022',
      exam: 'JEE Advanced',
      questions: 54,
      difficulty: 'hard',
      attempts: 890,
      avgScore: 65,
      topics: ['Organic Chemistry', 'Physical Chemistry']
    },
    {
      id: 3,
      title: 'CET 2023 Mathematics',
      subject: 'mathematics',
      year: '2023',
      exam: 'CET',
      questions: 80,
      difficulty: 'medium',
      attempts: 2100,
      avgScore: 78,
      topics: ['Calculus', 'Algebra', 'Geometry']
    },
    {
      id: 4,
      title: 'BITSAT 2023 Physics',
      subject: 'physics',
      year: '2023',
      exam: 'BITSAT',
      questions: 40,
      difficulty: 'easy',
      attempts: 750,
      avgScore: 85,
      topics: ['Mechanics', 'Thermodynamics']
    }
  ];

  const filteredSets = questionSets.filter(set => {
    const matchesSearch = set.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSubject = selectedSubject === 'all' || set.subject === selectedSubject;
    const matchesDifficulty = selectedDifficulty === 'all' || set.difficulty === selectedDifficulty;
    const matchesYear = selectedYear === 'all' || set.year === selectedYear;
    
    return matchesSearch && matchesSubject && matchesDifficulty && matchesYear;
  });

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Question Bank</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Practice with thousands of previous year questions from JEE, CET, and other engineering entrance exams.
        </p>
      </div>

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
              <SelectValue placeholder="Subject" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Subjects</SelectItem>
              <SelectItem value="physics">Physics</SelectItem>
              <SelectItem value="chemistry">Chemistry</SelectItem>
              <SelectItem value="mathematics">Mathematics</SelectItem>
            </SelectContent>
          </Select>
          <Select value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
            <SelectTrigger className="w-full md:w-48">
              <SelectValue placeholder="Difficulty" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Difficulties</SelectItem>
              <SelectItem value="easy">Easy</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
              <SelectItem value="hard">Hard</SelectItem>
            </SelectContent>
          </Select>
          <Select value={selectedYear} onValueChange={setSelectedYear}>
            <SelectTrigger className="w-full md:w-48">
              <SelectValue placeholder="Year" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Years</SelectItem>
              <SelectItem value="2023">2023</SelectItem>
              <SelectItem value="2022">2022</SelectItem>
              <SelectItem value="2021">2021</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Subject Tabs */}
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="all">All Subjects</TabsTrigger>
          <TabsTrigger value="physics">Physics</TabsTrigger>
          <TabsTrigger value="chemistry">Chemistry</TabsTrigger>
          <TabsTrigger value="mathematics">Mathematics</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-6">
          {/* Subject Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {subjects.map((subject) => (
              <Card key={subject.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className={`p-3 rounded-lg ${subject.bgColor}`}>
                      <BookOpen className={`w-6 h-6 ${subject.color}`} />
                    </div>
                    <div>
                      <CardTitle className={subject.color}>{subject.name}</CardTitle>
                      <CardDescription>Previous year questions</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Total Questions:</span>
                      <span className="font-semibold">1,250</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Years Covered:</span>
                      <span className="font-semibold">2018-2023</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Avg Difficulty:</span>
                      <span className="font-semibold">Medium</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Question Sets */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Question Sets</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredSets.map((set) => (
                <Card key={set.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-lg line-clamp-2">{set.title}</CardTitle>
                        <CardDescription className="mt-2">
                          {set.topics.join(', ')}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between text-sm">
                        <span className="flex items-center">
                          <Target className="w-4 h-4 mr-1" />
                          {set.questions} questions
                        </span>
                        <span className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          {set.attempts} attempts
                        </span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm capitalize">{set.difficulty}</span>
                        <div className="text-sm text-gray-600">
                          {set.avgScore}% avg score
                        </div>
                      </div>

                      <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700">
                        <Play className="w-4 h-4 mr-1" />
                        Start Practice
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </TabsContent>

        {subjects.map((subject) => (
          <TabsContent key={subject.id} value={subject.id} className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">{subject.name} Question Bank</h2>
              <p className="text-gray-600 mb-4">
                Practice with {subject.name} questions from previous years' exams.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="flex justify-between">
                  <span>Total Questions:</span>
                  <span className="font-semibold">1,250</span>
                </div>
                <div className="flex justify-between">
                  <span>Years Covered:</span>
                  <span className="font-semibold">2018-2023</span>
                </div>
                <div className="flex justify-between">
                  <span>Exams:</span>
                  <span className="font-semibold">JEE, CET, BITSAT</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredSets
                .filter(set => set.subject === subject.id)
                .map((set) => (
                  <Card key={set.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-lg line-clamp-2">{set.title}</CardTitle>
                      <CardDescription>
                        {set.topics.join(', ')}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between text-sm">
                          <span className="flex items-center">
                            <Target className="w-4 h-4 mr-1" />
                            {set.questions} Questions
                          </span>
                          <span className="flex items-center">
                            <Users className="w-4 h-4 mr-1" />
                            {set.attempts} attempts
                          </span>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <span className="text-sm capitalize">{set.difficulty}</span>
                          <div className="text-sm text-gray-600">
                            {set.avgScore}% avg score
                          </div>
                        </div>

                        <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700">
                          <Play className="w-4 h-4 mr-1" />
                          Start Practice
                        </Button>
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
            <Brain className="w-6 h-6 mb-2" />
            Random Questions
          </Button>
          <Button variant="outline" className="h-16 flex flex-col items-center justify-center">
            <Clock className="w-6 h-6 mb-2" />
            Timed Practice
          </Button>
          <Button variant="outline" className="h-16 flex flex-col items-center justify-center">
            <FileText className="w-6 h-6 mb-2" />
            Download PDF
          </Button>
        </div>
      </div>
    </div>
  );
};

export default QuestionBank; 