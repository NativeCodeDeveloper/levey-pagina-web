import Contenedor from "./Contenedor";

const areas = [
  {
    codigo: "A–01",
    titulo: "Química clínica",
    descripcion:
      "Plataformas para el procesamiento rutinario y automatizado de pruebas químicas.",
    equipos: [
      { marca: "Mindray", modelos: "BS-480 · BS-600M" },
      { marca: "QuidelOrtho", modelos: "VITROS 4600 · VITROS 5600" },
      { marca: "Siemens", modelos: "Atellica CH 930" },
      { marca: "Abbott", modelos: "Alinity c" },
    ],
  },
  {
    codigo: "A–02",
    titulo: "Hematología",
    descripcion:
      "Sistemas automatizados para recuento, diferenciación y análisis hematológico.",
    equipos: [
      { marca: "Sysmex", modelos: "XN-550 · XN-1000" },
      { marca: "Mindray", modelos: "BC-6800 Plus · BC-6200" },
      { marca: "Siemens", modelos: "ADVIA 2120i" },
      { marca: "Abbott", modelos: "Alinity hq" },
    ],
  },
  {
    codigo: "A–03",
    titulo: "Hormonas e inmunoensayo",
    descripcion:
      "Equipos para determinaciones hormonales e inmunoquímicas de distintas cargas de trabajo.",
    equipos: [
      { marca: "Siemens", modelos: "Atellica IM 1600" },
      { marca: "QuidelOrtho", modelos: "VITROS ECi/ECiQ · VITROS 5600" },
      { marca: "Roche", modelos: "cobas e 411" },
      { marca: "Mindray", modelos: "CL-900i · CL-1200i" },
      { marca: "Abbott", modelos: "Alinity i" },
    ],
  },
  {
    codigo: "A–04",
    titulo: "Biología molecular",
    descripcion:
      "Plataformas automatizadas y modulares para diagnóstico molecular basado en PCR.",
    equipos: [
      { marca: "Roche", modelos: "cobas 5800 · cobas 6800" },
      { marca: "Abbott", modelos: "Alinity m · m2000" },
      { marca: "Cepheid", modelos: "GeneXpert · GeneXpert Infinity" },
      { marca: "Roche", modelos: "cobas eplex" },
    ],
  },
];

export default function SeccionAnalizadores() {
  return (
    <section
      id="analizadores"
      className="relative border-t border-white/5 bg-[#050507] py-20 sm:py-28 lg:py-36"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-48 top-0 size-[38rem] rounded-full bg-cyan-300/[0.035] blur-3xl"
      />

      <Contenedor>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-end lg:gap-20">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-white/40">
              Ecosistema analítico
            </p>
            <h2 className="max-w-3xl text-balance text-4xl font-semibold leading-[0.98] tracking-[-0.055em] text-white sm:text-5xl lg:text-6xl">
              Compatible con los analizadores de tu laboratorio.
            </h2>
          </div>

          <p className="text-pretty text-base leading-7 text-white/50 sm:text-lg sm:leading-8">
            Química clínica, hematología, hormonas y biología molecular: una
            selección de equipos de referencia con los que trabaja LeveyQC.
          </p>
        </div>

        <div className="mt-14 grid overflow-hidden border border-white/10 sm:mt-16 lg:grid-cols-2">
          {areas.map((area, indice) => (
            <article
              key={area.codigo}
              className={`border-b border-white/10 p-6 sm:p-9 lg:p-10 ${
                indice % 2 === 0 ? "lg:border-r" : ""
              } ${indice >= 2 ? "lg:border-b-0" : ""}`}
            >
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="font-mono text-xs tracking-[0.18em] text-cyan-100/35">
                    {area.codigo}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-[-0.035em] text-white">
                    {area.titulo}
                  </h3>
                </div>
                <span className="mt-2 size-2 shrink-0 rounded-full bg-cyan-100/70 shadow-[0_0_24px_rgba(207,250,254,0.35)]" />
              </div>
              <p className="mt-5 max-w-xl text-sm leading-6 text-white/40">
                {area.descripcion}
              </p>

              <dl className="mt-9 divide-y divide-white/10 border-y border-white/10">
                {area.equipos.map((equipo) => (
                  <div
                    key={`${area.codigo}-${equipo.marca}-${equipo.modelos}`}
                    className="grid gap-2 py-4 sm:grid-cols-[9rem_1fr] sm:items-center"
                  >
                    <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-white/35">
                      {equipo.marca}
                    </dt>
                    <dd className="text-sm font-medium text-white/75">
                      {equipo.modelos}
                    </dd>
                  </div>
                ))}
              </dl>
            </article>
          ))}
        </div>

        <div className="mt-8 grid gap-6 border-l border-cyan-100/20 pl-6 sm:pl-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-sm font-semibold text-white/75">
              Compatibilidad referencial
            </p>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-white/40">
              Cada integración debe validarse según modelo, versión, protocolo
              de comunicación y configuración local. La presencia en esta
              sección no representa compatibilidad certificada.
            </p>
          </div>
          <button
            type="button"
            className="flex h-12 items-center justify-center rounded-full border border-white/15 px-6 text-sm font-semibold text-white transition-colors duration-300 hover:border-white/30 hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Consultar por un analizador
          </button>
        </div>
      </Contenedor>
    </section>
  );
}
