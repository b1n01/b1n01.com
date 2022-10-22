export const formatDate = (timestamp) =>
	new Date(timestamp).toLocaleString("en-US", {
		year: "numeric",
		month: "long",
		day: "numeric",
	});
