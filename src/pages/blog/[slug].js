import getPostsData from "../../get-posts-data.js";
import { MDXRemote } from "next-mdx-remote";
import components from "../../mdx-componensts";

export default function Post({ post }) {
	return <MDXRemote {...post.source} components={components} />;
}

export async function getStaticPaths() {
	const posts = await getPostsData();
	const paths = posts.map(({ slug }) => ({ params: { slug } }));

	return { paths, fallback: false };
}

export async function getStaticProps({ params: { slug } }) {
	const posts = await getPostsData();
	const [post] = posts.filter((post) => post.slug === slug);

	return { props: { post } };
}
