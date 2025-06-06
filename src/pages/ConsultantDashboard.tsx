import { motion } from 'framer-motion';
import { Users, MessageCircle, Clock, TrendingUp, Star, Calendar, Bell } from 'lucide-react';

const ConsultantDashboard = () => {
  const stats = [
    { icon: Users, label: 'Active Students', value: '24', color: 'text-blue-400' },
    { icon: MessageCircle, label: 'Messages Today', value: '47', color: 'text-emerald-400' },
    { icon: Clock, label: 'Avg Response Time', value: '5m', color: 'text-purple-400' },
    { icon: Star, label: 'Rating', value: '4.9', color: 'text-yellow-400' }
  ];

  const activeChats = [
    { student: 'Priya Sharma', country: 'India', service: 'UK Study', lastMessage: '5 min ago', urgent: true },
    { student: 'Rahul Patel', country: 'India', service: 'Canada Migration', lastMessage: '12 min ago', urgent: false },
    { student: 'Anita Kumar', country: 'India', service: 'Germany Work', lastMessage: '1 hour ago', urgent: false },
    { student: 'Vikram Singh', country: 'India', service: 'Australia Study', lastMessage: '2 hours ago', urgent: true }
  ];

  const todaySchedule = [
    { time: '10:00 AM', event: 'Group consultation - UK Universities', type: 'consultation' },
    { time: '2:00 PM', event: 'One-on-one session - Visa guidance', type: 'session' },
    { time: '4:30 PM', event: 'Webinar - Study abroad tips', type: 'webinar' }
  ];

  const recentActivity = [
    { action: 'Helped student with UCAS application', time: '2 hours ago' },
    { action: 'Answered visa requirement question', time: '4 hours ago' },
    { action: 'Provided university recommendations', time: '6 hours ago' },
    { action: 'Completed consultation session', time: '1 day ago' }
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
            <h1 className="text-4xl font-bold text-white mb-2">Consultant Dashboard</h1>
            <p className="text-slate-400 text-lg">Help students achieve their abroad dreams</p>
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
            {/* Active Chats */}
            <motion.div
              className="lg:col-span-2 bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-xl font-bold text-white mb-4 flex items-center">
                <MessageCircle className="h-5 w-5 mr-2 text-blue-400" />
                Active Student Chats
              </h2>
              <div className="space-y-4">
                {activeChats.map((chat, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-slate-700/30 rounded-lg">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                        {chat.student.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <h3 className="font-medium text-white">{chat.student}</h3>
                        <p className="text-sm text-slate-400">{chat.service} • {chat.lastMessage}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      {chat.urgent && (
                        <Bell className="h-4 w-4 text-red-400 mr-2" />
                      )}
                      <button className="text-blue-400 hover:text-blue-300 text-sm font-medium">
                        Reply
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Today's Schedule */}
            <motion.div
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h2 className="text-xl font-bold text-white mb-4 flex items-center">
                <Calendar className="h-5 w-5 mr-2 text-emerald-400" />
                Today's Schedule
              </h2>
              <div className="space-y-4">
                {todaySchedule.map((item, index) => (
                  <div key={index} className="p-3 bg-slate-700/30 rounded-lg">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium text-emerald-400">{item.time}</span>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        item.type === 'consultation' ? 'bg-blue-500/20 text-blue-400' :
                        item.type === 'session' ? 'bg-purple-500/20 text-purple-400' :
                        'bg-emerald-500/20 text-emerald-400'
                      }`}>
                        {item.type}
                      </span>
                    </div>
                    <p className="text-sm text-slate-300">{item.event}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Recent Activity */}
          <motion.div
            className="mt-8 bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="text-xl font-bold text-white mb-4 flex items-center">
              <TrendingUp className="h-5 w-5 mr-2 text-purple-400" />
              Recent Activity
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="p-4 bg-slate-700/30 rounded-lg">
                  <p className="text-slate-300 mb-1">{activity.action}</p>
                  <p className="text-xs text-slate-500">{activity.time}</p>
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
              <button className="p-4 bg-indigo-600/20 border border-indigo-500/30 rounded-lg text-left hover:bg-indigo-600/30 transition-colors duration-300">
                <MessageCircle className="h-6 w-6 text-indigo-400 mb-2" />
                <h3 className="font-medium text-white">Join Chat Rooms</h3>
                <p className="text-sm text-slate-400">Help students in real-time</p>
              </button>
              <button className="p-4 bg-emerald-600/20 border border-emerald-500/30 rounded-lg text-left hover:bg-emerald-600/30 transition-colors duration-300">
                <Calendar className="h-6 w-6 text-emerald-400 mb-2" />
                <h3 className="font-medium text-white">Schedule Session</h3>
                <p className="text-sm text-slate-400">Book consultation slots</p>
              </button>
              <button className="p-4 bg-purple-600/20 border border-purple-500/30 rounded-lg text-left hover:bg-purple-600/30 transition-colors duration-300">
                <TrendingUp className="h-6 w-6 text-purple-400 mb-2" />
                <h3 className="font-medium text-white">View Analytics</h3>
                <p className="text-sm text-slate-400">Track your performance</p>
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ConsultantDashboard;