import Link from "next/link";
import { formatDate } from "../utils.js";
import style from "../style/Posts.module.css";

export default function Posts({ posts }) {
	const links = posts.map(({ slug, title, excerpt, timestamp: time }) => {
		return (
			<article key={slug} className={style.post}>
				<Link href={"blog/" + slug}>
					<a>
						<div className={style.date}>{formatDate(time)}</div>
						<header className={style.title}>{title}</header>
						<div className={style.excerpt}>{excerpt}</div>
						<div className={style.readMore}>Read more</div>
					</a>
				</Link>
			</article>
		);
	});

	return links;
}
