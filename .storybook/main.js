module.exports = {
  // stories: ['../components/*.stories.js'],
  stories: ['../stories/**/*.stories.js'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-viewport',
    '@storybook/addon-knobs',
    '@storybook/addon-backgrounds/register',
    'storybook-addon-vue-info/lib/register',
  ],
};