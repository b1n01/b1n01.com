import Posts from "../../components/Posts.js";
import getPostsData from "../../postData.js";
import style from "../../style/Blog.module.css";

export default function Blog({ posts }) {
	return (
		<div className={style.wrapper}>
			<Posts posts={posts} />
		</div>
	);
}

export async function getStaticProps() {
	const posts = await getPostsData();
	return {
		props: { posts },
	};
}
