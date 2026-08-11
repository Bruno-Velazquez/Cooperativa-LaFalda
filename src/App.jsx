import { useState } from 'react';
import AccionarPopup from './components/AccionarPopup.jsx';
import AnalisisAgua from './components/AnalisisAgua.jsx';
import BancoSangreModal from './components/BancoSangreModal.jsx';
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
import useToast from './hooks/useToast.js';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const { toast, showToast, hideToast } = useToast();

  return (
    <div className="bg-background text-on-surface antialiased min-h-screen flex flex-col">
      <Header />

      <main className="max-w-container-max mx-auto w-full px-margin-mobile md:px-margin-desktop pt-stack-lg pb-stack-lg flex flex-col gap-stack-lg">
        <HeroCarousel />
        <QuickAccessItems />
        <ServiciosGrid />
        <AnalisisAgua />
        <HeroBento onOpenBancoSangre={() => setModalOpen(true)} />
        <MediosDePago />
        <CostosServicios />
        <Novedades />
      </main>

      <Footer />

      <BancoSangreModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onSuccess={() => showToast('¡Gracias! Recibimos tu pre-inscripción, te contactaremos pronto.')}
      />

      <Toast toast={toast} onClose={hideToast} />
      <WhatsAppButton />
      <AccionarPopup onOpenBancoSangre={() => setModalOpen(true)} />
    </div>
  );
}
