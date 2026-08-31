"use client";

import Image from "next/image";
import { Globe } from "lucide-react";
import Contenedor from "./Contenedor";
import { FooterBackgroundGradient } from "@/components/ui/hover-footer";

// lucide-react eliminó los íconos de marcas; se replican como SVG inline
function IconoMarca({ size = 20, children }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

const IconoFacebook = (props) => (
  <IconoMarca {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </IconoMarca>
);

const IconoInstagram = (props) => (
  <IconoMarca {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </IconoMarca>
);

const IconoTwitter = (props) => (
  <IconoMarca {...props}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </IconoMarca>
);

const IconoDribbble = (props) => (
  <IconoMarca {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" />
    <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" />
    <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72" />
  </IconoMarca>
);

function MarcaLeveyQC() {
  return (
    <div className="relative h-8 w-36 shrink-0 overflow-hidden sm:h-9 sm:w-44">
      <Image
        src="/levey.png"
        width={2172}
        height={724}
        sizes="(max-width: 640px) 144px, 176px"
        alt="LeveyQC"
        className="absolute -top-2 left-0 h-auto w-full sm:-top-2.5"
      />
    </div>
  );
}

function HoverFooter() {
  // Secciones de enlaces del footer
  const footerLinks = [
    {
      title: "Producto",
      links: [
        { label: "Funcionalidades", href: "#" },
        { label: "Analizadores", href: "#analizadores" },
        { label: "Integraciones", href: "#integraciones" },
        { label: "Precios", href: "#precios" },
      ],
    },
    {
      title: "Compañía",
      links: [
        { label: "Sobre LeveyQC", href: "#" },
        { label: "Preguntas frecuentes", href: "#" },
        {
          label: "Soporte",
          href: "#",
          pulse: true,
        },
      ],
    },
  ];

  // Redes sociales
  const socialLinks = [
    { icon: <IconoFacebook size={20} />, label: "Facebook", href: "#" },
    { icon: <IconoInstagram size={20} />, label: "Instagram", href: "#" },
    { icon: <IconoTwitter size={20} />, label: "Twitter", href: "#" },
    { icon: <IconoDribbble size={20} />, label: "Dribbble", href: "#" },
    { icon: <Globe size={20} />, label: "Sitio web", href: "#" },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-[#050507]">
      <Contenedor className="relative z-40 py-14 sm:py-16">
        <div className="grid grid-cols-1 gap-12 pb-12 md:grid-cols-[1.4fr_1fr_1fr] md:gap-8 lg:gap-16">
          {/* Marca */}
          <div className="flex flex-col space-y-4">
            <MarcaLeveyQC />
            <p className="max-w-xs text-sm leading-6 text-white/45">
              Plataforma chilena de control de calidad para laboratorios
              clínicos. Operado por NativeCode.
            </p>
          </div>

          {/* Secciones de enlaces */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="mb-6 text-xs font-semibold uppercase tracking-[0.24em] text-white/40">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label} className="relative">
                    <a
                      href={link.href}
                      className="text-white/70 transition-colors hover:text-[#3ca2fa]"
                    >
                      {link.label}
                    </a>
                    {link.pulse && (
                      <span className="absolute -right-2.5 top-0 h-2 w-2 animate-pulse rounded-full bg-[#3ca2fa]"></span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <hr className="my-8 border-t border-white/10" />

        {/* Parte inferior del footer */}
        <div className="flex flex-col items-center justify-between space-y-4 text-sm md:flex-row md:space-y-0">
          {/* Redes sociales */}
          <div className="flex space-x-6 text-gray-400">
            {socialLinks.map(({ icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="transition-colors hover:text-[#3ca2fa]"
              >
                {icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-center text-white/45 md:text-left">
            &copy; {new Date().getFullYear()} LeveyQC · NativeCode. Todos los
            derechos reservados.
          </p>
        </div>
      </Contenedor>

      {/* Logo completo con brillo suave, cerrando el footer */}
      <div className="relative mt-12 flex justify-center">
        <Image
          src="/levey.png"
          width={2172}
          height={724}
          sizes="(max-width: 640px) 70vw, 320px"
          alt="LeveyQC"
          className="h-auto w-56 sm:w-72 lg:w-80 [filter:drop-shadow(0_0_16px_rgba(255,255,255,0.22))_drop-shadow(0_0_42px_rgba(60,162,250,0.28))]"
        />
      </div>

      <FooterBackgroundGradient />
    </footer>
  );
}

export default HoverFooter;
