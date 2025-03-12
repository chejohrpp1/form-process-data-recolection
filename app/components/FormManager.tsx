"use client";
import React, { useState } from "react";
import { PersonalDataForms } from "./PersonalDataForms";
import { FormsTable } from "./FormsTable";
import { toast, ToastContainer } from "react-toastify";

interface FormManagerProps {
  department: string;
}

export const FormManager: React.FC<FormManagerProps> = ({ department }) => {
  const data = [
    [
      "Tipo de proceso",
      "Nombre del proceso",
      "Descripción del proceso",
      "Periodicidad",
      "Áreas involucradas",
    ],
    ["Clave", "Proceso 1", "Descripcion 1", "Anual", "Todas"],
  ];
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    department: department,
    position: "",
  });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  // 🔹 Validar los datos antes de enviar
  const validateFormData = () => {
    if (!formData.name) {
      toast.warning("Por favor, ingresa tu nombre.", { autoClose: 3000 });
      return false;
    }

    if (!formData.email) {
      toast.warning("Por favor, ingresa tu email institucional.", {
        autoClose: 3000,
      });
      return false;
    }

    if (!formData.department) {
      toast.warning("Por favor, selecciona un departamento.", {
        autoClose: 3000,
      });
      return false;
    }

    if (!formData.position) {
      toast.warning("Por favor, selecciona un puesto.", { autoClose: 3000 });
      return false;
    }

    return true;
  };
  const sendDataToServer = async () => {
    if (!validateFormData()) {
      return; // Si falta algún campo, no envía los datos
    }
    toast.promise(
      fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formData,
          //tableData: tableData.slice(1), // 🔹 Omitimos la cabecera
          tableData: data,
        }),
      })
        .then((response) => response.json())
        .then((result) => {
          if (!result.success) throw new Error("Error al enviar el correo");
          setFormData({
            name: "",
            email: "",
            department: "",
            position: "",
          });
          return result;
        }),
      {
        pending: "Enviando datos...",
        success: "¡Correo enviado con éxito! 🎉",
        error: "Hubo un error al enviar el correo. 🚨",
      }
    );
  };
  return (
    <>
      <ToastContainer position="top-right" />
      <PersonalDataForms formData={formData} handleChange={handleChange} />
      <div className="bg-white/70 backdrop-blur-sm p-6 rounded shadow-md mb-8 text-gray-700 max-w-3xl mx-auto">
        <h2 className="text-xl font-semibold mb-4">
          Información de los procesos
        </h2>
        <p className="mb-4">
          En esta sección, se recopilará información detallada sobre los
          procesos en los que participa. Para responder, es importante conocer
          los siguientes conceptos:
        </p>

        <ul className="list-disc list-inside mb-4">
          <li>
            <strong>Procesos clave o macroprocesos:</strong> Contribuyen
            directamente al cumplimiento de las funciones del Fondo de Garantía
            MICOOPE, como supervisión, respaldo y garantía.
          </li>
          <li>
            <strong>Procesos de soporte:</strong> Facilitan y respaldan la
            ejecución de los procesos clave, siendo esenciales para el
            funcionamiento institucional.
          </li>
        </ul>

        <p className="mb-0">
          Le pedimos responder con la mayor claridad posible para una mejor
          comprensión y análisis de la información.
        </p>
      </div>

      <FormsTable initialData={data} />
      <div className="flex justify-center mt-4">
        <button
          onClick={sendDataToServer}
          className="bg-gradient-to-r from-sky-400 to-blue-500 text-white px-6 py-2 rounded-lg shadow-md 
               cursor-pointer transition duration-300 
               hover:scale-105 hover:shadow-lg hover:brightness-110 active:scale-95"
        >
          Mandar Formulario
        </button>
      </div>
    </>
  );
};
