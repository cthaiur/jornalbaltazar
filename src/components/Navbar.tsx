import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-br from-zinc-700 text-white shadow-lg">
      <div className="max-w-screen-xl mx-auto px-4 py-5 flex justify-between items-center">
        {/* Logo / Título do Portal */}
        <div className="text-xl font-bold">
          <a href="/" className="text-white">JornalBaltazar</a>
        </div>

        {/* Menu de Navegação para Desktop */}
        <div className="hidden md:flex space-x-8">
          <a href="#noticias" className="hover:text-zinc-300">Notícias</a>
          <a href="#anuncios" className="hover:text-zinc-300">Anúncios</a>
          <a href="#patrocinadores" className="hover:text-zinc-300">Patrocinadores</a>
          <a href="#previsao-tempo" className="hover:text-zinc-300">Previsão do Tempo</a>
        </div>

        {/* Ícone do Menu Responsivo */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMobileMenu} className="text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Menu Responsivo - Mobile */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-zinc-700 px-4 py-2 space-y-4">
          <a href="#noticias" className="block text-white hover:text-zinc-300">Notícias</a>
          <a href="#anuncios" className="block text-white hover:text-zinc-300">Anúncios</a>
          <a href="#patrocinadores" className="block text-white hover:text-zinc-300">Patrocinadores</a>
          <a href="#previsao-tempo" className="block text-white hover:text-zinc-300">Previsão do Tempo</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
