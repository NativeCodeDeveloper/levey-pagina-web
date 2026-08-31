"use client";

import { useEffect, useRef, useState } from "react";

// La secuencia exportada se percibe pausada; se acelera la reproducción
const VELOCIDAD_REPRODUCCION = 1.5;

// Si el navegador bloquea el autoplay (p. ej. modo de bajo consumo), el
// primer gesto del usuario arranca el video sin necesidad de un control.
const EVENTOS_GESTO = ["pointerdown", "touchstart", "keydown"];

export default function VideoHero() {
  const referenciaVideo = useRef(null);
  const [iniciado, marcarIniciado] = useState(false);
  const [respaldo, marcarRespaldo] = useState(false);

  useEffect(() => {
    const video = referenciaVideo.current;

    if (!video) {
      return undefined;
    }

    const reproducir = () => {
      video.play().catch(() => {});
    };

    const confirmarInicio = () => {
      marcarIniciado(true);
    };

    // El autoplay nativo puede arrancar antes de que este efecto registre
    // "playing"; "timeupdate" se sigue disparando durante toda la
    // reproducción, así que cubre ese caso.
    const alProgreso = () => {
      if (!video.paused) {
        marcarIniciado(true);
      }
    };

    const alGesto = () => {
      if (video.paused) {
        reproducir();
      }
    };

    const alCambiarVisibilidad = () => {
      if (document.visibilityState === "visible" && video.paused) {
        reproducir();
      }
    };

    video.muted = true;
    video.playbackRate = VELOCIDAD_REPRODUCCION;

    if (!video.paused) {
      marcarIniciado(true);
    }

    reproducir();

    video.addEventListener("playing", confirmarInicio);
    video.addEventListener("timeupdate", alProgreso);
    window.addEventListener("pageshow", reproducir);
    document.addEventListener("visibilitychange", alCambiarVisibilidad);
    EVENTOS_GESTO.forEach((evento) => {
      window.addEventListener(evento, alGesto);
    });

    const respaldoPendiente = window.setTimeout(() => {
      if (video.paused) {
        marcarRespaldo(true);
      }
    }, 800);

    return () => {
      video.removeEventListener("playing", confirmarInicio);
      video.removeEventListener("timeupdate", alProgreso);
      window.removeEventListener("pageshow", reproducir);
      document.removeEventListener("visibilitychange", alCambiarVisibilidad);
      EVENTOS_GESTO.forEach((evento) => {
        window.removeEventListener(evento, alGesto);
      });
      window.clearTimeout(respaldoPendiente);
    };
  }, []);

  return (
    <div aria-hidden="true" className="absolute inset-0 bg-black">
      <img
        src="/video-hero-poster.jpg"
        alt=""
        className={`pointer-events-none absolute inset-0 size-full object-cover transition-[opacity,scale] duration-[500ms] ease-out ${
          iniciado || respaldo
            ? "opacity-0"
            : "animacion-entrada-fondo opacity-55"
        }`}
      />
      {respaldo ? (
        <img
          src="/hero-secuencia.webp"
          alt=""
          className={`pointer-events-none absolute inset-0 size-full object-cover transition-opacity duration-[500ms] ease-out ${
            iniciado ? "opacity-0" : "animacion-entrada-fondo opacity-55"
          }`}
        />
      ) : null}
      <video
        ref={referenciaVideo}
        src="/hero-secuencia.mp4"
        autoPlay
        loop
        muted
        playsInline
        {...{ "webkit-playsinline": "true" }}
        controls={false}
        disablePictureInPicture
        disableRemotePlayback
        preload="auto"
        className={`pointer-events-none absolute inset-0 size-full object-cover transition-[opacity,scale] duration-[500ms] ease-out ${
          iniciado ? "opacity-55 scale-100" : "opacity-0 motion-safe:scale-105"
        }`}
      />
    </div>
  );
}
