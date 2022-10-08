import Link from "next/link";
import style from "../style/Posts.module.css";

export default function Posts({ posts }) {
	const links = posts.map(({ slug, title, excerpt }) => {
		return (
			<article key={slug} className={style.post}>
				<Link href={"blog/" + slug}>
					<a className={style.link}>
						<header className={style.title}>{title}</header>
						<p className={style.excerpt}>{excerpt}</p>
						<p className={style.readMore}>Read more</p>
					</a>
				</Link>
			</article>
		);
	});

	return links;
}
