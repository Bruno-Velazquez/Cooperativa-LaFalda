import { Banknote, Building2, CreditCard, Landmark, Repeat, Store } from 'lucide-react';

const MEDIOS = [
  { icon: CreditCard, label: 'Tarjeta de débito o crédito', description: 'Pagá online desde la Oficina Virtual.' },
  { icon: Store, label: 'RapiPago', description: 'Aboná en cualquier sucursal adherida.' },
  { icon: Landmark, label: 'Homebanking y cajeros', description: 'Disponible en bancos adheridos.' },
  { icon: Repeat, label: 'Débito automático', description: 'Adherite y no te olvides más de pagar.' },
  { icon: Banknote, label: 'Efectivo en oficinas', description: 'Av. Edén 123, La Falda.' },
  { icon: Building2, label: 'Anticipo por cuenta corriente', description: 'Consultá condiciones en mesa de entradas.' },
];

export default function MediosDePago() {
  return (
    <section aria-label="Medios de pago" className="py-stack-lg">
      <h2 className="text-headline-md text-on-surface mb-stack-md">Medios de Pago</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter">
        {MEDIOS.map((medio) => {
          const Icon = medio.icon;
          return (
            <div
              key={medio.label}
              className="bg-surface-container-lowest border border-surface-variant rounded-xl p-6 flex items-start gap-4"
            >
              <div className="w-12 h-12 bg-primary-fixed rounded-full flex items-center justify-center text-primary shrink-0">
                <Icon size={22} />
              </div>
              <div>
                <h3 className="text-headline-sm text-on-surface">{medio.label}</h3>
                <p className="text-body-md text-on-surface-variant">{medio.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
