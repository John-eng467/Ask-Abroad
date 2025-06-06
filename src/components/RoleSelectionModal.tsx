import React from 'react';
import { X, UserCheck, Home } from 'lucide-react';
import { motion } from 'framer-motion';

interface RoleSelectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRoleSelect: (role: 'consultant' | 'resident') => void;
}

const RoleSelectionModal: React.FC<RoleSelectionModalProps> = ({ isOpen, onClose, onRoleSelect }) => {
  if (!isOpen) return null;

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const modalVariants = {
    hidden: { opacity: 0, y: -50, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1 }
  };

  const buttonVariants = {
    hover: { scale: 1.05, transition: { duration: 0.2 } },
    tap: { scale: 0.95 }
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      onClick={onClose}
    >
      <motion.div 
        className="bg-gray-800 rounded-lg p-6 shadow-xl w-full max-w-md"
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-white">Select Your Role</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="mb-6">
          <p className="text-gray-300 mb-4">Are you joining as a consultant or a resident?</p>
        </div>

        <div className="space-y-4">
          <motion.button
            className="w-full py-4 px-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium flex items-center justify-center"
            onClick={() => onRoleSelect('consultant')}
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <UserCheck className="h-5 w-5 mr-3" />
            <div className="text-left">
              <div className="font-semibold">Consultant</div>
              <div className="text-sm text-indigo-200">Help students with expert guidance</div>
            </div>
          </motion.button>

          <motion.button
            className="w-full py-4 px-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-medium flex items-center justify-center"
            onClick={() => onRoleSelect('resident')}
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <Home className="h-5 w-5 mr-3" />
            <div className="text-left">
              <div className="font-semibold">Resident</div>
              <div className="text-sm text-emerald-200">Share your local experience</div>
            </div>
          </motion.button>
        </div>
        
        <p className="mt-4 text-xs text-gray-400 text-center">
          Choose the role that best describes your expertise and how you want to help others.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default RoleSelectionModal;