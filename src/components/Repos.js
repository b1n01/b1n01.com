import { useEffect, useState } from "react";
import style from "../style/Repos.module.css";

const fetcher = (url) => fetch(url).then((res) => res.json());
const repoURL =
	"https://api.github.com/users/b1n01/repos?sort=updated&direction=desc&page=1&per_page=4";

export default function App() {
	const [repos, setRepos] = useState([]);
	const [reposWithLangs, setReposWithLangs] = useState([]);

	useEffect(() => {
		fetcher(repoURL).then(setRepos);
	}, []);

	useEffect(() => {
		Promise.all(
			repos.map(
				async ({ name, description, html_url, languages_url }) => {
					const data = await fetcher(languages_url);
					const langs = Object.keys(data);
					return { name, description, url: html_url, langs };
				}
			)
		).then(setReposWithLangs);
	}, [repos]);

	if (!reposWithLangs) <p>Loading recent commits...</p>;

	return (
		<div className={style.wrapper}>
			{reposWithLangs.map(({ name, description, url, langs }) => (
				<a href={url} key={name} className={style.repo}>
					<div className={style.title}>{name}</div>
					<div className={style.description}>{description}</div>
					<div className={style.languages}>
						{langs.map((label) => (
							<div key={label}>
								<span className={style.dot} />
								{label}
							</div>
						))}
					</div>
				</a>
			))}
		</div>
	);
}
