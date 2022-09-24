import { MDXProvider } from "@mdx-js/react";
import Link from "next/link";

// This is telling nextjs to use custom elements to render markdown tags.
// @see https://nextjs.org/docs/advanced-features/using-mdx#custom-elements
const components = {
	a: Link,
};

export default function App({ Component, pageProps }) {
	return (
		<MDXProvider components={components}>
			<Component {...pageProps} />
		</MDXProvider>
	);
}
