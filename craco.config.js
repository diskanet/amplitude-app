const path = require(`path`);

const resolve = (string) => path.resolve(__dirname, `src/${string}`);

module.exports = {
  webpack: {
    alias: {
      "@assets": resolve("assets"),
      "@components": resolve("components"),
      "@constants": resolve("constants"),
      "@pages": resolve("pages"),
      "@services": resolve("services"),
      "@utils": resolve("utils"),
    },
  },
};
