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
import studyChemistryNotes from '@/assets/study-chemistry-notes.jpg';
import videoLecture from '@/assets/video-lecture.jpg';

const ChemistryStudyMaterials = () => {
  const [completedTopics, setCompletedTopics] = useState<string[]>([]);

  const syllabus = [
    {
      unit: "Unit 1: Physical Chemistry",
      topics: [
        "Atomic Structure - Quantum numbers, electronic configuration",
        "Chemical Bonding - Ionic, covalent, metallic bonding",
        "Thermodynamics - Laws, enthalpy, entropy, Gibbs energy",
        "Chemical Equilibrium - Le Chatelier's principle, equilibrium constant",
        "Chemical Kinetics - Rate laws, reaction mechanisms",
        "Electrochemistry - Electrochemical cells, corrosion"
      ],
      weightage: "30%",
      difficulty: "Hard"
    },
    {
      unit: "Unit 2: Inorganic Chemistry",
      topics: [
        "Periodic Table - Periodic trends, classification",
        "Hydrogen & s-block Elements - Properties, compounds",
        "p-block Elements - Group 13-18 elements",
        "d-block & f-block Elements - Transition metals, coordination compounds",
        "Metallurgy - Extraction processes, alloys"
      ],
      weightage: "25%",
      difficulty: "Medium"
    },
    {
      unit: "Unit 3: Organic Chemistry",
      topics: [
        "Basic Concepts - IUPAC nomenclature, isomerism",
        "Hydrocarbons - Alkanes, alkenes, alkynes, aromatic compounds",
        "Organic Compounds with Functional Groups - Alcohols, phenols, ethers",
        "Biomolecules - Carbohydrates, proteins, nucleic acids",
        "Polymers - Types, preparation, properties",
        "Chemistry in Everyday Life - Drugs, detergents, food additives"
      ],
      weightage: "30%",
      difficulty: "Medium"
    },
    {
      unit: "Unit 4: Environmental Chemistry",
      topics: [
        "Environmental Pollution - Air, water, soil pollution",
        "Green Chemistry - Principles and applications"
      ],
      weightage: "5%",
      difficulty: "Easy"
    },
    {
      unit: "Unit 5: Practical Chemistry",
      topics: [
        "Salt Analysis - Qualitative analysis of cations and anions",
        "Organic Compound Analysis - Functional group identification",
        "Volumetric Analysis - Acid-base, redox titrations"
      ],
      weightage: "10%",
      difficulty: "Medium"
    }
  ];

  const studyMaterials = [
    {
      id: 1,
      title: "Organic Chemistry Reactions",
      unit: "Unit 3",
      type: "pdf",
      description: "Complete guide to organic reactions and mechanisms",
      thumbnail: studyChemistryNotes,
      duration: "2 hours",
      rating: 4.9,
      downloads: 1850
    },
    {
      id: 2,
      title: "Chemical Bonding Video Series",
      unit: "Unit 1",
      type: "video",
      description: "Detailed explanation of chemical bonding theories",
      thumbnail: videoLecture,
      duration: "1.5 hours",
      rating: 4.8,
      downloads: 1200
    },
    {
      id: 3,
      title: "Periodic Table Trends",
      unit: "Unit 2",
      type: "pdf",
      description: "Comprehensive notes on periodic properties",
      thumbnail: studyChemistryNotes,
      duration: "45 min read",
      rating: 4.7,
      downloads: 980
    },
    {
      id: 4,
      title: "Coordination Chemistry",
      unit: "Unit 2",
      type: "video",
      description: "Complex formation and crystal field theory",
      thumbnail: videoLecture,
      duration: "2.5 hours",
      rating: 4.6,
      downloads: 720
    },
    {
      id: 5,
      title: "Thermodynamics & Kinetics",
      unit: "Unit 1",
      type: "pdf",
      description: "Energy changes and reaction rates in chemistry",
      thumbnail: studyChemistryNotes,
      duration: "1.5 hours",
      rating: 4.8,
      downloads: 1320
    },
    {
      id: 6,
      title: "Biomolecules Masterclass",
      unit: "Unit 3",
      type: "video",
      description: "Structure and function of biological molecules",
      thumbnail: videoLecture,
      duration: "3 hours",
      rating: 4.7,
      downloads: 890
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
        <h1 className="text-4xl font-bold mb-4 text-green-600">Chemistry Study Materials</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Master Chemistry with comprehensive study materials covering Physical, Inorganic, and Organic Chemistry.
        </p>
      </div>

      {/* Progress Tracker */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Target className="w-5 h-5 mr-2 text-green-600" />
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
                    <CardTitle className="text-green-600">{unit.unit}</CardTitle>
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

export default ChemistryStudyMaterials;