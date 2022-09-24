import Link from "next/link";

// Renders a centered images, with 100% of width and auto height.
const Img = (props) => (
	<span style={{ display: "flex", justifyContent: "center" }}>
		<img
			style={{ width: "100%", maxWidth: "fit-content" }}
			{...props}
		></img>
	</span>
);

// This is telling nextjs to use custom elements to render markdown tags.
// Example { a: Link} means use a `Link` component instead of al `a` tag to
// render a link from a markdown file.
// @see https://nextjs.org/docs/advanced-features/using-mdx#custom-elements
export default {
	a: Link,
	img: Img,
};
