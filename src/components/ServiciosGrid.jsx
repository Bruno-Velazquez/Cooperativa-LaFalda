import { ChevronRight, Droplet, HeartPulse, Waves } from 'lucide-react';

const SERVICIOS = [
  {
    icon: Droplet,
    title: 'Agua Potable',
    description: 'Calidad y análisis constante para su bienestar.',
  },
  {
    icon: Waves,
    title: 'Desagües Cloacales',
    description: 'Tratamiento responsable de efluentes y saneamiento seguro.',
  },
  {
    icon: HeartPulse,
    title: 'Banco de Sangre',
    description: 'Sumate como adherente y garantizá cobertura para tu familia.',
    href: '#banco-sangre',
  },
];

export default function ServiciosGrid() {
  return (
    <section id="servicios" className="py-stack-lg">
      <div className="max-w-2xl mb-stack-md">
        <h1 className="text-display-lg-mobile md:text-display-lg text-on-background mb-4">
          Servicios esenciales para nuestra comunidad
        </h1>
        <p className="text-body-lg text-on-surface-variant">
          Agua potable, saneamiento y compromiso social en La Falda.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter">
        {SERVICIOS.map((servicio) => {
          const Icon = servicio.icon;
          return (
            <a
              key={servicio.title}
              href={servicio.href ?? '#'}
              onClick={servicio.href ? undefined : (e) => e.preventDefault()}
              className="bg-surface-container-lowest border border-surface-variant rounded-xl p-6 hover:border-primary hover:shadow-md transition-all flex flex-col gap-4 group"
            >
              <Icon className="text-primary group-hover:scale-110 transition-transform" size={28} />
              <h3 className="text-headline-sm text-on-surface">{servicio.title}</h3>
              <p className="text-body-md text-on-surface-variant text-sm">{servicio.description}</p>
              <div className="mt-auto flex justify-end">
                <ChevronRight className="text-primary group-hover:translate-x-1 transition-transform" size={20} />
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
