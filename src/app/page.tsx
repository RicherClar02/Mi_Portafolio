"use client";

import React, { useState, FormEvent, FC, useEffect } from 'react';
import { Github, Mail, Phone, Code, Server, Zap, Send, Trophy, Users, Globe, LucideIcon, Loader2, CheckCircle, XCircle } from 'lucide-react';

// --- Interfaces para Tipado ---

interface SkillItem {
  name: string;
  proficiency: number; // 0 to 100
}

interface SkillCategory {
  category: string;
  icon: LucideIcon;
  color: string;
  items: SkillItem[];
}

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  badge: string;
  githubUrl: string;
}

// --- Hook para Responsividad ---
const useIsMobile = (breakpoint = 768) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const checkMobile = () => {
            setIsMobile(window.innerWidth < breakpoint);
        };
        
        checkMobile(); 
        window.addEventListener('resize', checkMobile);
        
        return () => window.removeEventListener('resize', checkMobile);
    }, [breakpoint]);

    return isMobile;
};

// --- Data & Content ---

const userData = {
  name: "Richer Claros Diaz",
  jobTitle: "Tecnólogo en Desarrollo de Software | Full-Stack Versátil",
  intro: "Desarrollador Full-Stack apasionado por la construcción de sistemas robustos y de alto rendimiento. Mi pila tecnológica abarca desde la potencia empresarial de Java (Spring Boot) en el backend, hasta la experiencia de usuario impecable con React/TypeScript en el frontend. Aporto una base sólida en algoritmos y estructuras de datos, crucial para el software escalable.",
  phone: "317 450 6405",
  email: "brayanclarosdiaz@gmail.com",
  github: "https://github.com/RicherClar02",
  // ! **ESPACIO PARA TU FOTO**
  profileImageUrl: "/portafolio.jpg", 
};

// Logros cuantificables para impresionar
const keyStats = [
    { icon: Trophy, value: "4+", label: "Años de Experiencia Profesional", color: '#fbbf24' }, // amber-400
    { icon: Globe, value: "20+", label: "Proyectos Implementados (Java, React, Node)", color: '#3b82f6' }, // blue-500
    { icon: Users, value: "99.9%", label: "Uptime Promedio en Microservicios", color: '#10b981' }, // emerald-500
    { icon: Code, value: "Python & Java", label: "Fuerte Fundamento Algorítmico", color: '#ef4444' }, // red-500
];

const skills: SkillCategory[] = [
  {
    category: "Backend: Alto Rendimiento",
    icon: Server,
    color: "#3b82f6", // blue-500
    items: [
      { name: "Java (Spring Boot)", proficiency: 90 }, 
      { name: "Node.js (Express)", proficiency: 85 },
      { name: "Python (Flask)", proficiency: 75 },
      { name: "PostgreSQL / MongoDB", proficiency: 80 },
    ],
  },
  {
    category: "Frontend: Interfaz y UX",
    icon: Code,
    color: "#14b8a6", // teal-500
    items: [
      { name: "React / Next.js", proficiency: 95 },
      { name: "TypeScript", proficiency: 90 },
      { name: "CSS Puro / Animaciones", proficiency: 80 },
      { name: "Gestión de Estado (Context, Redux)", proficiency: 85 },
    ],
  },
  {
    category: "Fundamentos y DevOps",
    icon: Zap,
    color: "#f97316", // orange-500
    items: [
      { name: "C++", proficiency: 80 },
      { name: "OOP / Patrones de Diseño", proficiency: 90 },
      { name: "Docker & CI/CD", proficiency: 70 },
      { name: "Git Avanzado", proficiency: 95 },
    ],
  },
];

