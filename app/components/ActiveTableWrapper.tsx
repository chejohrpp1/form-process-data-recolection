// components/ActiveTableWrapper.tsx
"use client";

import dynamic from "next/dynamic";

// Carga ActiveTable de manera dinámica sin SSR
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
      data={data}
      headerStyles={{ default: { backgroundColor: "#d6d6d630" } }}
    />
  );
}
