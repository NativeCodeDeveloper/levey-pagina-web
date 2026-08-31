import Contenedor from "./Contenedor";

const puntos = [
  "Control de calidad especializado",
  "Conexión con analizadores",
  "Inteligencia artificial integrada",
];

export default function FranjaConfianza() {
  return (
    <section className="border-t border-white/5 bg-[#050507]">
      <Contenedor>
        <ul className="grid grid-cols-1 divide-y divide-white/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {puntos.map((punto) => (
            <li
              key={punto}
              className="flex items-center py-8 sm:py-10 sm:pl-8 sm:first:pl-0"
            >
              <p className="text-base font-medium text-white/80 sm:text-lg">
                {punto}
              </p>
            </li>
          ))}
        </ul>
      </Contenedor>
    </section>
  );
}
