import React from 'react'
import ActiveTableWrapper from './ActiveTableWrapper';

interface FormsTableProps {
    initialData: string[][];
  }

export const FormsTable: React.FC<FormsTableProps> = ({ initialData }) => {
  return (
    <div className="w-full overflow-x-auto text-center">
      <ActiveTableWrapper data={initialData} />
    </div>
  )
}
