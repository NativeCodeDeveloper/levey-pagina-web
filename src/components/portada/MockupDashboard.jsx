import { IconoComprobacion } from "./Iconos";

const mockMetricas = [
  { etiqueta: "Media", valor: "98,7", unidad: "mg/dL" },
  { etiqueta: "Desv. estándar", valor: "2,14", unidad: "± DE" },
  { etiqueta: "CV", valor: "2,17", unidad: "%" },
];

const mockReglas = [
  { regla: "1₂s", estado: "Advertencia", color: "naranja" },
  { regla: "1₃s", estado: "Conforme", color: "verde" },
  { regla: "2₂s", estado: "Conforme", color: "verde" },
];

function GraficoLeveyJennings() {
  const mockPuntosAceptados = [
    [45, 79],
    [80, 68],
    [114, 85],
    [149, 61],
    [184, 73],
    [219, 87],
    [254, 68],
    [289, 65],
    [324, 81],
    [359, 61],
    [414, 87],
  ];

  return (
    <div className="relative mt-5 overflow-hidden rounded-xl border border-[#e9e6ee] bg-[#fcfbfd] px-3 py-3 sm:px-4">
      <div className="mb-3 flex items-center justify-between">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#89828f]">
            Levey-Jennings
          </p>
          <p className="mt-0.5 text-xs font-medium text-[#302a37]">Nivel 1 · Últimos 12 controles</p>
        </div>
        <div className="flex items-center gap-1.5 text-[10px] font-medium text-[#288368]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#36a47f]" />
          Tiempo real
        </div>
      </div>

      <svg
        role="img"
        aria-label="Gráfico Levey-Jennings con controles dentro del rango y una advertencia"
        className="h-auto w-full"
        viewBox="0 0 430 150"
        fill="none"
      >
        <defs>
          <linearGradient id="area-control" x1="0" y1="0" x2="1" y2="0">
            <stop stopColor="#f2eef8" />
            <stop offset="1" stopColor="#f8f6fb" />
          </linearGradient>
          <linearGradient id="linea-control" x1="34" y1="0" x2="414" y2="0">
            <stop stopColor="#8565b9" />
            <stop offset="1" stopColor="#4d2e7c" />
          </linearGradient>
        </defs>

        <rect x="34" y="25" width="380" height="100" rx="8" fill="url(#area-control)" />
        {[25, 50, 75, 100, 125].map((posicion) => (
          <line
            key={posicion}
            x1="34"
            x2="414"
            y1={posicion}
            y2={posicion}
            stroke={posicion === 75 ? "#9c8ab7" : "#ddd7e6"}
            strokeWidth={posicion === 75 ? "1.2" : "1"}
            strokeDasharray={posicion === 75 ? "4 4" : "2 5"}
          />
        ))}
        <text x="3" y="29" fill="#9a929f" fontSize="8">+2 DE</text>
        <text x="9" y="78" fill="#756d7b" fontSize="8">Media</text>
        <text x="5" y="128" fill="#9a929f" fontSize="8">−2 DE</text>

        <path
          d="M45 79 C58 73 68 64 80 68 S102 89 114 85 S137 55 149 61 S172 78 184 73 S207 93 219 87 S242 64 254 68 S276 59 289 65 S311 85 324 81 S346 55 359 61 S380 106 393 109 S405 83 414 87"
          stroke="url(#linea-control)"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {mockPuntosAceptados.map(([x, y]) => (
          <circle
            key={`${x}-${y}`}
            cx={x}
            cy={y}
            r="4"
            fill="white"
            stroke="#67459c"
            strokeWidth="2"
          />
        ))}
        <circle cx="393" cy="109" r="7" fill="#fff7ed" />
        <circle cx="393" cy="109" r="4" fill="white" stroke="#dd7a32" strokeWidth="2" />
      </svg>

      <div className="mt-1 flex justify-between pl-9 text-[9px] text-[#aaa3af]">
        <span>08:00</span>
        <span>10:00</span>
        <span>12:00</span>
        <span>14:00</span>
      </div>
    </div>
  );
}

