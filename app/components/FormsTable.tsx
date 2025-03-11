import React from 'react'
import ActiveTableWrapper from './ActiveTableWrapper';

interface FormsTableProps {
    initialData: string[][];
  }

export const FormsTable: React.FC<FormsTableProps> = ({ initialData }) => {
  return (
    <ActiveTableWrapper data={initialData} />
  )
}
