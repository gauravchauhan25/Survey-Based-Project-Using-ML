import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import KnowTheActs from './pages/KnowTheActs';
import Questionnaire from './pages/Questionnaire';
import Dashboard from './pages/Dashboard';
import Analysis from './pages/Analysis';
import Campaigns from './pages/Campaigns';
import GlobalComparison from './pages/GlobalComparison';
import About from './pages/About';
import QuickAccess from './pages/QuickAccess';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AppLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/know-the-acts" element={<KnowTheActs />} />
          <Route path="/questionnaire" element={<Questionnaire />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/analysis" element={<Analysis />} />
          <Route path="/campaigns" element={<Campaigns />} />
          <Route path="/global-comparison" element={<GlobalComparison />} />
          <Route path="/about" element={<About />} />
          <Route path="/quick" element={<QuickAccess />} />
        </Routes>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}
