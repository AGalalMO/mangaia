const { i18n } = require("./next-i18next.config");

module.exports = {
  i18n,
  basePath:'',
  trailingSlash: true,
   output: {
        hashFunction: "xxhash64"
    },
  env: {
    PUBLIC_URL: "/public",
   
  },
};
