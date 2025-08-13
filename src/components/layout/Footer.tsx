import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">J</span>
              </div>
              <span className="text-xl font-bold">JEE-CET Prep Hub</span>
            </div>
            <p className="text-gray-300 text-sm">
              Your comprehensive platform for JEE, CET, and engineering entrance exam preparation.
              Quality study materials, mock tests, and expert guidance.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
                <Youtube className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/study-materials" className="text-gray-300 hover:text-white transition-colors">
                  Study Materials
                </Link>
              </li>
              <li>
                <Link to="/mock-tests" className="text-gray-300 hover:text-white transition-colors">
                  Mock Tests
                </Link>
              </li>
              <li>
                <Link to="/question-bank" className="text-gray-300 hover:text-white transition-colors">
                  Question Bank
                </Link>
              </li>
              <li>
                <Link to="/progress-tracker" className="text-gray-300 hover:text-white transition-colors">
                  Progress Tracker
                </Link>
              </li>
              <li>
                <Link to="/discussion-forum" className="text-gray-300 hover:text-white transition-colors">
                  Discussion Forum
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-white transition-colors">
                  Blog & Articles
                </Link>
              </li>
              <li>
                <Link to="/counseling" className="text-gray-300 hover:text-white transition-colors">
                  Career Counseling
                </Link>
              </li>
              <li>
                <Link to="/study-materials/videos" className="text-gray-300 hover:text-white transition-colors">
                  Video Lectures
                </Link>
              </li>
              <li>
                <Link to="/mock-tests/jee-main" className="text-gray-300 hover:text-white transition-colors">
                  JEE Main Tests
                </Link>
              </li>
              <li>
                <Link to="/mock-tests/jee-advanced" className="text-gray-300 hover:text-white transition-colors">
                  JEE Advanced Tests
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Stay Updated</h3>
            <p className="text-gray-300 text-sm">
              Subscribe to our newsletter for the latest updates on exam dates, study tips, and more.
            </p>
            <div className="flex space-x-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
              />
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                Subscribe
              </Button>
            </div>
            
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2 text-gray-300">
                <Mail className="w-4 h-4" />
                <span>support@jee-cet-prep.com</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Phone className="w-4 h-4" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <MapPin className="w-4 h-4" />
                <span>Mumbai, Maharashtra, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            © 2024 JEE-CET Prep Hub. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-300 hover:text-white text-sm">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-300 hover:text-white text-sm">
              Terms of Service
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-white text-sm">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 