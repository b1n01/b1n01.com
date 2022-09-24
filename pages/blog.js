import Nav from "../components/Nav.js";
import Posts from "../components/Posts.js";
import { getPostsData } from "../lib/posts.js";

export default function Blog({ posts }) {
	return (
		<>
			<h1>Blog</h1>
			<Nav />
			<h2>All posts</h2>
			<Posts posts={posts} />
		</>
	);
}

export async function getStaticProps() {
	const posts = await getPostsData();
	return {
		props: { posts },
	};
}
