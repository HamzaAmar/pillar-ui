import { dirname, join } from 'path'
const path = require('path')

module.exports = {
  stories: ['../stories/**/*.mdx', '../stories/**/*.stories.tsx'],

  addons: [
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@storybook/addon-a11y'),
    getAbsolutePath('storybook-addon-themes'),
    '@chromatic-com/storybook',
  ],

  framework: {
    name: getAbsolutePath('@storybook/nextjs'),
    options: {},
  },

  webpackFinal: async (config) => {
    return config
  },

  docs: {},

  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
}

function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, 'package.json')))
}
