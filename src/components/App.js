import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import MembershipAnalytics from './pages/MembershipAnalytics';
import RevenueTracking from './pages/RevenueTracking';
import ProfitMargins from './pages/ProfitMargins';
import LifetimeValue from './pages/LifetimeValue';
import AttendanceTracking from './pages/AttendanceTracking';

function App() {
    return (
        <Router>
            <Header />
            <main>
                <Routes>
                    <Route path="/membership-analytics" element={<MembershipAnalytics />} />
                    <Route path="/revenue-tracking" element={<RevenueTracking />} />
                    <Route path="/profit-margins" element={<ProfitMargins />} />
                    <Route path="/lifetime-value" element={<LifetimeValue />} />
                    <Route path="/attendance-tracking" element={<AttendanceTracking />} />
                </Routes>
            </main>
            <Footer />
        </Router>
    );
}

export default App;