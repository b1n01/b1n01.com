import { MDXProvider } from "@mdx-js/react";
import components from "../components/mdx-componensts.js";

export default function App({ Component, pageProps }) {
	return (
		<MDXProvider components={components}>
			<Component {...pageProps} />
		</MDXProvider>
	);
}
