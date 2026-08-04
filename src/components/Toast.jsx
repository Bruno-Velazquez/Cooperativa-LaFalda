import { CheckCircle2, X } from 'lucide-react';
import { useEffect } from 'react';

export default function Toast({ toast, onClose }) {
  useEffect(() => {
    if (!toast) return undefined;
    const timer = setTimeout(onClose, 5000);
    return () => clearTimeout(timer);
  }, [toast, onClose]);

  if (!toast) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] bg-surface-container-lowest border border-outline-variant shadow-lg rounded-xl px-5 py-4 flex items-center gap-3 max-w-[90vw] sm:max-w-md"
    >
      <CheckCircle2 className="text-green-600 shrink-0" size={24} />
      <p className="text-body-md text-on-surface">{toast.message}</p>
      <button
        type="button"
        aria-label="Cerrar notificación"
        onClick={onClose}
        className="ml-2 text-on-surface-variant hover:text-on-surface shrink-0"
      >
        <X size={18} />
      </button>
    </div>
  );
}
