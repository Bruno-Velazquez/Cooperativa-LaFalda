import { AlertTriangle, CheckCircle2, Clock, HourglassIcon } from 'lucide-react';
import avisos from '../data/avisos.json';

const ESTADO_CONFIG = {
  en_progreso: {
    label: 'En Progreso',
    chipClass: 'bg-tertiary-container/20 text-tertiary',
    icon: HourglassIcon,
  },
  programado: {
    label: 'Programado',
    chipClass: 'bg-secondary-container/30 text-secondary',
    icon: Clock,
  },
  resuelto: {
    label: 'Resuelto',
    chipClass: 'bg-green-100 text-green-700',
    icon: CheckCircle2,
  },
};

export default function AlertasService() {
  const activos = avisos.filter((a) => a.estado !== 'resuelto');

  if (activos.length === 0) return null;

  return (
    <section id="avisos" aria-label="Avisos de servicio" className="flex flex-col gap-stack-sm">
      {activos.map((aviso) => {
        const config = ESTADO_CONFIG[aviso.estado] ?? ESTADO_CONFIG.programado;
        const EstadoIcon = config.icon;
        return (
          <div
            key={aviso.id}
            className="bg-secondary-fixed text-on-secondary-fixed rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 border border-secondary-fixed-dim shadow-sm"
          >
            <div className="flex items-center gap-3 text-center sm:text-left">
              <AlertTriangle className="text-secondary shrink-0" size={24} aria-hidden />
              <div>
                <p className="text-label-md font-bold">{aviso.titulo}</p>
                <p className="text-body-md">{aviso.descripcion}</p>
              </div>
            </div>
            <span className={`px-3 py-1 rounded-full text-label-md flex items-center gap-1 shrink-0 ${config.chipClass}`}>
              <EstadoIcon size={16} />
              {config.label}
            </span>
          </div>
        );
      })}
    </section>
  );
}
