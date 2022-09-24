// remarkFrontmatter pluging for @next/mdx so it can load .md files with
// a frontmatter without rendering it's content. The same thing is
// basically done by hand in lib/posts.js.
// Here https://blog.logrocket.com/create-next-js-mdx-blog/ a tutorial.
import remarkFrontmatter from "remark-frontmatter";

// @next/mdx is needed to tell nextjs to automatically load and render .mdx
// file found under the pages/ folder.
// @see https://github.com/vercel/next.js/tree/canary/examples/with-mdx
import createMDX from "@next/mdx";

const withMDX = createMDX({
	extension: /\.mdx?$/,
	options: {
		remarkPlugins: [remarkFrontmatter],
		rehypePlugins: [],
		// Needed to use `MDXProvider`.
		// @see https://nextjs.org/docs/advanced-features/using-mdx#custom-elements
		providerImportSource: "@mdx-js/react",
	},
});

export default withMDX({
	pageExtensions: ["js", "mdx"],
	// Prevent the webpack from loading "fs" import
	// @see https://stackoverflow.com/a/68098547/4851525
	webpack: (config) => {
		config.resolve.fallback = {
			...config.resolve.fallback,
			fs: false,
		};
		return config;
	},
});
