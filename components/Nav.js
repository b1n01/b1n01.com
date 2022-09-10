import Link from "next/link";

export default function Posts() {
	return (
		<>
			<p>
				<Link href="/">
					<a>Home</a>
				</Link>
			</p>
			<p>
				<Link href="/blog">
					<a>Blog</a>
				</Link>
			</p>
		</>
	);
}
