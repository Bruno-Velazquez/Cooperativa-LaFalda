import { useEffect, useRef, useState } from 'react';
import AccionarPopup from './components/AccionarPopup.jsx';
import AnalisisAgua from './components/AnalisisAgua.jsx';
import BancoSangreModal from './components/BancoSangreModal.jsx';
import BancoSangrePage from './components/BancoSangrePage.jsx';
import CostosServicios from './components/CostosServicios.jsx';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import HeroBento from './components/HeroBento.jsx';
import HeroCarousel from './components/HeroCarousel.jsx';
import MediosDePago from './components/MediosDePago.jsx';
import Novedades from './components/Novedades.jsx';
import QuickAccessItems from './components/QuickAccessItems.jsx';
import ServiciosGrid from './components/ServiciosGrid.jsx';
import Toast from './components/Toast.jsx';
import WhatsAppButton from './components/WhatsAppButton.jsx';
import useHashRoute from './hooks/useHashRoute.js';
import useToast from './hooks/useToast.js';

export default function App() {
  const route = useHashRoute();
  const [modalOpen, setModalOpen] = useState(false);
  const { toast, showToast, hideToast } = useToast();
  const enBancoSangre = route === '/banco-sangre';

  // Al entrar al sitio se arranca siempre arriba de todo, en el banner principal:
  // si la URL quedó con un ancla vieja (#contacto, #novedades…) se limpia.
  // Después, al cambiar de página, se respeta el ancla de la home si la hay.
  const primeraCarga = useRef(true);

  useEffect(() => {
    const { hash } = window.location;
    const esAncla = Boolean(hash) && !hash.startsWith('#/');

    const irArriba = () => window.scrollTo({ top: 0, behavior: 'instant' });

    if (primeraCarga.current) {
      primeraCarga.current = false;
      if (esAncla) {
        window.history.replaceState(null, '', window.location.pathname + window.location.search);
      }
      irArriba();
      // Segundo intento tras el primer pintado, por si el navegador recuerda la posición.
      const frame = requestAnimationFrame(irArriba);
      return () => cancelAnimationFrame(frame);
    }

    if (esAncla) {
      const target = document.getElementById(hash.slice(1));
      if (target) {
        target.scrollIntoView();
        return undefined;
      }
    }
    irArriba();
    return undefined;
  }, [route]);

  return (
    <div className="bg-background text-on-surface antialiased min-h-screen flex flex-col">
      <Header />

      {enBancoSangre ? (
        <BancoSangrePage onOpenBancoSangre={() => setModalOpen(true)} />
      ) : (
        <>
          <HeroCarousel />

          <main className="max-w-container-max mx-auto w-full px-margin-mobile md:px-margin-desktop pt-stack-lg pb-stack-lg flex flex-col gap-stack-lg">
            <QuickAccessItems />
            <ServiciosGrid />
            <AnalisisAgua />
            <HeroBento onOpenBancoSangre={() => setModalOpen(true)} />
            <MediosDePago />
            <CostosServicios />
            <Novedades />
          </main>
        </>
      )}

      <Footer />

      <BancoSangreModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onSuccess={() => showToast('¡Gracias! Recibimos tu pre-inscripción, te contactaremos pronto.')}
      />

      <Toast toast={toast} onClose={hideToast} />
      <WhatsAppButton />
      {!enBancoSangre && <AccionarPopup onOpenBancoSangre={() => setModalOpen(true)} />}
    </div>
  );
}
