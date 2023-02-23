import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import { ComponentProps, ElementType, ReactNode } from 'react'
import { TooltipContent, TooltipArrow } from './styles'

export interface TooltipProps
  extends ComponentProps<typeof TooltipPrimitive.Root> {
  as?: ElementType
  children: ReactNode
  content: string | ReactNode
}

export function Tooltip({ children, content, ...props }: TooltipProps) {
  return (
    <TooltipPrimitive.Provider>
      <TooltipPrimitive.Root {...props}>
        <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
        <TooltipPrimitive.Portal>
          <TooltipContent>
            <TooltipArrow />

            {content}
          </TooltipContent>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  )
}

Tooltip.displayName = 'Tooltip'
