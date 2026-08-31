import Contenedor from "./Contenedor";
import { Microscope, ShieldCheck, Sparkles } from "lucide-react";

const puntos = [
  { texto: "Control de calidad especializado", icono: ShieldCheck },
  { texto: "Conexión con analizadores", icono: Microscope },
  { texto: "Inteligencia artificial integrada", icono: Sparkles },
];

export default function FranjaConfianza() {
  return (
    <section className="border-t border-white/5 bg-[#050507]">
      <Contenedor>
        <ul className="grid grid-cols-1 divide-y divide-white/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {puntos.map(({ texto, icono: Icono }) => (
            <li
              key={texto}
              className="flex items-center gap-4 py-7 sm:gap-5 sm:py-9 sm:pl-8 sm:first:pl-0"
            >
              <span className="grid size-11 shrink-0 place-items-center rounded-full border border-white/10 bg-white/[0.04]">
                <Icono
                  aria-hidden="true"
                  className="size-5 text-white/60"
                  strokeWidth={1.75}
                />
              </span>
              <p className="text-base font-medium leading-6 text-white/85 sm:text-lg sm:leading-7">
                {texto}
              </p>
            </li>
          ))}
        </ul>
      </Contenedor>
    </section>
  );
}
