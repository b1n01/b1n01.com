import Link from "next/link";

export default function Posts({ posts }) {
	const links = posts.map(({ slug, title, excerpt }) => {
		return (
			<div key={slug}>
				<Link href={"blog/" + slug}>
					<a>{title}</a>
				</Link>
				<p>{excerpt}</p>
			</div>
		);
	});

	return links;
}
