import { Droplet, Phone, Waves } from 'lucide-react';

const ITEMS = [
  {
    icon: Droplet,
    title: 'Guardia de Agua',
    description: 'Reclamos y emergencias del servicio de agua potable.',
    phone: '3548-569519',
  },
  {
    icon: Phone,
    title: 'Mesa de Entradas',
    description: 'Consultas generales, trámites y gestiones administrativas.',
    phone: '3548-573415',
  },
  {
    icon: Waves,
    title: 'Guardia de Cloacas',
    description: 'Reclamos y emergencias del servicio de desagües cloacales.',
    phone: '3548-400207',
  },
];

export default function QuickAccessItems() {
  return (
    <section aria-label="Contacto rápido de guardias" className="py-stack-md">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-gutter">
        {ITEMS.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className="bg-surface-container-lowest border border-surface-variant rounded-xl p-6 flex flex-col gap-3"
            >
              <div className="w-12 h-12 bg-primary-fixed rounded-full flex items-center justify-center text-primary">
                <Icon size={22} />
              </div>
              <h3 className="text-headline-sm text-on-surface">{item.title}</h3>
              <p className="text-body-md text-on-surface-variant">{item.description}</p>
              <a
                href={`tel:${item.phone.replace('-', '')}`}
                className="mt-auto text-primary font-bold text-body-md flex items-center gap-2 hover:underline decoration-secondary decoration-2 min-h-[24px]"
              >
                <Phone size={18} />
                {item.phone}
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}
