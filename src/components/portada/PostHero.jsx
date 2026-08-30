export default function PostHero() {
  return (
    <section className="relative overflow-hidden bg-[#050507] px-6 py-24 sm:px-10 sm:py-32 lg:px-12 lg:py-40">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 size-[34rem] rounded-full bg-cyan-300/[0.035] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent"
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_23rem] lg:items-end lg:gap-20">
          <div>
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.24em] text-white/40">
              Control de calidad clínico · Chile
            </p>
            <h2 className="max-w-5xl text-balance text-4xl font-semibold leading-[0.98] tracking-[-0.055em] text-white sm:text-5xl lg:text-7xl">
              Una mejor forma de convertir control en confianza.
            </h2>
          </div>

          <p className="max-w-xl text-pretty text-base leading-7 text-white/50 sm:text-lg sm:leading-8 lg:pb-1">
            LeveyQC reúne la información crítica de tu laboratorio en una experiencia clara, trazable y preparada para tomar decisiones con mayor respaldo.
          </p>
        </div>

        <div className="mt-16 grid border-y border-white/10 sm:mt-20 lg:grid-cols-3 lg:divide-x lg:divide-white/10">
          <article className="group relative flex min-h-72 flex-col justify-between border-b border-white/10 px-1 py-9 transition-colors duration-300 hover:bg-white/[0.025] sm:px-8 lg:border-b-0 lg:py-12">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs tracking-[0.2em] text-white/30">01</span>
              <span className="h-px w-12 bg-white/15 transition-all duration-500 group-hover:w-20 group-hover:bg-white/35" />
            </div>
            <div className="mt-20">
              <h3 className="text-2xl font-semibold tracking-[-0.035em] text-white">
                Claridad para controlar
              </h3>
              <p className="mt-4 max-w-sm text-base leading-7 text-white/45">
                Visualiza controles, tendencias y reglas desde un mismo lugar, sin fragmentar la lectura entre procesos dispersos.
              </p>
            </div>
          </article>

          <article className="group relative flex min-h-72 flex-col justify-between border-b border-white/10 px-1 py-9 transition-colors duration-300 hover:bg-white/[0.025] sm:px-8 lg:border-b-0 lg:py-12">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs tracking-[0.2em] text-white/30">02</span>
              <span className="h-px w-12 bg-white/15 transition-all duration-500 group-hover:w-20 group-hover:bg-white/35" />
            </div>
            <div className="mt-20">
              <h3 className="text-2xl font-semibold tracking-[-0.035em] text-white">
                Decisiones con respaldo
              </h3>
              <p className="mt-4 max-w-sm text-base leading-7 text-white/45">
                Interpreta el comportamiento analítico con criterios consistentes y entrega respuestas oportunas a tu equipo.
              </p>
            </div>
          </article>

          <article className="group relative flex min-h-72 flex-col justify-between px-1 py-9 transition-colors duration-300 hover:bg-white/[0.025] sm:px-8 lg:py-12">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs tracking-[0.2em] text-white/30">03</span>
              <span className="h-px w-12 bg-white/15 transition-all duration-500 group-hover:w-20 group-hover:bg-white/35" />
            </div>
            <div className="mt-20">
              <h3 className="text-2xl font-semibold tracking-[-0.035em] text-white">
                Trazabilidad sin puntos ciegos
              </h3>
              <p className="mt-4 max-w-sm text-base leading-7 text-white/45">
                Mantén el contexto de cada control disponible para revisar, supervisar y sostener la mejora continua.
              </p>
            </div>
          </article>
        </div>

        <div className="mt-10 flex flex-col gap-5 border-l border-white/15 pl-6 sm:mt-12 sm:flex-row sm:items-center sm:justify-between sm:pl-8">
          <p className="max-w-2xl text-xl font-medium tracking-[-0.025em] text-white/80 sm:text-2xl">
            Menos tiempo buscando datos. Más tiempo tomando decisiones con respaldo.
          </p>
          <p className="shrink-0 text-xs font-semibold uppercase tracking-[0.2em] text-white/30">
            Precisión · Trazabilidad · Confianza
          </p>
        </div>
      </div>
    </section>
  );
}
