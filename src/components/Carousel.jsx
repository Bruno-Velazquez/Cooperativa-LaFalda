import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';

const AUTOPLAY_MS = 6000;

// Shared horizontal padding for every slide's content so text never sits under the arrows.
// Vertical padding is set per-carousel (see HeroCarousel/CostosServicios) since content height differs.
export const CAROUSEL_SLIDE_PADDING = 'px-14 md:px-20';
// Default fixed height, used unless a carousel instance needs a different one (see `heightClassName`).
export const CAROUSEL_MIN_HEIGHT = 'h-[520px]';

export default function Carousel({
  slides,
  renderSlide,
  ariaLabel,
  heightClassName = CAROUSEL_MIN_HEIGHT,
  bleed = false,
  autoplay = true,
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!autoplay || slides.length <= 1) return undefined;
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [autoplay, slides.length]);

  if (slides.length === 0) return null;

  const goTo = (i) => setIndex((i + slides.length) % slides.length);

  return (
    <section
      aria-label={ariaLabel}
      className={`relative overflow-hidden ${
        bleed ? '' : 'rounded-2xl border border-outline-variant'
      } ${heightClassName} flex flex-col`}
    >
      <div key={slides[index].id} className="flex-1 overflow-y-auto animate-fade-in">
        {renderSlide(slides[index], index)}
      </div>

      {slides.length > 1 && (
        <>
          <button
            type="button"
            aria-label="Anterior"
            onClick={() => goTo(index - 1)}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-surface-container-lowest/90 hover:bg-surface-container-lowest text-primary rounded-full p-2 shadow-sm z-10"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            type="button"
            aria-label="Siguiente"
            onClick={() => goTo(index + 1)}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-surface-container-lowest/90 hover:bg-surface-container-lowest text-primary rounded-full p-2 shadow-sm z-10"
          >
            <ChevronRight size={22} />
          </button>

          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {slides.map((s, i) => (
              <button
                key={s.id}
                type="button"
                aria-label={`Ir al slide ${i + 1}`}
                onClick={() => goTo(i)}
                className={`h-2 rounded-full transition-all ${
                  i === index ? 'w-6 bg-primary' : 'w-2 bg-surface-container-highest'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
}
