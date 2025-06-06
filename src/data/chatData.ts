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
  }
];