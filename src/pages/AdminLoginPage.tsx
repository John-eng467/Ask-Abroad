import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import LoginSignupModal from '../components/LoginSignupModal';
import { useAuth } from '../context/AuthContext';

const AdminLoginPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { login, setUserRole } = useAuth();
  const [showModal, setShowModal] = useState(true);
  
  const role = searchParams.get('role') as 'consultant' | 'resident';

  useEffect(() => {
    if (!role || (role !== 'consultant' && role !== 'resident')) {
      navigate('/');
    }
  }, [role, navigate]);

  const handleLoginSuccess = () => {
    setUserRole(role);
    login(role);
    setShowModal(false);
    navigate('/services');
  };

  const handleClose = () => {
    setShowModal(false);
    navigate('/');
  };

  if (!role) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold text-white mb-4">
          Welcome {role === 'consultant' ? 'Consultant' : 'Resident'}
        </h1>
        <p className="text-slate-400 text-lg">
          Please complete your {role === 'consultant' ? 'consultant' : 'resident'} registration
        </p>
      </motion.div>

      <LoginSignupModal
        isOpen={showModal}
        onClose={handleClose}
        onSuccess={handleLoginSuccess}
        userType={role}
      />
    </div>
  );
};

export default AdminLoginPage;