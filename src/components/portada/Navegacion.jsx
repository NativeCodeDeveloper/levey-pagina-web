import Image from "next/image";
import {
  Check,
  ChartNoAxesColumnIncreasing,
  ChartSpline,
  ChevronDown,
  LogIn,
  Microscope,
  Route,
  ShieldCheck,
  TestTubes,
  UserRound,
} from "lucide-react";

const mockOpcionesNavegacion = [
  { etiqueta: "Resumen de calidad", icono: ChartSpline, activo: true },
  { etiqueta: "Analizadores", icono: Microscope },
  { etiqueta: "Reglas de Westgard", icono: ShieldCheck },
  { etiqueta: "Lotes y controles", icono: TestTubes },
  { etiqueta: "Trazabilidad", icono: Route },
];

function AlaIzquierdaNotch() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 32 32"
      fill="none"
      className="pointer-events-none absolute right-full top-0 size-8 overflow-visible text-[#050507]"
    >
      <path
        d="M0 0C17.673 0 32 14.327 32 32H33V-1H0Z"
        fill="currentColor"
      />
    </svg>
  );
}

function AlaDerechaNotch() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 32 32"
      fill="none"
      className="pointer-events-none absolute left-full top-0 size-8 overflow-visible text-[#050507]"
    >
      <path
        d="M32 0C14.327 0 0 14.327 0 32H-1V-1H32Z"
        fill="currentColor"
      />
    </svg>
  );
}

function MarcaLeveyQC() {
  return (
    <div className="relative z-30 h-7 w-32 shrink-0 overflow-hidden sm:h-8 sm:w-40">
      <Image
        src="/levey.png"
        width={2172}
        height={724}
        sizes="(max-width: 640px) 128px, 160px"
        alt="LeveyQC"
        className="absolute -top-2 left-0 h-auto w-full sm:-top-2.5"
      />
    </div>
  );
}

export default function Navegacion() {
  return (
    <header className="fixed inset-x-0 top-0 z-30 flex justify-center px-4">
      <div className="relative flex h-[72px] w-full max-w-[920px] items-center rounded-b-[28px] bg-[#050507] px-5 text-zinc-50 shadow-[0_22px_55px_rgba(0,0,0,0.3)] sm:px-8">
        <AlaIzquierdaNotch />
        <AlaDerechaNotch />

        <nav
          aria-label="Navegación principal"
          className="flex w-full items-center justify-between gap-3 sm:gap-6"
        >
          <MarcaLeveyQC />

          <span aria-hidden="true" className="relative z-30 hidden h-7 w-px bg-white/10 sm:block" />

          <div className="group relative z-20 flex h-full items-center">
            <button
              type="button"
              aria-haspopup="menu"
              className="relative z-30 flex h-10 min-w-0 items-center gap-2 rounded-full px-2.5 text-sm font-semibold text-zinc-100 transition-colors duration-200 hover:bg-zinc-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-400 sm:px-3.5 sm:text-base"
            >
              <ChartNoAxesColumnIncreasing
                aria-hidden="true"
                className="size-4 shrink-0 text-zinc-500 sm:size-5"
              />
              <span>Panel</span>
              <ChevronDown
                aria-hidden="true"
                className="size-4 shrink-0 text-zinc-500 transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180"
              />
            </button>

            <div
              role="menu"
              aria-label="Opciones del panel"
              className="pointer-events-none invisible fixed left-1/2 top-[44px] z-20 w-[calc(100vw-2rem)] max-w-[920px] -translate-x-1/2 origin-top scale-y-95 rounded-b-[28px] bg-[#050507] px-5 pb-5 pt-10 opacity-0 shadow-[0_34px_80px_rgba(0,0,0,0.5)] transition duration-200 group-hover:pointer-events-auto group-hover:visible group-hover:scale-y-100 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:visible group-focus-within:scale-y-100 group-focus-within:opacity-100 sm:px-8 sm:pb-6 sm:pt-11"
            >
              <div className="flex flex-col gap-1">
                {mockOpcionesNavegacion.map((opcion) => {
                  const Icono = opcion.icono;

                  return (
                    <button
                      key={opcion.etiqueta}
                      type="button"
                      role="menuitem"
                      className={
                        opcion.activo
                          ? "flex w-full items-center justify-between gap-3 rounded-2xl bg-zinc-800 px-4 py-3.5 text-left text-sm font-semibold text-zinc-50 outline-none transition-colors focus-visible:ring-2 focus-visible:ring-zinc-400 sm:text-base"
                          : "flex w-full items-center justify-between gap-3 rounded-2xl px-4 py-3.5 text-left text-sm font-medium text-zinc-400 outline-none transition-colors hover:bg-zinc-900 hover:text-zinc-100 focus-visible:ring-2 focus-visible:ring-zinc-400 sm:text-base"
                      }
                    >
                      <span className="flex items-center gap-3">
                        <Icono
                          aria-hidden="true"
                          className="size-5 shrink-0"
                          strokeWidth={1.75}
                        />
                        <span>{opcion.etiqueta}</span>
                      </span>

                      {opcion.activo ? (
                        <Check aria-hidden="true" className="size-5 text-zinc-100" />
                      ) : null}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <span aria-hidden="true" className="relative z-30 hidden h-7 w-px bg-white/10 sm:block" />

          <a
            href="https://levey.nativecode.cl/sign-in?redirect_url=https%3A%2F%2Flevey.nativecode.cl%2F"
            className="relative z-30 flex h-11 shrink-0 items-center gap-2.5 rounded-full px-1.5 text-sm font-medium text-zinc-400 transition-colors duration-200 hover:bg-zinc-900 hover:text-zinc-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-400 sm:px-2"
          >
            <span className="grid size-10 place-items-center rounded-full bg-zinc-800 text-zinc-300">
              <UserRound aria-hidden="true" className="size-5" />
            </span>
            <span className="hidden md:inline">Ingresar</span>
            <LogIn aria-hidden="true" className="hidden size-4 text-zinc-500 sm:block" />
          </a>
        </nav>
      </div>
    </header>
  );
}
