"use client";

import dynamic from "next/dynamic";

// Carga ActiveTable dinámicamente sin SSR
const ActiveTable = dynamic(
  () => import("active-table-react").then((mod) => mod.ActiveTable),
  { ssr: false }
);

interface TableProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
}

export default function ActiveTableWrapper({ data }: TableProps) {
  return (
    <ActiveTable
      maxColumns={5}
      dragColumns={false}
      customColumnTypes={[
        {
          name: "process_type",
          label: {
            options: [
              { text: "Vital", backgroundColor: "#4ddd3878" },
              { text: "Soporte", backgroundColor: "#ff606082" },
              { text: "otro", backgroundColor: "#ff940f8f" },
            ],
            canAddMoreOptions: false,
          },
          iconSettings: {
            reusableIconName: "Select",
          },
        },
        {
          name: "periodicity",
          select: {
            options: ["Diario", "Semanal", "Quincenal", "Mensual", "Trimestral", "Semestral", "Anual"],
            canAddMoreOptions: true
          },
          iconSettings : {
            reusableIconName: "Select"
          }
        }
      ]}
      customColumnsSettings={[
        {
          headerName: "Tipo de proceso",
          isHeaderTextEditable: false,
          defaultColumnTypeName: "process_type",
        },
        {
          headerName: "Nombre del proceso",
          defaultColumnTypeName: "string",
          isHeaderTextEditable: false,
        },
        {
          headerName: "Descripción del proceso",
          defaultColumnTypeName: "string",
          isHeaderTextEditable: false,
        },
        {
          headerName: "Periodicidad",
          defaultColumnTypeName: "periodicity",
          isHeaderTextEditable: false,
        },
        {
          headerName: "Áreas involucradas",
          defaultColumnTypeName: "string",
          isHeaderTextEditable: false,
        },
      ]}
      headerStyles={{ default: { backgroundColor: "#d6d6d630" } }}
      data={data}
    />
  );
}
