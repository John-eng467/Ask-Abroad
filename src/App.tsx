import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ServiceSelectionPage from './pages/ServiceSelectionPage';
import CountrySelectionPage from './pages/CountrySelectionPage';
import ChatRoomPage from './pages/ChatRoomPage';
import SubscriptionPage from './pages/SubscriptionPage';
import AdminLoginPage from './pages/AdminLoginPage';
import CustomerDashboard from './pages/CustomerDashboard';
import ConsultantDashboard from './pages/ConsultantDashboard';
import ResidentDashboard from './pages/ResidentDashboard';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="services" element={<ServiceSelectionPage />} />
          <Route path="countries" element={<CountrySelectionPage />} />
          <Route path="chat/:countryId" element={<ChatRoomPage />} />
          <Route path="subscribe" element={<SubscriptionPage />} />
          <Route path="admin-login" element={<AdminLoginPage />} />
          <Route path="customer-dashboard" element={<CustomerDashboard />} />
          <Route path="consultant-dashboard" element={<ConsultantDashboard />} />
          <Route path="resident-dashboard" element={<ResidentDashboard />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;