import getPostsData from "../../postData.js";
import { MDXRemote } from "next-mdx-remote";
import components from "../../mdxComponensts";
import style from "../../style/Post.module.css";

export default function Post({ post }) {
	return (
		<section className={style.post}>
			<MDXRemote {...post.source} components={components} />
		</section>
	);
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
