import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'cfpb-components',
  globalStyle: 'src/global/global.css',
  buildEs5: true,
  sourceMap: false,
  outputTargets: [
    /*{
      type: 'dist',
      esmLoaderPath: '../loader',
    },*/
    {
      type: 'dist-custom-elements',
      generateTypeDeclarations: false,
      customElementsExportBehavior: 'single-export-module',
    },
    /*{
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: false,
    },*/
  ],
  testing: {
    browserHeadless: 'new',
  },
};
