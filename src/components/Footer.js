import style from "../style/Footer.module.css";

export default function Footer() {
	return (
		<div className={style.wrapper}>
			<p>© {new Date().getFullYear()} Luca Lorenzini</p>
			<a href="https://github.com/b1n01">Github</a>
		</div>
	);
}
