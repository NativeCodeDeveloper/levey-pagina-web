const mockCapacidades = [
  "Levey–Jennings",
  "Reglas de Westgard",
  "Trazabilidad",
  "Control multinivel",
  "Auditoría clínica",
  "Tiempo real",
];

export default function FranjaConfianza() {
  return (
    <section className="border-t border-white/5 bg-[#050507] pb-2 pt-3">
      <div className="group relative mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center md:flex-row">
          <div className="w-full py-4 md:max-w-52 md:border-r md:border-white/10 md:py-0 md:pr-7">
            <p className="text-center text-sm leading-5 text-white/40 md:text-right">
              La confianza que necesita tu laboratorio
            </p>
          </div>

          <div className="relative w-full overflow-hidden py-6 md:w-[calc(100%-13rem)]">
            <div className="flex min-w-max items-center gap-14 px-8 sm:gap-20 md:gap-24 lg:w-full lg:min-w-0 lg:justify-around lg:gap-6">
              {mockCapacidades.map((capacidad) => (
                <span
                  key={capacidad}
                  className="text-sm font-semibold tracking-[-0.02em] text-white/65"
                >
                  {capacidad}
                </span>
              ))}
            </div>

            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-linear-to-r from-[#050507] to-transparent"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-linear-to-l from-[#050507] to-transparent"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
