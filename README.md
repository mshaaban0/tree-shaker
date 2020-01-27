# Parcel Tree Shaking

This repo uses Parceljs Bundler to test it's tree shaking abilities when working with react (Stateful/Functional) components.

## How to?

- Notice the `./components.js` file, it has 4 components (2 Functional, and 2 Stateful)
- `index.js` imports and uses only one functional component
- Run `yarn build` 
- View the bundled js file in `dist/tree-shaker....js`, and search for the text `StatefulModuleOne` and `FunModuleOne`
- Notice that all **Stateful** components get bundled, no matter if they're imported/used or not. While `FunModuleTwo` gets excluded without a problem
