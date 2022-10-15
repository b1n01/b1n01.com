import Link from "next/link";
import Repos from "../components/Repos.js";
import Posts from "../components/Posts.js";
import Hero from "../components/Hero.js";
import Layout from "../components/Layout.js";
import getPostsData from "../postData.js";
import style from "../style/Home.module.css";

const Subtitle = ({ children }) => {
	return <div className={style.subtitle}>{children}</div>;
};

export default function Home({ posts }) {
	return (
		<Layout>
			<Hero />
			<Subtitle>Recent posts</Subtitle>
			<Posts posts={posts} />

			<Subtitle>Recent commits</Subtitle>
			<Repos />
			<a href="https://github.com/b1n01" className={style.readMore}>
				More commits
			</a>
		</Layout>
	);
}

export async function getStaticProps() {
	const posts = await getPostsData({ limit: 3 });
	return {
		props: { posts: posts },
	};
}
