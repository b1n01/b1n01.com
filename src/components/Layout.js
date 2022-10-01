import Nav from "./Nav.js";

export default function Layout({ children }) {
	return (
		<div className="max-w-4xl min-w-[600px] m-auto">
			<div className="bg-red-700">
				<Nav />
			</div>
			<div className="bg-purple-700">{children}</div>
		</div>
	);
}
