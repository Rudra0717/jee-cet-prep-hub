import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  BookOpen, 
  Download, 
  Play, 
  FileText, 
  Video, 
  Search,
  Filter,
  Clock,
  Star,
  Eye
} from 'lucide-react';
import { toast } from 'sonner';

// Import study material images
import studyPhysicsNotes from '@/assets/study-physics-notes.jpg';
import studyChemistryNotes from '@/assets/study-chemistry-notes.jpg';
import studyMathNotes from '@/assets/study-math-notes.jpg';
import videoLecture from '@/assets/video-lecture.jpg';

const StudyMaterials = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('all');
  const [selectedType, setSelectedType] = useState('all');

  const subjects = [
    {
      id: 'physics',
      name: 'Physics',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      topics: [
        'Mechanics',
        'Electromagnetism',
        'Optics',
        'Thermodynamics',
        'Modern Physics',
        'Wave Motion'
      ]
    },
    {
      id: 'chemistry',
      name: 'Chemistry',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      topics: [
        'Physical Chemistry',
        'Organic Chemistry',
        'Inorganic Chemistry',
        'Chemical Bonding',
        'Thermodynamics',
        'Chemical Kinetics'
      ]
    },
    {
      id: 'mathematics',
      name: 'Mathematics',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      topics: [
        'Algebra',
        'Calculus',
        'Trigonometry',
        'Geometry',
        'Coordinate Geometry',
        'Vectors'
      ]
    }
  ];

  const materials = [
    {
      id: 1,
      title: 'Complete Mechanics Notes',
      subject: 'physics',
      type: 'pdf',
      topic: 'Mechanics',
      description: 'Comprehensive notes covering all mechanics topics for JEE preparation',
      downloads: 1250,
      rating: 4.8,
      views: 3400,
      duration: '45 min read',
      thumbnail: studyPhysicsNotes,
      fileSize: '2.5 MB'
    },
    {
      id: 2,
      title: 'Organic Chemistry Video Series',
      subject: 'chemistry',
      type: 'video',
      topic: 'Organic Chemistry',
      description: 'Complete video series on organic chemistry reactions and mechanisms',
      downloads: 890,
      rating: 4.9,
      views: 2100,
      duration: '2.5 hours',
      thumbnail: videoLecture,
      fileSize: '150 MB'
    },
    {
      id: 3,
      title: 'Calculus Practice Problems',
      subject: 'mathematics',
      type: 'pdf',
      topic: 'Calculus',
      description: '500+ practice problems with detailed solutions for calculus',
      downloads: 2100,
      rating: 4.7,
      views: 5600,
      duration: '3 hours',
      thumbnail: studyMathNotes,
      fileSize: '4.2 MB'
    },
    {
      id: 4,
      title: 'Electromagnetism Concepts',
      subject: 'physics',
      type: 'video',
      topic: 'Electromagnetism',
      description: 'Clear explanation of electromagnetic concepts with examples',
      downloads: 750,
      rating: 4.6,
      views: 1800,
      duration: '1.5 hours',
      thumbnail: videoLecture,
      fileSize: '120 MB'
    },
    {
      id: 5,
      title: 'Chemical Bonding Notes',
      subject: 'chemistry',
      type: 'pdf',
      topic: 'Chemical Bonding',
      description: 'Detailed notes on chemical bonding theories and applications',
      downloads: 1100,
      rating: 4.5,
      views: 2900,
      duration: '30 min read',
      thumbnail: studyChemistryNotes,
      fileSize: '1.8 MB'
    },
    {
      id: 6,
      title: 'Trigonometry Masterclass',
      subject: 'mathematics',
      type: 'video',
      topic: 'Trigonometry',
      description: 'Complete trigonometry course with practice problems',
      downloads: 950,
      rating: 4.8,
      views: 2400,
      duration: '2 hours',
      thumbnail: videoLecture,
      fileSize: '180 MB'
    },
    {
      id: 7,
      title: 'Thermodynamics Comprehensive Guide',
      subject: 'physics',
      type: 'pdf',
      topic: 'Thermodynamics',
      description: 'Complete thermodynamics theory with solved examples and practice questions',
      downloads: 980,
      rating: 4.7,
      views: 2650,
      duration: '50 min read',
      thumbnail: studyPhysicsNotes,
      fileSize: '3.1 MB'
    },
    {
      id: 8,
      title: 'Coordination Chemistry Masterclass',
      subject: 'chemistry',
      type: 'video',
      topic: 'Inorganic Chemistry',
      description: 'In-depth video lectures on coordination compounds and complex formation',
      downloads: 720,
      rating: 4.6,
      views: 1950,
      duration: '3 hours',
      thumbnail: videoLecture,
      fileSize: '210 MB'
    },
    {
      id: 9,
      title: 'Algebra Problem Bank',
      subject: 'mathematics',
      type: 'pdf',
      topic: 'Algebra',
      description: '1000+ algebra problems from basic to advanced level with step-by-step solutions',
      downloads: 1850,
      rating: 4.9,
      views: 4200,
      duration: '4 hours',
      thumbnail: studyMathNotes,
      fileSize: '5.8 MB'
    },
    {
      id: 10,
      title: 'Wave Motion and Sound',
      subject: 'physics',
      type: 'video',
      topic: 'Wave Motion',
      description: 'Complete coverage of wave motion, sound waves, and Doppler effect',
      downloads: 620,
      rating: 4.5,
      views: 1750,
      duration: '2.2 hours',
      thumbnail: videoLecture,
      fileSize: '165 MB'
    },
    {
      id: 11,
      title: 'Chemical Kinetics Study Notes',
      subject: 'chemistry',
      type: 'pdf',
      topic: 'Chemical Kinetics',
      description: 'Reaction rates, order of reaction, and mechanism with solved examples',
      downloads: 1320,
      rating: 4.8,
      views: 3100,
      duration: '40 min read',
      thumbnail: studyChemistryNotes,
      fileSize: '2.7 MB'
    },
    {
      id: 12,
      title: 'Coordinate Geometry Video Course',
      subject: 'mathematics',
      type: 'video',
      topic: 'Coordinate Geometry',
      description: 'Comprehensive video course covering straight lines, circles, and conic sections',
      downloads: 890,
      rating: 4.7,
      views: 2400,
      duration: '4.5 hours',
      thumbnail: videoLecture,
      fileSize: '280 MB'
    },
    {
      id: 13,
      title: 'Modern Physics Concepts',
      subject: 'physics',
      type: 'pdf',
      topic: 'Modern Physics',
      description: 'Quantum mechanics, photoelectric effect, and atomic structure for JEE',
      downloads: 1150,
      rating: 4.6,
      views: 2800,
      duration: '55 min read',
      thumbnail: studyPhysicsNotes,
      fileSize: '3.4 MB'
    },
    {
      id: 14,
      title: 'Electrochemistry Deep Dive',
      subject: 'chemistry',
      type: 'video',
      topic: 'Physical Chemistry',
      description: 'Electrochemical cells, EMF, and electrolysis with practical applications',
      downloads: 750,
      rating: 4.8,
      views: 1900,
      duration: '2.8 hours',
      thumbnail: videoLecture,
      fileSize: '195 MB'
    },
    {
      id: 15,
      title: 'Vectors and 3D Geometry',
      subject: 'mathematics',
      type: 'pdf',
      topic: 'Vectors',
      description: 'Vector algebra, scalar and vector products, 3D geometry problems',
      downloads: 1420,
      rating: 4.5,
      views: 3500,
      duration: '1.2 hours',
      thumbnail: studyMathNotes,
      fileSize: '4.1 MB'
    },
    {
      id: 16,
      title: 'Optics Complete Series',
      subject: 'physics',
      type: 'video',
      topic: 'Optics',
      description: 'Geometric and wave optics with ray diagrams and interference patterns',
      downloads: 680,
      rating: 4.7,
      views: 1650,
      duration: '3.2 hours',
      thumbnail: videoLecture,
      fileSize: '225 MB'
    },
    {
      id: 17,
      title: 'Hydrocarbon Chemistry Notes',
      subject: 'chemistry',
      type: 'pdf',
      topic: 'Organic Chemistry',
      description: 'Alkanes, alkenes, alkynes - nomenclature, properties, and reactions',
      downloads: 1200,
      rating: 4.6,
      views: 2950,
      duration: '35 min read',
      thumbnail: studyChemistryNotes,
      fileSize: '2.3 MB'
    },
    {
      id: 18,
      title: 'Probability and Statistics',
      subject: 'mathematics',
      type: 'video',
      topic: 'Statistics',
      description: 'Probability distributions, permutations, combinations with solved examples',
      downloads: 950,
      rating: 4.8,
      views: 2300,
      duration: '2.5 hours',
      thumbnail: videoLecture,
      fileSize: '175 MB'
    }
  ];

  const filteredMaterials = materials.filter(material => {
    const matchesSearch = material.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         material.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSubject = selectedSubject === 'all' || material.subject === selectedSubject;
    const matchesType = selectedType === 'all' || material.type === selectedType;
    
    return matchesSearch && matchesSubject && matchesType;
  });

  const getSubjectColor = (subject: string) => {
    const subjectData = subjects.find(s => s.id === subject);
    return subjectData?.color || 'text-gray-600';
  };

  const getSubjectBgColor = (subject: string) => {
    const subjectData = subjects.find(s => s.id === subject);
    return subjectData?.bgColor || 'bg-gray-50';
  };

  const handleDownload = (material: any) => {
    toast.success(`Downloading ${material.title}...`);
    // Simulate download
    setTimeout(() => {
      toast.success(`${material.title} downloaded successfully!`);
    }, 2000);
  };

  const handlePlay = (material: any) => {
    toast.success(`Opening ${material.title}...`);
    // Simulate video opening
    setTimeout(() => {
      toast.success(`${material.title} is now playing!`);
    }, 1000);
  };

  const handleView = (material: any) => {
    toast.info(`Viewing ${material.title}`);
    // Simulate viewing
    setTimeout(() => {
      toast.success(`Added ${material.title} to your recent views!`);
    }, 1000);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Study Materials</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Access comprehensive study materials for Physics, Chemistry, and Mathematics. 
          Download PDFs, watch video lectures, and practice with our curated content.
        </p>
      </div>

      {/* Filters */}
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search materials..."
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
          <Select value={selectedType} onValueChange={setSelectedType}>
            <SelectTrigger className="w-full md:w-48">
              <SelectValue placeholder="Select Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="pdf">PDF Notes</SelectItem>
              <SelectItem value="video">Video Lectures</SelectItem>
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
          {/* Subject Overview Cards */}
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
                      <CardDescription>{subject.topics.length} topics available</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {subject.topics.slice(0, 3).map((topic, index) => (
                      <Badge key={index} variant="secondary" className="mr-2 mb-2">
                        {topic}
                      </Badge>
                    ))}
                    {subject.topics.length > 3 && (
                      <Badge variant="outline" className="mr-2">
                        +{subject.topics.length - 3} more
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Materials Grid */}
          <div>
            <h2 className="text-2xl font-bold mb-6">All Materials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredMaterials.map((material) => (
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
                      <Badge variant="outline" className={getSubjectColor(material.subject)}>
                        {material.subject}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm text-gray-600">
                        <div className="flex items-center space-x-4">
                          <span className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {material.duration}
                          </span>
                          <span className="flex items-center">
                            <Eye className="w-4 h-4 mr-1" />
                            {material.views}
                          </span>
                        </div>
                        <div className="flex items-center">
                          <Star className="w-4 h-4 mr-1 text-yellow-400 fill-current" />
                          {material.rating}
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">{material.fileSize}</span>
                        <Button 
                          size="sm" 
                          className="bg-blue-600 hover:bg-blue-700"
                          onClick={() => material.type === 'video' ? handlePlay(material) : handleDownload(material)}
                        >
                          {material.type === 'video' ? (
                            <>
                              <Play className="w-4 h-4 mr-1" />
                              Watch
                            </>
                          ) : (
                            <>
                              <Download className="w-4 h-4 mr-1" />
                              Download
                            </>
                          )}
                        </Button>
                      </div>
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
              <h2 className="text-2xl font-bold mb-4">{subject.name} Study Materials</h2>
              <p className="text-gray-600 mb-4">
                Master {subject.name} with our comprehensive collection of notes, video lectures, and practice materials.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                {subject.topics.map((topic, index) => (
                  <Badge key={index} variant="secondary" className="text-center">
                    {topic}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredMaterials
                .filter(material => material.subject === subject.id)
                .map((material) => (
                  <Card key={material.id} className="hover:shadow-lg transition-shadow">
                    <div className="aspect-video bg-gray-100 rounded-t-lg overflow-hidden">
                      <img 
                        src={material.thumbnail} 
                        alt={material.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-lg line-clamp-2">{material.title}</CardTitle>
                      <CardDescription>{material.description}</CardDescription>
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
                          className="w-full bg-blue-600 hover:bg-blue-700"
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
        ))}
      </Tabs>
    </div>
  );
};

export default StudyMaterials; 