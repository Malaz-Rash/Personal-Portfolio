import React from 'react';
import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhone, faCertificate } from '@fortawesome/free-solid-svg-icons';
import badgeImage from '../assets/badge.png'; // استيراد صورة الـ Badge
import honourImage from '../assets/honour.png'; // استيراد صورة Honour
import classeraImage from '../assets/classera.jpg'; // استيراد صورة Calssera
import '../About.css'; // ملف CSS مخصص للتنسيق

const About = ({ language }) => {
  const translations = {
    en: {
      title: 'About Me',
      profileTitle: 'Profile',
      profile: 'I am Malaz Alrasheed, a dynamic and detail-oriented Software Developer and Certified Scrum Master with a robust foundation in Requirements Analysis, Stakeholder Management, and the Software Development Life Cycle (SDLC). I am driven to excel in collaborative and innovative environments, delivering high-quality solutions that drive project success. My passion for analytical problem-solving enables me to streamline processes, exceed client expectations, and contribute meaningfully to organizational goals.',
      educationTitle: 'Education',
      education: 'B.Sc. in Software Engineering (First Class Honours), Sudan University of Science and Technology, College of Computer Science and Information Technology, Nov 2015 – Dec 2020',
      experienceTitle: 'Experience',
      experience: [
        {
          position: 'Information Technology Specialist',
          company: 'New Generation International Schools, Riyadh, Saudi Arabia',
          period: 'Sept 2024 – Current (On-Site, Contract)',
          responsibilities: [
            'Administered the Classera System, ensuring seamless e-learning operations.',
            'Managed and supported end-users, promptly addressing inquiries and technical issues.',
            'Coordinated e-learning tools, managed smart classrooms, and oversaw virtual lessons.',
            'Designed graphic materials for advertisements and student ID cards, enhancing the school’s branding and visual communication.',
            'Developed and coded the Admission System, streamlining enrollment, examination processes, and result display for department heads.'
          ]
        },
        {
          position: 'Java Programming Language Instructor',
          company: '7isas, E-Learning Platform, Amman, Jordan',
          period: 'Apr 2023 – Jul 2024 (Remote, Contract)',
          responsibilities: [
            'Created online tutorials for Java programming fundamentals, covering computer recognition, programming principles, and code implementation.',
            'Guided students in developing logical thinking skills and algorithms for software problems.',
            'Taught the basics and syntax of Java, providing practical examples for real-world application.'
          ]
        },
        {
          position: 'Software Engineer',
          company: 'Hannibal and Brothers for Multi Activities Co. Ltd, Khartoum, Sudan',
          period: 'Apr 2021 – Apr 2022 (On-Site, Contract)',
          responsibilities: [
            'Trained in Agile Methodology (Scrum), Java EE (Spring Boot framework), Git, Jira, and Confluence.',
            'Performed system analysis and requirements documentation.',
            'Contributed to the analysis and development of backend APIs and modules for booking platforms.',
            'Developed and tested an electronic invoice management system.'
          ]
        },
        {
          position: 'Teaching Assistant',
          company: 'Sudan University of Science and Technology, Khartoum, Sudan',
          period: 'Jan 2021 – Jan 2022 (Part-Time, Volunteer)',
          responsibilities: [
            'Taught practical labs for Principles of Software Engineering (UML).',
            'Conducted practical labs for Programming Methods (Java Programming Language).'
          ]
        }
      ],
      skillsTitle: 'Skills',
      skills: {
        programming: ['Java', 'JavaScript', 'HTML5', 'CSS3'],
        frameworks: ['React.js', 'Node.js', 'Express.js', 'Spring Boot', 'React Bootstrap'],
        databases: ['MongoDB', 'PostgreSQL', 'SQL'],
        tools: ['Git', 'GitHub', 'Jira', 'Confluence', 'AWS S3', 'AWS CloudFront', 'Cloudinary', 'Render', 'Vercel', 'Mongo DB Cloude', 'Asana', 'Edraw', 'Classera'],
        methodologies: ['Agile (Scrum, Kanban)', 'Requirements Analysis (BRD, FRD, SRS)', 'UML', 'BPMN'],
        design: ['Graphic Design (Canva)']
      },
      certificationsTitle: 'Certifications',
      certifications: [
        {
          name: 'Professional Scrum Master I (PSM1)',
          issuer: 'Scrum.org',
          link: 'https://www.scrum.org/certificates/1012830',
          badge: badgeImage
        },
        {
          name: 'Honour Certificate',
          issuer: 'Sudan University of Science and Technology',
          link: null, // لا يوجد رابط، يمكن إضافته لاحقًا
          badge: honourImage
        },
        {
          name: 'Classera',
          issuer: 'Classera Middle East',
          link: null, // لا يوجد رابط، يمكن إضافته لاحقًا
          badge: classeraImage
        }
      ],
      contactTitle: 'Contact',
      location: 'Riyadh, Saudi Arabia',
      email: 'malazrash560@gmail.com',
      phone: '+966 543 138 773'
    },
    ar: {
      title: 'عني',
      profileTitle: 'الملف الشخصي',
      profile: 'أنا ملاذ الرشيد، مطورة برمجيات ديناميكية ومهتمة بالتفاصيل، وحاصلة على شهادة Scrum Master المعتمدة، مع أساس قوي في تحليل المتطلبات، إدارة أصحاب المصلحة، ودورة حياة تطوير البرمجيات (SDLC) أسعى للتفوق في بيئات تعاونية ومبتكرة، وتقديم حلول عالية الجودة تدفع نجاح المشاريع. شغفي بالتحليل وحل المشكلات يمكنني من تبسيط العمليات، وتجاوز توقعات العملاء، والمساهمة بشكل فعال في تحقيق أهداف المنظمة.',
      educationTitle: 'التعليم',
      education: 'بكالوريوس في هندسة البرمجيات (درجة الشرف الأولى)، جامعة السودان للعلوم والتكنولوجيا، كلية علوم الحاسوب وتقنية المعلومات، نوفمبر 2015 – ديسمبر 2020',
      experienceTitle: 'الخبرات',
      experience: [
        {
          position: 'أخصائية تكنولوجيا المعلومات',
          company: 'مدارس الجيل الجديد العالمية، الرياض، المملكة العربية السعودية',
          period: 'سبتمبر 2024 – الآن (عمل حضوري، عقد)',
          responsibilities: [
            'إدارة نظام Classera لضمان سلاسة التعليم الإلكتروني.',
            'دعم المستخدمين النهائيين والرد على استفساراتهم الفنية.',
            'تنسيق أدوات التعليم الإلكتروني، إدارة الفصول الذكية، والإشراف على الدروس الافتراضية.',
            'تصميم مواد جرافيكية للإعلانات وبطاقات هوية الطلاب، مما عزز العلامة التجارية للمدرسة والتواصل البصري.',
            'تطوير وبرمجة نظام القبول للمدرسة، مما سهّل عمليات التسجيل، إجراء الامتحانات، وعرض النتائج لرؤساء الأقسام.'
          ]
        },
        {
          position: 'مدربة لغة البرمجة Java',
          company: '7isas، منصة تعليم إلكتروني، عمان، الأردن',
          period: 'أبريل 2023 – يوليو 2024 (عن بُعد، عقد)',
          responsibilities: [
            'إنشاء دروس تعليمية عبر الإنترنت لأساسيات برمجة Java، تغطي التعرف على الحاسوب، مبادئ البرمجة، وتنفيذ الأكواد.',
            'توجيه الطلاب لتطوير مهارات التفكير المنطقي وتصميم خوارزميات لحل المشكلات البرمجية.',
            'تدريس أساسيات وسياسات لغة Java، مع تقديم أمثلة تطبيقية عملية.'
          ]
        },
        {
          position: 'مهندسة برمجيات',
          company: 'شركة هانيبال وإخوانه للأنشطة المتعددة المحدودة، الخرطوم، السودان',
          period: 'أبريل 2021 – أبريل 2022 (عمل حضوري، عقد)',
          responsibilities: [
            'التدريب على منهجية Agile (Scrum)، Java EE (إطار عمل Spring Boot)، Git، Jira، وConfluence.',
            'إجراء تحليل النظام وتوثيق المتطلبات.',
            'المساهمة في تحليل وتطوير واجهات برمجية خلفية (APIs) ووحدات لمنصات الحجز.',
            'المساهمة في تطوير واختبار نظام إدارة الفواتير الإلكترونية.'
          ]
        },
        {
          position: 'مساعدة تدريس',
          company: 'جامعة السودان للعلوم والتكنولوجيا، الخرطوم، السودان',
          period: 'يناير 2021 – يناير 2022 (دوام جزئي، تطوعي)',
          responsibilities: [
            'تدريس المختبرات العملية لمبادئ هندسة البرمجيات (UML).',
            'تدريس المختبرات العملية لطرق البرمجة (لغة Java).'
          ]
        }
      ],
      skillsTitle: 'المهارات',
      skills: {
        programming: ['Java', 'JavaScript', 'HTML5', 'CSS3'],
        frameworks: ['React.js', 'Node.js', 'Express.js', 'Spring Boot', 'React Bootstrap'],
        databases: ['MongoDB', 'PostgreSQL', 'SQL'],
        tools: ['Git', 'GitHub', 'Jira', 'Confluence', 'AWS S3', 'AWS CloudFront', 'Cloudinary', 'Render', 'Vercel', 'Mongo DB Cloude', 'Asana', 'Edraw', 'Classera'],
        methodologies: ['Agile (Scrum, Kanban)', 'تحليل المتطلبات (BRD, FRD, SRS)', 'UML', 'BPMN'],
        design: ['Graphic Design (Canva)']
      },
      certificationsTitle: 'الشهادات',
      certifications: [
        {
          name: 'Professional Scrum Master I (PSM1)',
          issuer: 'Scrum.org',
          link: 'https://www.scrum.org/certificates/1012830',
          badge: badgeImage
        },
        {
          name: 'Honour Certificate',
          issuer: 'Sudan University of Science and Technology',
          link: null, // لا يوجد رابط، يمكن إضافته لاحقًا
          badge: honourImage
        },
        {
          name: 'Classera',
          issuer: 'Classera Middle East',
          link: null, // لا يوجد رابط، يمكن إضافته لاحقًا
          badge: classeraImage
        }
      ],
      contactTitle: 'التواصل',
      location: 'الرياض، المملكة العربية السعودية',
      email: 'malazrash560@gmail.com',
      phone: '+966 543 138 773'
    }
  };

  return (
    <section id="about" className="py-5 about-section">
      <Container>
        {/* Header Section */}
        <div className="text-center mb-5">
          <h1 className="display-4 text-white">{translations[language].title}</h1>
          <div className="header-underline"></div>
        </div>

        {/* Profile Section */}
        <Row className="fade-in-section mb-5">
          <Col md={12} className="text-center">
            <h3 className="mb-4">{translations[language].profileTitle}</h3>
            <p className="lead text-muted">{translations[language].profile}</p>
          </Col>
        </Row>

        {/* Education Section */}
        <Row className="fade-in-section mb-5">
          <Col md={12}>
            <Card className="shadow border-0">
              <Card.Body>
                <h4 className="mb-3">{translations[language].educationTitle}</h4>
                <p className="text-muted">{translations[language].education}</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Experience Section */}
        <Row className="fade-in-section mb-5">
          <Col md={12}>
            <h4 className="mb-4">{translations[language].experienceTitle}</h4>
            {translations[language].experience.map((exp, index) => (
              <Card key={index} className="shadow border-0 mb-4">
                <Card.Body>
                  <h5>{exp.position}</h5>
                  <p className="text-muted">{exp.company} | {exp.period}</p>
                  <ul>
                    {exp.responsibilities.map((responsibility, idx) => (
                      <li key={idx}>{responsibility}</li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            ))}
          </Col>
        </Row>

        {/* Skills Section */}
        <Row className="fade-in-section mb-5">
          <Col md={12}>
            <h4 className="mb-4">{translations[language].skillsTitle}</h4>
            <div className="skills-container">
              {Object.entries(translations[language].skills).map(([category, items], index) => (
                <div key={index} className="mb-3">
                  <h6 className="text-capitalize">{category.replace(/([A-Z])/g, ' $1')}</h6>
                  <div>
                    {items.map((skill, idx) => (
                      <Badge key={idx} pill className="skill-badge me-2 mb-2">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>

        {/* Certifications Section */}
        <Row className="fade-in-section mb-5">
          <Col md={12}>
            <h4 className="mb-4">{translations[language].certificationsTitle}</h4>
            {translations[language].certifications.map((cert, index) => (
              <Card key={index} className="shadow border-0 mb-3">
                <Card.Body className="d-flex align-items-center">
                  <img src={cert.badge} alt={`${cert.name} Badge`} className="cert-badge me-3" />
                  <div>
                    <h5>{cert.name}</h5>
                    <p className="text-muted mb-1">{cert.issuer}</p>
                    {cert.link && (
                      <Button
                        variant="outline-primary"
                        size="sm"
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FontAwesomeIcon icon={faCertificate} className="me-1" />
                        View Certificate
                      </Button>
                    )}
                  </div>
                </Card.Body>
              </Card>
            ))}
          </Col>
        </Row>

        {/* Contact Section */}
        <Row className="fade-in-section">
          <Col md={12}>
            <Card className="shadow border-0 contact-card">
              <Card.Body>
                <h4 className="mb-4">{translations[language].contactTitle}</h4>
                <div className="d-flex flex-wrap">
                  <div className="contact-item me-4 mb-2">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2 text-primary" />
                    {translations[language].location}
                  </div>
                  <div className="contact-item me-4 mb-2">
                    <FontAwesomeIcon icon={faEnvelope} className="me-2 text-primary" />
                    <a href={`mailto:${translations[language].email}`}>{translations[language].email}</a>
                  </div>
                  <div className="contact-item">
                    <FontAwesomeIcon icon={faPhone} className="me-2 text-primary" />
                    <a href={`tel:${translations[language].phone}`}>{translations[language].phone}</a>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;