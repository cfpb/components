import { p as promiseResolve, b as bootstrapLazy } from './index-dbee959b.js';
export { s as setNonce } from './index-dbee959b.js';

/*
 Stencil Client Patch Browser v4.0.5 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = import.meta.url;
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return promiseResolve(opts);
};

patchBrowser().then(options => {
  return bootstrapLazy([["my-component",[[1,"my-component",{"first":[1],"middle":[1],"last":[1]}]]]], options);
});

//# sourceMappingURL=cfpb-components.js.map