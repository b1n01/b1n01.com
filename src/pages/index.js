import Repos from "../components/Repos.js";
import Posts from "../components/Posts.js";
import getPostsData from "../postData.js";

export default function Home({ posts }) {
	return (
		<>
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
