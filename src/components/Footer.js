import style from "../style/Footer.module.css";

export default function Footer() {
	return (
		<div className={style.wrapper}>
			<div>© {new Date().getFullYear()} Luca Lorenzini</div>
		</div>
	);
}
