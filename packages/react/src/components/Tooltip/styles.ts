import { styled } from '../../styles'
import * as TooltipPrimitive from '@radix-ui/react-tooltip'

export const TooltipContent = styled(TooltipPrimitive.Content, {
  backgroundColor: '$gray900',
  padding: '$3 $4',
  borderRadius: '$xs',
  color: '$gray100',
  fontFamily: '$default',
  fontSize: '$sm',
  fontWeight: '$medium',
  filter: 'drop-shadow(4px 16px 24px rgba(0, 0, 0, 0.25))',
})

export const TooltipArrow = styled(TooltipPrimitive.Arrow, {
  fill: '$gray900',
})
