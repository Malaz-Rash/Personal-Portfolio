import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import profileImage from '../assets/profile.jpg';

const Home = ({ language }) => {
  const translations = {
    en: {
      title: 'Welcome to My Portfolio!',
      description: 'Web Developer | PSM1 | System Analyst | IT Specialist',
      intro: 'I’m a passionate Software Developer dedicated to crafting innovative tech solutions that make a lasting impact.',
      passion: 'Beyond coding, I cherish life’s adventures and the joy of learning. I find inspiration in exploring new technologies, reading about innovative solutions, and enjoying moments of creativity through hobbies like graphic design and problem-solving challenges.'
    },
    ar: {
      title: 'مرحبًا بكم في موقعي الشخصي!',
      description: 'مطورة ويب | PSM1 | محللة أنظمة | أخصائية تقنية معلومات',
      intro: 'أنا مهندسة برمجيات شغوفة بصياغة حلول تقنية مبتكرة تُحدث أثرًا دائمًا.',
      passion: 'خارج نطاق البرمجة، أعشق مغامرات الحياة وفرحة التعلم. أجد الإلهام في استكشاف التقنيات الجديدة، القراءة عن الحلول المبتكرة، والاستمتاع بالإبداع من خلال هوايات مثل التصميم الجرافيكي وتحديات حل المشكلات.'
    }
  };

  return (
    <section id="home" className="py-5 fade-in">
      <Container>
        <Row>
          <Col md={6} className="text-center text-md-start">
            <h1 className="display-4">{translations[language].title}</h1>
            <p className="lead">{translations[language].description}</p>
            <div className="profile-summary fade-in">
              <Row className="g-4">
                <Col md={12}>
                  <Card>
                    <Card.Body>
                      <Card.Text>{translations[language].intro}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={12} className="mt-4">
                  <Card className="passion-card">
                    <Card.Body>
                      <Card.Text>{translations[language].passion}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </div>
          </Col>
          <Col md={6} className="text-center">
            <img
              src={profileImage}
              alt="Malaz Alrasheed"
              className="img-fluid profile-image fade-in"
              style={{ maxWidth: '300px', height: 'auto' }}
            />
            <div className="social-links fade-in">
              <a href="https://www.linkedin.com/in/malaz-alrasheed-younis" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://github.com/Malaz-Rash" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="mailto:malazrash560@gmail.com">
                <FaEnvelope />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Home;