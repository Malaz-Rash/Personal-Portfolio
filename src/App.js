import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import Home from './components/Home';
import About from './components/About';
import Videos from './components/Videos';
import Projects from './components/Projects';
import './App.css';

const ScrollToTop = ({ onScroll }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      onScroll();
    }, 300);
  }, [pathname, onScroll]);

  return null;
};

const App = () => {
  const [language, setLanguage] = useState('en');
  const [scrolled, setScrolled] = useState(false);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  const translations = {
    en: {
      brand: 'Malaz Alrasheed',
      home: 'Home',
      about: 'About',
      videos: 'Tutorials', // تغيير الاسم إلى Tutorials
      projects: 'Projects',
      toggle: 'AR'
    },
    ar: {
      brand: 'ملاذ الرشيد',
      home: 'الرئيسية',
      about: 'عني',
      videos: 'الدورات', // تغيير الاسم إلى الدورات
      projects: 'المشاريع',
      toggle: 'EN'
    }
  };

  const handleScroll = () => {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 1.2) {
        el.classList.add('visible');
      }
    });

    setTimeout(() => {
      elements.forEach((el) => {
        el.classList.add('visible');
      });
    }, 500);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      handleScroll();
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <BrowserRouter>
      <div className={language === 'ar' ? 'rtl app-container' : 'app-container'}>
        <ScrollToTop onScroll={handleScroll} />
        <Navbar expand="lg" sticky="top" className={scrolled ? 'scrolled' : ''}>
          <Container>
            <Navbar.Brand as={Link} to="/">{translations[language].brand}</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="nav-container">
              <Nav>
                <Nav.Link as={Link} to="/">{translations[language].home}</Nav.Link>
                <Nav.Link as={Link} to="/about">{translations[language].about}</Nav.Link>
                <Nav.Link as={Link} to="/videos">{translations[language].videos}</Nav.Link>
                <Nav.Link as={Link} to="/projects">{translations[language].projects}</Nav.Link>
              </Nav>
              <Button
                variant="link"
                className="language-toggle"
                onClick={toggleLanguage}
              >
                {translations[language].toggle}
              </Button>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Routes>
          <Route path="/" element={<Home language={language} />} />
          <Route path="/about" element={<About language={language} />} />
          <Route path="/videos" element={<Videos language={language} />} />
          <Route path="/projects" element={<Projects language={language} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;