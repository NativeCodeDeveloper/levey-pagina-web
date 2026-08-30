export default function SeccionAnalizadores() {
  return (
    <section
      id="analizadores"
      className="relative bg-[#050507] px-1 pb-24 pt-2 sm:px-2 sm:pb-32 lg:pb-40"
    >
      <div className="relative mx-auto max-w-[1536px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#080b0e] px-5 py-16 sm:px-10 sm:py-20 lg:rounded-[3rem] lg:px-16 lg:py-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-48 top-0 size-[38rem] rounded-full bg-cyan-300/[0.035] blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 h-full w-px bg-linear-to-b from-transparent via-cyan-100/15 to-transparent"
        />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-end lg:gap-20">
            <div>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-100/40">
                Ecosistema analítico
              </p>
              <h2 className="max-w-5xl text-balance text-4xl font-semibold leading-[0.98] tracking-[-0.055em] text-white sm:text-5xl lg:text-7xl">
                Los equipos que tu laboratorio ya conoce.
              </h2>
            </div>

            <div className="space-y-6">
              <p className="text-pretty text-base leading-7 text-white/50 sm:text-lg sm:leading-8">
                Una selección de analizadores de referencia para química clínica, hematología, hormonas y biología molecular.
              </p>
              <div className="flex gap-8 border-t border-white/10 pt-5">
                <div>
                  <p className="font-mono text-2xl text-white">04</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/30">Áreas clínicas</p>
                </div>
                <div>
                  <p className="font-mono text-2xl text-white">17</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/30">Familias de referencia</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 grid overflow-hidden border border-white/10 sm:mt-20 lg:grid-cols-2">
            <article className="border-b border-white/10 p-6 sm:p-9 lg:border-r lg:p-10">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="font-mono text-xs tracking-[0.18em] text-cyan-100/35">A–01</p>
                  <h3 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-white">
                    Química clínica
                  </h3>
                </div>
                <span className="mt-2 size-2 rounded-full bg-cyan-100/70 shadow-[0_0_24px_rgba(207,250,254,0.35)]" />
              </div>
              <p className="mt-5 max-w-xl text-sm leading-6 text-white/40">
                Plataformas para el procesamiento rutinario y automatizado de pruebas químicas.
              </p>

              <dl className="mt-9 divide-y divide-white/10 border-y border-white/10">
                <div className="grid gap-2 py-4 sm:grid-cols-[9rem_1fr] sm:items-center">
                  <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-white/35">Mindray</dt>
                  <dd className="text-sm font-medium text-white/75">BS-480 · BS-600M</dd>
                </div>
                <div className="grid gap-2 py-4 sm:grid-cols-[9rem_1fr] sm:items-center">
                  <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-white/35">QuidelOrtho</dt>
                  <dd className="text-sm font-medium text-white/75">VITROS 4600 · VITROS 5600</dd>
                </div>
                <div className="grid gap-2 py-4 sm:grid-cols-[9rem_1fr] sm:items-center">
                  <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-white/35">Siemens</dt>
                  <dd className="text-sm font-medium text-white/75">Atellica CH 930</dd>
                </div>
                <div className="grid gap-2 py-4 sm:grid-cols-[9rem_1fr] sm:items-center">
                  <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-white/35">Abbott</dt>
                  <dd className="text-sm font-medium text-white/75">Alinity c</dd>
                </div>
              </dl>
            </article>

            <article className="border-b border-white/10 p-6 sm:p-9 lg:p-10">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="font-mono text-xs tracking-[0.18em] text-cyan-100/35">A–02</p>
                  <h3 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-white">
                    Hematología
                  </h3>
                </div>
                <span className="mt-2 size-2 rounded-full bg-cyan-100/70 shadow-[0_0_24px_rgba(207,250,254,0.35)]" />
              </div>
              <p className="mt-5 max-w-xl text-sm leading-6 text-white/40">
                Sistemas automatizados para recuento, diferenciación y análisis hematológico.
              </p>

              <dl className="mt-9 divide-y divide-white/10 border-y border-white/10">
                <div className="grid gap-2 py-4 sm:grid-cols-[9rem_1fr] sm:items-center">
                  <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-white/35">Sysmex</dt>
                  <dd className="text-sm font-medium text-white/75">XN-550 · XN-1000</dd>
                </div>
                <div className="grid gap-2 py-4 sm:grid-cols-[9rem_1fr] sm:items-center">
                  <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-white/35">Mindray</dt>
                  <dd className="text-sm font-medium text-white/75">BC-6800 Plus · BC-6200</dd>
                </div>
                <div className="grid gap-2 py-4 sm:grid-cols-[9rem_1fr] sm:items-center">
                  <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-white/35">Siemens</dt>
                  <dd className="text-sm font-medium text-white/75">ADVIA 2120i</dd>
                </div>
                <div className="grid gap-2 py-4 sm:grid-cols-[9rem_1fr] sm:items-center">
                  <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-white/35">Abbott</dt>
                  <dd className="text-sm font-medium text-white/75">Alinity hq</dd>
                </div>
              </dl>
            </article>

            <article className="border-b border-white/10 p-6 sm:p-9 lg:border-b-0 lg:border-r lg:p-10">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="font-mono text-xs tracking-[0.18em] text-cyan-100/35">A–03</p>
                  <h3 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-white">
                    Hormonas e inmunoensayo
                  </h3>
                </div>
                <span className="mt-2 size-2 rounded-full bg-cyan-100/70 shadow-[0_0_24px_rgba(207,250,254,0.35)]" />
              </div>
              <p className="mt-5 max-w-xl text-sm leading-6 text-white/40">
                Equipos para determinaciones hormonales e inmunoquímicas de distintas cargas de trabajo.
              </p>

              <dl className="mt-9 divide-y divide-white/10 border-y border-white/10">
                <div className="grid gap-2 py-4 sm:grid-cols-[9rem_1fr] sm:items-center">
                  <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-white/35">Siemens</dt>
                  <dd className="text-sm font-medium text-white/75">Atellica IM 1600</dd>
                </div>
                <div className="grid gap-2 py-4 sm:grid-cols-[9rem_1fr] sm:items-center">
                  <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-white/35">QuidelOrtho</dt>
                  <dd className="text-sm font-medium text-white/75">VITROS ECi/ECiQ · VITROS 5600</dd>
                </div>
                <div className="grid gap-2 py-4 sm:grid-cols-[9rem_1fr] sm:items-center">
                  <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-white/35">Roche</dt>
                  <dd className="text-sm font-medium text-white/75">cobas e 411</dd>
                </div>
                <div className="grid gap-2 py-4 sm:grid-cols-[9rem_1fr] sm:items-center">
                  <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-white/35">Mindray</dt>
                  <dd className="text-sm font-medium text-white/75">CL-900i · CL-1200i</dd>
                </div>
                <div className="grid gap-2 py-4 sm:grid-cols-[9rem_1fr] sm:items-center">
                  <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-white/35">Abbott</dt>
                  <dd className="text-sm font-medium text-white/75">Alinity i</dd>
                </div>
              </dl>
            </article>

            <article className="p-6 sm:p-9 lg:p-10">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="font-mono text-xs tracking-[0.18em] text-cyan-100/35">A–04</p>
                  <h3 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-white">
                    Biología molecular
                  </h3>
                </div>
                <span className="mt-2 size-2 rounded-full bg-cyan-100/70 shadow-[0_0_24px_rgba(207,250,254,0.35)]" />
              </div>
              <p className="mt-5 max-w-xl text-sm leading-6 text-white/40">
                Plataformas automatizadas y modulares para diagnóstico molecular basado en PCR.
              </p>

              <dl className="mt-9 divide-y divide-white/10 border-y border-white/10">
                <div className="grid gap-2 py-4 sm:grid-cols-[9rem_1fr] sm:items-center">
                  <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-white/35">Roche</dt>
                  <dd className="text-sm font-medium text-white/75">cobas 5800 · cobas 6800</dd>
                </div>
                <div className="grid gap-2 py-4 sm:grid-cols-[9rem_1fr] sm:items-center">
                  <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-white/35">Abbott</dt>
                  <dd className="text-sm font-medium text-white/75">Alinity m · m2000</dd>
                </div>
                <div className="grid gap-2 py-4 sm:grid-cols-[9rem_1fr] sm:items-center">
                  <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-white/35">Cepheid</dt>
                  <dd className="text-sm font-medium text-white/75">GeneXpert · GeneXpert Infinity</dd>
                </div>
                <div className="grid gap-2 py-4 sm:grid-cols-[9rem_1fr] sm:items-center">
                  <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-white/35">Roche</dt>
                  <dd className="text-sm font-medium text-white/75">cobas eplex</dd>
                </div>
              </dl>
            </article>
          </div>

          <div className="mt-8 grid gap-6 border-l border-cyan-100/20 pl-6 sm:pl-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-semibold text-white/75">Compatibilidad referencial</p>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-white/40">
                Cada integración debe validarse según modelo, versión, protocolo de comunicación y configuración local. La presencia en esta sección no representa compatibilidad certificada.
              </p>
            </div>
            <button
              type="button"
              className="flex h-12 items-center justify-center rounded-full border border-white/15 px-6 text-sm font-semibold text-white transition-colors duration-300 hover:border-white/30 hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Consultar por un analizador
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
