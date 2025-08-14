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
import studyPhysicsNotes from '@/assets/study-physics-notes.jpg';
import videoLecture from '@/assets/video-lecture.jpg';

const PhysicsStudyMaterials = () => {
  const [completedTopics, setCompletedTopics] = useState<string[]>([]);

  const syllabus = [
    {
      unit: "Unit 1: Mechanics",
      topics: [
        "Kinematics - Motion in one, two, and three dimensions",
        "Laws of Motion - Newton's laws and their applications",
        "Work, Energy and Power - Conservative forces, potential energy",
        "Rotational Motion - Angular velocity, moment of inertia",
        "Gravitation - Universal law, orbital motion, satellites"
      ],
      weightage: "25%",
      difficulty: "Medium"
    },
    {
      unit: "Unit 2: Thermodynamics & Kinetic Theory",
      topics: [
        "Kinetic Theory of Gases - Molecular motion, mean free path",
        "Thermodynamics - Laws, processes, heat engines",
        "Heat Transfer - Conduction, convection, radiation"
      ],
      weightage: "15%",
      difficulty: "Hard"
    },
    {
      unit: "Unit 3: Oscillations & Waves",
      topics: [
        "Simple Harmonic Motion - SHM equations, energy",
        "Wave Motion - Progressive waves, superposition",
        "Sound Waves - Doppler effect, beats, resonance"
      ],
      weightage: "15%",
      difficulty: "Medium"
    },
    {
      unit: "Unit 4: Electrodynamics",
      topics: [
        "Electrostatics - Coulomb's law, electric field, potential",
        "Current Electricity - Ohm's law, Kirchhoff's rules",
        "Magnetic Effects - Biot-Savart law, electromagnetic induction",
        "Electromagnetic Waves - Properties, spectrum"
      ],
      weightage: "25%",
      difficulty: "Hard"
    },
    {
      unit: "Unit 5: Optics",
      topics: [
        "Geometric Optics - Reflection, refraction, lenses",
        "Wave Optics - Interference, diffraction, polarization"
      ],
      weightage: "10%",
      difficulty: "Medium"
    },
    {
      unit: "Unit 6: Modern Physics",
      topics: [
        "Dual Nature of Matter - Photoelectric effect, de Broglie waves",
        "Atomic Structure - Bohr model, hydrogen spectrum",
        "Nuclear Physics - Radioactivity, nuclear reactions"
      ],
      weightage: "10%",
      difficulty: "Hard"
    }
  ];

  const studyMaterials = [
    {
      id: 1,
      title: "Complete Mechanics Notes",
      unit: "Unit 1",
      type: "pdf",
      description: "Comprehensive notes covering kinematics, dynamics, and rotational motion",
      thumbnail: studyPhysicsNotes,
      duration: "45 min read",
      rating: 4.8,
      downloads: 1250
    },
    {
      id: 2,
      title: "Electromagnetism Video Series",
      unit: "Unit 4",
      type: "video",
      description: "Interactive video lectures on electric and magnetic fields",
      thumbnail: videoLecture,
      duration: "2.5 hours",
      rating: 4.9,
      downloads: 890
    },
    {
      id: 3,
      title: "Thermodynamics Problem Bank",
      unit: "Unit 2",
      type: "pdf",
      description: "500+ solved problems on heat, work, and energy",
      thumbnail: studyPhysicsNotes,
      duration: "3 hours",
      rating: 4.7,
      downloads: 2100
    },
    {
      id: 4,
      title: "Wave Motion Concepts",
      unit: "Unit 3",
      type: "video",
      description: "Understanding wave properties and sound phenomena",
      thumbnail: videoLecture,
      duration: "1.5 hours",
      rating: 4.6,
      downloads: 750
    },
    {
      id: 5,
      title: "Modern Physics Guide",
      unit: "Unit 6",
      type: "pdf",
      description: "Quantum mechanics and atomic physics for JEE",
      thumbnail: studyPhysicsNotes,
      duration: "2 hours",
      rating: 4.8,
      downloads: 980
    },
    {
      id: 6,
      title: "Optics Masterclass",
      unit: "Unit 5",
      type: "video",
      description: "Geometric and wave optics with solved examples",
      thumbnail: videoLecture,
      duration: "3 hours",
      rating: 4.7,
      downloads: 1200
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
        <h1 className="text-4xl font-bold mb-4 text-blue-600">Physics Study Materials</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Master Physics concepts with our comprehensive study materials, covering all units from Mechanics to Modern Physics.
        </p>
      </div>

      {/* Progress Tracker */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Target className="w-5 h-5 mr-2 text-blue-600" />
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
                    <CardTitle className="text-blue-600">{unit.unit}</CardTitle>
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

export default PhysicsStudyMaterials;