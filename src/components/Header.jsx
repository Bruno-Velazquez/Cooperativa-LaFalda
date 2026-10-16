import { ExternalLink, Menu, X } from 'lucide-react';
import { useState } from 'react';
import logo from '../../assets/logo-accion-ar.png';
import useHashRoute, { navigateHome } from '../hooks/useHashRoute.js';

const NAV_LINKS = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Banco de Sangre', href: '#/banco-sangre' },
  { label: 'Novedades', href: '#novedades' },
  { label: 'Contacto', href: '#contacto' },
];

const OFICINA_VIRTUAL_URL = 'https://www.cooponlineweb.com.ar/LAFALDA/Login';

function OficinaVirtualButton({ className = '' }) {
  return (
    <a
      href={OFICINA_VIRTUAL_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`bg-primary-container hover:bg-primary text-on-primary text-[16px] font-semibold px-6 py-3 rounded-lg flex items-center justify-center gap-2 transition-colors min-h-[48px] ${className}`}
    >
      <ExternalLink size={18} />
      Pagá tu factura
    </a>
  );
}

function scrollToTop(e) {
  e.preventDefault();
  navigateHome();
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const route = useHashRoute();

  const esActivo = (href) =>
    href === '#/banco-sangre' ? route === '/banco-sangre' : href === '#inicio' && route === '/';

  return (
    <header className="bg-surface sticky top-0 w-full z-50 border-b border-outline-variant">
      <div className="flex justify-between items-center h-20 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <a href="/" onClick={scrollToTop} aria-label="Ir al inicio" className="flex items-center gap-2">
          <img src={logo} alt="Accion-ar Cooperativa de Servicios Públicos" className="h-12 object-contain" />
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={i === 0 ? scrollToTop : undefined}
              className={
                esActivo(link.href)
                  ? 'text-primary border-b-2 border-primary pb-1 text-[16px] font-semibold'
                  : 'text-on-surface-variant hover:text-primary-container transition-colors text-[16px] font-semibold'
              }
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <OficinaVirtualButton />
        </div>

        <button
          type="button"
          className="md:hidden text-primary"
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden border-t border-outline-variant bg-surface transition-all duration-300 ease-in-out ${
          menuOpen ? 'max-h-[420px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-margin-mobile py-stack-md flex flex-col gap-stack-md">
          <nav className="flex flex-col gap-4">
            {NAV_LINKS.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  setMenuOpen(false);
                  if (i === 0) scrollToTop(e);
                }}
                className="text-on-surface text-body-lg font-semibold"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <OficinaVirtualButton />
        </div>
      </div>
    </header>
  );
}
