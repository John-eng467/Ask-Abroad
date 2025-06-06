import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, MessageCircle, LogIn, LogOut, User, Globe, Shield } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { motion } from 'framer-motion';
import RoleSelectionModal from './RoleSelectionModal';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showRoleModal, setShowRoleModal] = useState(false);
  const { authStatus, logout, userRole } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleChatClick = () => {
    navigate('/services');
    setIsOpen(false);
  };

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsOpen(false);
  };

  const handleAdminClick = () => {
    setShowRoleModal(true);
    setIsOpen(false);
  };

  const handleRoleSelect = (role: 'consultant' | 'resident') => {
    setShowRoleModal(false);
    navigate(`/admin-login?role=${role}`);
  };

  const getDashboardPath = () => {
    switch (userRole) {
      case 'consultant': return '/consultant-dashboard';
      case 'resident': return '/resident-dashboard';
      case 'customer': return '/customer-dashboard';
      default: return '/';
    }
  };

  const navAnimation = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const itemAnimation = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <>
      <nav className="bg-slate-900/95 backdrop-blur-sm shadow-lg border-b border-slate-700/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="flex-shrink-0"
              >
                <Link to="/" className="flex items-center group">
                  <div className="relative">
                    <Globe className="h-8 w-8 text-emerald-400 group-hover:text-emerald-300 transition-colors duration-300" />
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                  </div>
                  <span className="ml-3 text-xl font-bold bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
                    AskAbroad
                  </span>
                </Link>
              </motion.div>
            </div>
            
            {/* Desktop Navigation */}
            <motion.div 
              className="hidden md:flex md:items-center md:space-x-6"
              initial="hidden"
              animate="visible"
              variants={navAnimation}
            >
              <motion.div variants={itemAnimation}>
                <Link
                  to="/"
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    location.pathname === '/' 
                      ? 'bg-emerald-500/20 text-emerald-400 shadow-lg shadow-emerald-500/25' 
                      : 'text-slate-300 hover:bg-slate-700/50 hover:text-white'
                  }`}
                >
                  Home
                </Link>
              </motion.div>
              <motion.div variants={itemAnimation}>
                <button
                  onClick={handleChatClick}
                  className="px-4 py-2 rounded-lg text-sm font-medium text-slate-300 hover:bg-slate-700/50 hover:text-white transition-all duration-300 flex items-center"
                >
                  <MessageCircle className="mr-2 h-4 w-4" /> Connect
                </button>
              </motion.div>
              
              {/* Admin Button */}
              <motion.div variants={itemAnimation}>
                <button
                  onClick={handleAdminClick}
                  className="px-4 py-2 rounded-lg text-sm font-medium text-slate-300 hover:bg-slate-700/50 hover:text-white transition-all duration-300 flex items-center"
                >
                  <Shield className="mr-2 h-4 w-4" /> Admin
                </button>
              </motion.div>

              {authStatus === 'authenticated' || authStatus === 'guest' ? (
                <>
                  {authStatus === 'authenticated' && userRole && (
                    <motion.div variants={itemAnimation}>
                      <Link
                        to={getDashboardPath()}
                        className="px-4 py-2 rounded-lg text-sm font-medium text-slate-300 hover:bg-slate-700/50 hover:text-white transition-all duration-300 flex items-center"
                      >
                        <User className="mr-2 h-4 w-4" /> Dashboard
                      </Link>
                    </motion.div>
                  )}
                  <motion.div variants={itemAnimation}>
                    <button
                      onClick={handleLogout}
                      className="px-4 py-2 rounded-lg text-sm font-medium text-slate-300 hover:bg-slate-700/50 hover:text-white transition-all duration-300 flex items-center"
                    >
                      <LogOut className="mr-2 h-4 w-4" /> Logout
                    </button>
                  </motion.div>
                </>
              ) : (
                <motion.div variants={itemAnimation}>
                  <Link
                    to="/services"
                    className="px-4 py-2 rounded-lg text-sm font-medium bg-gradient-to-r from-emerald-500 to-blue-600 text-white hover:from-emerald-600 hover:to-blue-700 transition-all duration-300 flex items-center shadow-lg"
                  >
                    <LogIn className="mr-2 h-4 w-4" /> Get Started
                  </Link>
                </motion.div>
              )}
              {authStatus === 'authenticated' && (
                <motion.div variants={itemAnimation}>
                  <div className="bg-gradient-to-r from-emerald-500/20 to-blue-500/20 px-3 py-2 rounded-lg border border-emerald-500/30">
                    <User className="h-5 w-5 text-emerald-400" />
                  </div>
                </motion.div>
              )}
            </motion.div>
            
            {/* Mobile menu button */}
            <div className="flex md:hidden items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-700/50 focus:outline-none transition-colors duration-300"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? (
                  <X className="block h-6 w-6" />
                ) : (
                  <Menu className="block h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800/95 backdrop-blur-sm border-t border-slate-700/50">
            <Link
              to="/"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                location.pathname === '/' 
                  ? 'bg-emerald-500/20 text-emerald-400' 
                  : 'text-slate-300 hover:bg-slate-700/50 hover:text-white'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <button
              onClick={handleChatClick}
              className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:bg-slate-700/50 hover:text-white flex items-center"
            >
              <MessageCircle className="mr-2 h-5 w-5" /> Connect
            </button>
            <button
              onClick={handleAdminClick}
              className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:bg-slate-700/50 hover:text-white flex items-center"
            >
              <Shield className="mr-2 h-5 w-5" /> Admin
            </button>
            {authStatus === 'authenticated' || authStatus === 'guest' ? (
              <>
                {authStatus === 'authenticated' && userRole && (
                  <Link
                    to={getDashboardPath()}
                    className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:bg-slate-700/50 hover:text-white flex items-center"
                    onClick={() => setIsOpen(false)}
                  >
                    <User className="mr-2 h-5 w-5" /> Dashboard
                  </Link>
                )}
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:bg-slate-700/50 hover:text-white flex items-center"
                >
                  <LogOut className="mr-2 h-5 w-5" /> Logout
                </button>
              </>
            ) : (
              <Link
                to="/services"
                className="block px-3 py-2 rounded-md text-base font-medium bg-gradient-to-r from-emerald-500 to-blue-600 text-white flex items-center"
                onClick={() => setIsOpen(false)}
              >
                <LogIn className="mr-2 h-5 w-5" /> Get Started
              </Link>
            )}
          </div>
        </div>
      </nav>

      <RoleSelectionModal
        isOpen={showRoleModal}
        onClose={() => setShowRoleModal(false)}
        onRoleSelect={handleRoleSelect}
      />
    </>
  );
};

export default Navbar;