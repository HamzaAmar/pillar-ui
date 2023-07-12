const path = require('path')

module.exports = {
  stories: ['../stories/**/*.stories.mdx', '../stories/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    'storybook-addon-themes',
    // 'storybook-addon-pseudo-states',
    // 'addon-screen-reader',
  ],
  framework: '@storybook/react',
  webpackFinal: async (config) => {
    return config
  },
  core: {
    builder: '@storybook/builder-webpack5',
  },
}
