import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import tahseelImage from '../assets/tahseel.jpg'; // استيراد صورة Tahseel
import vipbookingImage from '../assets/vipbooking.jpg'; // استيراد صورة VIP Booking
import admissionImage from '../assets/admission.png'; // استيراد صورة نظام القبول
import resultsImage from '../assets/results.png'; // استيراد صورة مشروع التخرج
import './Projects.css'; // ملف CSS مخصص للتنسيق

const Projects = ({ language }) => {
  const translations = {
    en: {
      title: 'My Projects',
      projects: [
        {
          title: 'Tahseel Invoice Management System',
          description: 'A robust system designed to facilitate and accelerate invoice payments across multiple payment channels, enhancing financial efficiency.',
          tasks: [
            'Conducted analysis processes using UML and BPMN methodologies.',
            'Prepared comprehensive documentation including FRD, SRS, and BRD.',
            'Developed test cases and executed the testing process to ensure system reliability.'
          ],
          image: tahseelImage // صورة Tahseel
        },
        {
          title: 'VIP Booking Project (Khartoum International Airport)',
          description: 'A premium service platform aimed at providing high-level assistance and expediting travel procedures for VIP clients.',
          tasks: [
            'Performed analysis using UML and BPMN methodologies.',
            'Contributed to coding backend APIs for seamless integration.',
            'Integrated email and SMS notifications for enhanced user experience.'
          ],
          image: vipbookingImage // صورة VIP Booking
        },
        {
          title: 'Admission and Registration System',
          description: 'An innovative system developed for New Generation International Schools, simplifying enrollment, examination processes, and result management while enabling data export in PDF and Excel formats.',
          tasks: [
            'Designed and coded the system to streamline student admissions and exams.',
            'Integrated Cloudinary for efficient image storage.',
            'Facilitated data export functionality for the registrar.'
          ],
          image: admissionImage // صورة نظام القبول
        },
        {
          title: 'Graduation Project (Odoo-Based)',
          description: 'An academic system developed using the Odoo framework to efficiently manage student result extraction, generate reports for the examination committee, and enable direct student interaction at Sudan University of Science and Technology.',
          tasks: [
            'Developed a tailored solution using the Odoo platform.',
            'Customized modules to meet specific requirements.',
            'Ensured seamless integration and functionality.'
          ],
          image: resultsImage // صورة مشروع التخرج
        }
      ],
    },
    ar: {
      title: 'مشاريعي',
      projects: [
        {
          title: 'نظام إدارة الفواتير Tahseel',
          description: 'نظام قوي مصمم لتسهيل وتسريع عملية دفع الفواتير عبر قنوات دفع متعددة، مما يعزز الكفاءة المالية.',
          tasks: [
            'أجريت عمليات التحليل باستخدام منهجيات UML وBPMN.',
            'أعددت وثائق شاملة تشمل FRD، SRS، وBRD.',
            'طورت حالات اختبار ونفذت عملية الاختبار لضمان موثوقية النظام.'
          ],
          image: tahseelImage // صورة Tahseel
        },
        {
          title: 'مشروع الحجز VIP (مطار الخرطوم الدولي)',
          description: 'منصة خدمات متميزة تهدف إلى تقديم مساعدة عالية المستوى وتسريع إجراءات السفر لعملاء VIP.',
          tasks: [
            'نفذت عمليات التحليل باستخدام منهجيات UML وBPMN.',
            'ساهمت في برمجة واجهات خلفية (APIs) للتكامل السلس.',
            'دمجت إشعارات البريد الإلكتروني والرسائل النصية لتحسين تجربة المستخدم.'
          ],
          image: vipbookingImage // صورة VIP Booking
        },
        {
          title: 'نظام القبول و التسجيل',
          description: 'نظام مبتكر طوّر لمدارس الجيل الجديد العالمية، يبسط عمليات التسجيل، الامتحانات، وإدارة النتائج، مع تمكين تصدير البيانات بصيغ PDF وExcel.',
          tasks: [
            'صممت وبرمجت النظام لتسهيل قبول الطلاب وإجراء الامتحانات.',
            'دمجت Cloudinary لتخزين الصور بكفاءة.',
            'وفرت وظيفة تصدير البيانات لمسجل المدرسة.'
          ],
          image: admissionImage // صورة نظام القبول
        },
        {
          title: 'مشروع التخرج (مستند Odoo)',
          description: 'نظام أكاديمي طوّر باستخدام إطار عمل Odoo لإدارة استخراج نتائج الطلاب بكفاءة، إعداد تقارير للجنة الامتحانات، وتمكين الطلاب من التفاعل المباشر في جامعة السودان للعلوم والتكنولوجيا.',
          tasks: [
            'طورت حلولاً مخصصة باستخدام منصة Odoo.',
            'قمت بتخصيص الوحدات لتلبية المتطلبات المحددة.',
            'ضمنت التكامل والوظائف السلسة.'
          ],
          image: resultsImage // صورة مشروع التخرج
        }
      ],
    }
  };

  return (
    <section id="projects" className="py-5 projects-section">
      <Container>
        <h1 className="text-center mb-5 text-white">{translations[language].title}</h1>
        <Row className="fade-in-section">
          {translations[language].projects.map((project, index) => (
            <Col md={6} key={index} className="mb-4">
              <Card className="shadow border-0 h-100">
                <Card.Img
                  variant="top"
                  src={project.image ? project.image : 'https://via.placeholder.com/300x200?text=No+Image'}
                  alt={project.title}
                  className="card-img"
                />
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text className="text-muted">{project.description}</Card.Text>
                  <ul>
                    {project.tasks.map((task, idx) => (
                      <li key={idx}>{task}</li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;