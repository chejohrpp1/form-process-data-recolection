import React from 'react'
import { FormManager } from '../components/FormManager';

export default function HomeDeer() {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen p-8 sm:p-20 text-black bg-gradient-to-r from-green-200 via-green-300 to-blue-500">
      <h1
        className="mb-6 text-center text-5xl font-bold 
            [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] 
            md:text-6xl"
        data-aos="zoom-y-out"
        data-aos-delay={150}
      >
        Identificación de procesos Dirección de Estudios Económicos y de Riesgos
      </h1>

      <div className="bg-white/70 backdrop-blur-sm p-8 rounded shadow-md mb-8 text-gray-700 max-w-5xl mx-auto">
        <p className="mb-8 text-lg text-gray-700 text-justify px-6 md:px-20">
          Este formulario tiene como objetivo recopilar información sobre los
          procesos ejecutados por los colaboradores de la Dirección de Estudios
          Económicos y de Riesgos del Fondo de Garantía MICOOPE. Le solicitamos
          responder de manera clara y concisa para garantizar la precisión de los datos recopilados.
        </p>
      </div>
      <FormManager department="DER" />
    </div>
  );
}
