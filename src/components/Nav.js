import Link from "next/link";
import { useRouter } from "next/router";
import { Link as LinkIcon } from "../icons.js";
import style from "../style/Nav.module.css";

const navItems = [
	{ href: "/", label: "Home" },
	{ href: "/blog", label: "Blog" },
];
const navLinks = [
	{ href: "https://github.com/b1n01", label: "Github" },
	{ href: "https://mirra.b1n01.com/", label: "Music" },
];

export default function Posts() {
	const path = useRouter().pathname;

	const items = navItems.map(({ href, label }) => (
		<Link key={label} href={href}>
			<a className={`${path === href ? style.active : ""} ${style.item}`}>
				{label}
			</a>
		</Link>
	));

	const links = navLinks.map(({ href, label }) => (
		<Link key={label} href={href}>
			<a className={style.item}>
				{label}
				{<LinkIcon />}
			</a>
		</Link>
	));

	return (
		<div className={style.wrapper}>
			<div className={style.menu}>{items}</div>
			<div className={style.menu}>{links}</div>
		</div>
	);
}
