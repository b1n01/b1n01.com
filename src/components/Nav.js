import Link from "next/link";
import { useRouter } from "next/router";
import style from "../style/Nav.module.css";

const items = [
	{ href: "/", label: "Home" },
	{ href: "/blog", label: "Blog" },
	{ href: "https://github.com/b1n01", label: "Github ➚" },
	{ href: "https://mirra.b1n01.com/", label: "Music ➚" },
];

export default function Posts() {
	const path = useRouter().pathname;

	const links = items.map(({ href, label }) => {
		const isIndex = href === "/";
		const isActive = isIndex ? path === "/" : path.startsWith(href);
		const activeClass = isActive ? style.active : "";

		return (
			<Link key={label} href={href}>
				<a className={`${activeClass} ${style.item}`}>{label}</a>
			</Link>
		);
	});

	return <div className={style.wrapper}>{links}</div>;
}
