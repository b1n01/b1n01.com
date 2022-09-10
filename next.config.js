// Config from https://github.com/vercel/next.js/tree/canary/examples/with-mdx

const withMDX = require("@next/mdx")({
	extension: /\.mdx?$/,
});

module.exports = withMDX({
	pageExtensions: ["js", "jsx", "mdx"],
});
