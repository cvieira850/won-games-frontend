module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/components/**/stories.tsx"
  ],
  "addons": [
    "@storybook/addon-essentials",
  ],
  webpackFinal: (config) => {
    config.resolve.modules.push(`${process.cwd()}/src`);
    return config;
  }
}
