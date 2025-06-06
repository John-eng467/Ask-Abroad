import { motion } from 'framer-motion';
import { MessageCircle, Globe, Clock, Star, TrendingUp, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CustomerDashboard = () => {
  const navigate = useNavigate();

  const stats = [
    { icon: MessageCircle, label: 'Active Chats', value: '3', color: 'text-blue-400' },
    { icon: Globe, label: 'Countries Explored', value: '2', color: 'text-emerald-400' },
    { icon: Clock, label: 'Hours Spent', value: '12', color: 'text-purple-400' },
    { icon: Star, label: 'Consultations', value: '5', color: 'text-yellow-400' }
  ];

  const recentChats = [
    { country: 'United Kingdom', service: 'Study', lastMessage: '2 hours ago', status: 'active' },
    { country: 'Canada', service: 'Migration', lastMessage: '1 day ago', status: 'inactive' },
    { country: 'Australia', service: 'Work', lastMessage: '3 days ago', status: 'inactive' }
  ];

  const recommendations = [
    { title: 'Connect with UK Students', description: 'Get insights about university life', action: 'Join Chat' },
    { title: 'Migration Consultation', description: 'Free session with Canada expert', action: 'Book Now' },
    { title: 'Work Visa Guide', description: 'Complete guide for Australia', action: 'Download' }
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
            <h1 className="text-4xl font-bold text-white mb-2">Welcome Back!</h1>
            <p className="text-slate-400 text-lg">Continue your journey abroad with expert guidance</p>
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Recent Chats */}
            <motion.div
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-xl font-bold text-white mb-4 flex items-center">
                <MessageCircle className="h-5 w-5 mr-2 text-blue-400" />
                Recent Chats
              </h2>
              <div className="space-y-4">
                {recentChats.map((chat, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
                    <div>
                      <h3 className="font-medium text-white">{chat.country}</h3>
                      <p className="text-sm text-slate-400">{chat.service} • {chat.lastMessage}</p>
                    </div>
                    <div className="flex items-center">
                      <div className={`w-2 h-2 rounded-full mr-3 ${
                        chat.status === 'active' ? 'bg-green-400' : 'bg-gray-400'
                      }`}></div>
                      <button 
                        className="text-blue-400 hover:text-blue-300 text-sm font-medium"
                        onClick={() => navigate('/countries')}
                      >
                        Continue
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Recommendations */}
            <motion.div
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h2 className="text-xl font-bold text-white mb-4 flex items-center">
                <TrendingUp className="h-5 w-5 mr-2 text-emerald-400" />
                Recommendations
              </h2>
              <div className="space-y-4">
                {recommendations.map((rec, index) => (
                  <div key={index} className="p-4 bg-slate-700/30 rounded-lg">
                    <h3 className="font-medium text-white mb-1">{rec.title}</h3>
                    <p className="text-sm text-slate-400 mb-3">{rec.description}</p>
                    <button className="text-emerald-400 hover:text-emerald-300 text-sm font-medium">
                      {rec.action}
                    </button>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Quick Actions */}
          <motion.div
            className="mt-8 bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="text-xl font-bold text-white mb-4">Quick Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button 
                className="p-4 bg-blue-600/20 border border-blue-500/30 rounded-lg text-left hover:bg-blue-600/30 transition-colors duration-300"
                onClick={() => navigate('/services')}
              >
                <MessageCircle className="h-6 w-6 text-blue-400 mb-2" />
                <h3 className="font-medium text-white">Start New Chat</h3>
                <p className="text-sm text-slate-400">Connect with experts</p>
              </button>
              <button 
                className="p-4 bg-emerald-600/20 border border-emerald-500/30 rounded-lg text-left hover:bg-emerald-600/30 transition-colors duration-300"
                onClick={() => navigate('/countries')}
              >
                <Globe className="h-6 w-6 text-emerald-400 mb-2" />
                <h3 className="font-medium text-white">Explore Countries</h3>
                <p className="text-sm text-slate-400">Discover new destinations</p>
              </button>
              <button 
                className="p-4 bg-purple-600/20 border border-purple-500/30 rounded-lg text-left hover:bg-purple-600/30 transition-colors duration-300"
                onClick={() => navigate('/subscribe')}
              >
                <Star className="h-6 w-6 text-purple-400 mb-2" />
                <h3 className="font-medium text-white">Upgrade Plan</h3>
                <p className="text-sm text-slate-400">Get premium features</p>
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default CustomerDashboard;