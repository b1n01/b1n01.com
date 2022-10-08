import { useEffect, useState } from "react";
import style from "../style/Repos.module.css";

const repoURL =
	"https://api.github.com/users/b1n01/repos?sort=updated&direction=desc&page=1&per_page=4";

const getRepos = async () => {
	const repos = await fetch(repoURL).then((res) => res.json());
	return await Promise.all(
		repos.map(async ({ name, description, html_url, languages_url }) => {
			const data = await fetch(languages_url).then((res) => res.json());
			const langs = Object.keys(data);
			return { name, desc: description, url: html_url, langs };
		})
	);
};

export default function App() {
	const [repos, setRepos] = useState([]);

	useEffect(() => {
		getRepos().then(setRepos);
	}, []);

	if (!repos) <p>Loading recent commits...</p>;

	return (
		<div className={style.wrapper}>
			{repos.map(({ name, desc, url, langs }) => (
				<a href={url} key={name} className={style.repo}>
					<div className={style.title}>{name}</div>
					<div className={style.description}>{desc}</div>
					<div className={style.languages}>
						{langs.map((lang) => (
							<div key={lang}>
								<span className={style.dot} />
								{lang}
							</div>
						))}
					</div>
				</a>
			))}
		</div>
	);
}
