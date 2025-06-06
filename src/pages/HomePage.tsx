import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { MessageCircle, Users, Globe, Zap, CheckCircle, ShieldCheck, Clock, Star, ArrowRight, Sparkles } from 'lucide-react';

const HomePage = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const services = [
    {
      icon: "🎓",
      title: "Study Abroad",
      description: "Get expert guidance for universities, courses, and student life from consultants and current students.",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: "🏠",
      title: "Migration",
      description: "Navigate visa processes and settlement procedures with immigration experts and recent migrants.",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: "✈️",
      title: "Travel",
      description: "Discover destinations and get authentic travel tips from locals and travel consultants.",
      color: "from-purple-500 to-violet-600"
    },
    {
      icon: "💼",
      title: "Work Abroad",
      description: "Find job opportunities and understand work culture with career consultants and professionals.",
      color: "from-orange-500 to-red-600"
    }
  ];

  const features = [
    {
      icon: <MessageCircle className="h-8 w-8 text-emerald-400" />,
      title: "Free Expert Consultation",
      description: "Chat with certified consultants for free guidance on your abroad journey."
    },
    {
      icon: <Users className="h-8 w-8 text-blue-400" />,
      title: "Connect with Locals",
      description: "Premium access to chat with residents who've been through your journey."
    },
    {
      icon: <Globe className="h-8 w-8 text-purple-400" />,
      title: "Global Coverage",
      description: "Connect with experts and locals from 12+ popular destination countries."
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-400" />,
      title: "Instant Responses",
      description: "Get real-time answers to your questions from verified experts and locals."
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      country: "Moving to Canada",
      content: "The migration consultant helped me understand the entire Express Entry process. Now I'm successfully settled in Toronto!",
      rating: 5,
      service: "Migration"
    },
    {
      name: "Rahul Patel",
      country: "Studying in UK",
      content: "Talking to current students in the UK gave me real insights about university life. Worth every penny!",
      rating: 5,
      service: "Study"
    },
    {
      name: "Anita Kumar",
      country: "Working in Germany",
      content: "The work consultant guided me through visa requirements and I landed my dream job in Berlin!",
      rating: 5,
      service: "Work"
    }
  ];

  return (
    <div className="bg-slate-900 text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/90 via-slate-900/95 to-blue-900/90"></div>
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
        </div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container-custom relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="inline-flex items-center px-4 py-2 bg-emerald-500/20 rounded-full border border-emerald-500/30 mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Sparkles className="h-4 w-4 text-emerald-400 mr-2" />
              <span className="text-emerald-400 text-sm font-medium">Connect Before You Go</span>
            </motion.div>

            <motion.h1 
              className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Ask
              </span>
              <span className="text-white">Abroad</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Get expert guidance and connect with locals before your journey abroad. 
              <span className="text-emerald-400 font-semibold"> Free consultations</span> and 
              <span className="text-blue-400 font-semibold"> premium local insights</span> for study, work, migration, and travel.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <motion.button 
                className="group px-8 py-4 bg-gradient-to-r from-emerald-500 to-blue-600 text-white rounded-xl font-semibold text-lg shadow-2xl shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all duration-300 flex items-center"
                onClick={() => navigate('/services')}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageCircle className="mr-3 h-6 w-6" />
                Start Free Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>
              
              <motion.button 
                className="px-8 py-4 bg-slate-800/50 backdrop-blur-sm text-white rounded-xl font-semibold text-lg border border-slate-600/50 hover:bg-slate-700/50 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Watch Demo
              </motion.button>
            </motion.div>

            <motion.div
              className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-400">500+</div>
                <div className="text-sm text-slate-400">Expert Consultants</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">12+</div>
                <div className="text-sm text-slate-400">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">10k+</div>
                <div className="text-sm text-slate-400">Success Stories</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">24/7</div>
                <div className="text-sm text-slate-400">Support</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <motion.section 
        className="py-20 bg-gradient-to-b from-slate-900 to-slate-800"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            variants={itemVariants}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Your Journey, <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">Our Expertise</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Whether you're planning to study, work, migrate, or travel abroad, we connect you with the right experts and locals.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={index} 
                className="group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-emerald-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/10"
                variants={itemVariants}
                whileHover={{ y: -10 }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}></div>
                <div className="relative z-10">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-emerald-400 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section 
        className="py-20 bg-gradient-to-b from-slate-800 to-slate-900"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            variants={itemVariants}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">AskAbroad?</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              We bridge the gap between your dreams and reality with authentic connections and expert guidance.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div 
                key={index} 
                className="text-center group"
                variants={itemVariants}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-800/50 rounded-2xl border border-slate-700/50 group-hover:border-emerald-500/50 transition-all duration-300 mb-6 group-hover:scale-110">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-emerald-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section 
        className="py-20 bg-gradient-to-b from-slate-900 to-slate-800"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            variants={itemVariants}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Success <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">Stories</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Real people, real journeys, real success with AskAbroad.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index} 
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-emerald-500/50 transition-all duration-500"
                variants={itemVariants}
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-300 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-white">{testimonial.name}</h4>
                    <p className="text-sm text-slate-400">{testimonial.country}</p>
                  </div>
                  <div className="px-3 py-1 bg-emerald-500/20 rounded-full">
                    <span className="text-emerald-400 text-sm font-medium">{testimonial.service}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="py-20 bg-gradient-to-br from-emerald-900/50 via-slate-900 to-blue-900/50"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container-custom text-center">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            variants={itemVariants}
          >
            Ready to Start Your <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">Journey?</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Join thousands who've successfully navigated their abroad journey with expert guidance and local insights.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            variants={itemVariants}
          >
            <motion.button 
              className="group px-8 py-4 bg-gradient-to-r from-emerald-500 to-blue-600 text-white rounded-xl font-semibold text-lg shadow-2xl shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all duration-300 flex items-center"
              onClick={() => navigate('/services')}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Free Consultation
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>
            <motion.button 
              className="px-8 py-4 bg-slate-800/50 backdrop-blur-sm text-white rounded-xl font-semibold text-lg border border-slate-600/50 hover:bg-slate-700/50 transition-all duration-300"
              onClick={() => navigate('/subscribe')}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Premium
            </motion.button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default HomePage;