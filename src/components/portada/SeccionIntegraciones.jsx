import Image from "next/image";

const integraciones = [
  {
    nombre: "Amazon Web Services",
    categoria: "Infraestructura cloud",
    imagen: "/aws.png",
    ancho: 1536,
    alto: 1024,
    codigo: "CLD–01",
  },
  {
    nombre: "Microsoft Azure",
    categoria: "Infraestructura cloud",
    imagen: "/azure.png",
    ancho: 2172,
    alto: 724,
    codigo: "CLD–02",
  },
  {
    nombre: "FHIR",
    categoria: "Interoperabilidad clínica",
    imagen: "/fhir.png",
    ancho: 2172,
    alto: 724,
    codigo: "INT–01",
  },
  {
    nombre: "HL7",
    categoria: "Interoperabilidad clínica",
    imagen: "/hl7.png",
    ancho: 1672,
    alto: 941,
    codigo: "INT–02",
  },
];

const capacidades = [
  {
    codigo: "01 / INTEROP",
    titulo: "Datos que hablan el mismo idioma",
    descripcion:
      "Flujos preparados para interoperar con sistemas clínicos mediante estándares HL7 y FHIR.",
  },
  {
    codigo: "02 / CLOUD",
    titulo: "Nube con arquitectura flexible",
    descripcion:
      "Capacidad de despliegue sobre ecosistemas AWS y Microsoft Azure según los requerimientos de cada operación.",
  },
  {
    codigo: "03 / CONTINUIDAD",
    titulo: "Respaldo como parte del diseño",
    descripcion:
      "Políticas de copia, recuperación y continuidad definidas según la criticidad operacional del laboratorio.",
  },
];

export default function SeccionIntegraciones() {
  return (
    <section
      id="integraciones"
      className="relative bg-[#050507] px-1 pb-2 pt-2 sm:px-2"
    >
      <div className="relative mx-auto max-w-[1536px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#07090c] px-5 py-16 sm:px-10 sm:py-20 lg:rounded-[3rem] lg:px-16 lg:py-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 -top-48 size-[42rem] rounded-full bg-sky-300/[0.055] blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-64 -left-48 size-[38rem] rounded-full bg-amber-300/[0.035] blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/15 to-transparent"
        />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_24rem] lg:items-end lg:gap-20">
            <div>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-sky-100/45">
                Infraestructura &amp; interoperabilidad
              </p>
              <h2 className="max-w-5xl text-balance text-4xl font-semibold leading-[0.98] tracking-[-0.055em] text-white sm:text-5xl lg:text-7xl">
                Integraciones abiertas. Respaldo preparado para lo crítico.
              </h2>
            </div>

            <div>
              <p className="text-pretty text-base leading-7 text-white/50 sm:text-lg sm:leading-8">
                LeveyQC está diseñado para convivir con estándares clínicos y operar sobre infraestructura cloud, con una base preparada para integración, respaldo y recuperación.
              </p>
              <div className="mt-7 flex items-center gap-3 border-t border-white/10 pt-5">
                <span className="size-2 rounded-full bg-emerald-300 shadow-[0_0_20px_rgba(110,231,183,0.45)]" />
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/35">
                  Arquitectura preparada para continuidad
                </span>
              </div>
            </div>
          </div>

          <div className="mt-16 sm:mt-20">
            <div className="mb-5 flex items-center justify-between gap-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/30">
                Red de integración / 04 nodos
              </p>
              <span className="hidden h-px flex-1 bg-linear-to-r from-white/15 to-transparent sm:block" />
              <p className="hidden font-mono text-[11px] uppercase tracking-[0.2em] text-white/25 sm:block">
                Cloud ↔ Clinical data
              </p>
            </div>

            <div className="flex snap-x snap-mandatory gap-3 overflow-x-auto pb-3 lg:grid lg:grid-cols-4 lg:overflow-visible lg:pb-0">
              {integraciones.map((integracion) => (
                <article
                  key={integracion.codigo}
                  className="group min-w-[82%] snap-center overflow-hidden rounded-[1.6rem] border border-black/10 bg-[#f4f5f2] text-[#090a0c] shadow-[0_20px_70px_rgba(0,0,0,0.25)] sm:min-w-[46%] lg:min-w-0"
                >
                  <div className="flex items-center justify-between border-b border-black/10 px-5 py-4">
                    <span className="font-mono text-[10px] font-semibold tracking-[0.18em] text-black/35">
                      {integracion.codigo}
                    </span>
                    <span className="size-1.5 rounded-full bg-emerald-500/80" />
                  </div>

                  <div className="flex h-44 items-center justify-center px-7 py-8 sm:h-48">
                    <Image
                      src={integracion.imagen}
                      width={integracion.ancho}
                      height={integracion.alto}
                      alt={`Logo de ${integracion.nombre}`}
                      sizes="(max-width: 640px) 72vw, (max-width: 1024px) 40vw, 260px"
                      className="max-h-28 w-full object-contain transition-transform duration-500 group-hover:scale-[1.035]"
                    />
                  </div>

                  <div className="border-t border-black/10 px-5 py-5">
                    <p className="text-sm font-semibold tracking-[-0.02em]">
                      {integracion.nombre}
                    </p>
                    <p className="mt-1 text-xs text-black/45">
                      {integracion.categoria}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-10 grid overflow-hidden border-y border-white/10 lg:grid-cols-3 lg:divide-x lg:divide-white/10">
            {capacidades.map((capacidad) => (
              <article
                key={capacidad.codigo}
                className="group border-b border-white/10 px-1 py-9 last:border-b-0 sm:px-8 lg:border-b-0 lg:py-12"
              >
                <div className="flex items-center justify-between gap-6">
                  <span className="font-mono text-[11px] tracking-[0.18em] text-white/30">
                    {capacidad.codigo}
                  </span>
                  <span className="h-px w-10 bg-white/15 transition-all duration-500 group-hover:w-16 group-hover:bg-white/35" />
                </div>
                <h3 className="mt-16 max-w-sm text-2xl font-semibold tracking-[-0.04em] text-white">
                  {capacidad.titulo}
                </h3>
                <p className="mt-4 max-w-sm text-sm leading-6 text-white/45">
                  {capacidad.descripcion}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-10 grid gap-8 rounded-[1.6rem] bg-white px-6 py-7 text-[#090a0c] sm:px-9 sm:py-9 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:gap-16">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-black/35">
                Continuidad clínica
              </p>
              <p className="mt-3 max-w-3xl text-xl font-semibold leading-tight tracking-[-0.035em] sm:text-2xl">
                La información permanece disponible para que el laboratorio siga tomando decisiones con contexto y trazabilidad.
              </p>
            </div>

            <div className="grid grid-cols-3 divide-x divide-black/10 border-y border-black/10 py-4 lg:min-w-[25rem]">
              <div className="px-3 text-center sm:px-5">
                <p className="font-mono text-xs font-bold">01</p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.14em] text-black/40">Respaldo</p>
              </div>
              <div className="px-3 text-center sm:px-5">
                <p className="font-mono text-xs font-bold">02</p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.14em] text-black/40">Recuperación</p>
              </div>
              <div className="px-3 text-center sm:px-5">
                <p className="font-mono text-xs font-bold">03</p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.14em] text-black/40">Trazabilidad</p>
              </div>
            </div>
          </div>

          <p className="mt-7 text-xs leading-5 text-white/25">
            La configuración final de nube, respaldo e interoperabilidad se define y valida para cada implementación.
          </p>
        </div>
      </div>
    </section>
  );
}
