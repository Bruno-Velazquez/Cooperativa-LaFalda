import { ArrowRight } from 'lucide-react';
import novedades from '../data/novedades.json';
import imgCloacas from '../../assets/BLOG -SERVICIOS-DE-CLOACAS.png';
import imgEscuela from '../../assets/BLOG-ESCUELA-DE-AGUA.png';
import imgObras from '../../assets/BLOG-OBRAS-EN-VILLA-LOS-DIQUES.png';

const IMAGENES = {
  'novedad-1': imgCloacas,
  'novedad-2': imgEscuela,
  'novedad-3': imgObras,
};

function formatFecha(iso) {
  return new Date(iso).toLocaleDateString('es-AR', { day: '2-digit', month: 'long', year: 'numeric' });
}

export default function Novedades() {
  return (
    <section id="novedades" className="py-stack-lg scroll-mt-24">
      <h2 className="text-headline-md text-on-surface mb-stack-md">Novedades</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter">
        {novedades.map((novedad) => (
          <article
            key={novedad.id}
            className="bg-surface-container-lowest border border-surface-variant rounded-xl overflow-hidden flex flex-col"
          >
            <img
              src={IMAGENES[novedad.id]}
              alt={novedad.titulo}
              className="w-full h-44 object-cover"
            />
            <div className="p-6 flex flex-col gap-3 flex-1">
              <time dateTime={novedad.fecha} className="text-label-md text-on-surface-variant">
                {formatFecha(novedad.fecha)}
              </time>
              <h3 className="text-headline-sm text-on-surface">{novedad.titulo}</h3>
              <p className="text-body-md text-on-surface-variant">{novedad.resumen}</p>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="mt-auto text-primary font-bold text-body-md flex items-center gap-2 hover:underline decoration-secondary decoration-2 w-fit"
              >
                Ver más
                <ArrowRight size={18} />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
