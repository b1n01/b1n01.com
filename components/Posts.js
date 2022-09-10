import Link from "next/link";

// Todo this should be fetched dinamically whit node fs from getStaticProps()

export default function Posts() {
	return (
		<>
			<p>
				<Link href="/blog/post-1">
					<a>First post</a>
				</Link>
			</p>
			<p>
				<Link href="/blog/post-2">
					<a>Second post</a>
				</Link>
			</p>
		</>
	);
}
