import React from 'react';

// Metadata para SEO
export const metadata = {
  title: 'Richer Claros | Portafolio Full-Stack Versátil',
  description: 'Portafolio de Tecnólogo en Desarrollo de Software con experiencia en Java, React/TypeScript, Python y C++.',
};

// Componente RootLayout: Envuelve todas las páginas
// CORRECCIÓN: Tipar 'children' como React.ReactNode
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        {/* Aquí puedes añadir otros meta tags o enlaces a fuentes */}
      </head>
      <body>
        {/* 'children' es donde se renderizará el contenido de tu page.jsx
          No necesitamos NavBar o Footer aquí porque ya están en page.jsx
        */}
        {children}
      </body>
    </html>
  );
}