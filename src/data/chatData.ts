export interface Message {
  id: string;
  sender: string;
  content: string;
  timestamp: string;
  isConsultant: boolean;
  isResident?: boolean;
}

export interface ChatRoom {
  id: string;
  country: string;
  serviceType: string;
  title: string;
  description: string;
  consultantName?: string;
  residentName?: string;
  messages: Message[];
  isPremium: boolean;
  participants: number;
  sub1?: string;
  sub2?: string;
}

export const chatRooms: ChatRoom[] = [
  {
    id: "uk-study-consultant",
    country: "UK",
    serviceType: "study",
    title: "UK Study Consultant",
    description: "Free consultation for UK universities",
    consultantName: "Sarah Johnson - Education Consultant",
    participants: 23,
    messages: [
      {
        id: "1",
        sender: "Sarah Johnson",
        content: "Hello! I'm here to help you with UK university applications. What would you like to know?",
        timestamp: "2:30 PM",
        isConsultant: true
      },
      {
        id: "2",
        sender: "Sarah Johnson",
        content: "I can guide you through UCAS applications, visa requirements, and choosing the right university for your goals.",
        timestamp: "2:31 PM",
        isConsultant: true
      }
    ],
    isPremium: false,
    sub1: "University Applications",
    sub2: "Visa Guidance"
  },
  {
    id: "uk-study-resident",
    country: "UK",
    serviceType: "study",
    title: "Chat with UK Student",
    description: "Talk to current students in the UK",
    residentName: "Emma Watson - Oxford Student",
    participants: 15,
    messages: [
      {
        id: "1",
        sender: "Emma Watson",
        content: "Hi! I'm a current student at Oxford. Happy to share my experience about student life here!",
        timestamp: "3:15 PM",
        isConsultant: false,
        isResident: true
      },
      {
        id: "2",
        sender: "Emma Watson",
        content: "Feel free to ask about accommodation, social life, academics, or anything else about studying in the UK.",
        timestamp: "3:16 PM",
        isConsultant: false,
        isResident: true
      }
    ],
    isPremium: true,
    sub1: "Student Life",
    sub2: "Accommodation Tips"
  },
  {
    id: "us-work-consultant",
    country: "US",
    serviceType: "work",
    title: "US Work Visa Consultant",
    description: "Free guidance for US work opportunities",
    consultantName: "Michael Brown - Immigration Specialist",
    participants: 31,
    messages: [
      {
        id: "1",
        sender: "Michael Brown",
        content: "Welcome! I specialize in US work visas and can help you understand the H1B process.",
        timestamp: "4:00 PM",
        isConsultant: true
      }
    ],
    isPremium: false,
    sub1: "H1B Process",
    sub2: "Job Search Tips"
  },
  {
    id: "ca-migration-resident",
    country: "CA",
    serviceType: "migration",
    title: "Chat with Canadian Resident",
    description: "Connect with someone who migrated to Canada",
    residentName: "David Chen - Recent Immigrant",
    participants: 18,
    messages: [
      {
        id: "1",
        sender: "David Chen",
        content: "I moved to Canada 2 years ago through Express Entry. Happy to share my journey!",
        timestamp: "5:00 PM",
        isConsultant: false,
        isResident: true
      }
    ],
    isPremium: true,
    sub1: "Express Entry",
    sub2: "Settlement Tips"
  },
  // Travel service chat rooms
  {
    id: "uk-travel-consultant",
    country: "UK",
    serviceType: "travel",
    title: "UK Travel Consultant",
    description: "Expert travel guidance for UK",
    consultantName: "James Wilson - Travel Expert",
    participants: 19,
    messages: [
      {
        id: "1",
        sender: "James Wilson",
        content: "Welcome! I'm here to help you plan the perfect trip to the UK. What would you like to explore?",
        timestamp: "1:30 PM",
        isConsultant: true
      },
      {
        id: "2",
        sender: "James Wilson",
        content: "I can help with itineraries, hidden gems, local experiences, and budget planning.",
        timestamp: "1:31 PM",
        isConsultant: true
      }
    ],
    isPremium: false,
    sub1: "Travel Itineraries",
    sub2: "Local Experiences"
  },
  {
    id: "uk-travel-resident",
    country: "UK",
    serviceType: "travel",
    title: "Chat with UK Local",
    description: "Get insider tips from locals",
    residentName: "Sophie Turner - London Local",
    participants: 12,
    messages: [
      {
        id: "1",
        sender: "Sophie Turner",
        content: "Hi there! I've lived in London all my life. Happy to share the best local spots and hidden gems!",
        timestamp: "2:15 PM",
        isConsultant: false,
        isResident: true
      }
    ],
    isPremium: true,
    sub1: "Hidden Gems",
    sub2: "Local Food Scene"
  },
  // Work service chat rooms
  {
    id: "uk-work-consultant",
    country: "UK",
    serviceType: "work",
    title: "UK Work Consultant",
    description: "Career guidance for UK job market",
    consultantName: "Robert Davies - Career Specialist",
    participants: 27,
    messages: [
      {
        id: "1",
        sender: "Robert Davies",
        content: "Hello! I specialize in helping professionals find work in the UK. How can I assist you today?",
        timestamp: "11:30 AM",
        isConsultant: true
      },
      {
        id: "2",
        sender: "Robert Davies",
        content: "I can help with CV optimization, interview preparation, and understanding the UK job market.",
        timestamp: "11:31 AM",
        isConsultant: true
      }
    ],
    isPremium: false,
    sub1: "Job Applications",
    sub2: "Work Visa Guide"
  },
  {
    id: "uk-work-resident",
    country: "UK",
    serviceType: "work",
    title: "Chat with UK Professional",
    description: "Connect with working professionals",
    residentName: "Alex Thompson - Software Engineer",
    participants: 21,
    messages: [
      {
        id: "1",
        sender: "Alex Thompson",
        content: "Hi! I've been working in London's tech scene for 5 years. Happy to share insights about work culture and life balance!",
        timestamp: "9:15 AM",
        isConsultant: false,
        isResident: true
      }
    ],
    isPremium: true,
    sub1: "Work Culture",
    sub2: "Career Growth"
  }
];