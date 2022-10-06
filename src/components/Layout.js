import Nav from "./Nav.js";
import style from "../style/Layout.module.css";

export default function Layout({ children }) {
	return (
		<div className={style.wrapper}>
			<div className={style.nav}>
				<Nav />
			</div>
			<div className={style.content}>{children}</div>
		</div>
	);
}
