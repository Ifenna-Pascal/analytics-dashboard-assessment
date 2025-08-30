import TopModelsChart from '@/components/ui/dough-nut-chat'
import { TableWithFilters } from '@/components/ui/table'


export const TableDisplay = () => {
  return (
    <div className="grid gap-6 w-full md:grid-cols-6"> 
        <div className='col-span-4'>
            <TableWithFilters />
        </div>
        <div className='col-span-2'>
            <TopModelsChart />
        </div>
    </div>
  )
}




