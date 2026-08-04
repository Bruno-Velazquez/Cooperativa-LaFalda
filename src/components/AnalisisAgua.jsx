export default function AnalisisAgua() {
  return (
    <section
      className="rounded-2xl overflow-hidden relative min-h-[300px] flex items-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://commons.wikimedia.org/wiki/Special:FilePath/Water_in_a_beaker.JPG')",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent" />
      <div className="relative z-10 p-margin-mobile md:p-margin-desktop max-w-lg">
        <h2 className="text-display-lg-mobile md:text-display-lg text-primary mb-4">Análisis del Agua</h2>
        <p className="text-body-lg text-on-surface-variant mb-6">
          Garantizamos la pureza y seguridad de nuestro servicio mediante rigurosos controles diarios en
          laboratorio propio.
        </p>
        <button
          type="button"
          onClick={(e) => e.preventDefault()}
          className="bg-surface-container-lowest border-2 border-primary text-primary hover:bg-primary-fixed text-label-md px-6 py-3 rounded-lg transition-colors min-h-[48px]"
        >
          Ver Informes Mensuales
        </button>
      </div>
    </section>
  );
}
