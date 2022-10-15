import style from "../style/Hero.module.css";

export default function Hero() {
	return (
		<header className={style.wrapper}>
			<div>
				<div className={style.title}>👋🏻 Hi, I'm Luca Lorenzini</div>
				<div className={style.subtitle}>
					Developer working full-time{" "}
					<a href="https://wethod.com">@wethod</a> and on many{" "}
					<a href="https://github.com/b1n01">side hustles</a>.
				</div>
				<div className={style.subtitle}>
					DIY supporter and{" "}
					<a href="https://undiscover.it">music enthusiast</a>. My
					handler is <span className={style.accent}>b1n01</span> (read
					Binoi).
				</div>
			</div>
		</header>
	);
}
