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

    let reproduccionConfirmada = false;

    const confirmarInicio = () => {
      if (reproduccionConfirmada || video.readyState < 2 || video.paused) {
        return;
      }

      reproduccionConfirmada = true;
      marcarIniciado(true);
    };

    // El autoplay nativo puede arrancar antes de que este efecto registre
    // "playing"; "timeupdate" se sigue disparando durante toda la
    // reproducción, así que cubre ese caso.
    const alProgreso = () => {
      if (video.currentTime > 0) {
        confirmarInicio();
      }
    };

    const reproducir = () => {
      video.play().then(alProgreso).catch(() => {});
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

    video.addEventListener("playing", confirmarInicio);
    video.addEventListener("timeupdate", alProgreso);
    window.addEventListener("pageshow", reproducir);
    document.addEventListener("visibilitychange", alCambiarVisibilidad);
    EVENTOS_GESTO.forEach((evento) => {
      window.addEventListener(evento, alGesto);
    });

    reproducir();

    const respaldoPendiente = window.setTimeout(() => {
      if (!reproduccionConfirmada) {
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
      {!iniciado ? (
        <img
          src={respaldo ? "/hero-secuencia.webp" : "/video-hero-poster.jpg"}
          alt=""
          className="pointer-events-none absolute inset-0 size-full object-cover opacity-55"
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
        className={`pointer-events-none absolute inset-0 size-full object-cover opacity-55 ${
          iniciado ? "visible" : "invisible"
        }`}
      />
    </div>
  );
}
