import '@pillar-ui/core/main.css'
import { INITIAL_VIEWPORTS as viewports } from '@storybook/addon-viewport'

export const parameters = {
  backgrounds: { disable: true },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports,
  },
}
export const tags = ['autodocs']
