import { Check, ArrowRight } from "lucide-react";

export default function SeccionPrecios() {
  return (
    <section
      id="precios"
      className="relative w-full bg-black py-24 font-sans text-white sm:py-32 selection:bg-white selection:text-black"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        {/* Header */}
        <div className="mb-16 flex flex-col items-center text-center">
          <h2 className="mb-4 max-w-2xl text-balance text-4xl font-medium tracking-tighter text-white sm:text-5xl md:text-6xl">
            Precios claros. <br className="hidden sm:block" />
            <span className="text-neutral-600">Escala sin límites.</span>
          </h2>
          <p className="max-w-xl text-balance text-base text-neutral-400 sm:text-lg">
            Elige el plan según la operación de tu laboratorio. Sin costos
            escondidos ni estructuras complejas.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-3">
          {/* Monocytic */}
          <div className="flex flex-col rounded-xl border border-white/[0.08] bg-[#050505] p-8 transition-colors hover:border-white/[0.15]">
            <div className="mb-6">
              <h3 className="text-lg font-medium text-white">Monocytic</h3>
              <p className="mt-2 text-sm text-neutral-400">
                Para laboratorios que comienzan a digitalizar su control de
                calidad.
              </p>
            </div>

            <div className="mb-8 flex items-baseline gap-1">
              <span className="text-4xl font-medium tracking-tighter">
                $21.990
              </span>
              <span className="text-sm font-medium text-neutral-500">
                / mes
              </span>
            </div>

            <button
              type="button"
              className="mb-8 flex h-10 w-full items-center justify-center rounded-md border border-white/[0.12] bg-transparent text-sm font-medium transition-all hover:bg-white/[0.05] active:scale-[0.98]"
            >
              Comenzar ahora
            </button>

            <div className="mb-6 h-px w-full bg-white/[0.08]" />

            <ul className="flex flex-col gap-4 text-sm text-neutral-300">
              {[
                "1 laboratorio",
                "Usuarios ilimitados",
                "1 analizador conectado",
                "Levey-Jennings + reglas de Westgard",
                "Especialista QC IA",
                "Alertas y gestión de reactivos",
              ].map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-neutral-500" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Lymphocytic (Destacado) */}
          <div className="relative flex flex-col rounded-xl border border-white/[0.25] bg-black p-8 shadow-2xl">
            {/* Línea de acento superior */}
            <div className="absolute inset-x-0 top-0 h-[1px] w-full bg-white" />

            <div className="mb-6 flex items-start justify-between">
              <div>
                <h3 className="text-lg font-medium text-white">Lymphocytic</h3>
                <p className="mt-2 text-sm text-neutral-400">
                  Para laboratorios que necesitan mayor automatización.
                </p>
              </div>
              <span className="rounded-full bg-white px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-black">
                Más popular
              </span>
            </div>

            <div className="mb-8 flex items-baseline gap-1">
              <span className="text-4xl font-medium tracking-tighter">
                $39.990
              </span>
              <span className="text-sm font-medium text-neutral-500">
                / mes
              </span>
            </div>

            <button
              type="button"
              className="mb-8 flex h-10 w-full items-center justify-center gap-2 rounded-md bg-white text-sm font-medium text-black transition-all hover:bg-neutral-200 active:scale-[0.98]"
            >
              Comenzar ahora
              <ArrowRight className="h-4 w-4" />
            </button>

            <div className="mb-6 h-px w-full bg-white/[0.08]" />

            <ul className="flex flex-col gap-4 text-sm text-neutral-300">
              {[
                "Todo en Monocytic",
                "Hasta 4 analizadores",
                "Especialista QC IA ilimitado",
                "Reglas completas de Westgard",
                "Inventario avanzado",
                "Reportes + alertas por WhatsApp y correo",
              ].map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-white" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Neural */}
          <div className="flex flex-col rounded-xl border border-white/[0.08] bg-[#050505] p-8 transition-colors hover:border-white/[0.15]">
            <div className="mb-6">
              <h3 className="text-lg font-medium text-white">Neural</h3>
              <p className="mt-2 text-sm text-neutral-400">
                Para redes de laboratorios y organizaciones con múltiples
                sucursales.
              </p>
            </div>

            <div className="mb-8 flex items-baseline gap-1">
              <span className="text-4xl font-medium tracking-tighter">
                A cotización
              </span>
            </div>

            <button
              type="button"
              className="mb-8 flex h-10 w-full items-center justify-center rounded-md border border-white/[0.12] bg-transparent text-sm font-medium transition-all hover:bg-white/[0.05] active:scale-[0.98]"
            >
              Hablar con ventas
            </button>

            <div className="mb-6 h-px w-full bg-white/[0.08]" />

            <ul className="flex flex-col gap-4 text-sm text-neutral-300">
              {[
                "Todo en Lymphocytic",
                "Múltiples sucursales",
                "Analizadores según necesidad",
                "IA con visión global de la red",
                "Reportes consolidados",
                "Integraciones HL7 / LIS / API",
                "Soporte prioritario",
              ].map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-neutral-500" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Nota inferior */}
        <div className="mt-12 flex items-center justify-center gap-2 text-sm text-neutral-500">
          <span className="flex h-2 w-2 rounded-full bg-neutral-700" />
          Todos los planes incluyen implementación acompañada y soporte
          especializado.
        </div>
      </div>
    </section>
  );
}
