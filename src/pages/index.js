import Link from "next/link";
import Repos from "../components/Repos.js";
import Posts from "../components/Posts.js";
import Hero from "../components/Hero.js";
import getPostsData from "../postData.js";
import style from "../style/Home.module.css";

const Subtitle = ({ children }) => {
	return <div className={style.subtitle}>{children}</div>;
};

export default function Home({ posts }) {
	return (
		<>
			<Hero />

			<Subtitle>Recent posts</Subtitle>
			<Posts posts={posts} />
			<Link href={"/blog"}>
				<a className={style.readMore}>More posts</a>
			</Link>

			<Subtitle>Recent commits</Subtitle>
			<Repos />
			<a href="https://github.com/b1n01" className={style.readMore}>
				More commits
			</a>
		</>
	);
}

export async function getStaticProps() {
	const posts = await getPostsData({ limit: 3 });
	return {
		props: { posts: posts },
	};
}
