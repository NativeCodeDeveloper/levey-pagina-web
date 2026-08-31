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

      <p className="mt-6 max-w-xl text-pretty text-base font-semibold leading-7 text-white/60 sm:text-lg sm:leading-8">
        Control de calidad para laboratorios clínicos.
        <br />
        Tu especialista en calidad, potenciado por inteligencia.
      </p>

      <div className="mt-8 flex w-full flex-col items-stretch justify-start gap-3 sm:w-auto sm:flex-row sm:items-center">
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
