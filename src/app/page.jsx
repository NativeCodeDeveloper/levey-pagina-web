import ContenidoHero from "@/components/portada/ContenidoHero";
import Contenedor from "@/components/portada/Contenedor";
import FranjaConfianza from "@/components/portada/FranjaConfianza";
import FlujoGateway from "@/components/portada/FlujoGateway";
import HoverFooter from "@/components/portada/HoverFooter";
import Navegacion from "@/components/portada/Navegacion";
import PostHero from "@/components/portada/PostHero";
import SeccionAnalizadores from "@/components/portada/SeccionAnalizadores";
import SeccionIntegraciones from "@/components/portada/SeccionIntegraciones";
import SeccionPrecios from "@/components/portada/SeccionPrecios";
import VideoHero from "@/components/portada/VideoHero";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#050507] font-sans text-white">
      <Navegacion />

      <main>
        <section className="relative isolate flex min-h-svh items-center overflow-hidden bg-[#08080b]">
          <VideoHero />

          <div
            aria-hidden="true"
            className="absolute inset-0 bg-linear-to-r from-[#07070a]/95 via-[#07070a]/70 to-[#07070a]/25"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(circle_at_75%_35%,rgba(255,255,255,0.08),transparent_34%)]"
          />

          <Contenedor className="relative z-10 pb-20 pt-28">
            <ContenidoHero />
          </Contenedor>
        </section>

        <FranjaConfianza />
        <PostHero />

        <section className="relative h-[70vh] min-h-[520px] w-full bg-black">
          <FlujoGateway />
          <div className="pointer-events-none absolute inset-x-0 top-[9%] z-10 flex flex-col items-center px-6 text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              Control de calidad centralizado
            </h2>
            <p className="mt-4 max-w-md text-pretty text-lg leading-8 text-white/50">
              Libérate de los cuadernos y opera como un laboratorio de alta
              gama.
            </p>
          </div>
        </section>

        <SeccionPrecios />
        <SeccionAnalizadores />
        <SeccionIntegraciones />
      </main>

      <HoverFooter />
    </div>
  );
}