const projects: Project[] = [
  {
    id: 1,
    title: "AtlasFlow API: Servicio de Micropagos (Java Spring)",
    description: "Diseño e implementación de una API RESTful crítica con Java y Spring Boot. Orientada a latencia < 50ms y manejo de más de 10,000 req/s, demostrando mi capacidad para sistemas distribuidos y críticos.",
    tech: ["Java (Spring Boot)", "Hibernate", "MongoDB", "JUnit", "Docker"],
    badge: "Alto Rendimiento Empresarial",
    githubUrl: "https://github.com/RicherClar02/AtlasFlow-API",
  },
  {
    id: 2,
    title: "DataViz Hub: Plataforma Analítica (React/Python)",
    description: "Plataforma Full-Stack para análisis en tiempo real. Backend en Python (Flask) para ETL y React/TypeScript para un dashboard interactivo, enfocada en rendimiento de carga de datos.",
    tech: ["React", "TypeScript", "Python (Flask)", "PostgreSQL", "D3.js"],
    badge: "Full-Stack Completo",
    githubUrl: "https://github.com/RicherClar02/DataVizHub",
  },
  {
    id: 3,
    title: "Simulador de Redes Neuronales (C++)",
    description: "Proyecto de investigación que implementa una red neuronal de propagación hacia atrás desde cero en C++. Exhibe mi conocimiento profundo en estructuras de datos, rendimiento y algoritmos de machine learning.",
    tech: ["C++", "Algoritmos", "Matrices", "Optimización"],
    badge: "Ciencias de la Computación",
    githubUrl: "https://github.com/RicherClar02/Neural-Net-Sim",
  },
];


// --- CSS Styles as JS Objects (No modificado, sigue funcionando) ---
const styles = {
    // Colores y Tipografía
    primaryDark: '#0a0d14', // Fondo principal muy oscuro
    secondaryDark: '#111827', // Fondo de tarjetas y secciones
    accentBlue: '#3b82f6', // blue-500
    accentBlueDarker: '#2563eb', // blue-600
    textPrimary: '#f8fafc', // slate-50
    textSecondary: '#94a3b8', // slate-400
    shadowColor: 'rgba(59, 130, 246, 0.4)', // Sombra del acento

    // Contenedores y Layout
    container: {
        maxWidth: '1280px', 
        margin: '0 auto',
        paddingLeft: '1.5rem',
        paddingRight: '1.5rem',
    },
    section: {
        paddingTop: '6rem', 
        paddingBottom: '6rem', 
    },
    // Estilos de botones (usando funciones para efectos de hover)
    getButtonPrimaryStyle: (isHover: boolean, isDisabled: boolean = false) => ({
        backgroundColor: isDisabled ? '#475569' : (isHover ? styles.accentBlueDarker : styles.accentBlue),
        color: 'white',
        fontWeight: 'bold',
        padding: '0.75rem 2rem',
        borderRadius: '0.75rem',
        transition: 'all 0.3s',
        boxShadow: isDisabled ? 'none' : (isHover ? `0 15px 25px -5px ${styles.shadowColor}` : 'none'),
        border: 'none',
        cursor: isDisabled ? 'not-allowed' : 'pointer',
    }),
    getButtonSecondaryStyle: (isHover: boolean) => ({
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        border: `2px solid ${isHover ? styles.accentBlue : '#475569'}`,
        color: isHover ? styles.accentBlue : styles.textSecondary,
        fontWeight: '600',
        padding: '0.75rem 2rem',
        borderRadius: '0.75rem',
        transition: 'all 0.3s',
        backgroundColor: styles.secondaryDark,
        cursor: 'pointer',
    }),
};

// --- Components (No modificados, excepto ContactSection) ---

