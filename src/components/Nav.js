import Link from "next/link";
import { useRouter } from "next/router";

const items = [
	{ href: "/", label: "Home" },
	{ href: "/blog", label: "Blog" },
	{ href: "https://github.com/b1n01", label: "Github" },
	{ href: "https://mirra.b1n01.com/", label: "Music" },
];

export default function Posts() {
	const path = useRouter().pathname;

	const links = items.map(({ href, label }) => {
		const isIndex = href === "/";
		const isActive = isIndex ? path === "/" : path.startsWith(href);
		const activeClass = isActive ? "bg-green-600" : "";

		return (
			<Link key={label} href={href}>
				<a className={`${activeClass} p-1`}>{label}</a>
			</Link>
		);
	});

	return <div className="flex gap-4">{links}</div>;
}
