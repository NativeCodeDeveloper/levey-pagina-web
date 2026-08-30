import Image from "next/image";
import { IconoFlecha } from "./Iconos";

export default function ContenidoHero() {
  return (
    <div className="mx-auto flex w-full min-w-0 max-w-5xl -translate-y-6 flex-col items-center text-center motion-safe:animate-[pulse_850ms_ease-out_1] sm:-translate-y-10 lg:-translate-y-8">
      <h1 className="relative aspect-[6/1] w-full max-w-4xl overflow-hidden sm:w-[88%] lg:w-[72%]">
        <Image
          src="/levey.png"
          width={2172}
          height={724}
          sizes="(max-width: 640px) calc(100vw - 3rem), (max-width: 1024px) 80vw, 896px"
          preload
          alt="LeveyQC"
          className="absolute left-0 top-1/2 h-auto w-full -translate-y-1/2 object-contain"
        />
      </h1>

      <p className="mt-8 max-w-3xl text-balance text-center text-base leading-7 text-white/60 sm:text-lg sm:leading-8">
        Centraliza, analiza y supervisa el control de calidad de tu laboratorio clínico desde una plataforma diseñada para mejorar la precisión, la trazabilidad y la toma de decisiones.
      </p>

      <div className="mt-8 flex w-full flex-col items-stretch justify-center gap-3 sm:w-auto sm:flex-row sm:items-center">
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
