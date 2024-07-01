import '@pillar-ui/core/main.css'
import { INITIAL_VIEWPORTS as viewports } from '@storybook/addon-viewport'

export const parameters = {
  themes: {
    default: 'dark',
    list: [
      { name: 'dark', class: 'dark', color: 'hsl(0deg 0% 5%)' },
      { name: 'light', class: 'light', color: 'hsl(0deg 0% 95%)' },
    ],
  },
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
