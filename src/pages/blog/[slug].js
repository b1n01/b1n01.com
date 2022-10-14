import Link from "next/link";
import { LeftArrow } from "../../icons.js";
import getPostsData from "../../postData.js";
import { formatDate } from "../../utils.js";
import { MDXRemote } from "next-mdx-remote";
import components from "../../mdxComponensts";
import style from "../../style/Post.module.css";

export default function Post({ post }) {
	return (
		<article className={style.post}>
			<Link href="/blog">
				<a className={style.back}>
					<LeftArrow />
					Back to blog
				</a>
			</Link>
			<p className={style.info}>
				Luca Lorenzini, {formatDate(post.timestamp)}
			</p>
			<MDXRemote {...post.source} components={components} />
		</article>
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
