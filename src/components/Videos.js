import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Spinner } from 'react-bootstrap';
import '../Videos.css'; // ملف CSS مخصص للتنسيق


const Videos = ({ language }) => {
  const [tutorials, setTutorials] = useState([]);
  const [loadingVideos, setLoadingVideos] = useState({}); // حالة تحميل لكل فيديو

  const translations = {
    en: {
      title: 'Tutorials',
      loading: 'Loading video...',
      noVideos: 'No videos available at the moment.',
    },
    ar: {
      title: 'الدورات',
      loading: 'جاري تحميل الفيديو...',
      noVideos: 'لا توجد فيديوهات لعرضها حاليًا.',
    }
  };

  useEffect(() => {
    const fetchTutorials = async () => {
      try {
        const response = await fetch('https://personal-portfolio-6f9b.onrender.com/api/tutorials'); // استبدلي بالرابط الفعلي
        const data = await response.json();
        console.log(data);
        setTutorials(Array.isArray(data) ? data : []);
        // تهيئة حالة التحميل لكل فيديو
        const initialLoadingState = {};
        data.forEach((_, index) => {
          initialLoadingState[index] = true;
        });
        setLoadingVideos(initialLoadingState);
      } catch (err) {
        console.error('Failed to fetch tutorials:', err);
        setTutorials([]);
      }
    };

    fetchTutorials();
  }, []);

  const handleCanPlay = (index) => {
    setLoadingVideos((prev) => ({ ...prev, [index]: false }));
  };

  const handleError = (e, videoUrl, index) => {
    console.error('Video failed to load:', videoUrl, e);
    setLoadingVideos((prev) => ({ ...prev, [index]: false }));
  };

  return (
    <section id="tutorials" className="py-5 fade-in">
      <Container>
        <h2 className="text-center mb-5 text-white">{translations[language].title}</h2>
        {tutorials.length === 0 ? (
          <p className="text-center">{translations[language].noVideos}</p>
        ) : (
          <Row className="g-4">
            {tutorials.map((tutorial, index) => (
              <Col md={12} key={index}>
                <Card className="shadow-sm">
                  <Card.Body>
                    <Card.Title className="mb-4">{tutorial.title}</Card.Title>
                    <div className="mb-3 position-relative">
                      {loadingVideos[index] && (
                        <div
                          className="position-absolute w-100 h-100 d-flex justify-content-center align-items-center"
                          style={{ background: 'rgba(0, 0, 0, 0.1)', zIndex: 1, maxHeight: '400px' }}
                        >
                          <Spinner animation="border" variant="primary" />
                          <span className="ms-2">{translations[language].loading}</span>
                        </div>
                      )}
                      <div className="video-container">
                        <video
                          controls
                          controlsList="nodownload"
                          className="w-100"
                          style={{ maxHeight: '400px' }}
                          onCanPlay={() => handleCanPlay(index)}
                          onError={(e) => handleError(e, tutorial.videoUrl, index)}
                        >
                          <source src={tutorial.videoUrl} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </section>
  );
};

export default Videos;