const NavBar: FC = () => {
    const [isHovered, setIsHovered] = useState<{ [key: string]: boolean }>({});

    const linkStyle = (item: string) => ({
        color: isHovered[item] ? styles.accentBlue : styles.textSecondary, 
        padding: '0.5rem 0.75rem', 
        borderRadius: '0.375rem', 
        fontSize: '0.95rem', 
        fontWeight: '500', 
        transition: 'color 0.3s, transform 0.2s',
        textDecoration: 'none' // Asegura que los enlaces no tengan subrayado
    });

    return (
        <nav style={{
            position: 'fixed', 
            width: '100%', 
            zIndex: 20, 
            top: 0, 
            left: 0, 
            backdropFilter: 'blur(10px)',
            backgroundColor: 'rgba(10, 13, 20, 0.85)',
            borderBottom: '1px solid #1e293b', 
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.5)'
        }}>
            <div style={{...styles.container, height: '4.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                <a href="#inicio" style={{fontSize: '1.5rem', fontWeight: '900', color: styles.accentBlue, letterSpacing: '0.1em', textDecoration: 'none'}}>RICHER CLAROS</a>
                <div style={{display: 'flex', gap: '1.5rem'}}>
                    {['Inicio', 'Habilidades', 'Logros', 'Proyectos', 'Contacto'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            style={linkStyle(item)}
                            onMouseEnter={() => setIsHovered(prev => ({ ...prev, [item]: true }))}
                            onMouseLeave={() => setIsHovered(prev => ({ ...prev, [item]: false }))}
                        >
                            {item}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
};

// Componente para el título con efecto gradiente
const AnimatedTitle: FC<{ text: string }> = ({ text }) => {
    const isMobile = useIsMobile();
    
    return (
        <h1 style={{
            fontSize: isMobile ? '2.5rem' : '4rem',
            lineHeight: '1.2',
            fontWeight: '900',
            letterSpacing: '-0.025em', 
            marginBottom: '1.5rem',
            backgroundImage: `linear-gradient(90deg, ${styles.textPrimary} 0%, ${styles.accentBlue} 100%)`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            // animation: 'pulse 5s infinite ease-in-out', 
        }}>
            {text}
        </h1>
    );
};

const HeroSection: FC = () => {
    const [isPrimaryHover, setIsPrimaryHover] = useState(false);
    const [isSecondaryHover, setIsSecondaryHover] = useState(false);
    const isMobile = useIsMobile(); 

    const heroContainerStyles: React.CSSProperties = {
        ...styles.container, 
        position: 'relative', 
        zIndex: 10, 
        display: 'flex', 
        flexDirection: isMobile ? 'column' : 'row', 
        gap: isMobile ? '2rem' : '4rem', 
        alignItems: 'center',
        textAlign: isMobile ? 'center' : 'left',
    };

    const buttonContainerStyles: React.CSSProperties = {
        display: 'flex', 
        gap: '1.5rem',
        justifyContent: isMobile ? 'center' : 'flex-start',
    };

    const imageColumnStyles: React.CSSProperties = {
        flex: '1', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        padding: '2rem',
        order: isMobile ? -1 : 0, 
    };

    return (
        <section id="inicio" style={{
            paddingTop: '10rem', 
            paddingBottom: '8rem', 
            textAlign: 'left', 
            backgroundColor: styles.primaryDark,
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
        }}>
            {/* Fondo abstracto con gradiente radial */}
            <div style={{
                position: 'absolute', 
                inset: 0, 
                background: `radial-gradient(circle at top right, ${styles.accentBlue}1A 0%, transparent 50%)`,
                zIndex: 1
            }}></div>
            
            <div style={heroContainerStyles}>
                {/* Columna de Texto */}
                <div style={{flex: '3', minWidth: '50%'}}>
                    <p style={{fontSize: '1.25rem', fontWeight: '500', color: styles.accentBlue, marginBottom: '0.5rem'}}>
                        TRANSFORMANDO IDEAS EN CÓDIGO ESCALABLE
                    </p>
                    <AnimatedTitle text={userData.name} />
                    <h2 style={{fontSize: '1.75rem', fontWeight: '600', color: styles.textPrimary, marginBottom: '1.5rem'}}>
                        {userData.jobTitle}
                    </h2>
                    <p style={{fontSize: '1.125rem', color: styles.textSecondary, marginBottom: '2.5rem', maxWidth: '45rem', margin: isMobile ? '0 auto 2.5rem auto' : '0 0 2.5rem 0'}}>
                        {userData.intro}
                    </p>

                    <div style={buttonContainerStyles}>
                        <a
                            href="#proyectos"
                            style={styles.getButtonPrimaryStyle(isPrimaryHover)}
                            onMouseEnter={() => setIsPrimaryHover(true)}
                            onMouseLeave={() => setIsPrimaryHover(false)}
                        >
                            Explorar Proyectos
                        </a>
                        <a
                            href="#contacto"
                            style={styles.getButtonSecondaryStyle(isSecondaryHover)}
                            onMouseEnter={() => setIsSecondaryHover(true)}
                            onMouseLeave={() => setIsSecondaryHover(false)}
                        >
                            <Send size={20} />
                            Contactar Ahora
                        </a>
                    </div>
                </div>

                {/* Columna de Foto (Derecha) */}
                <div style={imageColumnStyles}>
                    <img 
                        src={userData.profileImageUrl} 
                        alt={`Foto de Perfil de ${userData.name}`}
                        style={{
                            width: '12rem', 
                            height: '12rem', 
                            borderRadius: '50%', 
                            objectFit: 'cover',
                            border: `5px solid ${styles.accentBlue}`,
                            boxShadow: `0 0 0 10px ${styles.secondaryDark}, 0 0 40px ${styles.shadowColor}`,
                            transition: 'transform 0.5s',
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05) rotate(2deg)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1) rotate(0deg)'}
                    />
                </div>
            </div>
        </section>
    );
};

const StatCard: FC<{ icon: LucideIcon, value: string, label: string, color: string }> = ({ icon: Icon, value, label, color }) => (
    <div style={{
        backgroundColor: styles.secondaryDark, 
        padding: '2rem', 
        borderRadius: '1rem', 
        textAlign: 'center', 
        borderBottom: `4px solid ${color}`,
        transition: 'transform 0.3s, box-shadow 0.3s',
        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
    }}
    onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px) scale(1.02)'}
    onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0) scale(1)'}
    >
        <Icon size={48} style={{color: color, margin: '0 auto 1rem'}} />
        <p style={{fontSize: '3rem', fontWeight: '900', color: color, lineHeight: 1.1}}>{value}</p>
        <p style={{fontSize: '1rem', fontWeight: '500', color: styles.textSecondary}}>{label}</p>
    </div>
);

const StatsSection: FC = () => (
    <section id="logros" style={{padding: '4rem 0', backgroundColor: styles.secondaryDark, borderTop: '1px solid #1e293b', borderBottom: '1px solid #1e293b'}}>
        <div style={styles.container}>
            <h2 style={{fontSize: '2.25rem', fontWeight: '800', textAlign: 'center', marginBottom: '3rem', color: styles.textPrimary}}>
                Logros y <span style={{color: styles.accentBlue}}>Capacidades Clave</span>
            </h2>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem'}}>
                {keyStats.map((stat, index) => (
                    <StatCard key={index} {...stat} />
                ))}
            </div>
        </div>
    </section>
);

const SkillBar: FC<{ skill: SkillItem, color: string }> = ({ skill, color }) => (
    <div style={{marginBottom: '1rem'}}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.25rem'}}>
            <span style={{fontWeight: '600', color: styles.textPrimary}}>{skill.name}</span>
            <span style={{fontSize: '0.875rem', color: styles.textSecondary}}>{skill.proficiency}%</span>
        </div>
        <div style={{
            backgroundColor: '#334155', // slate-700
            height: '0.75rem', 
            borderRadius: '0.375rem', 
            overflow: 'hidden'
        }}>
            <div 
                style={{
                    width: `${skill.proficiency}%`, 
                    height: '100%', 
                    backgroundColor: color, 
                    borderRadius: '0.375rem',
                    transition: 'width 1s ease-out', // Simulación de animación de carga
                }}
            ></div>
        </div>
    </div>
);

const SkillsSection: FC = () => (
  <section id="habilidades" style={{...styles.section, backgroundColor: styles.primaryDark}}>
    <div style={styles.container}>
      <h2 style={{fontSize: '3rem', fontWeight: '800', textAlign: 'center', marginBottom: '4rem', color: styles.textPrimary}}>
        Dominio de mi <span style={{color: styles.accentBlue}}>Stack Tecnológico</span>
      </h2>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem'}}>
        {skills.map((skill) => (
          <div key={skill.category} style={{
            backgroundColor: styles.secondaryDark, 
            padding: '2.5rem', 
            borderRadius: '1.5rem', 
            boxShadow: `0 20px 30px -10px rgba(0, 0, 0, 0.4)`, 
            border: `1px solid #1e293b`,
            transition: 'transform 0.3s',
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-8px)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <skill.icon size={40} style={{color: skill.color, marginBottom: '1rem', border: `3px solid ${skill.color}`, borderRadius: '50%', padding: '0.5rem'}} />
            <h3 style={{fontSize: '1.75rem', fontWeight: 'bold', color: styles.textPrimary, marginBottom: '2rem', borderBottom: '2px solid #334155', paddingBottom: '0.75rem'}}>{skill.category}</h3>
            
            {skill.items.map((item) => (
                <SkillBar key={item.name} skill={item} color={skill.color} />
            ))}
            
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ProjectCard: FC<{ project: Project }> = ({ project }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div 
            style={{
                backgroundColor: '#1f2937', // gray-800
                borderRadius: '1.5rem', 
                boxShadow: isHovered 
                    ? `0 30px 40px -10px ${styles.shadowColor}` 
                    : '0 10px 20px rgba(0, 0, 0, 0.5)', 
                overflow: 'hidden', 
                transition: 'transform 0.4s, box-shadow 0.4s',
                border: isHovered ? `2px solid ${styles.accentBlue}` : '2px solid #1f2937',
                transform: isHovered ? 'scale(1.03)' : 'scale(1)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%', 
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div style={{padding: '2rem'}}>
                <span style={{fontSize: '0.875rem', fontWeight: '700', display: 'inline-block', padding: '0.35rem 1rem', borderRadius: '9999px', color: styles.textPrimary, backgroundColor: styles.accentBlueDarker, marginBottom: '1.5rem'}}>
                    {project.badge}
                </span>
                <h3 style={{fontSize: '1.75rem', fontWeight: 'bold', color: styles.textPrimary, marginBottom: '1rem'}}>{project.title}</h3>
                <p style={{color: styles.textSecondary, marginBottom: '1.5rem'}}>{project.description}</p>
                
                <div style={{display: 'flex', flexWrap: 'wrap', gap: '0.6rem'}}>
                    {project.tech.map((t: string) => ( 
                        <span key={t} style={{
                            fontSize: '0.8rem', 
                            fontWeight: '500', 
                            backgroundColor: '#334155', 
                            color: '#e2e8f0', 
                            padding: '0.3rem 0.8rem', 
                            borderRadius: '0.5rem'
                        }}>
                            {t}
                        </span>
                    ))}
                </div>
            </div>

            <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    gap: '0.5rem', 
                    color: styles.accentBlue, 
                    fontWeight: '700', 
                    padding: '1rem',
                    borderTop: '1px solid #334155',
                    backgroundColor: isHovered ? '#1e293b' : '#1f2937', 
                    textDecoration: 'none',
                    transition: 'background-color 0.3s, color 0.3s',
                }}
            >
                <Github size={18} />
                <span>REPOSITORIO EN GITHUB</span>
            </a>
        </div>
    );
};

const ProjectsSection: FC = () => (
  <section id="proyectos" style={{...styles.section, backgroundColor: styles.secondaryDark}}>
    <div style={styles.container}>
      <h2 style={{fontSize: '3rem', fontWeight: '800', textAlign: 'center', marginBottom: '4rem', color: styles.textPrimary}}>
        Portafolio: <span style={{color: '#14b8a6'}}>Innovación</span> y <span style={{color: '#3b82f6'}}>Escalabilidad</span>
      </h2>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem'}}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  </section>
);


// --- CONTACT SECTION (CORREGIDA PARA FUNCIONAR CON NEXT.JS API ROUTE) ---

const ContactSection: FC = () => {
    // 0: Initial, 1: Loading, 2: Success, 3: Error
    const [status, setStatus] = useState<'initial' | 'loading' | 'success' | 'error'>('initial');
    const [message, setMessage] = useState('');
    const [isSubmitHover, setIsSubmitHover] = useState(false);
    
    // Estado para los campos del formulario
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // ** LÓGICA DE ENVÍO REAL **
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        setStatus('loading');
        setMessage('Enviando mensaje...'); // Mostrar que está cargando

        try {
            // ** EL CAMBIO CLAVE: Llama al API Route que enviará el correo **
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                // Envía los datos del formulario
                body: JSON.stringify(formData), 
            });

            const result = await response.json();

            if (response.ok) {
                setStatus('success');
                setMessage('✅ ¡Mensaje enviado con éxito! Te contactaré en breve. Gracias por tu interés.'); 
                setFormData({ name: '', email: '', message: '' }); // Resetear formulario
            } else {
                // Si el servidor (API Route) devuelve un error
                setStatus('error');
                setMessage(`❌ Error al enviar el mensaje. El servidor dijo: ${result.message || 'Error desconocido.'}`);
            }
        } catch (error) {
            // Error de conexión de red
            console.error('Error de red al enviar el formulario:', error);
            setStatus('error');
            setMessage('❌ Error de conexión. Por favor, revisa tu red e inténtalo de nuevo.');
        }

        // Limpiar el estado después de 6 segundos
        setTimeout(() => {
            setStatus('initial');
            setMessage('');
        }, 6000);
    };

    const inputStyle = (isFocused: boolean) => ({
        width: '100%', 
        backgroundColor: '#1f2937', 
        border: `1px solid ${isFocused ? styles.accentBlue : '#475569'}`, 
        color: styles.textPrimary, 
        padding: '1rem', 
        borderRadius: '0.75rem',
        fontSize: '1rem',
        transition: 'border-color 0.3s',
        outline: 'none',
    });

    const isButtonDisabled = status === 'loading';

    // Manejo de estilos de foco para inputs
    const [focusedField, setFocusedField] = useState<string | null>(null);


    return (
        <section id="contacto" style={{...styles.section, backgroundColor: styles.primaryDark}}>
            <div style={styles.container}>
                <h2 style={{fontSize: '3rem', fontWeight: '800', textAlign: 'center', marginBottom: '4rem', color: styles.textPrimary}}>
                    ¿Hablamos de <span style={{color: '#f97316'}}>Innovación</span>?
                </h2>
                <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'flex-start'}}>
                    {/* Información de Contacto */}
                    <div style={{
                        backgroundColor: styles.secondaryDark, 
                        padding: '2.5rem', 
                        borderRadius: '1.5rem', 
                        boxShadow: `0 20px 30px -10px rgba(0, 0, 0, 0.4)`, 
                        borderTop: `4px solid #f97316`, // orange accent
                    }}>
                        <h3 style={{fontSize: '1.875rem', fontWeight: 'bold', color: styles.textPrimary, marginBottom: '2rem'}}>Detalles de Contacto</h3>
                        <div style={{display: 'flex', flexDirection: 'column', gap: '1.5rem', fontSize: '1.125rem', color: styles.textSecondary}}>
                            <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                                <Mail size={24} style={{color: '#f97316'}} />
                                <span style={{fontWeight: '600'}}>{userData.email}</span>
                            </div>
                            <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                                <Phone size={24} style={{color: '#f97316'}} />
                                <span style={{fontWeight: '600'}}>+57 {userData.phone}</span>
                            </div>
                            <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                                <Github size={24} style={{color: '#f97316'}} />
                                <a 
                                    href={userData.github} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    style={{color: styles.textSecondary, transition: 'color 0.3s', fontWeight: '600', textDecoration: 'none'}}
                                    onMouseEnter={(e) => e.currentTarget.style.color = '#f97316'}
                                    onMouseLeave={(e) => e.currentTarget.style.color = styles.textSecondary}
                                >
                                    RicherClar02 (GitHub)
                                </a>
                            </div>
                        </div>
                        <p style={{marginTop: '2rem', fontSize: '1rem', fontStyle: 'italic', color: styles.textSecondary}}>
                            "Disponible para nuevos desafíos que requieran un enfoque Full-Stack y orientación al rendimiento."
                        </p>
                    </div>

                    {/* Formulario de Contacto (CON CONEXIÓN REAL AL BACKEND) */}
                    <div style={{
                        backgroundColor: styles.secondaryDark, 
                        padding: '2.5rem', 
                        borderRadius: '1.5rem', 
                        boxShadow: `0 20px 30px -10px rgba(0, 0, 0, 0.4)`, 
                        borderTop: `4px solid #f97316`,
                    }}>
                        <h3 style={{fontSize: '1.875rem', fontWeight: 'bold', color: styles.textPrimary, marginBottom: '2rem'}}>Envía tu Propuesta</h3>
                        <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', gap: '1.25rem'}}>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                placeholder="Tu Nombre Completo o Empresa"
                                required
                                disabled={isButtonDisabled}
                                style={inputStyle(focusedField === 'name')}
                                onFocus={() => setFocusedField('name')}
                                onBlur={() => setFocusedField(null)}
                            />
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="Tu Correo Electrónico"
                                required
                                disabled={isButtonDisabled}
                                style={inputStyle(focusedField === 'email')}
                                onFocus={() => setFocusedField('email')}
                                onBlur={() => setFocusedField(null)}
                            />
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                placeholder="Detalles de la Oportunidad (Rol, Proyecto, Propuesta)"
                                rows={5}
                                required
                                disabled={isButtonDisabled}
                                style={{...inputStyle(focusedField === 'message'), resize: 'vertical'}}
                                onFocus={() => setFocusedField('message')}
                                onBlur={() => setFocusedField(null)}
                            ></textarea>
                            
                            {/* Mensaje de Estado */}
                            {message && (
                                <p style={{
                                    padding: '0.75rem 1rem',
                                    borderRadius: '0.5rem',
                                    fontWeight: '600',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    color: status === 'success' ? '#10b981' : (status === 'error' ? '#ef4444' : styles.textPrimary),
                                    backgroundColor: status === 'success' ? 'rgba(16, 185, 129, 0.1)' : (status === 'error' ? 'rgba(239, 68, 68, 0.1)' : 'transparent'),
                                }}>
                                    {status === 'success' && <CheckCircle size={20} />}
                                    {status === 'error' && <XCircle size={20} />}
                                    {status === 'loading' && <Loader2 size={20} className="animate-spin" style={{animation: 'spin 1s linear infinite'}} />}
                                    {message}
                                </p>
                            )}
                            
                            <button
                                type="submit"
                                disabled={isButtonDisabled}
                                style={{
                                    ...styles.getButtonPrimaryStyle(isSubmitHover, isButtonDisabled),
                                    backgroundColor: isButtonDisabled ? '#475569' : (isSubmitHover ? '#f97316' : '#ea580c'), // Orange
                                    boxShadow: isButtonDisabled ? 'none' : (isSubmitHover ? '0 15px 25px -5px rgba(249, 115, 22, 0.4)' : 'none'),
                                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                                    width: '100%',
                                }}
                                onMouseEnter={() => setIsSubmitHover(true)}
                                onMouseLeave={() => setIsSubmitHover(false)}
                            >
                                {status === 'loading' ? (
                                    <>
                                        <Loader2 size={20} className="animate-spin" style={{animation: 'spin 1s linear infinite'}} />
                                        <span>ENVIANDO...</span>
                                    </>
                                ) : (
                                    <>
                                        <Send size={20} />
                                        <span>ENVIAR PROPUESTA</span>
                                    </>
                                )}
                            </button>
                            
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};


// --- Footer Component ---
const Footer: FC = () => (
    <footer style={{
        padding: '2rem 0', 
        textAlign: 'center', 
        backgroundColor: styles.secondaryDark, 
        borderTop: '1px solid #1e293b'
    }}>
        <p style={{color: styles.textSecondary, fontSize: '0.9rem'}}>
            © {new Date().getFullYear()} {userData.name}. Construido con React & Next.js.
        </p>
        <div style={{marginTop: '1rem', display: 'flex', justifyContent: 'center', gap: '1rem'}}>
            <a href={userData.github} target="_blank" rel="noopener noreferrer" style={{color: styles.textSecondary, transition: 'color 0.3s'}} onMouseEnter={(e) => e.currentTarget.style.color = styles.accentBlue} onMouseLeave={(e) => e.currentTarget.style.color = styles.textSecondary}>
                <Github size={24} />
            </a>
            <a href={`mailto:${userData.email}`} style={{color: styles.textSecondary, transition: 'color 0.3s'}} onMouseEnter={(e) => e.currentTarget.style.color = styles.accentBlue} onMouseLeave={(e) => e.currentTarget.style.color = styles.textSecondary}>
                <Mail size={24} />
            </a>
            <a href={`tel:+57${userData.phone.replace(/\s/g, '')}`} style={{color: styles.textSecondary, transition: 'color 0.3s'}} onMouseEnter={(e) => e.currentTarget.style.color = styles.accentBlue} onMouseLeave={(e) => e.currentTarget.style.color = styles.textSecondary}>
                <Phone size={24} />
            </a>
        </div>
    </footer>
);

// --- Main App Component ---
const PortafolioApp: FC = () => {
    return (
        <div style={{backgroundColor: styles.primaryDark, minHeight: '100vh'}}>
            <style jsx global>{`
                /* Definición global de la animación de giro */
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
                .animate-spin {
                    animation: spin 1s linear infinite;
                }
                html { scroll-behavior: smooth; }
                body { margin: 0; padding: 0; background-color: ${styles.primaryDark}; }
            `}</style>
            <NavBar />
            <HeroSection />
            <StatsSection />
            <SkillsSection />
            <ProjectsSection />
            <ContactSection />
            <Footer />
        </div>
    );
};

export default PortafolioApp;