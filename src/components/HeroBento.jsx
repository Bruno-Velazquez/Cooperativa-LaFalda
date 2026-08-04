import { ArrowRight, Droplet, Monitor } from 'lucide-react';

const OFICINA_VIRTUAL_URL = 'https://www.cooponlineweb.com.ar/LAFALDA/Login';

export default function HeroBento({ onOpenBancoSangre }) {
  return (
    <section id="inicio" className="flex flex-col gap-stack-md py-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
        <div className="glass-card rounded-xl p-stack-md flex flex-col justify-between h-full hover:shadow-lg transition-shadow border-l-4 border-l-cta">
          <div>
            <div className="w-12 h-12 bg-primary-fixed rounded-full flex items-center justify-center mb-4 text-primary">
              <Monitor size={22} />
            </div>
            <h2 className="text-headline-md text-on-surface mb-2">
              Oficina Virtual - Pagá tu Factura Online
            </h2>
            <p className="text-body-md text-on-surface-variant mb-6">
              Ingresá a CoopOnline para ver tu saldo y abonar el servicio de forma rápida y segura.
            </p>
          </div>
          <a
            href={OFICINA_VIRTUAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-cta hover:bg-cta-dark text-on-primary text-label-md px-6 py-3 rounded-lg flex items-center justify-center gap-2 transition-colors min-h-[48px] w-fit"
          >
            Ingresar ahora
            <ArrowRight size={18} />
          </a>
        </div>

        <div
          id="banco-sangre"
          className="glass-card rounded-xl p-stack-md flex flex-col justify-between h-full hover:shadow-lg transition-shadow border-l-4 border-l-error"
        >
          <div>
            <div className="w-12 h-12 bg-error-container rounded-full flex items-center justify-center mb-4 text-error">
              <Droplet size={22} />
            </div>
            <h2 className="text-headline-md text-on-surface mb-2">Banco de Sangre Cooperativo</h2>
            <p className="text-body-md text-on-surface-variant mb-6">
              Inscribite o sumá a tu grupo familiar como adherente para garantizar cobertura inmediata.
            </p>
          </div>
          <button
            type="button"
            onClick={onOpenBancoSangre}
            className="bg-error hover:bg-on-error-container text-on-error text-label-md px-6 py-3 rounded-lg flex items-center justify-center gap-2 transition-colors min-h-[48px] w-fit"
          >
            Solicitar Adhesión
          </button>
        </div>
      </div>
    </section>
  );
}
