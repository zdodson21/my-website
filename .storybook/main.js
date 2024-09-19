const config = {
  stories: ['../stories/*.stories.{js,md,mdx}'],
  framework: {
    name: '@web/storybook-framework-web-components',
  },
  core: {
    disableTelemetry: true, // 👈 Disables telemetry
  },
};

export default config;
