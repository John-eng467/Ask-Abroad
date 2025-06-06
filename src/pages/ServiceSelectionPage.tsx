import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { serviceTypes, ServiceType } from '../data/countries';
import { ArrowRight, Users, MessageCircle } from 'lucide-react';

const ServiceSelectionPage = () => {
  const navigate = useNavigate();
  const { setSelectedService } = useAuth();

  const handleServiceSelect = (serviceType: ServiceType) => {
    setSelectedService(serviceType);
    navigate('/countries');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container-custom py-16">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center px-6 py-3 bg-emerald-500/20 rounded-full border border-emerald-500/30 mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Users className="h-5 w-5 text-emerald-400 mr-2" />
            <span className="text-emerald-400 font-medium">Choose Your Journey</span>
          </motion.div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            What's Your <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">Purpose</span> Abroad?
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Select your journey type to connect with the right experts and locals who can guide you through your abroad experience.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {serviceTypes.map((service, index) => (
            <motion.div
              key={service.id}
              className="group relative"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-emerald-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/10 cursor-pointer h-full"
                   onClick={() => handleServiceSelect(service.id)}>
                
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}></div>
                
                <div className="relative z-10 text-center">
                  {/* Icon */}
                  <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-emerald-400 transition-colors duration-300">
                    {service.name}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center justify-center text-sm text-slate-400">
                      <MessageCircle className="h-4 w-4 text-green-400 mr-2" />
                      <span>Free Expert Consultation</span>
                    </div>
                    <div className="flex items-center justify-center text-sm text-slate-400">
                      <Users className="h-4 w-4 text-blue-400 mr-2" />
                      <span>Premium Local Insights</span>
                    </div>
                  </div>

                  {/* Button */}
                  <div className="flex items-center justify-center text-emerald-400 font-medium group-hover:text-emerald-300 transition-colors duration-300">
                    <span>Get Started</span>
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className="text-slate-400 mb-6">
            Not sure which path to choose? Our experts can help you decide.
          </p>
          <button 
            className="px-8 py-3 bg-slate-800/50 backdrop-blur-sm text-white rounded-xl font-medium border border-slate-600/50 hover:bg-slate-700/50 transition-all duration-300"
            onClick={() => navigate('/countries')}
          >
            Browse All Countries
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default ServiceSelectionPage;