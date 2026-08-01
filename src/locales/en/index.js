// src/locales/en/index.js
// Aggregates every English namespace. Adding a new namespace to a feature
// folder only requires (1) creating the JSON file and (2) importing it here.
//
// The runtime loader in src/i18n/loadResources.js does not import this file
// directly; instead it uses Vite's `import.meta.glob` to discover every JSON
// file under src/locales/<lng>/**/*.json. This explicit index exists for
// type-style documentation and for use in tests / Storybook.

import common from "./common/common.json";
import navigation from "./navigation/navigation.json";
import layout from "./layout/layout.json";
import home from "./home/home.json";
import services from "./services/services.json";
import solutions from "./solutions/solutions.json";
import products from "./products/products.json";
import productDetail from "./product-detail/product-detail.json";
import about from "./about/about.json";
import contact from "./contact/contact.json";
import legal from "./legal/legal.json";
import errors from "./errors/errors.json";

export const resources = {
  common,
  navigation,
  layout,
  home,
  services,
  solutions,
  products,
  productDetail,
  about,
  contact,
  legal,
  errors,
};

export default resources;
