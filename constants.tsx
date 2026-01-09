
import { Project, TeamMember } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'AI Chatbot for College',
    description: 'A sophisticated intelligent assistant designed to streamline student inquiries and administrative tasks within an educational ecosystem.',
    category: 'AI',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800',
    tags: ['Gemini API', 'React', 'Python', 'Tailwind'],
    link: 'https://sankara-connect-950441171205.us-west1.run.app'
  },
  {
    id: '2',
    title: 'Mozhi Communication System',
    description: 'A revolutionary communication gateway for students, enabling seamless language bridging and collaborative resource sharing.',
    category: 'App',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800',
    tags: ['Next.js', 'WebRTC', 'Firebase', 'TypeScript'],
    link: 'https://mozhi-ai-translation-chatbot-950441171205.us-west1.run.app'
  },
  {
    id: '4',
    title: 'Event Registerpro',
    description: 'High-performance registration engine built for large-scale datathon events, handling massive concurrent traffic and data integrity.',
    category: 'Web',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    tags: ['Redux', 'Express', 'MongoDB', 'Chart.js'],
    link: 'https://registeration-tau.vercel.app/'
  }
];

export const TECH_STACK = {
  concepts: ['AI', 'Java', 'Python', 'HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React'],
  aiTools: [
    'Google AI Studio', 'Gemini', 'ChatGPT', 'Claude', 
    'GitHub Copilot', 'VS Code', 'Google Antigravity', 
    'Blackbox AI', 'Perplexity'
  ],
  editingTools: ['CapCut', 'Da Vinci', 'Canva']
};

export const TEAM: TeamMember[] = [
  {
    name: "N.Makizh",
    role: "Full-Stack Developer",
    avatar: "https://picsum.photos/seed/makizh/200/200"
  },
  {
    name: "A.Niranjan",
    role: "Full-Stack Developer",
    avatar: "https://picsum.photos/seed/niranjan/200/200"
  },
  {
    name: "S.Hariharan",
    role: "Full-Stack Developer",
    avatar: "https://picsum.photos/seed/hariharan/200/200"
  },
  {
    name: "Dhanya.D",
    role: "Full-Stack Developer",
    avatar: "https://picsum.photos/seed/dhanya/200/200"
  },
  {
    name: "N.Vengateshwaran",
    role: "UI Designer",
    avatar: "https://picsum.photos/seed/vengateshwaran/200/200"
  },
  {
    name: "S.Priyanka",
    role: "UI Designer",
    avatar: "https://picsum.photos/seed/priyanka/200/200"
  },
  {
    name: "G.PraveenRaja",
    role: "UI Designer",
    avatar: "https://picsum.photos/seed/praveenraja/200/200"
  }
];
