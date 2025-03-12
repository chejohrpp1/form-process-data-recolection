"use client";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 sm:p-20 text-black bg-gradient-to-r from-green-200 via-green-300 to-blue-500">
      {/* Título */}
      <h1
        className="mb-12 text-center border-y text-5xl font-bold 
          md:text-6xl"
        data-aos="zoom-y-out"
        data-aos-delay={150}
      >
        Identificación de procesos Dirección de Estudios Económicos y de Riesgos
      </h1>

      {/* Contenedor del botón centrado */}
      <div className="flex items-center justify-center mt-8">
        <button
          onClick={() => router.push("/deer")}
          className="bg-gradient-to-r from-sky-400 to-blue-500 text-white px-6 py-2 rounded-lg shadow-md 
             cursor-pointer transition duration-300 
             hover:scale-105 hover:shadow-lg hover:brightness-110 active:scale-95"
        >
          Ir al formulario de la DEER
        </button>
      </div>
    </div>
  );
}
