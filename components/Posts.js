import Link from "next/link";

export default function Posts({ posts }) {
	const links = posts.map(({ slug, title, preview }) => {
		return (
			<p>
				<Link href={"blog/" + slug}>
					<a>{title}</a>
				</Link>
				<p>{preview}</p>
			</p>
		);
	});

	return links;
}
