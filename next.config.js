// Config from https://github.com/vercel/next.js/tree/canary/examples/with-mdx
const withMDX = require("@next/mdx")({
	extension: /\.mdx?$/,
});

module.exports = withMDX({
	pageExtensions: ["js", "jsx", "mdx"],
	// Prevent webpask to try to handle node "fs" import
	// @see https://stackoverflow.com/a/68098547/4851525
	webpack: (config) => {
		config.resolve.fallback = {
			...config.resolve.fallback,
			fs: false,
		};
		return config;
	},
});
