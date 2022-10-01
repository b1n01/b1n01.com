import Nav from "../src/components/Nav.js";
import Repos from "../src/components/Repos.js";
import Posts from "../src/components/Posts.js";
import getPostsData from "../src/get-posts-data.js";

export default function Home({ posts }) {
	return (
		<>
			<h1>Home</h1>
			<Nav />
			<h2>Latest posts</h2>
			<Posts posts={posts} />
			<h2>Latest commits</h2>
			<Repos />
		</>
	);
}

export async function getStaticProps() {
	const posts = await getPostsData({ limit: 2 });
	return {
		props: { posts: posts },
	};
}
