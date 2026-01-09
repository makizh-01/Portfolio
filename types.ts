
export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'AI' | 'Web' | 'App' | 'IoT';
  image: string;
  tags: string[];
  link?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  avatar: string;
  link?: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}
