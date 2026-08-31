import Contenedor from "./Contenedor";

const capacidades = [
  {
    numero: "01",
    titulo: "Automatiza",
    descripcion:
      "Menos cálculo y revisión manual. LeveyQC analiza cada corrida y aplica las reglas de control automáticamente.",
  },
  {
    numero: "02",
    titulo: "Detecta",
    descripcion:
      "Identifica tendencias, desviaciones y resultados fuera de control antes de que pasen desapercibidos.",
  },
  {
    numero: "03",
    titulo: "Centraliza",
    descripcion:
      "Resultados, lotes, analizadores, operadores, alertas y trazabilidad en una única plataforma.",
  },
];

export default function PostHero() {
  return (
    <section className="relative bg-[#050507] py-20 sm:py-28 lg:py-36">
      <Contenedor>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_26rem] lg:items-end lg:gap-20">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-white/40">
              ¿Qué es LeveyQC?
            </p>
            <h2 className="max-w-3xl text-balance text-4xl font-semibold leading-[0.98] tracking-[-0.055em] text-white sm:text-5xl lg:text-6xl">
              Control de calidad digital, especializado y centralizado.
            </h2>
          </div>

          <div className="max-w-xl space-y-5 text-pretty text-base leading-7 text-white/50 sm:text-lg sm:leading-8 lg:pb-1">
            <p>
              LeveyQC es una plataforma creada específicamente para el control
              de calidad del laboratorio clínico. Centraliza resultados,
              automatiza reglas de Westgard, genera gráficas Levey–Jennings,
              detecta desviaciones y mantiene toda la trazabilidad en un solo
              lugar.
            </p>
            <p>
              Deja atrás planillas, cuadernos y procesos manuales. Opera tu
              control de calidad con una herramienta diseñada exclusivamente
              para ello.
            </p>
          </div>
        </div>

        <div className="mt-14 grid border-y border-white/10 sm:mt-16 lg:grid-cols-3 lg:divide-x lg:divide-white/10">
          {capacidades.map((capacidad) => (
            <article
              key={capacidad.numero}
              className="group relative flex min-h-64 flex-col justify-between border-b border-white/10 px-1 py-9 transition-colors duration-300 last:border-b-0 hover:bg-white/[0.025] sm:px-8 lg:border-b-0 lg:py-12 lg:first:pl-0 lg:last:pr-0"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs tracking-[0.2em] text-white/30">
                  {capacidad.numero}
                </span>
                <span className="h-px w-12 bg-white/15 transition-all duration-500 group-hover:w-20 group-hover:bg-white/35" />
              </div>
              <div className="mt-16">
                <h3 className="text-2xl font-semibold tracking-[-0.035em] text-white">
                  {capacidad.titulo}
                </h3>
                <p className="mt-4 max-w-sm text-sm leading-6 text-white/45">
                  {capacidad.descripcion}
                </p>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-14 max-w-3xl text-balance text-2xl font-semibold leading-tight tracking-[-0.03em] text-white sm:mt-16 sm:text-3xl">
          Una sola plataforma. Un solo propósito:{" "}
          <span className="text-white/50">
            controlar la calidad de tus resultados.
          </span>
        </p>
      </Contenedor>
    </section>
  );
}
