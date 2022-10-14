import Layout from "../../components/Layout.js";
import Posts from "../../components/Posts.js";
import getPostsData from "../../postData.js";
import style from "../../style/Blog.module.css";

export default function Blog({ posts }) {
	return (
		<Layout>
			<div className={style.wrapper}>
				<Posts posts={posts} />
			</div>
		</Layout>
	);
}

export async function getStaticProps() {
	const posts = await getPostsData();
	return {
		props: { posts },
	};
}
