import React, { useState, useEffect } from 'react';
import { ChevronDown, Mail, Github, Linkedin, ExternalLink, Download, Sun, Moon, Menu, X, Code, Database, Server, Brain, Award, User, Briefcase, MessageCircle } from 'lucide-react';

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'certificates', 'contact'];
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = {
    frontend: ['React.js', 'Next.js', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'SASS'],
    backend: ['Node.js', 'Express.js', 'Python', 'Django', 'PHP', 'Laravel'],
    database: ['MongoDB', 'MySQL', 'PostgreSQL', 'Redis', 'Firebase'],
    devops: ['Docker', 'AWS', 'Git', 'Linux', 'CI/CD', 'Nginx'],
    aiml: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'NumPy', 'OpenCV']
  };

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with real-time inventory management, payment integration, and admin dashboard.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: 'https://github.com/matheesha2',
      demo: '#'
    },
    {
      title: 'AI Chat Assistant',
      description: 'Intelligent chatbot using natural language processing with sentiment analysis and contextual responses.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop',
      tech: ['Python', 'TensorFlow', 'Flask', 'NLP'],
      github: 'https://github.com/matheesha2',
      demo: '#'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative project management tool with real-time updates, team collaboration, and progress tracking.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop',
      tech: ['Vue.js', 'Express', 'Socket.io', 'PostgreSQL'],
      github: 'https://github.com/matheesha2',
      demo: '#'
    },
    {
      title: 'Data Visualization Dashboard',
      description: 'Interactive dashboard for data analytics with real-time charts, filters, and export functionality.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
      tech: ['React', 'D3.js', 'Python', 'FastAPI'],
      github: 'https://github.com/matheesha2',
      demo: '#'
    },
    {
      title: 'Machine Learning Model',
      description: 'Predictive analytics model for business intelligence with automated data preprocessing and deployment.',
      image: 'https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?w=500&h=300&fit=crop',
      tech: ['Python', 'Scikit-learn', 'Docker', 'AWS'],
      github: 'https://github.com/matheesha2',
      demo: '#'
    },
    {
      title: 'Mobile Banking App',
      description: 'Secure mobile banking application with biometric authentication and real-time transaction monitoring.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=300&fit=crop',
      tech: ['React Native', 'Node.js', 'MongoDB', 'JWT'],
      github: 'https://github.com/matheesha2',
      demo: '#'
    }
  ];

  const certificates = [
    { title: 'AWS Certified Solutions Architect', org: 'Amazon Web Services', year: '2024' },
    { title: 'Full Stack Web Development', org: 'FreeCodeCamp', year: '2023' },
    { title: 'Machine Learning Specialization', org: 'Stanford University', year: '2024' },
    { title: 'React Advanced Patterns', org: 'Meta', year: '2023' },
    { title: 'Python for Data Science', org: 'IBM', year: '2024' },
    { title: 'Docker & Kubernetes', org: 'CNCF', year: '2024' }
  ];

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const AnimatedBackground = () => (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute -inset-10 opacity-50">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>
    </div>
  );

  const SkillCard = ({ category, skills, icon: Icon, delay }) => (
    <div 
      className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} 
        rounded-2xl p-6 border backdrop-blur-sm hover:scale-105 transition-all duration-500 
        hover:shadow-2xl hover:shadow-purple-500/20 group`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-center mb-4">
        <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl text-white mr-4 group-hover:scale-110 transition-transform duration-300">
          <Icon size={24} />
        </div>
        <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
          {category}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span 
            key={index}
            className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300
              ${darkMode 
                ? 'bg-gray-700 text-gray-300 hover:bg-purple-600 hover:text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-purple-100 hover:text-purple-700'
              }`}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );

  const ProjectCard = ({ project, index }) => (
    <div 
      className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} 
        rounded-2xl border overflow-hidden hover:scale-105 transition-all duration-500 
        hover:shadow-2xl hover:shadow-purple-500/20 group`}
      style={{ animationDelay: `${index * 200}ms` }}
    >
      <div className="relative overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="p-6">
        <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
          {project.title}
        </h3>
        <p className={`text-sm mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, i) => (
            <span 
              key={i}
              className="px-2 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          <a 
            href={project.github}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300
              ${darkMode 
                ? 'bg-gray-700 text-white hover:bg-gray-600' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
          >
            <Github size={16} />
            Code
          </a>
          <a 
            href={project.demo}
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
          >
            <ExternalLink size={16} />
            Demo
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <div className={`${darkMode ? 'dark bg-gray-900' : 'bg-white'} transition-colors duration-300`}>
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out forwards;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 backdrop-blur-md border-b transition-all duration-300
        ${darkMode 
          ? 'bg-gray-900/80 border-gray-700' 
          : 'bg-white/80 border-gray-200'
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="font-bold text-2xl bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              MG
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'projects', 'certificates', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize font-medium transition-all duration-300 hover:text-purple-500
                    ${activeSection === item 
                      ? 'text-purple-500' 
                      : darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-4">
              {/* Theme Toggle */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-lg transition-all duration-300 hover:scale-110
                  ${darkMode 
                    ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`md:hidden p-2 rounded-lg transition-all duration-300
                  ${darkMode 
                    ? 'bg-gray-800 text-white hover:bg-gray-700' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className={`md:hidden py-4 border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
              <div className="flex flex-col space-y-2">
                {['home', 'about', 'skills', 'projects', 'certificates', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`capitalize font-medium text-left py-2 px-4 rounded-lg transition-all duration-300
                      ${activeSection === item 
                        ? 'text-purple-500 bg-purple-500/10' 
                        : darkMode ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-700 hover:bg-gray-100'
                      }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <AnimatedBackground />
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="animate-fadeInUp">
            {/* Profile Image */}
            <img
              src="/profile.jpg"
              alt="Matheesha Gamage"
              className="w-40 h-40 mx-auto mb-6 rounded-full object-cover shadow-lg border-4 border-purple-500"
            />

            <h1 className={`text-5xl md:text-7xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                Matheesha Gamage
              </span>
            </h1>

            <p className={`text-xl md:text-2xl mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Full-Stack Developer | Future AI/ML Engineer
            </p>

            <p className={`text-lg mb-12 max-w-2xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              Engineering student at University of Ruhuna. Passionate about building scalable web apps and intelligent systems.
              Completed DevTown Python Bootcamp, CIMA Certificate Level, and ongoing AI/ML training.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollToSection('projects')}
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-300 hover:scale-105"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className={`px-8 py-4 border-2 border-purple-500 text-purple-500 rounded-full font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300 hover:scale-105
                  ${darkMode ? 'hover:bg-purple-500' : 'hover:bg-purple-500'}`}
              >
                Get In Touch
              </button>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className={`w-6 h-6 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
          </div>
        </div>
      </section>


      {/* About Section */}
      <section id="about" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className={`p-8 rounded-2xl ${darkMode ? 'bg-gray-900' : 'bg-white'} shadow-2xl hover:scale-105 transition-transform duration-500`}>
                <User className="w-16 h-16 text-purple-500 mb-6" />
                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                  I'm <strong>Matheesha Gamage</strong>, a passionate Full-Stack Developer and aspiring AI/ML Engineer.
                  Currently studying at the <strong>University of Ruhuna</strong>, Faculty of Engineering.
                  I've completed courses in Full-Stack Development, AI/ML, and the <strong>DevTown Python Bootcamp</strong>
                  where I built a Boston Housing Price Prediction app. I'm also a CIMA Certificate Level holder.
                </p>

                <p className={`text-lg leading-relaxed mt-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  I'm currently enhancing my skills through courses and real-world projects, 
                  always staying at the forefront of technology trends and best practices.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-900' : 'bg-white'} shadow-lg hover:shadow-xl transition-all duration-300`}>
                <Code className="w-12 h-12 text-purple-500 mb-4" />
                <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Full-Stack
                </h3>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Modern web technologies and frameworks
                </p>
              </div>
              <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-900' : 'bg-white'} shadow-lg hover:shadow-xl transition-all duration-300`}>
                <Brain className="w-12 h-12 text-pink-500 mb-4" />
                <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  AI/ML
                </h3>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Machine learning and artificial intelligence
                </p>
              </div>
              <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-900' : 'bg-white'} shadow-lg hover:shadow-xl transition-all duration-300`}>
                <Server className="w-12 h-12 text-blue-500 mb-4" />
                <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  DevOps
                </h3>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Infrastructure and deployment
                </p>
              </div>
              <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-900' : 'bg-white'} shadow-lg hover:shadow-xl transition-all duration-300`}>
                <Database className="w-12 h-12 text-green-500 mb-4" />
                <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Database
                </h3>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Data modeling and optimization
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Skills & Technologies
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <SkillCard category="Frontend" skills={skills.frontend} icon={Code} delay={0} />
            <SkillCard category="Backend" skills={skills.backend} icon={Server} delay={200} />
            <SkillCard category="Database" skills={skills.database} icon={Database} delay={400} />
            <SkillCard category="DevOps" skills={skills.devops} icon={Server} delay={600} />
            <SkillCard category="AI/ML" skills={skills.aiml} icon={Brain} delay={800} />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Certificates & Achievements
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <div 
                key={index}
                className={`p-6 rounded-2xl border hover:scale-105 transition-all duration-500 hover:shadow-2xl
                  ${darkMode 
                    ? 'bg-gray-800 border-gray-700 hover:shadow-purple-500/20' 
                    : 'bg-white border-gray-200 hover:shadow-purple-500/20'
                  }`}
              >
                <Award className="w-12 h-12 text-purple-500 mb-4" />
                <h3 className={`text-lg font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {cert.title}
                </h3>
                <p className={`text-sm mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {cert.org} • {cert.year}
                </p>
                <button className="flex items-center gap-2 text-purple-500 hover:text-purple-600 transition-colors duration-300">
                  <Download size={16} />
                  View Certificate
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Let's Work Together
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Get In Touch
              </h3>
              <p className={`text-lg mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                I'm always interested in new opportunities and exciting projects. 
                Let's discuss how we can work together!
              </p>
              
              <div className="space-y-4">
                <a 
                  href="mailto:matheeshagp2@gmail.com"
                  className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-300 hover:scale-105
                    ${darkMode 
                      ? 'bg-gray-700 hover:bg-gray-600 text-white' 
                      : 'bg-white hover:bg-gray-50 text-gray-900'
                    }`}
                >
                  <Mail className="w-6 h-6 text-purple-500" />
                  <span>matheeshagp2@gmail.com</span>
                </a>
                
                <a 
                  href="https://www.linkedin.com/in/matheesha-gamage"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-300 hover:scale-105
                    ${darkMode 
                      ? 'bg-gray-700 hover:bg-gray-600 text-white' 
                      : 'bg-white hover:bg-gray-50 text-gray-900'
                    }`}
                >
                  <Linkedin className="w-6 h-6 text-purple-500" />
                  <span>LinkedIn Profile</span>
                </a>
                
                <a 
                  href="https://github.com/matheesha2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-300 hover:scale-105
                    ${darkMode 
                      ? 'bg-gray-700 hover:bg-gray-600 text-white' 
                      : 'bg-white hover:bg-gray-50 text-gray-900'
                    }`}
                >
                  <Github className="w-6 h-6 text-purple-500" />
                  <span>GitHub Profile</span>
                </a>
              </div>
            </div>

            <div className={`p-8 rounded-2xl ${darkMode ? 'bg-gray-900' : 'bg-white'} shadow-xl`}>
              <form className="space-y-6">
                <div>
                  <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Name
                  </label>
                  <input
                    type="text"
                    className={`w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300
                      ${darkMode 
                        ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400' 
                        : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500'
                      }`}
                    placeholder="Your Name"
                  />
                </div>
                
                <div>
                  <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Email
                  </label>
                  <input
                    type="email"
                    className={`w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300
                      ${darkMode 
                        ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400' 
                        : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500'
                      }`}
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Message
                  </label>
                  <textarea
                    rows={5}
                    className={`w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none
                      ${darkMode 
                        ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400' 
                        : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500'
                      }`}
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                >
                  <MessageCircle size={20} />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-12 border-t ${darkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="font-bold text-2xl bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-2">
                Matheesha Gamage
              </div>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Full-Stack Developer | Future AI/ML Engineer
              </p>
            </div>
            
            <div className="flex items-center space-x-6">
              <a 
                href="mailto:matheeshagp2@gmail.com"
                className={`p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg
                  ${darkMode 
                    ? 'bg-gray-800 text-gray-300 hover:bg-purple-600 hover:text-white' 
                    : 'bg-gray-100 text-gray-600 hover:bg-purple-100 hover:text-purple-600'
                  }`}
              >
                <Mail size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/matheesha-gamage"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg
                  ${darkMode 
                    ? 'bg-gray-800 text-gray-300 hover:bg-purple-600 hover:text-white' 
                    : 'bg-gray-100 text-gray-600 hover:bg-purple-100 hover:text-purple-600'
                  }`}
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://github.com/matheesha2"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg
                  ${darkMode 
                    ? 'bg-gray-800 text-gray-300 hover:bg-purple-600 hover:text-white' 
                    : 'bg-gray-100 text-gray-600 hover:bg-purple-100 hover:text-purple-600'
                  }`}
              >
                <Github size={20} />
              </a>
            </div>
          </div>
          
          <div className={`mt-8 pt-8 border-t text-center ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              © 2025 Matheesha Gamage. All rights reserved. Built with React & Tailwind CSS.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio; 