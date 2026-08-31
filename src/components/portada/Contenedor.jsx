// Contenedor único de alineación: la navegación, el hero, cada sección y el
// footer comparten el mismo ancho y márgenes, de modo que todo el contenido
// queda alineado a una sola columna.
export default function Contenedor({ className = "", children }) {
  return (
    <div className={`mx-auto w-full max-w-[1200px] px-6 sm:px-8 ${className}`}>
      {children}
    </div>
  );
}
