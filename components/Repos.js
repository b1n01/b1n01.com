import useSWR from "swr";

export default function App() {
	const { data, error } = useSWR(
		"https://api.github.com/users/b1n01/repos",
		(url) => fetch(url).then((res) => res.json())
	);

	if (error) return "An error has occurred.";
	if (!data) return "Loading...";
	return (
		<>
			{data.slice(0, 4).map(({ name }) => (
				<p key={name}>{name}</p>
			))}
			<p>Load more...</p>
		</>
	);
}
