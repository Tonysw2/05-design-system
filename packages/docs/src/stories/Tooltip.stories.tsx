import {
  Button,
  Text,
  Tooltip,
  TooltipProps,
} from '@tony-ignite-ui-design-system/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Form/Tooltip',
  component: Tooltip,

  args: {
    children: <Button>Hover me</Button>,
    content: <Text size="sm">Tooltip is here</Text>,
  },

  argTypes: {
    children: {
      control: {
        type: 'null',
      },
    },
  },
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
