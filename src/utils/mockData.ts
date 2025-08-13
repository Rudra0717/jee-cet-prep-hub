// Mock data for study materials
export const studyMaterials = [
  {
    id: '1',
    title: 'Complete Physics Formula Sheet',
    description: 'Comprehensive collection of all physics formulas for JEE Main & Advanced',
    subject: 'Physics',
    type: 'PDF',
    duration: '45 min',
    downloads: 1250,
    rating: 4.8,
    views: 3200,
    topics: ['Mechanics', 'Electromagnetism', 'Optics', 'Thermodynamics'],
    difficulty: 'Medium',
    fileSize: '2.5 MB'
  },
  {
    id: '2',
    title: 'Organic Chemistry Reaction Mechanisms',
    description: 'Detailed video explanations of all organic chemistry reactions',
    subject: 'Chemistry',
    type: 'Video',
    duration: '2 hours',
    downloads: 890,
    rating: 4.9,
    views: 2100,
    topics: ['Alkanes', 'Alkenes', 'Alcohols', 'Carbonyl Compounds'],
    difficulty: 'Hard',
    fileSize: '150 MB'
  },
  {
    id: '3',
    title: 'Calculus Integration Techniques',
    description: 'Step-by-step guide to integration methods for JEE Mathematics',
    subject: 'Mathematics',
    type: 'PDF',
    duration: '1 hour',
    downloads: 1100,
    rating: 4.7,
    views: 2800,
    topics: ['Integration by Parts', 'Substitution', 'Partial Fractions'],
    difficulty: 'Medium',
    fileSize: '1.8 MB'
  }
];

// Mock data for mock tests
export const mockTests = [
  {
    id: '1',
    title: 'JEE Main Full Mock Test 1',
    examType: 'JEE Main',
    difficulty: 'Medium',
    duration: '180 min',
    questions: 75,
    attempts: 1250,
    bestScore: 85,
    averageScore: 72,
    subjects: ['Physics', 'Chemistry', 'Mathematics'],
    topics: ['Mechanics', 'Organic Chemistry', 'Calculus']
  },
  {
    id: '2',
    title: 'JEE Advanced Practice Test',
    examType: 'JEE Advanced',
    difficulty: 'Hard',
    duration: '180 min',
    questions: 54,
    attempts: 890,
    bestScore: 78,
    averageScore: 65,
    subjects: ['Physics', 'Chemistry', 'Mathematics'],
    topics: ['Electromagnetism', 'Physical Chemistry', 'Algebra']
  },
  {
    id: '3',
    title: 'CET Complete Mock Test',
    examType: 'CET',
    difficulty: 'Easy',
    duration: '150 min',
    questions: 60,
    attempts: 2100,
    bestScore: 92,
    averageScore: 78,
    subjects: ['Physics', 'Chemistry', 'Mathematics'],
    topics: ['Basic Physics', 'Inorganic Chemistry', 'Trigonometry']
  }
];

// Mock data for question bank
export const questionSets = [
  {
    id: '1',
    title: 'JEE Main 2023 Previous Year Questions',
    subject: 'Physics',
    difficulty: 'Medium',
    year: 2023,
    questions: 25,
    attempts: 1500,
    averageScore: 75,
    topics: ['Mechanics', 'Electromagnetism', 'Optics'],
    examType: 'JEE Main'
  },
  {
    id: '2',
    title: 'JEE Advanced 2022 Chemistry Questions',
    subject: 'Chemistry',
    difficulty: 'Hard',
    year: 2022,
    questions: 18,
    attempts: 890,
    averageScore: 68,
    topics: ['Organic Chemistry', 'Physical Chemistry', 'Inorganic Chemistry'],
    examType: 'JEE Advanced'
  },
  {
    id: '3',
    title: 'CET 2023 Mathematics Practice',
    subject: 'Mathematics',
    difficulty: 'Easy',
    year: 2023,
    questions: 20,
    attempts: 2200,
    averageScore: 82,
    topics: ['Algebra', 'Calculus', 'Trigonometry'],
    examType: 'CET'
  }
];

