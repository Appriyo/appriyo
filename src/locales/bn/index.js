// src/locales/bn/index.js
// Bangla counterpart of src/locales/en/index.js. Every key defined in the
// English tree MUST exist here (even if empty) so that i18next's fallback
// chain returns a useful string instead of a missing-key warning.
//
// See src/locales/en/index.js for the rationale on why this file exists
// alongside the dynamic loader in src/i18n/loadResources.js.

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
import metadata from "./metadata/metadata.json";
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
  metadata,
  legal,
  errors,
};

export default resources;