function TarjetaReglasWestgard() {
  return (
    <section className="rounded-2xl border border-[#e9e6ee] bg-white p-4 shadow-[0_10px_28px_rgba(34,24,46,0.05)] sm:p-5">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-[#292331]">Reglas de Westgard</p>
          <p className="mt-1 text-[11px] text-[#8a838f]">Evaluación automática</p>
        </div>
        <span className="rounded-full bg-[#f0ebf8] px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.12em] text-[#67459c]">
          Activo
        </span>
      </div>

      <div className="mt-4 space-y-2.5">
        {mockReglas.map((elemento) => (
          <div
            key={elemento.regla}
            className="flex items-center justify-between border-b border-[#f1eff3] pb-2.5 last:border-0 last:pb-0"
          >
            <div className="flex items-center gap-2.5">
              <span
                className={`h-2 w-2 rounded-full ${
                  elemento.color === "naranja" ? "bg-[#df843f]" : "bg-[#3aa37d]"
                }`}
              />
              <span className="text-xs font-semibold text-[#3b3541]">{elemento.regla}</span>
            </div>
            <span
              className={`text-[10px] font-medium ${
                elemento.color === "naranja" ? "text-[#b96024]" : "text-[#37856d]"
              }`}
            >
              {elemento.estado}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

function TarjetaUltimoControl() {
  return (
    <section className="rounded-2xl border border-[#e9e6ee] bg-white p-4 shadow-[0_10px_28px_rgba(34,24,46,0.05)] sm:p-5">
      <p className="text-sm font-semibold text-[#292331]">Último control</p>
      <div className="mt-4 flex items-center gap-3">
        <div className="relative grid h-11 w-11 place-items-center rounded-full bg-[#eaf6f1] text-[#2d8b6d]">
          <span className="absolute h-11 w-11 rounded-full border border-[#a9d7c7] motion-safe:animate-[ping_3s_ease-out_infinite]" />
          <IconoComprobacion className="relative h-5 w-5" />
        </div>
        <div>
          <p className="text-lg font-semibold tracking-[-0.03em] text-[#28222f]">99,4</p>
          <p className="text-[10px] text-[#8a838f]">Aceptado · hace 4 min</p>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between rounded-lg bg-[#faf9fb] px-3 py-2 text-[10px]">
        <span className="text-[#8a838f]">Operador</span>
        <span className="font-semibold text-[#4a4351]">TM. Valentina R.</span>
      </div>
    </section>
  );
}

export default function MockupDashboard() {
  return (
    <div className="relative mx-auto w-full max-w-[650px] motion-safe:animate-[pulse_900ms_ease-out_1] lg:ml-auto">
      <div className="absolute -left-8 top-20 z-10 hidden rounded-xl border border-white/80 bg-white/70 px-3 py-2.5 shadow-[0_12px_36px_rgba(47,25,95,0.09)] backdrop-blur-md sm:flex lg:-left-10">
        <div className="mr-2.5 mt-0.5 h-2 w-2 rounded-full bg-[#3aa37d] shadow-[0_0_0_4px_rgba(58,163,125,0.12)]" />
        <div>
          <p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-[#9a939f]">Sistema</p>
          <p className="mt-0.5 text-[11px] font-semibold text-[#443d4b]">Todos los equipos conectados</p>
        </div>
      </div>

      <div className="overflow-hidden rounded-[26px] border border-white/90 bg-white/90 p-2 shadow-[0_35px_90px_rgba(47,25,95,0.16),0_8px_25px_rgba(33,24,44,0.08)] backdrop-blur-xl sm:p-3">
        <div className="overflow-hidden rounded-[20px] border border-[#e8e4ed] bg-[#f8f7fa]">
          <div className="flex items-center justify-between border-b border-[#e8e4ed] bg-white px-4 py-3 sm:px-6">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#e7e2eb]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#e7e2eb]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#e7e2eb]" />
            </div>
            <div className="flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.14em] text-[#817989]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#38a27a]" />
              Sincronizado
            </div>
          </div>

          <div className="p-3 sm:p-5">
            <section className="rounded-2xl border border-[#e9e6ee] bg-white p-4 shadow-[0_12px_35px_rgba(34,24,46,0.045)] sm:p-5">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex items-start gap-3">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#f0ebf8] text-[#604092]">
                    <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none">
                      <path d="M8 3h8M10 3v5l-5 9a2 2 0 0 0 1.75 3h10.5A2 2 0 0 0 19 17l-5-9V3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M7.5 15h9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-[#98909f]">Analizador</p>
                    <h2 className="mt-1 text-sm font-semibold tracking-[-0.02em] text-[#292331] sm:text-base">
                      Cobas® Pro c 503
                    </h2>
                    <p className="mt-0.5 text-[10px] text-[#8a838f]">Glucosa · Lote QC-2408</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-start rounded-full border border-[#cce6dc] bg-[#f1faf7] px-3 py-1.5 text-[10px] font-semibold text-[#287a61]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#35a17a] shadow-[0_0_0_3px_rgba(53,161,122,0.13)]" />
                  Dentro de control
                </div>
              </div>

              <GraficoLeveyJennings />

              <div className="mt-4 grid grid-cols-3 divide-x divide-[#ebe8ef] rounded-xl border border-[#ebe8ef] bg-white py-3">
                {mockMetricas.map((metrica) => (
                  <div key={metrica.etiqueta} className="px-2 text-center sm:px-4 sm:text-left">
                    <p className="text-[9px] font-medium text-[#938c99] sm:text-[10px]">{metrica.etiqueta}</p>
                    <p className="mt-1 text-sm font-semibold tracking-[-0.02em] text-[#332d3a] sm:text-base">
                      {metrica.valor}
                      <span className="ml-1 text-[8px] font-medium text-[#9c95a1] sm:text-[9px]">{metrica.unidad}</span>
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <div className="mt-3 grid gap-3 sm:grid-cols-[1.1fr_0.9fr]">
              <TarjetaReglasWestgard />
              <TarjetaUltimoControl />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-5 -right-2 flex items-center gap-2.5 rounded-xl border border-[#f0dccb] bg-white/90 px-3 py-2.5 shadow-[0_15px_40px_rgba(94,52,23,0.10)] backdrop-blur-md sm:right-5">
        <span className="grid h-7 w-7 place-items-center rounded-lg bg-[#fff4ea] text-[#c5682a]">
          <span className="text-sm font-semibold">!</span>
        </span>
        <div>
          <p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-[#b16b3b]">Detección temprana</p>
          <p className="mt-0.5 text-[10px] text-[#776b62]">Regla 1₂s observada</p>
        </div>
      </div>
    </div>
  );
}
