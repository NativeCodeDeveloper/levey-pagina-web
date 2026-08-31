"use client";

import { useId, useRef, useState } from "react";

// Paleta azul que acompaña el acento #3ca2fa del footer
const TONOS = ["#93c5fd", "#3ca2fa", "#1d4ed8", "#3b82f6", "#60a5fa"];

export function TextHoverEffect({ text, className }) {
  const svgRef = useRef(null);
  const [hovered, setHovered] = useState(false);
  const [posicion, setPosicion] = useState({ cx: "50%", cy: "50%" });

  const id = useId().replace(/[^a-zA-Z0-9]/g, "");
  const idDegradado = `degradado-${id}`;
  const idMascara = `mascara-${id}`;

  const manejarMovimiento = (evento) => {
    const svg = svgRef.current;
    if (!svg) return;
    const rect = svg.getBoundingClientRect();
    setPosicion({
      cx: `${((evento.clientX - rect.left) / rect.width) * 100}%`,
      cy: `${((evento.clientY - rect.top) / rect.height) * 100}%`,
    });
  };

  return (
    <svg
      ref={svgRef}
      width="100%"
      height="100%"
      viewBox="0 0 350 100"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        setPosicion({ cx: "50%", cy: "50%" });
      }}
      onMouseMove={manejarMovimiento}
      className={className}
    >
      <defs>
        <linearGradient
          id={idDegradado}
          gradientUnits="userSpaceOnUse"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="0%"
        >
          {Array.from({ length: 12 }).map((_, i) => (
            <stop
              key={i}
              offset={`${(i / 11) * 100}%`}
              stopColor={TONOS[i % TONOS.length]}
            />
          ))}
        </linearGradient>

        <mask id={idMascara}>
          <rect x="0" y="0" width="100%" height="100%" fill="black" />
          <ellipse
            cx={posicion.cx}
            cy={posicion.cy}
            rx="100"
            ry="180"
            fill="white"
            style={{ transition: "cx 150ms ease-out, cy 150ms ease-out" }}
          />
        </mask>
      </defs>

      {/* Contorno completo del texto, visible al pasar el mouse */}
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        textLength="350"
        lengthAdjust="spacing"
        strokeWidth="0.3"
        className="fill-transparent stroke-neutral-200 text-8xl font-bold"
        style={{ opacity: hovered ? 0.3 : 0, transition: "opacity 300ms" }}
      >
        {text}
      </text>

      {/* Relleno con degradado, revelado por la máscara que sigue al cursor */}
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        textLength="350"
        lengthAdjust="spacing"
        strokeWidth="0.3"
        className="fill-transparent stroke-neutral-200 text-8xl font-bold"
        fill={`url(#${idDegradado})`}
        mask={`url(#${idMascara})`}
      >
        {text}
      </text>
    </svg>
  );
}

export function FooterBackgroundGradient() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
      <div className="absolute -bottom-40 left-1/2 h-[34rem] w-[130%] -translate-x-1/2 rounded-[100%] bg-[radial-gradient(ellipse_at_bottom,rgba(60,162,250,0.28),transparent_65%)] blur-2xl" />
    </div>
  );
}
