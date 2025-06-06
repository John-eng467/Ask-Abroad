interface Country {
  id: string;
  name: string;
  flag: string;
  code: string;
  activeUsers: number;
  consultants: number;
  residents: number;
  popularFor: string[];
}

export const countries: Country[] = [
  {
    id: "UK",
    name: "United Kingdom",
    flag: "https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=600",
    code: "GB",
    activeUsers: 342,
    consultants: 45,
    residents: 89,
    popularFor: ["Study", "Work"]
  },
  {
    id: "US",
    name: "United States",
    flag: "https://images.pexels.com/photos/1550340/pexels-photo-1550340.jpeg?auto=compress&cs=tinysrgb&w=800",
    code: "US",
    activeUsers: 567,
    consultants: 67,
    residents: 134,
    popularFor: ["Study", "Work", "Migration"]
  },
  {
    id: "CA",
    name: "Canada",
    flag: "https://images.pexels.com/photos/2749500/pexels-photo-2749500.jpeg?auto=compress&cs=tinysrgb&w=800",
    code: "CA",
    activeUsers: 234,
    consultants: 38,
    residents: 78,
    popularFor: ["Study", "Migration", "Work"]
  },
  {
    id: "AU",
    name: "Australia",
    flag: "https://images.pexels.com/photos/1738434/pexels-photo-1738434.jpeg?auto=compress&cs=tinysrgb&w=800",
    code: "AU",
    activeUsers: 189,
    consultants: 29,
    residents: 56,
    popularFor: ["Study", "Work", "Migration"]
  },
  {
    id: "DE",
    name: "Germany",
    flag: "https://images.pexels.com/photos/109629/pexels-photo-109629.jpeg?auto=compress&cs=tinysrgb&w=800",
    code: "DE",
    activeUsers: 278,
    consultants: 42,
    residents: 67,
    popularFor: ["Study", "Work"]
  },
  {
    id: "FR",
    name: "France",
    flag: "https://images.pexels.com/photos/739407/pexels-photo-739407.jpeg?auto=compress&cs=tinysrgb&w=800",
    code: "FR",
    activeUsers: 245,
    consultants: 35,
    residents: 58,
    popularFor: ["Study", "Travel", "Work"]
  },
  {
    id: "JP",
    name: "Japan",
    flag: "https://images.pexels.com/photos/590478/pexels-photo-590478.jpeg?auto=compress&cs=tinysrgb&w=800",
    code: "JP",
    activeUsers: 312,
    consultants: 28,
    residents: 89,
    popularFor: ["Study", "Work", "Travel"]
  },
  {
    id: "IN",
    name: "India",
    flag: "https://images.pexels.com/photos/789750/pexels-photo-789750.jpeg?auto=compress&cs=tinysrgb&w=800",
    code: "IN",
    activeUsers: 423,
    consultants: 89,
    residents: 156,
    popularFor: ["Work", "Travel"]
  },
  {
    id: "SG",
    name: "Singapore",
    flag: "https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg?auto=compress&cs=tinysrgb&w=800",
    code: "SG",
    activeUsers: 156,
    consultants: 24,
    residents: 45,
    popularFor: ["Study", "Work"]
  },
  {
    id: "NZ",
    name: "New Zealand",
    flag: "https://images.pexels.com/photos/724963/pexels-photo-724963.jpeg?auto=compress&cs=tinysrgb&w=800",
    code: "NZ",
    activeUsers: 134,
    consultants: 18,
    residents: 34,
    popularFor: ["Study", "Migration", "Travel"]
  },
  {
    id: "NL",
    name: "Netherlands",
    flag: "https://images.pexels.com/photos/119564/pexels-photo-119564.jpeg?auto=compress&cs=tinysrgb&w=800",
    code: "NL",
    activeUsers: 167,
    consultants: 31,
    residents: 42,
    popularFor: ["Study", "Work"]
  },
  {
    id: "SE",
    name: "Sweden",
    flag: "https://images.pexels.com/photos/1510610/pexels-photo-1510610.jpeg?auto=compress&cs=tinysrgb&w=800",
    code: "SE",
    activeUsers: 145,
    consultants: 22,
    residents: 38,
    popularFor: ["Study", "Work", "Migration"]
  }
];

export type ServiceType = 'study' | 'migration' | 'travel' | 'work';

export const serviceTypes: { id: ServiceType; name: string; icon: string; description: string; color: string }[] = [
  {
    id: 'study',
    name: 'Study Abroad',
    icon: '🎓',
    description: 'Get guidance for universities, courses, and student life from education consultants and current students.',
    color: 'from-blue-500 to-indigo-600'
  },
  {
    id: 'migration',
    name: 'Migration',
    icon: '🏠',
    description: 'Navigate visa processes and settlement procedures with immigration experts and recent migrants.',
    color: 'from-green-500 to-emerald-600'
  },
  {
    id: 'travel',
    name: 'Travel',
    icon: '✈️',
    description: 'Discover destinations and get authentic travel tips from travel consultants and local residents.',
    color: 'from-purple-500 to-violet-600'
  },
  {
    id: 'work',
    name: 'Work Abroad',
    icon: '💼',
    description: 'Find job opportunities and understand work culture with career consultants and working professionals.',
    color: 'from-orange-500 to-red-600'
  }
];