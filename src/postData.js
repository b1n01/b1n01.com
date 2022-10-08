import { serialize } from "next-mdx-remote/serialize";
import { readdir, readFile } from "fs/promises";
import matter from "gray-matter";
import path from "path";

// TODO sort posts by creation date (front matter attribute)

export default async function getPostsData(config) {
	const { limit } = config || {};

	const postsPath = path.join(process.cwd(), "posts");
	let files = await readdir(postsPath);
	if (limit) files = files.slice(0, limit);

	let posts = [];
	for (const file of files) {
		const filePath = path.join(process.cwd(), "posts", file);
		const fileContents = await readFile(filePath, "utf8");

		const { content, data } = matter(fileContents);
		const source = await serialize(content);

		posts.push({
			slug: path.parse(file).name,
			title: data.title,
			excerpt: data.excerpt,
			source,
		});
	}

	return posts;
}
