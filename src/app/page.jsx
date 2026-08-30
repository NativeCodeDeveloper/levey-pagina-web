import ContenidoHero from "@/components/portada/ContenidoHero";
import FranjaConfianza from "@/components/portada/FranjaConfianza";
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
        <section className="px-1 pt-1 sm:px-2 sm:pt-2">
          <div className="relative isolate mx-auto flex min-h-[760px] w-full max-w-[1536px] overflow-hidden rounded-[2rem] border border-[#050507] bg-[#08080b] shadow-[0_30px_120px_rgba(0,0,0,0.55)] sm:min-h-[720px] lg:min-h-[760px] lg:rounded-[3rem]">
            <VideoHero />

            <div
              aria-hidden="true"
              className="absolute inset-0 bg-linear-to-b from-[#07070a]/45 via-[#07070a]/75 to-[#07070a]/98 lg:bg-linear-to-r lg:from-[#07070a]/98 lg:via-[#07070a]/80 lg:to-[#07070a]/25"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[radial-gradient(circle_at_75%_35%,rgba(255,255,255,0.08),transparent_34%)]"
            />
            <div className="relative z-10 mx-auto flex min-h-[760px] w-full max-w-7xl items-center px-6 pb-12 pt-24 sm:min-h-[720px] sm:px-10 sm:pb-16 sm:pt-24 lg:min-h-[760px] lg:px-12 lg:pb-8 lg:pt-24">
              <ContenidoHero />
            </div>
          </div>
        </section>

        <FranjaConfianza />
        <PostHero />
        <SeccionPrecios />
        <SeccionAnalizadores />
        <SeccionIntegraciones />
      </main>
    </div>
  );
}
