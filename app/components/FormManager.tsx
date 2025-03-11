"use client";
import React, { useState } from "react";
import { PersonalDataForms } from "./PersonalDataForms";
import { FormsTable } from "./FormsTable";
import { toast, ToastContainer } from "react-toastify";

export const FormManager = () => {
  const data = [
    [
      "Nombre del proceso",
      "Descripción del proceso",
      "Periodicidad",
      "Áreas involucradas",
    ],
    ["Proceso 1", "Descripcion 1", "Anual", "Todas"],
  ];
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    department: "",
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
    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ formData, tableData: data }),
      });

      const result = await response.json();
      if (result.success) {
        toast.success("¡Correo enviado con éxito!", { autoClose: 3000 });
      } else {
        toast.error("Error al enviar el correo.", { autoClose: 3000 });
      }
    } catch (error) {
      console.error("Error al conectar con el servidor:", error);
      toast.error("Error de conexión con el servidor.", { autoClose: 3000 });
    }
  };
  return (
    <>
      <ToastContainer position="top-right" />
      <PersonalDataForms formData={formData} handleChange={handleChange} />
      <FormsTable initialData={data} />
      <div className="flex justify-center mt-4">
        <button
          onClick={sendDataToServer}
          className="bg-gradient-to-r from-sky-400 to-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
        >
          Mandar Formulario
        </button>
      </div>
    </>
  );
};
