import { Clock, Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import logo from '../../assets/logo-accion-ar.png';
import { navigateHome } from '../hooks/useHashRoute.js';

function scrollToTop(e) {
  e.preventDefault();
  navigateHome();
}

export default function Footer() {
  return (
    <footer id="contacto" className="bg-surface-container-highest mt-auto scroll-mt-24">
      <div className="px-margin-mobile md:px-margin-desktop py-stack-lg max-w-container-max mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-stack-lg">
        <div className="flex flex-col items-start gap-4">
          <a href="/" onClick={scrollToTop} aria-label="Ir al inicio" className="self-start pb-2">
            <img src={logo} alt="Accion-ar Cooperativa de Servicios Públicos" className="h-12 object-contain" />
          </a>
          <p className="text-body-md text-on-surface-variant flex items-start gap-2">
            <MapPin size={20} className="shrink-0 mt-0.5" />
            25 de Mayo 298, La Falda, Córdoba.
          </p>
          <p className="text-body-md text-on-surface-variant flex items-start gap-2">
            <Clock size={20} className="shrink-0 mt-0.5" />
            Lunes a Viernes de 7:30 a 14:00 hs.
          </p>
          <a
            href="mailto:cooperativalafalda@gmail.com"
            className="text-body-md text-on-surface-variant flex items-start gap-2 hover:underline decoration-secondary decoration-2"
          >
            <Mail size={20} className="shrink-0 mt-0.5" />
            cooperativalafalda@gmail.com
          </a>
          <div className="flex items-center gap-3 mt-1">
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              aria-label="Instagram"
              className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-on-surface-variant hover:bg-primary hover:text-on-primary transition-colors"
            >
              <Instagram size={20} />
            </a>
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              aria-label="Facebook"
              className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-on-surface-variant hover:bg-primary hover:text-on-primary transition-colors"
            >
              <Facebook size={20} />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h4 className="text-label-md text-on-surface font-bold">Enlaces Rápidos</h4>
          <a
            href="#servicios"
            className="text-body-md text-on-surface-variant hover:underline decoration-secondary decoration-2"
          >
            Nuestros Servicios
          </a>
          <a
            href="#novedades"
            className="text-body-md text-on-surface-variant hover:underline decoration-secondary decoration-2"
          >
            Novedades
          </a>
          <a
            href="#/banco-sangre"
            className="text-body-md text-on-surface-variant hover:underline decoration-secondary decoration-2"
          >
            Banco de Sangre
          </a>
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="text-body-md text-on-surface-variant hover:underline decoration-secondary decoration-2"
          >
            Preguntas Frecuentes
          </a>
        </div>

        <div className="flex flex-col gap-3">
          <h4 className="text-label-md text-on-surface font-bold">Guardias 24/7</h4>
          <a
            href="tel:3548569519"
            className="text-body-md text-primary font-bold flex items-center gap-2 hover:underline decoration-secondary decoration-2"
          >
            <Phone size={18} />
            Agua: 3548-569519
          </a>
          <a
            href="tel:3548400207"
            className="text-body-md text-primary font-bold flex items-center gap-2 hover:underline decoration-secondary decoration-2"
          >
            <Phone size={18} />
            Cloacas: 3548-400207
          </a>
          <a
            href="tel:3548573415"
            className="text-body-md text-primary font-bold flex items-center gap-2 hover:underline decoration-secondary decoration-2"
          >
            <Phone size={18} />
            Mesa de Entradas: 3548-573415
          </a>
        </div>
      </div>

      <p className="text-body-md text-on-surface-variant text-center w-full mt-stack-lg">
        © 2026 Cooperativa de Agua Potable y Servicios Públicos de La Falda. Todos los derechos reservados.
      </p>
      </div>
    </footer>
  );
}
