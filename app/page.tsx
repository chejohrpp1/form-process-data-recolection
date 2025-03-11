import { FormManager } from "./components/FormManager";


export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen p-8 sm:p-20 text-black bg-gradient-to-r from-rose-100 to-teal-100 space-y-8">
      <h1
        className="mb-6 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] md:text-6xl"
        data-aos="zoom-y-out"
        data-aos-delay={150}
      >
        Formulario de Procesos
      </h1>
      <p className="mb-8 text-lg text-gray-700">Algo de Descripcion</p>
      <FormManager/>
    </div>
  );
}
