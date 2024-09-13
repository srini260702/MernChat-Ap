// esbuild.config.js
require("esbuild")
  .build({
    entryPoints: ["src/index.js"], // or wherever your entry point is
    bundle: true,
    outfile: "dist/out.js",
    loader: {
      ".js": "jsx", // Enables JSX in JavaScript files
    },
  })
  .catch(() => process.exit(1));
