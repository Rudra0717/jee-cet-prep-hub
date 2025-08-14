import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { 
  BookOpen, 
  Download, 
  Play, 
  Clock,
  Star,
  CheckCircle,
  Target,
  Zap
} from 'lucide-react';
import { toast } from 'sonner';

// Import images
import studyMathNotes from '@/assets/study-math-notes.jpg';
import videoLecture from '@/assets/video-lecture.jpg';

const MathematicsStudyMaterials = () => {
  const [completedTopics, setCompletedTopics] = useState<string[]>([]);

  const syllabus = [
    {
      unit: "Unit 1: Algebra",
      topics: [
        "Complex Numbers - Operations, polar form, De Moivre's theorem",
        "Quadratic Equations - Nature of roots, symmetric functions",
        "Sequences and Series - A.P., G.P., H.P., summation",
        "Permutations and Combinations - Counting principles",
        "Binomial Theorem - Expansions, coefficients, applications",
        "Mathematical Induction - Proof techniques"
      ],
      weightage: "25%",
      difficulty: "Medium"
    },
    {
      unit: "Unit 2: Trigonometry",
      topics: [
        "Trigonometric Functions - Ratios, identities, equations",
        "Inverse Trigonometric Functions - Domain, range, properties",
        "Heights and Distances - Applications of trigonometry"
      ],
      weightage: "15%",
      difficulty: "Medium"
    },
    {
      unit: "Unit 3: Coordinate Geometry",
      topics: [
        "Straight Lines - Equation forms, angle between lines",
        "Circles - Standard form, tangents, chords",
        "Parabola - Standard form, properties, applications",
        "Ellipse - Standard form, eccentricity, properties",
        "Hyperbola - Standard form, asymptotes, properties"
      ],
      weightage: "20%",
      difficulty: "Hard"
    },
    {
      unit: "Unit 4: Calculus",
      topics: [
        "Limits and Continuity - Evaluation, properties",
        "Differentiation - Rules, applications, maxima-minima",
        "Integration - Techniques, definite integrals, applications",
        "Differential Equations - Formation, solutions, applications"
      ],
      weightage: "25%",
      difficulty: "Hard"
    },
    {
      unit: "Unit 5: Vectors & 3D Geometry",
      topics: [
        "Vectors - Operations, scalar and vector products",
        "3D Geometry - Direction cosines, planes, lines",
        "Linear Programming - Feasible region, optimization"
      ],
      weightage: "10%",
      difficulty: "Medium"
    },
    {
      unit: "Unit 6: Probability & Statistics",
      topics: [
        "Probability - Basic concepts, conditional probability",
        "Random Variables - Distributions, expectation",
        "Statistics - Measures of central tendency, correlation"
      ],
      weightage: "5%",
      difficulty: "Easy"
    }
  ];

  const studyMaterials = [
    {
      id: 1,
      title: "Calculus Complete Guide",
      unit: "Unit 4",
      type: "pdf",
      description: "Comprehensive notes on limits, derivatives, and integrals",
      thumbnail: studyMathNotes,
      duration: "3 hours",
      rating: 4.9,
      downloads: 2100
    },
    {
      id: 2,
      title: "Coordinate Geometry Masterclass",
      unit: "Unit 3",
      type: "video",
      description: "Complete coverage of conic sections and analytical geometry",
      thumbnail: videoLecture,
      duration: "4 hours",
      rating: 4.8,
      downloads: 1420
    },
    {
      id: 3,
      title: "Algebra Problem Bank",
      unit: "Unit 1",
      type: "pdf",
      description: "1000+ problems on complex numbers, sequences, and permutations",
      thumbnail: studyMathNotes,
      duration: "4 hours",
      rating: 4.7,
      downloads: 1850
    },
    {
      id: 4,
      title: "Trigonometry Video Course",
      unit: "Unit 2",
      type: "video",
      description: "Complete trigonometry with identities and applications",
      thumbnail: videoLecture,
      duration: "2.5 hours",
      rating: 4.8,
      downloads: 950
    },
    {
      id: 5,
      title: "Vectors and 3D Geometry",
      unit: "Unit 5",
      type: "pdf",
      description: "Vector operations and three-dimensional geometry",
      thumbnail: studyMathNotes,
      duration: "2 hours",
      rating: 4.6,
      downloads: 890
    },
    {
      id: 6,
      title: "Probability Concepts",
      unit: "Unit 6",
      type: "video",
      description: "Probability theory with real-world applications",
      thumbnail: videoLecture,
      duration: "1.5 hours",
      rating: 4.7,
      downloads: 720
    }
  ];

  const toggleTopicCompletion = (topic: string) => {
    setCompletedTopics(prev => 
      prev.includes(topic) 
        ? prev.filter(t => t !== topic)
        : [...prev, topic]
    );
  };

  const handleDownload = (material: any) => {
    toast.success(`Downloading ${material.title}...`);
  };

  const handlePlay = (material: any) => {
    toast.success(`Opening ${material.title}...`);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-100 text-green-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Hard': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const totalTopics = syllabus.reduce((acc, unit) => acc + unit.topics.length, 0);
  const completionPercentage = (completedTopics.length / totalTopics) * 100;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-purple-600">Mathematics Study Materials</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Excel in Mathematics with our structured study materials covering Algebra, Calculus, Geometry, and more.
        </p>
      </div>

      {/* Progress Tracker */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Target className="w-5 h-5 mr-2 text-purple-600" />
            Your Progress
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Topics Completed</span>
              <span>{completedTopics.length}/{totalTopics}</span>
            </div>
            <Progress value={completionPercentage} className="h-3" />
            <p className="text-sm text-gray-600">{Math.round(completionPercentage)}% of syllabus completed</p>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="syllabus" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="syllabus">Syllabus & Topics</TabsTrigger>
          <TabsTrigger value="materials">Study Materials</TabsTrigger>
        </TabsList>

        <TabsContent value="syllabus" className="space-y-6">
          <div className="grid gap-6">
            {syllabus.map((unit, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-purple-600">{unit.unit}</CardTitle>
                    <div className="flex gap-2">
                      <Badge variant="outline">{unit.weightage}</Badge>
                      <Badge className={getDifficultyColor(unit.difficulty)}>
                        {unit.difficulty}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {unit.topics.map((topic, topicIndex) => (
                      <div key={topicIndex} className="flex items-center space-x-3">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => toggleTopicCompletion(topic)}
                          className="p-0 h-auto"
                        >
                          <CheckCircle 
                            className={`w-5 h-5 ${
                              completedTopics.includes(topic) 
                                ? 'text-green-600 fill-current' 
                                : 'text-gray-300'
                            }`} 
                          />
                        </Button>
                        <span className={`flex-1 ${
                          completedTopics.includes(topic) 
                            ? 'line-through text-gray-500' 
                            : ''
                        }`}>
                          {topic}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="materials" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {studyMaterials.map((material) => (
              <Card key={material.id} className="hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gray-100 rounded-t-lg overflow-hidden">
                  <img 
                    src={material.thumbnail} 
                    alt={material.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg line-clamp-2">{material.title}</CardTitle>
                      <CardDescription className="mt-2">{material.description}</CardDescription>
                    </div>
                    <Badge variant="secondary">{material.unit}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {material.duration}
                      </span>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 mr-1 text-yellow-400 fill-current" />
                        {material.rating}
                      </div>
                    </div>
                    <Button 
                      size="sm" 
                      className="w-full"
                      onClick={() => material.type === 'video' ? handlePlay(material) : handleDownload(material)}
                    >
                      {material.type === 'video' ? (
                        <>
                          <Play className="w-4 h-4 mr-1" />
                          Watch Now
                        </>
                      ) : (
                        <>
                          <Download className="w-4 h-4 mr-1" />
                          Download
                        </>
                      )}
                    </Button>
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

export default MathematicsStudyMaterials;