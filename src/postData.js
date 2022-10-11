import { serialize } from "next-mdx-remote/serialize";
import { readdir, readFile } from "fs/promises";
import matter from "gray-matter";
import path from "path";

export default async function getPostsData(config) {
	const { limit } = config || {};

	const postsPath = path.join(process.cwd(), "posts");
	let files = await readdir(postsPath);

	let posts = [];
	for (const file of files) {
		const filePath = path.join(process.cwd(), "posts", file);
		const fileContent = await readFile(filePath, "utf8");

		const { content, data } = matter(fileContent);
		const source = await serialize(content);

		posts.push({
			slug: path.parse(file).name,
			title: data.title,
			excerpt: data.excerpt,
			timestamp: data.timestamp,
			source,
		});
	}

	posts.sort((a, b) => b.timestamp - a.timestamp);
	if (limit) posts = posts.slice(0, limit);

	return posts;
}
