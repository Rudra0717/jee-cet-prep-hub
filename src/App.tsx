import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import { ThemeProvider } from 'next-themes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Context
import { AuthProvider } from './contexts/AuthContext';

// Layout Components
import Layout from './components/layout/Layout';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Page Components
import HomePage from './pages/HomePage';
import StudyMaterials from './pages/StudyMaterials';
import MockTests from './pages/MockTests';
import QuestionBank from './pages/QuestionBank';
import ProgressTracker from './pages/ProgressTracker';
import DiscussionForum from './pages/DiscussionForum';
import Blog from './pages/Blog';
import Counseling from './pages/Counseling';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Dashboard from './pages/Dashboard';

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="light">
        <AuthProvider>
          <Router>
            <div className="min-h-screen bg-background">
              <Navbar />
              <Layout>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/study-materials" element={<StudyMaterials />} />
                  <Route path="/mock-tests" element={<MockTests />} />
                  <Route path="/question-bank" element={<QuestionBank />} />
                  <Route path="/progress-tracker" element={<ProgressTracker />} />
                  <Route path="/discussion-forum" element={<DiscussionForum />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/counseling" element={<Counseling />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                </Routes>
              </Layout>
              <Footer />
              <Toaster position="top-right" />
            </div>
          </Router>
        </AuthProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
