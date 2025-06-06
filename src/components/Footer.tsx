import { Globe, Github, Twitter, Linkedin, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white border-t border-slate-700/50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <Globe className="h-8 w-8 text-emerald-400" />
              <span className="ml-3 text-2xl font-bold bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
                AskAbroad
              </span>
            </div>
            <p className="text-slate-400 mb-6 max-w-md">
              Connect with experts and locals before you travel. Get authentic insights for study, work, migration, and travel abroad.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors duration-300">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-slate-400 hover:text-emerald-400 transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-400 hover:text-emerald-400 transition-colors duration-300">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/countries" className="text-slate-400 hover:text-emerald-400 transition-colors duration-300">
                  Countries
                </Link>
              </li>
              <li>
                <Link to="/subscribe" className="text-slate-400 hover:text-emerald-400 transition-colors duration-300">
                  Premium
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-slate-400">
                <Mail className="h-4 w-4 mr-2" />
                <span>hello@askabroad.com</span>
              </li>
              <li className="flex items-center text-slate-400">
                <Phone className="h-4 w-4 mr-2" />
                <span>+1 (555) 123-4567</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-700/50">
          <div className="md:flex md:items-center md:justify-between">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-sm text-slate-400">
                &copy; {new Date().getFullYear()} AskAbroad. All rights reserved.
              </p>
            </div>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 text-center md:text-right">
              <a href="#" className="text-sm text-slate-400 hover:text-emerald-400 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-slate-400 hover:text-emerald-400 transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-slate-400 hover:text-emerald-400 transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;