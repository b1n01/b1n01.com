export const formatDate = (timestamp) =>
	new Date(timestamp * 1000).toLocaleString("en-US", {
		year: "numeric",
		month: "long",
		day: "numeric",
	});
