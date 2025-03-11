import { FormManager } from "./components/FormManager";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen p-8 sm:p-20 text-black bg-gradient-to-r from-rose-100 to-teal-100 space-y-8">
      <h1
        className="mb-6 text-center border-y text-5xl font-bold 
            [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] 
            md:text-6xl"
        data-aos="zoom-y-out"
        data-aos-delay={150}
      >
        Gestión y Documentación de Procesos del Fondo de Garantía
      </h1>

      <p className="mb-8 text-lg text-gray-700 text-center px-6 md:px-20">
        Esta herramienta facilita la documentación y gestión de procesos dentro
        de la organización. Permite registrar y clasificar los procesos según su
        importancia, periodicidad y áreas involucradas, asegurando una mejor
        organización y control de las actividades clave.
      </p>
      <FormManager />
    </div>
  );
}