// Mock data for blog articles
export const blogArticles = [
  {
    id: '1',
    title: 'How to Prepare for JEE Main in 6 Months',
    excerpt: 'A comprehensive guide to cracking JEE Main with effective study strategies and time management tips.',
    author: 'Dr. Rajesh Kumar',
    authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    publishDate: '2024-01-15',
    readTime: '8 min read',
    category: 'Study Tips',
    tags: ['JEE Main', 'Preparation', 'Strategy'],
    featured: true,
    views: 2500
  },
  {
    id: '2',
    title: 'Top 10 Common Mistakes in JEE Preparation',
    excerpt: 'Learn from the mistakes of others and avoid these common pitfalls during your JEE preparation journey.',
    author: 'Prof. Priya Sharma',
    authorAvatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
    publishDate: '2024-01-12',
    readTime: '6 min read',
    category: 'Tips & Tricks',
    tags: ['Mistakes', 'Preparation', 'Advice'],
    featured: false,
    views: 1800
  },
  {
    id: '3',
    title: 'Stress Management During Exam Preparation',
    excerpt: 'Effective techniques to manage stress and maintain mental health during intense exam preparation.',
    author: 'Dr. Amit Patel',
    authorAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    publishDate: '2024-01-10',
    readTime: '10 min read',
    category: 'Mental Health',
    tags: ['Stress', 'Mental Health', 'Wellness'],
    featured: false,
    views: 1200
  }
];

// Mock data for counselors
export const counselors = [
  {
    id: '1',
    name: 'Dr. Rajesh Kumar',
    specialization: 'JEE Main & Advanced',
    experience: '15 years',
    rating: 4.9,
    consultations: 1250,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    description: 'Expert in JEE preparation with 15+ years of experience. Former IIT professor.',
    availability: 'Mon-Fri, 9 AM - 6 PM',
    fee: '₹2000/hour'
  },
  {
    id: '2',
    name: 'Prof. Priya Sharma',
    specialization: 'Career Guidance & Counseling',
    experience: '12 years',
    rating: 4.8,
    consultations: 980,
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
    description: 'Specialized in career counseling and college selection for engineering aspirants.',
    availability: 'Mon-Sat, 10 AM - 7 PM',
    fee: '₹1500/hour'
  },
  {
    id: '3',
    name: 'Dr. Amit Patel',
    specialization: 'CET & State Exams',
    experience: '10 years',
    rating: 4.7,
    consultations: 750,
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    description: 'Expert in state-level engineering entrance exams and college admissions.',
    availability: 'Tue-Sun, 11 AM - 8 PM',
    fee: '₹1200/hour'
  }
];

// Mock data for colleges
export const colleges = [
  {
    id: '1',
    name: 'IIT Bombay',
    location: 'Mumbai, Maharashtra',
    rank: 1,
    cutoff: '95-99',
    courses: ['Computer Science', 'Mechanical', 'Electrical'],
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=300&fit=crop'
  },
  {
    id: '2',
    name: 'IIT Delhi',
    location: 'New Delhi, Delhi',
    rank: 2,
    cutoff: '94-98',
    courses: ['Computer Science', 'Chemical', 'Civil'],
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&h=300&fit=crop'
  },
  {
    id: '3',
    name: 'IIT Madras',
    location: 'Chennai, Tamil Nadu',
    rank: 3,
    cutoff: '93-97',
    courses: ['Computer Science', 'Aerospace', 'Biotechnology'],
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9a1?w=400&h=300&fit=crop'
  }
];

// Utility functions
export const formatNumber = (num: number): string => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K';
  }
  return num.toString();
};

export const formatDuration = (minutes: number): string => {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  if (hours > 0) {
    return `${hours}h ${mins}m`;
  }
  return `${mins}m`;
};

export const getDifficultyColor = (difficulty: string): string => {
  switch (difficulty.toLowerCase()) {
    case 'easy':
      return 'bg-green-100 text-green-800';
    case 'medium':
      return 'bg-yellow-100 text-yellow-800';
    case 'hard':
      return 'bg-red-100 text-red-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

export const getSubjectColor = (subject: string): string => {
  switch (subject.toLowerCase()) {
    case 'physics':
      return 'bg-blue-100 text-blue-800';
    case 'chemistry':
      return 'bg-green-100 text-green-800';
    case 'mathematics':
      return 'bg-purple-100 text-purple-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
}; 