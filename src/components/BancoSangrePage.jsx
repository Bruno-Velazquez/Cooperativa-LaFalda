import { CheckCircle2, Droplet, HeartPulse, MapPin, Users } from 'lucide-react';
import bannerBancoSangre from '../../assets/BANNER-ACCIONAR-BANCO-SANGRE.jpeg';

// Link a la planilla de inscripción. Cuando la cooperativa lo tenga, pegarlo acá
// y el botón "Planilla de inscripción" aparece solo.
const PLANILLA_INSCRIPCION_URL = '';

// Fotos de las colectas de sangre. Para sumarlas: copiar los archivos a
// `assets/banco-sangre/`, importarlos arriba y agregarlos a esta lista
// como { src: foto1, alt: 'Descripción de la foto' }.
const GALERIA_COLECTAS = [];

const LOCALIDADES = ['Villa Giardino', 'Huerta Grande', 'La Falda', 'Valle Hermoso'];

const FOTO_DONACION =
  'https://images.pexels.com/photos/4680300/pexels-photo-4680300.jpeg?auto=compress&cs=tinysrgb&w=1600';

// Franja de localidades: ícono + leyenda + lista separada por divisores.
// En mobile la lista baja a dos columnas y se saca la línea roja de la izquierda.
function FranjaLocalidades() {
  return (
    <div className="flex flex-wrap items-center gap-3 my-stack-md">
      <div className="w-[42px] h-[42px] rounded-full bg-error-container text-error flex items-center justify-center shrink-0">
        <MapPin size={20} />
      </div>
      <span className="text-[17px] text-on-surface-variant">Disponible para residentes de</span>
      <ul className="flex flex-wrap items-center list-none m-0 p-0 w-full md:w-auto md:border-l-2 md:border-l-error">
        {LOCALIDADES.map((localidad, i) => (
          <li
            key={localidad}
            className={`text-[17px] font-semibold text-on-surface w-1/2 py-2 md:w-auto md:py-0.5 md:px-4 ${
              i > 0 ? 'md:border-l md:border-l-outline-variant' : ''
            }`}
          >
            {localidad}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function BancoSangrePage({ onOpenBancoSangre }) {
  return (
    <main className="flex flex-col">
      <section
        className="relative bg-cover bg-center min-h-[380px] md:min-h-[460px] flex items-center"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(186,26,26,0.9), rgba(186,26,26,0.55)), url('${bannerBancoSangre}')`,
        }}
      >
        <div className="max-w-container-max mx-auto w-full px-margin-mobile md:px-margin-desktop py-stack-lg text-white flex flex-col gap-stack-sm">
          <h1 className="text-display-lg-mobile md:text-display-lg font-bold max-w-3xl">Banco de Sangre</h1>
          <p className="text-body-lg max-w-2xl font-semibold">Un beneficio para nuestros usuarios y sus familias.</p>
          <p className="text-body-md md:text-body-lg max-w-2xl opacity-90">
            Un servicio gratuito de Acción-Ar que le garantiza a los usuarios de la Cooperativa y a su grupo familiar
            el acceso a unidades de sangre cuando las necesiten.
          </p>
          <button
            type="button"
            onClick={onOpenBancoSangre}
            className="mt-4 w-fit bg-surface-container-lowest text-error hover:bg-error-container text-body-md font-semibold px-6 py-3.5 rounded-lg flex items-center gap-2 transition-colors min-h-[48px]"
          >
            Inscribite ahora
          </button>
        </div>
      </section>

      <div className="max-w-container-max mx-auto w-full px-margin-mobile md:px-margin-desktop py-16 md:py-24 flex flex-col gap-16 md:gap-24">
        <section className="max-w-3xl flex flex-col gap-stack-md py-6 md:py-10">
          <p className="text-body-lg text-on-surface-variant">
            En <strong className="text-on-surface">ACCIÓN-AR COOPERATIVA DE SERVICIOS PÚBLICOS LTDA.</strong>{' '}
            trabajamos para brindar servicios que acompañen y protejan a nuestros usuarios y sus familias.
          </p>
          <p className="text-body-lg text-on-surface-variant">
            Por eso contamos con un <strong className="text-on-surface">servicio de Banco de Sangre</strong>, un
            beneficio destinado a los usuarios de la Cooperativa y sus grupos familiares que residan en Villa
            Giardino, Huerta Grande, La Falda y Valle Hermoso.
          </p>
        </section>

        <section className="flex flex-col gap-stack-md">
          <h2 className="text-headline-md text-on-surface">¿En qué consiste este beneficio?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            <article className="bg-surface-container-lowest border border-surface-variant rounded-xl p-6 flex flex-col gap-3 border-l-4 border-l-error">
              <div className="w-12 h-12 bg-error-container rounded-full flex items-center justify-center text-error">
                <HeartPulse size={22} />
              </div>
              <h3 className="text-headline-sm text-on-surface">Respaldo cuando lo necesitás</h3>
              <p className="text-body-md text-on-surface-variant">
                Acceso a unidades de sangre según los procedimientos establecidos y la disponibilidad del momento.
              </p>
            </article>
            <article className="bg-surface-container-lowest border border-surface-variant rounded-xl p-6 flex flex-col gap-3 border-l-4 border-l-cta">
              <div className="w-12 h-12 bg-primary-fixed rounded-full flex items-center justify-center text-primary">
                <CheckCircle2 size={22} />
              </div>
              <h3 className="text-headline-sm text-on-surface">Sin costo para el usuario</h3>
              <p className="text-body-md text-on-surface-variant">
                El servicio es gratuito, como parte de los beneficios que Acción-Ar ofrece a su comunidad.
              </p>
            </article>
            <article className="bg-surface-container-lowest border border-surface-variant rounded-xl p-6 flex flex-col gap-3 border-l-4 border-l-secondary">
              <div className="w-12 h-12 bg-secondary-fixed rounded-full flex items-center justify-center text-secondary">
                <Users size={22} />
              </div>
              <h3 className="text-headline-sm text-on-surface">Alcanza a tu grupo familiar</h3>
              <p className="text-body-md text-on-surface-variant">
                Cubre al usuario y a los integrantes de su familia inscriptos en el Banco de Sangre.
              </p>
            </article>
          </div>
        </section>

        <section className="flex flex-col gap-stack-md">
          <h2 className="text-headline-md text-on-surface">¿Quiénes pueden acceder?</h2>
          <FranjaLocalidades />
          <p className="text-body-lg text-on-surface-variant max-w-3xl">
            No es necesario ser titular de la cuenta de agua o cloacas. Para acceder al servicio es indispensable
            encontrarse <strong className="text-on-surface">inscripto en el Banco de Sangre</strong>.
          </p>
        </section>

        <section className="flex flex-col gap-stack-md">
          <h2 className="text-headline-md text-on-surface">¿Todavía no estás inscripto?</h2>
          <p className="text-body-lg text-on-surface-variant max-w-3xl">
            Acercate a nuestra sede para incorporar a tu grupo familiar.{' '}
            <strong className="text-on-surface">La inscripción es importante:</strong> permite que, ante una necesidad,
            podamos brindarte una respuesta de manera organizada y rápida.
          </p>
          <p className="text-body-lg text-on-surface-variant max-w-3xl">
            Además, cada persona que se incorpora al Banco de Sangre forma parte de una comunidad que trabaja
            solidariamente para que la sangre esté disponible cuando alguien la necesite.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mt-stack-sm">
            <button
              type="button"
              onClick={onOpenBancoSangre}
              className="bg-error hover:bg-on-error-container text-on-error text-body-md font-semibold px-6 py-3.5 rounded-lg flex items-center justify-center gap-2 transition-colors min-h-[48px] w-fit"
            >
              <Droplet size={18} />
              Completar pre-inscripción
            </button>
            {PLANILLA_INSCRIPCION_URL && (
              <a
                href={PLANILLA_INSCRIPCION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-outline-variant text-on-surface hover:border-primary text-body-md font-semibold px-6 py-3.5 rounded-lg flex items-center justify-center gap-2 transition-colors min-h-[48px] w-fit"
              >
                Planilla de inscripción
              </a>
            )}
          </div>
        </section>

        <section className="flex flex-col gap-stack-lg">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-gutter md:gap-12 items-center">
            <div className="md:col-span-2 flex flex-col gap-stack-md">
              <span className="text-label-md uppercase tracking-wide text-error font-semibold">
                Colectas de sangre
              </span>
              <h2 className="text-display-lg-mobile text-on-surface leading-tight">
                Donar sangre también es ser parte
              </h2>
              <p className="text-body-lg text-on-surface-variant">
                Durante el año realizamos colectas de sangre e invitamos a nuestros usuarios a participar.{' '}
                <strong className="text-error">Donar lleva solo unos minutos y puede salvar vidas.</strong>
              </p>
              <p className="text-body-md text-on-surface-variant">
                Cada donante fortalece nuestro Banco de Sangre y permite que este beneficio llegue a más familias de
                la región.
              </p>
              <div className="flex items-center gap-3 text-primary">
                <Users size={22} />
                <span className="text-body-md font-semibold">Sumate como donante en la próxima colecta</span>
              </div>
            </div>
            <img
              src={FOTO_DONACION}
              alt="Persona donando sangre durante una colecta"
              loading="lazy"
              className="md:col-span-3 w-full h-72 md:h-[440px] object-cover rounded-xl"
            />
          </div>

          {GALERIA_COLECTAS.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter">
              {GALERIA_COLECTAS.map((foto) => (
                <img
                  key={foto.src}
                  src={foto.src}
                  alt={foto.alt}
                  loading="lazy"
                  className="w-full h-56 object-cover rounded-xl"
                />
              ))}
            </div>
          )}
        </section>

        <section className="flex flex-col gap-stack-sm">
          <h2 className="text-headline-sm text-on-surface">¿Querés inscribirte o recibir más información?</h2>
          <p className="text-body-md text-on-surface-variant">
            Acercate a <strong className="text-on-surface">ACCIÓN-AR COOPERATIVA DE SERVICIOS PÚBLICOS LTDA.</strong>
          </p>
        </section>
      </div>
    </main>
  );
}
