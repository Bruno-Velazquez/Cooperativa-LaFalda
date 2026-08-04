import Carousel, { CAROUSEL_SLIDE_PADDING } from './Carousel.jsx';
import tarifas from '../data/tarifas.json';

export default function CostosServicios() {
  return (
    <section aria-label="Costos de servicios" className="py-stack-lg">
      <h2 className="text-headline-md text-on-surface mb-2">Costos de Servicios</h2>
      <p className="text-body-md text-on-surface-variant mb-stack-md">
        El valor final depende de la categoría de conexión. Consultá tu caso particular en mesa de entradas.
      </p>

      <Carousel
        slides={tarifas}
        ariaLabel="Tarifas de servicios"
        renderSlide={(tarifa) => (
          <div
            className={`${CAROUSEL_SLIDE_PADDING} pt-6 pb-8 md:pt-8 md:pb-10 h-full flex flex-col gap-stack-sm bg-surface-container-lowest`}
          >
            <div>
              <h3 className="text-headline-sm text-primary">{tarifa.servicio}</h3>
              <p className="text-body-md text-on-surface-variant">{tarifa.vigencia}</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-outline-variant">
                    {tarifa.columnas.map((col) => (
                      <th key={col} className="py-1.5 pr-4 text-label-md text-on-surface-variant whitespace-nowrap">
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {tarifa.filas.map((fila) => (
                    <tr key={fila.join('-')} className="border-b border-surface-variant">
                      {fila.map((valor, i) => (
                        <td
                          key={i}
                          className={`py-1.5 pr-4 text-body-md whitespace-nowrap ${
                            i === fila.length - 1 ? 'text-primary font-bold' : 'text-on-surface'
                          }`}
                        >
                          {valor}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      />
    </section>
  );
}
