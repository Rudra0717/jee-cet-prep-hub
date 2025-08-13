export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  currentClass?: string;
  targetExam?: string;
  avatar?: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface RegisterData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  currentClass: string;
  targetExam: string;
  password: string;
  confirmPassword: string;
  agreeToTerms: boolean;
  newsletter: boolean;
}

// Simulated user data
const mockUsers: User[] = [
  {
    id: '1',
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@example.com',
    phone: '+91 9876543210',
    currentClass: 'Class 12',
    targetExam: 'JEE Main',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  }
];

// Simulate localStorage for user session
let currentUser: User | null = null;

export const auth = {
  // Login function
  login: async (credentials: LoginCredentials): Promise<{ success: boolean; user?: User; error?: string }> => {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Check if user exists (in real app, this would be an API call)
    const user = mockUsers.find(u => u.email === credentials.email);
    
    if (user && credentials.password === 'password') { // Simple password check for demo
      currentUser = user;
      if (credentials.rememberMe) {
        localStorage.setItem('user', JSON.stringify(user));
      }
      return { success: true, user };
    }
    
    return { success: false, error: 'Invalid email or password' };
  },

  // Register function
  register: async (data: RegisterData): Promise<{ success: boolean; user?: User; error?: string }> => {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Check if email already exists
    if (mockUsers.find(u => u.email === data.email)) {
      return { success: false, error: 'Email already registered' };
    }
    
    // Validate password match
    if (data.password !== data.confirmPassword) {
      return { success: false, error: 'Passwords do not match' };
    }
    
    // Create new user
    const newUser: User = {
      id: Date.now().toString(),
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
      currentClass: data.currentClass,
      targetExam: data.targetExam,
      avatar: `https://ui-avatars.com/api/?name=${data.firstName}+${data.lastName}&background=random`
    };
    
    mockUsers.push(newUser);
    currentUser = newUser;
    localStorage.setItem('user', JSON.stringify(newUser));
    
    return { success: true, user: newUser };
  },

  // Logout function
  logout: (): void => {
    currentUser = null;
    localStorage.removeItem('user');
  },

  // Get current user
  getCurrentUser: (): User | null => {
    if (currentUser) return currentUser;
    
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      currentUser = JSON.parse(storedUser);
      return currentUser;
    }
    
    return null;
  },

  // Check if user is authenticated
  isAuthenticated: (): boolean => {
    return auth.getCurrentUser() !== null;
  }
}; 