import { X } from 'lucide-react';
import { useEffect, useState } from 'react';
import popupImage from '../../desing/Accionar - pop up web.jpg';

const STORAGE_KEY = 'accionar-popup-shown';

export default function AccionarPopup({ onOpenBancoSangre }) {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY)) return;

    const timer = setTimeout(() => {
      setOpen(true);
      sessionStorage.setItem(STORAGE_KEY, '1');
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!open) return;
    const frame = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(frame);
  }, [open]);

  if (!open) return null;

  const handleClose = () => {
    setVisible(false);
    setTimeout(() => setOpen(false), 300);
  };

  const handleInscribirse = () => {
    handleClose();
    onOpenBancoSangre();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="accionar-popup-title"
      className={`fixed inset-0 z-[200] flex items-center justify-center p-4 bg-on-background/50 transition-opacity duration-300 ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={handleClose}
    >
      <div
        className={`max-w-lg w-full shadow-2xl relative rounded-[2rem] overflow-hidden transition-all duration-300 ${
          visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          aria-label="Cerrar"
          onClick={handleClose}
          className="absolute top-3 right-3 z-20 w-9 h-9 rounded-full bg-surface-container-lowest shadow-md flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors"
        >
          <X size={20} />
        </button>

        <button type="button" onClick={handleInscribirse} className="block w-full">
          <img
            src={popupImage}
            alt="Si sos socio/a de Accion-ar ya contás con el servicio de Banco de Sangre, de manera gratuita. Inscribí a tu grupo familiar aquí."
            id="accionar-popup-title"
            className="block w-full h-auto"
          />
        </button>
      </div>
    </div>
  );
}
