import { useEffect, useState } from "react";
import style from "../style/Repos.module.css";
import getLanguageColor from "../colors.js";

const repoURL =
	"https://api.github.com/users/b1n01/repos?sort=updated&direction=desc&page=1&per_page=4";

const getRepos = async () => {
	const cached = localStorage.getItem("repos");
	if (cached) {
		const data = JSON.parse(cached);
		if (data.expiry > Date.now()) {
			return data.repos;
		}
	}

	const repos = await fetch(repoURL).then((res) => res.json());
	const reposWithLangs = await Promise.all(
		repos.map(async ({ name, description, html_url, languages_url }) => {
			const obj = await fetch(languages_url).then((res) => res.json());
			const langs = Object.keys(obj).map((lang) => ({
				lang,
				color: getLanguageColor(lang),
			}));
			return { name, desc: description, url: html_url, langs };
		})
	);

	localStorage.setItem(
		"repos",
		JSON.stringify({
			repos: reposWithLangs,
			expiry: Date.now() + 24 * 60 * 60 * 1000, // 1 day
		})
	);

	return reposWithLangs;
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
						{langs.map(({ lang, color }) => (
							<div key={lang} className={style.dotWrapper}>
								<span
									className={style.dot}
									style={{ backgroundColor: color }}
								/>
								{lang}
							</div>
						))}
					</div>
				</a>
			))}
		</div>
	);
}
