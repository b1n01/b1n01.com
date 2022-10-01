import Posts from "../../components/Posts.js";
import getPostsData from "../../get-posts-data.js";

export default function Blog({ posts }) {
	return <Posts posts={posts} />;
}

export async function getStaticProps() {
	const posts = await getPostsData();
	return {
		props: { posts },
	};
}
