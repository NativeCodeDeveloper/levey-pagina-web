"use client";

import { useEffect, useRef } from "react";

export default function VideoHero() {
  const referenciaVideo = useRef(null);

  useEffect(() => {
    const video = referenciaVideo.current;

    if (!video) {
      return undefined;
    }

    let intentos = 0;
    let temporizador = null;

    const prepararAutoplay = () => {
      video.autoplay = true;
      video.loop = true;
      video.controls = false;
      video.defaultMuted = true;
      video.muted = true;
      video.playsInline = true;
      video.setAttribute("autoplay", "");
      video.setAttribute("loop", "");
      video.setAttribute("muted", "");
      video.setAttribute("playsinline", "");
      video.setAttribute("webkit-playsinline", "true");
    };

    const reproducir = () => {
      if (
        document.visibilityState !== "visible" ||
        (!video.paused && !video.ended)
      ) {
        return;
      }

      prepararAutoplay();
      video.play().catch(() => {
        if (intentos >= 20) {
          return;
        }

        intentos += 1;
        window.clearTimeout(temporizador);
        temporizador = window.setTimeout(reproducir, 600);
      });
    };

    const confirmarReproduccion = () => {
      intentos = 0;
      window.clearTimeout(temporizador);
    };

    const reanudar = () => {
      if (document.visibilityState === "visible") {
        window.clearTimeout(temporizador);
        temporizador = window.setTimeout(reproducir, 100);
      }
    };

    prepararAutoplay();
    video.addEventListener("loadeddata", reproducir);
    video.addEventListener("canplay", reproducir);
    video.addEventListener("playing", confirmarReproduccion);
    video.addEventListener("pause", reanudar);
    window.addEventListener("pageshow", reproducir);
    document.addEventListener("visibilitychange", reanudar);
    reproducir();

    return () => {
      video.removeEventListener("loadeddata", reproducir);
      video.removeEventListener("canplay", reproducir);
      video.removeEventListener("playing", confirmarReproduccion);
      video.removeEventListener("pause", reanudar);
      window.removeEventListener("pageshow", reproducir);
      document.removeEventListener("visibilitychange", reanudar);
      window.clearTimeout(temporizador);
    };
  }, []);

  return (
    <div aria-hidden="true" className="absolute inset-0 bg-black">
      <video
        ref={referenciaVideo}
        src="/hero-secuencia.mp4"
        autoPlay
        loop
        muted
        playsInline
        controls={false}
        disablePictureInPicture
        disableRemotePlayback
        preload="auto"
        poster="/video-hero-poster.jpg"
        className="pointer-events-none absolute inset-0 size-full object-cover opacity-55"
      />
    </div>
  );
}
