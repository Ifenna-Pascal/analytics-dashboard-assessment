import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { InfoIcon } from 'lucide-react'
import React from 'react'

const ToolTip = ({message}: {message: string}) => {
  return (
    <Tooltip>
  <TooltipTrigger>
  <InfoIcon className="size-4 text-gray-500 cursor-pointer" />
    
  </TooltipTrigger>
  <TooltipContent className='bg-gray-600 text-white'>
    <p>{message}</p>
  </TooltipContent>
</Tooltip>
  )
}

export default ToolTip