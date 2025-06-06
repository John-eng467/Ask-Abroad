import { useState, useRef, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Send, Lock, Menu, ArrowLeft, Plane, MapPin, Calendar, DollarSign, Star, Clock, Users as UsersIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { chatRooms } from '../data/chatData';
import ChatMessage from '../components/ChatMessage';
import SubscriptionModal from '../components/SubscriptionModal';
import { countries } from '../data/countries';

const ChatRoomPage = () => {
  const { countryId } = useParams<{ countryId: string }>();
  const navigate = useNavigate();
  const { authStatus, subscriptionStatus, selectedService } = useAuth();
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState('');
  const [showSubscriptionModal, setShowSubscriptionModal] = useState(false);
  const [showChatList, setShowChatList] = useState(true);
  const [currentChatRooms, setCurrentChatRooms] = useState(
    chatRooms.filter(room => room.country === countryId)
  );
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const country = countries.find(c => c.id === countryId);

  // Flight booking data for travel service
  const flightOptions = [
    {
      airline: 'British Airways',
      route: 'Delhi → London',
      price: '₹45,000',
      duration: '8h 30m',
      departure: '10:30 AM',
      arrival: '3:00 PM',
      stops: 'Non-stop',
      rating: 4.5
    },
    {
      airline: 'Air India',
      route: 'Mumbai → London',
      price: '₹42,500',
      duration: '9h 15m',
      departure: '2:15 AM',
      arrival: '7:30 AM',
      stops: 'Non-stop',
      rating: 4.2
    },
    {
      airline: 'Emirates',
      route: 'Delhi → London',
      price: '₹48,000',
      duration: '9h 45m',
      departure: '3:45 AM',
      arrival: '8:30 AM',
      stops: '1 stop (Dubai)',
      rating: 4.8
    }
  ];

  // Best places data for work service
  const bestPlaces = [
    {
      name: 'Tower Bridge',
      type: 'Landmark',
      description: 'Iconic Victorian bridge with stunning city views',
      rating: 4.6,
      image: 'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=400',
      distance: '2.5 km from city center'
    },
    {
      name: 'Hyde Park',
      type: 'Park',
      description: 'Large royal park perfect for weekend relaxation',
      rating: 4.4,
      image: 'https://images.pexels.com/photos/1796730/pexels-photo-1796730.jpeg?auto=compress&cs=tinysrgb&w=400',
      distance: '1.2 km from city center'
    },
    {
      name: 'Covent Garden',
      type: 'Shopping',
      description: 'Historic market with shops, restaurants, and street performers',
      rating: 4.3,
      image: 'https://images.pexels.com/photos/1796736/pexels-photo-1796736.jpeg?auto=compress&cs=tinysrgb&w=400',
      distance: '0.8 km from city center'
    },
    {
      name: 'Thames River Cruise',
      type: 'Activity',
      description: 'Scenic boat ride along the historic Thames River',
      rating: 4.7,
      image: 'https://images.pexels.com/photos/1796737/pexels-photo-1796737.jpeg?auto=compress&cs=tinysrgb&w=400',
      distance: 'Multiple departure points'
    }
  ];

  useEffect(() => {
    if (!countryId || !countries.some(c => c.id === countryId)) {
      navigate('/countries');
    }
  }, [countryId, navigate]);

  useEffect(() => {
    scrollToBottom();
  }, [currentChatRooms]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();

    if (!message.trim()) return;

    if (subscriptionStatus === 'free') {
      setShowSubscriptionModal(true);
      return;
    }

    // Add the message to the first chat room
    if (currentChatRooms.length > 0) {
      const updatedRooms = [...currentChatRooms];
      const firstRoom = { ...updatedRooms[0] };

      firstRoom.messages = [
        ...firstRoom.messages,
        {
          id: `new-${Date.now()}`,
          sender: "You",
          content: message,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          isConsultant: false
        }
      ];

      updatedRooms[0] = firstRoom;
      setCurrentChatRooms(updatedRooms);
      setMessage('');

      // Simulate bot response after 1 second
      setTimeout(() => {
        const botResponses = [
          "That's interesting! Tell me more.",
          "I agree with your point.",
          "Have you considered looking into this further?",
          "That's helpful information, thanks for sharing!",
          "I had a similar experience as well."
        ];

        const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];

        const responseRooms = [...updatedRooms];
        const responseRoom = { ...responseRooms[0] };

        responseRoom.messages = [
          ...responseRoom.messages,
          {
            id: `new-bot-${Date.now()}`,
            sender: "ChatBot",
            content: randomResponse,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            isConsultant: true
          }
        ];

        responseRooms[0] = responseRoom;
        setCurrentChatRooms(responseRooms);
      }, 1000);
    }
  };

  const handleRoomClick = () => {
    setShowChatList(false);
  };

  if (!country) {
    return <div>Loading...</div>;
  }

  const isTravel = selectedService === 'travel';
  const isWork = selectedService === 'work';

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="container-custom py-8">
        <motion.div
          className="bg-gray-800 rounded-lg overflow-hidden shadow-xl relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Chat header */}
          <div className="bg-gray-700 p-4 flex items-center justify-between">
            <div className="flex items-center">
              {!showChatList && (
                <button
                  onClick={() => setShowChatList(true)}
                  className="mr-3 text-gray-300 hover:text-white md:hidden"
                >
                  <ArrowLeft className="h-5 w-5" />
                </button>
              )}
              <div className="h-10 w-10 rounded-full overflow-hidden mr-3">
                <img src={country.flag} alt={country.name} className="h-full w-full object-cover" />
              </div>
              <div>
                <h2 className="font-semibold">
                  {country.name} {selectedService ? selectedService.charAt(0).toUpperCase() + selectedService.slice(1) : 'Student'} Chat
                </h2>
                <p className="text-xs text-gray-400">
                  {currentChatRooms.length === 0
                    ? "No active chat rooms"
                    : `${currentChatRooms[0]?.participants || 0} people online`}
                </p>
              </div>
            </div>
            <div>
              {subscriptionStatus === 'free' && (
                <button
                  className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm py-1 px-3 rounded-full flex items-center"
                  onClick={() => setShowSubscriptionModal(true)}
                >
                  <Lock className="h-3 w-3 mr-1" /> Upgrade
                </button>
              )}
            </div>
          </div>

          <div className="flex flex-col md:flex-row h-[600px] relative">
            {/* Chat room list */}
            <div 
              className={`
                absolute md:relative w-full md:w-1/4 bg-gray-800 border-r border-gray-700 
                overflow-y-auto h-full z-10 transition-transform duration-300 ease-in-out
                ${showChatList ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
              `}
            >
              <div className="p-4">
                <h3 className="text-sm font-medium text-gray-400 mb-2">CHAT ROOMS</h3>
                {currentChatRooms.length === 0 ? (
                  <p className="text-gray-500 text-sm">No chat rooms available</p>
                ) : (
                  <ul>
                    {currentChatRooms.map((room) => (
                      <li key={room.id} className="mb-2">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.preventDefault();
                            setShowModal(true);
                            handleRoomClick();
                          }}
                          className="w-full text-left p-2 rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700 transition-colors"
                        >
                          <div className="font-medium">{room.title}</div>
                          <div className="text-xs text-gray-400">
                            <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-1"></span>
                            {room.participants} Online
                          </div>
                        </button>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.preventDefault();
                            setShowModal(true);
                            handleRoomClick();
                          }}
                          className="w-full text-left p-2 rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700 transition-colors"
                        >
                          <div className="font-medium">{room.country} Residence Student</div>
                          <div className="text-xs text-gray-400">
                            <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-1"></span>
                            {room.participants} Online
                          </div>
                        </button>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.preventDefault();
                            setShowModal(true);
                            handleRoomClick();
                          }}
                          className="w-full text-left p-2 rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700 transition-colors"
                        >
                          <div className="font-medium">{room.sub2}</div>
                        </button>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.preventDefault();
                            handleRoomClick();
                          }}
                          className="w-full text-left p-2 rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700 transition-colors"
                        >
                          <div className="font-medium">{room.sub1}</div>
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            {/* Chat messages */}
            <div className={`
              flex-1 flex flex-col bg-gray-900
              ${showChatList ? 'hidden md:flex' : 'flex'}
            `}>
              <div className="flex-1 p-4 overflow-y-auto">
                {currentChatRooms.length > 0 ? (
                  <div className="space-y-4">
                    {currentChatRooms[0].messages.map((message, index) => (
                      <ChatMessage key={message.id} message={message} index={index} />
                    ))}
                    <div ref={messagesEndRef} />
                  </div>
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <p className="text-gray-500">No messages to display</p>
                  </div>
                )}
              </div>

              {/* Message input */}
              <div className="p-4 border-t border-gray-700">
                {subscriptionStatus === 'free' ? (
                  <div className="bg-gray-800 rounded-md p-4 text-center">
                    <Lock className="h-5 w-5 mx-auto mb-2 text-gray-400" />
                    <p className="text-gray-300 mb-2">You need a subscription to send messages</p>
                    <button
                      className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm py-2 px-4 rounded"
                      onClick={() => setShowSubscriptionModal(true)}
                    >
                      Upgrade Now
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSendMessage} className="flex items-center">
                    <input
                      type="text"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Type a message..."
                      className="flex-1 input"
                    />
                    <button
                      type="submit"
                      className="ml-2 p-2 bg-indigo-600 hover:bg-indigo-700 rounded-full text-white"
                    >
                      <Send className="h-5 w-5" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Travel Service - Flight Booking Section */}
        {isTravel && (
          <motion.div
            className="mt-8 bg-gradient-to-br from-blue-900/50 to-purple-900/50 rounded-lg p-6 border border-blue-500/30"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="flex items-center mb-6">
              <Plane className="h-6 w-6 text-blue-400 mr-3" />
              <h2 className="text-2xl font-bold text-white">Flight Booking Options to {country.name}</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {flightOptions.map((flight, index) => (
                <motion.div
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-white text-lg">{flight.airline}</h3>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 mr-1" />
                      <span className="text-yellow-400 text-sm">{flight.rating}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center text-slate-300">
                      <MapPin className="h-4 w-4 text-blue-400 mr-2" />
                      <span className="text-sm">{flight.route}</span>
                    </div>
                    <div className="flex items-center text-slate-300">
                      <Clock className="h-4 w-4 text-green-400 mr-2" />
                      <span className="text-sm">{flight.duration} • {flight.stops}</span>
                    </div>
                    <div className="flex items-center text-slate-300">
                      <Calendar className="h-4 w-4 text-purple-400 mr-2" />
                      <span className="text-sm">{flight.departure} - {flight.arrival}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <DollarSign className="h-5 w-5 text-emerald-400 mr-1" />
                      <span className="text-2xl font-bold text-emerald-400">{flight.price}</span>
                    </div>
                    <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-300">
                      Book Now
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-6 text-center">
              <p className="text-slate-400 mb-4">
                Compare prices and book directly with airlines or travel partners
              </p>
              <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                View More Flight Options
              </button>
            </div>
          </motion.div>
        )}

        {/* Work Service - Best Places Section */}
        {isWork && (
          <motion.div
            className="mt-8 bg-gradient-to-br from-emerald-900/50 to-teal-900/50 rounded-lg p-6 border border-emerald-500/30"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="flex items-center mb-6">
              <MapPin className="h-6 w-6 text-emerald-400 mr-3" />
              <h2 className="text-2xl font-bold text-white">Best Places to Visit in {country.name}</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {bestPlaces.map((place, index) => (
                <motion.div
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700/50 hover:border-emerald-500/50 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={place.image} 
                      alt={place.name}
                      className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-2 right-2 bg-black/70 px-2 py-1 rounded-full flex items-center">
                      <Star className="h-3 w-3 text-yellow-400 mr-1" />
                      <span className="text-yellow-400 text-xs">{place.rating}</span>
                    </div>
                    <div className="absolute top-2 left-2 bg-emerald-600/80 px-2 py-1 rounded-full">
                      <span className="text-white text-xs font-medium">{place.type}</span>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <h3 className="font-bold text-white text-lg mb-2">{place.name}</h3>
                    <p className="text-slate-400 text-sm mb-3">{place.description}</p>
                    <div className="flex items-center text-slate-500 text-xs">
                      <MapPin className="h-3 w-3 mr-1" />
                      <span>{place.distance}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-6 text-center">
              <p className="text-slate-400 mb-4">
                Discover amazing places to explore during your work breaks and weekends
              </p>
              <button className="px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg font-medium hover:from-emerald-700 hover:to-teal-700 transition-all duration-300">
                Explore More Destinations
              </button>
            </div>
          </motion.div>
        )}
      </div>

      <SubscriptionModal
        isOpen={showSubscriptionModal}
        onClose={() => setShowSubscriptionModal(false)}
        countryId={countryId || ''}
      />
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-sm w-full text-white">
            <h3 className="text-lg font-semibold mb-4">Upgrade Required</h3>
            <p className="text-gray-300 mb-6">You need to upgrade to use this feature.</p>
            <button
              onClick={() => setShowModal(false)}
              className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded transition-colors text-white font-medium"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatRoomPage;