import Nav from "../../src/components/Nav.js";
import Posts from "../../src/components/Posts.js";
import getPostsData from "../../src/get-posts-data.js";

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
