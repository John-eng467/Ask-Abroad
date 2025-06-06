import { motion } from 'framer-motion';
import { Users, MessageCircle, MapPin, Heart, Star, Globe, Coffee, Calendar } from 'lucide-react';

const ResidentDashboard = () => {
  const stats = [
    { icon: Users, label: 'Students Helped', value: '18', color: 'text-blue-400' },
    { icon: MessageCircle, label: 'Messages Today', value: '23', color: 'text-emerald-400' },
    { icon: Heart, label: 'Helpful Votes', value: '156', color: 'text-red-400' },
    { icon: Star, label: 'Rating', value: '4.8', color: 'text-yellow-400' }
  ];

  const activeChats = [
    { student: 'Arjun Mehta', question: 'Best areas to live in London?', time: '3 min ago', urgent: false },
    { student: 'Sneha Gupta', question: 'Part-time job opportunities', time: '15 min ago', urgent: true },
    { student: 'Karan Joshi', question: 'University accommodation tips', time: '45 min ago', urgent: false },
    { student: 'Riya Sharma', question: 'Cost of living in Manchester', time: '1 hour ago', urgent: false }
  ];

  const localInsights = [
    { title: 'Weather Update', content: 'Rainy season starting, pack umbrellas!', category: 'weather' },
    { title: 'Student Discount', content: 'New 20% off at local restaurants', category: 'deals' },
    { title: 'Transport News', content: 'Night bus service extended', category: 'transport' },
    { title: 'Event Alert', content: 'International student meetup this weekend', category: 'events' }
  ];

  const helpfulTips = [
    { tip: 'Always carry an Oyster card for London transport', votes: 45 },
    { tip: 'Tesco meal deals are great for budget lunches', votes: 38 },
    { tip: 'Join university societies to make friends', votes: 52 },
    { tip: 'Use student discount apps like UNiDAYS', votes: 41 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-8">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-white mb-2">Resident Dashboard</h1>
            <p className="text-slate-400 text-lg flex items-center">
              <MapPin className="h-5 w-5 mr-2 text-emerald-400" />
              Sharing local insights from United Kingdom
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-slate-400 text-sm">{stat.label}</p>
                    <p className="text-2xl font-bold text-white">{stat.value}</p>
                  </div>
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Active Student Questions */}
            <motion.div
              className="lg:col-span-2 bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-xl font-bold text-white mb-4 flex items-center">
                <MessageCircle className="h-5 w-5 mr-2 text-blue-400" />
                Student Questions
              </h2>
              <div className="space-y-4">
                {activeChats.map((chat, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-slate-700/30 rounded-lg">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                        {chat.student.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <h3 className="font-medium text-white">{chat.student}</h3>
                        <p className="text-sm text-slate-400">{chat.question}</p>
                        <p className="text-xs text-slate-500">{chat.time}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      {chat.urgent && (
                        <span className="text-xs bg-red-500/20 text-red-400 px-2 py-1 rounded-full mr-2">
                          Urgent
                        </span>
                      )}
                      <button className="text-emerald-400 hover:text-emerald-300 text-sm font-medium">
                        Help
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Local Insights */}
            <motion.div
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h2 className="text-xl font-bold text-white mb-4 flex items-center">
                <Globe className="h-5 w-5 mr-2 text-emerald-400" />
                Local Insights
              </h2>
              <div className="space-y-4">
                {localInsights.map((insight, index) => (
                  <div key={index} className="p-3 bg-slate-700/30 rounded-lg">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-sm font-medium text-white">{insight.title}</h3>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        insight.category === 'weather' ? 'bg-blue-500/20 text-blue-400' :
                        insight.category === 'deals' ? 'bg-green-500/20 text-green-400' :
                        insight.category === 'transport' ? 'bg-purple-500/20 text-purple-400' :
                        'bg-orange-500/20 text-orange-400'
                      }`}>
                        {insight.category}
                      </span>
                    </div>
                    <p className="text-sm text-slate-300">{insight.content}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Helpful Tips */}
          <motion.div
            className="mt-8 bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="text-xl font-bold text-white mb-4 flex items-center">
              <Star className="h-5 w-5 mr-2 text-yellow-400" />
              Your Most Helpful Tips
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {helpfulTips.map((tip, index) => (
                <div key={index} className="p-4 bg-slate-700/30 rounded-lg">
                  <p className="text-slate-300 mb-2">{tip.tip}</p>
                  <div className="flex items-center">
                    <Heart className="h-4 w-4 text-red-400 mr-1" />
                    <span className="text-sm text-slate-400">{tip.votes} helpful votes</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            className="mt-8 bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <h2 className="text-xl font-bold text-white mb-4">Quick Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button className="p-4 bg-emerald-600/20 border border-emerald-500/30 rounded-lg text-left hover:bg-emerald-600/30 transition-colors duration-300">
                <MessageCircle className="h-6 w-6 text-emerald-400 mb-2" />
                <h3 className="font-medium text-white">Join Chat Rooms</h3>
                <p className="text-sm text-slate-400">Share your local knowledge</p>
              </button>
              <button className="p-4 bg-blue-600/20 border border-blue-500/30 rounded-lg text-left hover:bg-blue-600/30 transition-colors duration-300">
                <Coffee className="h-6 w-6 text-blue-400 mb-2" />
                <h3 className="font-medium text-white">Share Local Tips</h3>
                <p className="text-sm text-slate-400">Add helpful insights</p>
              </button>
              <button className="p-4 bg-purple-600/20 border border-purple-500/30 rounded-lg text-left hover:bg-purple-600/30 transition-colors duration-300">
                <Calendar className="h-6 w-6 text-purple-400 mb-2" />
                <h3 className="font-medium text-white">Local Events</h3>
                <p className="text-sm text-slate-400">Share upcoming events</p>
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ResidentDashboard;