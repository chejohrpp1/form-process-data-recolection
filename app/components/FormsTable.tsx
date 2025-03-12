import React from 'react'
import ActiveTableWrapper from './ActiveTableWrapper';

interface FormsTableProps {
    initialData: string[][];
  }

export const FormsTable: React.FC<FormsTableProps> = ({ initialData }) => {
  return (
    <div className="w-full text-center p-4">
      <ActiveTableWrapper data={initialData} />
    </div>
  )
}
