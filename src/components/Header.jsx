import { ExternalLink, Menu, X } from 'lucide-react';
import { useState } from 'react';

const NAV_LINKS = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Banco de Sangre', href: '#banco-sangre' },
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
      className={`bg-primary-container hover:bg-primary text-on-primary font-label-md text-label-md px-6 py-3 rounded-lg flex items-center justify-center gap-2 transition-colors min-h-[48px] ${className}`}
    >
      <ExternalLink size={18} />
      Oficina Virtual
    </a>
  );
}

function scrollToTop(e) {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-surface sticky top-0 w-full z-50 border-b border-outline-variant">
      <div className="flex justify-between items-center h-20 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <a href="/" onClick={scrollToTop} aria-label="Ir al inicio" className="flex items-center gap-2">
          <img
            alt="Logo Cooperativa La Falda"
            className="h-10 object-contain"
            src="https://lh3.googleusercontent.com/aida/AP1WRLtEZSx7EjMzMkpCMdaT6wXWJzFE-1c89DNL825ThQhhpBDDS_-k-cxpIA-4gjqis6gktOolKd1H3lEH15F07VTExhzmB-r-7ZRDCdYKcyLgZjTngeN3uSnULZ_5CD1zvIN5BoiUXxKYXvBn6D79KQ06h-JWO82XQUf13YjX8GFpB36j6sdytdoscTWNMzM1LBPqjEM01iS1Ecuqbkord0en98qpciMj8R_xNchShaoB0TDgxhNtn2UZcwJ3"
          />
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className={
                i === 0
                  ? 'text-primary border-b-2 border-primary pb-1 text-label-md font-semibold'
                  : 'text-on-surface-variant hover:text-primary-container transition-colors text-label-md font-semibold'
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
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
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
