"use client";
import React, { ChangeEvent } from "react";

interface FormData {
  name: string;
  email: string;
  department: string;
  position: string;
}

interface HeaderFormsProps {
  formData: FormData;
  handleChange: (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
}

export const PersonalDataForms: React.FC<HeaderFormsProps> = ({
  formData,
  handleChange,
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6 w-full max-w-4xl">
      {/* Nombre */}
      <div className="bg-white shadow-lg rounded-lg p-4">
        <label className="text-gray-700 font-semibold">Nombre:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Ingresa tu nombre"
          className="w-full border-b-2 border-gray-300 focus:border-teal-500 outline-none py-2 px-2 transition-all"
        />
      </div>

      {/* Email */}
      <div className="bg-white shadow-lg rounded-lg p-4">
        <label className="text-gray-700 font-semibold">
          Correo Institucional:
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="ejemplo@fondomicoope.com"
          className="w-full border-b-2 border-gray-300 focus:border-teal-500 outline-none py-2 px-2 transition-all"
        />
      </div>

      {/* Departamento */}
      <div className="bg-white shadow-lg rounded-lg p-4">
        <label className="text-gray-700 font-semibold">Departamento:</label>
        <select
          name="department"
          value={formData.department}
          disabled={true}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white shadow-sm focus:border-teal-500 focus:ring focus:ring-teal-300 transition-all bg-gray-100 text-gray-400"
        >
          <option value="">Seleccione un departamento</option>
          <option value="DER">
            Direccion de Estudios Económicos y de Riesgo
          </option>
          <option value="ADMINISTRATION">ADMINISTRACIÓN</option>
          <option value="SUPERVISION">SUPERVISIÓN</option>
        </select>
      </div>

      {/* Puesto */}
      <div className="bg-white shadow-lg rounded-lg p-4">
        <label className="text-gray-700 font-semibold">Puesto:</label>
        <select
          name="position"
          value={formData.position}
          onChange={handleChange}
          disabled={!formData.department}
          className={`w-full border rounded-lg px-4 py-2 shadow-sm transition-all ${
            formData.department
              ? "border-gray-300 bg-white focus:border-teal-500 focus:ring focus:ring-teal-300"
              : "bg-gray-100 text-gray-400"
          }`}
        >
          <option value="">Seleccione un puesto</option>
          {formData.department === "DER" && (
            <>
              <option value="Analista de investigación y desarrollo">
                Analista de investigación y desarrollo
              </option>
              <option value="Analista de estudios y reservas">
                Analista de estudios y reservas
              </option>
              <option value="Analista económico">Analista económico</option>
              <option value="Analista de riesgos">Analista de riesgos</option>
              <option value="Analista de normas y resoluciones">
                Analista de normas y resoluciones
              </option>
              <option value="Analista de gestión del conocimiento">
                Analista de gestión del conocimiento
              </option>
              <option value="Analista investigador">
                Analista investigador
              </option>
              <option value="Director de estudios económicos y de riesgos">
                Director de estudios económicos y de riesgos
              </option>
              <option value="Educador">Educador</option>
            </>
          )}
          {formData.department === "ADMINISTRATION" && (
            <>
              <option value="Manager">Gerente</option>
              <option value="Accountant">Contador</option>
              <option value="Assistant">Asistente</option>
            </>
          )}
          {formData.department === "SUPERVISION" && (
            <>
              <option value="General Supervisor">In situs</option>
              <option value="Area Chief">Extra situs</option>
              <option value="Inspector">Otro</option>
            </>
          )}
        </select>
      </div>
    </div>
  );
};
