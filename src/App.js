import React from 'react';
import Header from './components/navbar';
import HomeSection from './components/homeSection';
import AboutMeSection from './components/AboutMe';
import MySkills from './components/MySkills';
import ServicesSection from './components/Services';
import ProjectsSection from './components/Projects';
import ContactSection from './components/Contact';
import './components/contactForm';
import './components/global.css';
import './components/navnew.css';
import './components/homeSection.css';
import './components/AboutMe.css';
import './components/mySkills.css';
import './components/Services.css';
import './components/Projects.css';
import './components/Contact.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
    return (
        <div>
            <Router>
                <Header />
                <Routes>
                    <Route path="/AboutMeSection" element={<AboutMeSection />} />
                    <Route path="/MySkills" element={<MySkills />} />
                    <Route path="/ServicesSection" element={<ServicesSection />} />
                    <Route path="/ProjectsSection" element={<ProjectsSection />} />
                    <Route path="/ContactSection" element={<ContactSection />} />
                </Routes>
            </Router>
            <HomeSection />
            <AboutMeSection />
            <MySkills />
            <ServicesSection />
            <ProjectsSection />
            <ContactSection />
        </div>
    );
};

export default App;


