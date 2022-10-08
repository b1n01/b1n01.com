import Nav from "./Nav.js";
import style from "../style/Layout.module.css";
import Footer from "./Footer.js";

export default function Layout({ children }) {
	return (
		<div className={style.wrapper}>
			<Nav />
			{children}
			<Footer />
		</div>
	);
}
