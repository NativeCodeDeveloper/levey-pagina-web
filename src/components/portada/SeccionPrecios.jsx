export default function SeccionPrecios() {
  return (
    <section
      id="precios"
      className="relative bg-[#050507] px-1 pb-24 pt-2 sm:px-2 sm:pb-32 lg:pb-40"
    >
      <div className="relative mx-auto max-w-[1536px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#09090c] px-5 py-16 sm:px-10 sm:py-20 lg:rounded-[3rem] lg:px-16 lg:py-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -top-32 size-[32rem] rounded-full bg-white/[0.025] blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_24rem] lg:items-end lg:gap-20">
            <div>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-white/40">
                Planes LeveyQC
              </p>
              <h2 className="max-w-4xl text-balance text-4xl font-semibold leading-[0.98] tracking-[-0.055em] text-white sm:text-5xl lg:text-7xl">
                Una inversión que crece con tu laboratorio.
              </h2>
            </div>

            <p className="max-w-xl text-pretty text-base leading-7 text-white/50 sm:text-lg sm:leading-8">
              Elige el nivel de acompañamiento que necesita tu operación. Cada propuesta se configura según el alcance real de tu laboratorio.
            </p>
          </div>

          <div className="mt-14 grid overflow-hidden border border-white/10 sm:mt-20 lg:grid-cols-3">
            <article className="flex min-h-[34rem] flex-col border-b border-white/10 p-7 sm:p-9 lg:border-b-0 lg:border-r lg:p-10">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/35">
                    Plan 01
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-[-0.035em] text-white">
                    Esencial
                  </h3>
                </div>
                <span className="font-mono text-xs text-white/25">QC–E</span>
              </div>

              <p className="mt-8 min-h-14 text-sm leading-6 text-white/45">
                Para equipos que necesitan ordenar y visualizar su control de calidad diario.
              </p>

              <div className="mt-9 border-y border-white/10 py-7">
                <p className="text-xs uppercase tracking-[0.18em] text-white/30">
                  Modalidad
                </p>
                <p className="mt-3 text-2xl font-medium tracking-[-0.035em] text-white">
                  Cotización personalizada
                </p>
                <p className="mt-2 text-sm text-white/35">Según alcance y operación</p>
              </div>

              <div className="mt-8 flex-1 space-y-4 text-sm text-white/60">
                <p className="flex gap-3"><span className="text-white/30">—</span> Gráficas Levey–Jennings</p>
                <p className="flex gap-3"><span className="text-white/30">—</span> Reglas de Westgard</p>
                <p className="flex gap-3"><span className="text-white/30">—</span> Seguimiento de controles</p>
                <p className="flex gap-3"><span className="text-white/30">—</span> Panel central de calidad</p>
              </div>

              <button
                type="button"
                className="mt-10 flex h-12 w-full items-center justify-center rounded-full border border-white/15 text-sm font-semibold text-white transition-colors duration-300 hover:border-white/30 hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Solicitar cotización
              </button>
            </article>

            <article className="relative flex min-h-[34rem] flex-col bg-white p-7 text-[#0b0b0e] sm:p-9 lg:p-10">
              <div className="absolute right-7 top-7 rounded-full bg-[#0b0b0e] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-white sm:right-9 sm:top-9 lg:right-10 lg:top-10">
                Recomendado
              </div>

              <div className="pr-28">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-black/40">
                  Plan 02
                </p>
                <h3 className="mt-3 text-2xl font-semibold tracking-[-0.035em]">
                  Profesional
                </h3>
              </div>

              <p className="mt-8 min-h-14 text-sm leading-6 text-black/55">
                Para laboratorios que necesitan ampliar la supervisión y fortalecer la trazabilidad.
              </p>

              <div className="mt-9 border-y border-black/10 py-7">
                <p className="text-xs uppercase tracking-[0.18em] text-black/40">
                  Modalidad
                </p>
                <p className="mt-3 text-2xl font-semibold tracking-[-0.035em]">
                  Cotización personalizada
                </p>
                <p className="mt-2 text-sm text-black/45">Según alcance y operación</p>
              </div>

              <div className="mt-8 flex-1 space-y-4 text-sm text-black/65">
                <p className="flex gap-3"><span className="text-black/35">—</span> Todo lo incluido en Esencial</p>
                <p className="flex gap-3"><span className="text-black/35">—</span> Control multinivel</p>
                <p className="flex gap-3"><span className="text-black/35">—</span> Trazabilidad avanzada</p>
                <p className="flex gap-3"><span className="text-black/35">—</span> Supervisión en tiempo real</p>
                <p className="flex gap-3"><span className="text-black/35">—</span> Auditoría clínica</p>
              </div>

              <button
                type="button"
                className="mt-10 flex h-12 w-full items-center justify-center rounded-full bg-[#0b0b0e] text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Solicitar propuesta
              </button>
            </article>

            <article className="flex min-h-[34rem] flex-col border-t border-white/10 p-7 sm:p-9 lg:border-l lg:border-t-0 lg:p-10">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/35">
                    Plan 03
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-[-0.035em] text-white">
                    Institucional
                  </h3>
                </div>
                <span className="font-mono text-xs text-white/25">QC–I</span>
              </div>

              <p className="mt-8 min-h-14 text-sm leading-6 text-white/45">
                Para organizaciones que requieren una configuración alineada con una operación de mayor alcance.
              </p>

              <div className="mt-9 border-y border-white/10 py-7">
                <p className="text-xs uppercase tracking-[0.18em] text-white/30">
                  Modalidad
                </p>
                <p className="mt-3 text-2xl font-medium tracking-[-0.035em] text-white">
                  Propuesta a medida
                </p>
                <p className="mt-2 text-sm text-white/35">Configuración según requerimientos</p>
              </div>

              <div className="mt-8 flex-1 space-y-4 text-sm text-white/60">
                <p className="flex gap-3"><span className="text-white/30">—</span> Alcance ajustado a la operación</p>
                <p className="flex gap-3"><span className="text-white/30">—</span> Configuración por laboratorio</p>
                <p className="flex gap-3"><span className="text-white/30">—</span> Acompañamiento de implementación</p>
                <p className="flex gap-3"><span className="text-white/30">—</span> Soporte según requerimientos</p>
              </div>

              <button
                type="button"
                className="mt-10 flex h-12 w-full items-center justify-center rounded-full border border-white/15 text-sm font-semibold text-white transition-colors duration-300 hover:border-white/30 hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Diseñar mi plan
              </button>
            </article>
          </div>

          <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-2xl text-sm leading-6 text-white/40">
              Los alcances finales se definen según las necesidades operativas y técnicas de cada laboratorio.
            </p>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/30">
              Implementación acompañada · Soporte especializado
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
