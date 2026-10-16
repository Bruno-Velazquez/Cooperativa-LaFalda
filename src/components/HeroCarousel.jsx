import { Droplet, ExternalLink, Newspaper } from 'lucide-react';
import { useMemo } from 'react';
import Carousel, { CAROUSEL_SLIDE_PADDING } from './Carousel.jsx';
import novedades from '../data/novedades.json';
import bannerBancoSangre from '../../assets/BANNER-ACCIONAR-BANCO-SANGRE.jpeg';
import bannerCloacas from '../../assets/BANNER-ACCIONAR-CLOCAS.png';

const OFICINA_VIRTUAL_URL = 'https://www.cooponlineweb.com.ar/LAFALDA/Login';

function buildSlides() {
  const novedadDestacada = novedades[0];

  const slides = [
    {
      id: 'oficina-virtual',
      icon: ExternalLink,
      eyebrow: 'Trámite Online',
      title: 'Pagá tu factura online',
      description: 'Ingresá a CoopOnline para ver tu saldo y abonar el servicio de forma rápida y segura.',
      cta: { label: 'Ingresar ahora', href: OFICINA_VIRTUAL_URL, external: true },
      overlay: 'rgba(0,62,111,0.88), rgba(0,62,111,0.5)',
      image: 'https://images.pexels.com/photos/10330118/pexels-photo-10330118.jpeg?auto=compress&cs=tinysrgb&w=1600',
    },
    {
      id: 'banco-sangre',
      icon: Droplet,
      eyebrow: 'Banco de Sangre',
      title: 'Ahora recibir sangre es más fácil',
      // Título en una sola línea de md en adelante (el tamaño baja en pantallas angostas).
      titleOneLine: true,
      description:
        'Un nuevo servicio gratuito pensado para todos nuestros socios. Llegamos a sanatorios de todo Córdoba.',
      cta: { label: 'Inscribite hoy', href: '#/banco-sangre' },
      overlay: 'rgba(186,26,26,0.88), rgba(186,26,26,0.5)',
      image: bannerBancoSangre,
    },
  ];

  if (novedadDestacada) {
    slides.push({
      id: `novedad-${novedadDestacada.id}`,
      icon: Newspaper,
      eyebrow: 'Novedad',
      title: novedadDestacada.titulo,
      description: novedadDestacada.resumen,
      descriptionMobile: 'Brindamos servicios de desagües cloacales en Villa Giardino, Huerta Grande, Valle Hermoso y La Falda.',
      cta: { label: 'Ver novedades', href: '#novedades' },
      overlay: 'rgba(0,101,141,0.88), rgba(0,101,141,0.5)',
      image: bannerCloacas,
    });
  }

  return slides;
}

export default function HeroCarousel() {
  const slides = useMemo(buildSlides, []);

  return (
    <Carousel
      slides={slides}
      ariaLabel="Información destacada"
      heightClassName="h-[calc(100vh-5rem)] min-h-[480px]"
      bleed
      renderSlide={(slide) => {
        const Icon = slide.icon;
        return (
          <div
            className={`text-white ${CAROUSEL_SLIDE_PADDING} pt-8 pb-8 md:pt-10 md:pb-10 h-full flex flex-col items-start text-left justify-center gap-stack-sm bg-cover bg-center`}
            style={{ backgroundImage: `linear-gradient(to right, ${slide.overlay}), url('${slide.image}')` }}
          >
            <div className="flex items-center gap-2">
              <Icon size={26} />
              <span className="text-body-md uppercase tracking-wide font-semibold">{slide.eyebrow}</span>
            </div>
            <h2
              className={`font-bold ${
                slide.titleOneLine
                  ? 'text-display-lg-mobile md:whitespace-nowrap md:max-w-none md:text-[30px] lg:text-[36px] xl:text-[48px] md:leading-[1.2]'
                  : 'text-display-lg-mobile md:text-display-lg max-w-3xl'
              }`}
            >
              {slide.title}
            </h2>
            <p className="text-body-md md:text-body-lg font-normal max-w-3xl opacity-90">
              <span className="md:hidden">{slide.descriptionMobile ?? slide.description}</span>
              <span className="hidden md:inline">{slide.description}</span>
            </p>
            <a
              href={slide.cta.href}
              target={slide.cta.external ? '_blank' : undefined}
              rel={slide.cta.external ? 'noopener noreferrer' : undefined}
              className="mt-2 w-fit bg-surface-container-lowest text-primary hover:bg-primary-fixed text-[16px] font-semibold px-6 py-3 rounded-lg flex items-center justify-center gap-2 transition-colors min-h-[48px]"
            >
              {slide.cta.label}
            </a>
          </div>
        );
      }}
    />
  );
}
