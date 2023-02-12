import type { GatsbyConfig } from 'gatsby';

const path = require('path');

const gatsbyRequiredRules = path.join(
  process.cwd(),
  'node_modules',
  'gatsby',
  'dist',
  'utils',
  'eslint-rules',
);

const config: GatsbyConfig = {
  siteMetadata: {
    title: 'Mikołaj Pęcak - Programowanie z pasji',
    siteUrl: 'https://mpecak.pl',
  },
  graphqlTypegen: true,
  plugins: [
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        rulePaths: [gatsbyRequiredRules],
        stages: ['develop'],
        extensions: ['js', 'jsx', 'ts', 'tsx'],
        exclude: ['node_modules', 'bower_components', '.cache', 'public'],
      },
    },
  ],
};

export default config;
