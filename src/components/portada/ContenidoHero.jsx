import Image from "next/image";
import Contenedor from "./Contenedor";
import { IconoFlecha } from "./Iconos";

export default function ContenidoHero() {
  return (
    <div className="flex w-full flex-col items-start text-left motion-safe:animate-[entrada-contenido_700ms_ease-out_both]">
      <h1 className="relative aspect-3/1 w-full max-w-sm overflow-hidden sm:max-w-md">
        <Image
          src="/levey.png"
          width={2172}
          height={724}
          sizes="(max-width: 640px) 90vw, 448px"
          preload
          alt="LeveyQC"
          className="absolute left-0 top-0 h-auto w-full object-contain"
        />
      </h1>

      <p className="mt-8 flex items-start gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-white/40">
        <span
          aria-hidden="true"
          className="mt-[7px] h-px w-8 shrink-0 bg-white/25 sm:w-10"
        />
        Control de calidad para laboratorios clínicos
      </p>

      <p className="mt-5 max-w-xl text-balance text-2xl font-medium leading-8 tracking-[-0.02em] text-white sm:text-[28px] sm:leading-9">
        Tu especialista en calidad,{" "}
        <span className="text-white/55">potenciado por inteligencia.</span>
      </p>

      <div className="mt-10 flex w-full flex-col items-stretch justify-start gap-3 sm:w-auto sm:flex-row sm:items-center">
        <button
          type="button"
          className="group flex h-12 items-center justify-center gap-2 rounded-full bg-white px-7 text-base font-semibold text-[#111014] shadow-[0_14px_40px_rgba(0,0,0,0.28)] transition duration-300 hover:-translate-y-0.5 hover:bg-white/90 hover:shadow-[0_18px_48px_rgba(0,0,0,0.36)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          Comenzar ahora
          <span className="transition-transform duration-300 group-hover:translate-x-0.5">
            <IconoFlecha />
          </span>
        </button>
        <button
          type="button"
          className="flex h-12 items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 text-base font-semibold text-white/85 backdrop-blur-sm transition duration-300 hover:border-white/25 hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          Solicitar una demostración
        </button>
      </div>
    </div>
  );
}
