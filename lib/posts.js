import { readdir, readFile } from "fs/promises";
import path from "path";
import matter from "gray-matter";

export async function getPostsData(config) {
	const { limit } = config || {};

	const postsPath = path.join(process.cwd(), "pages", "blog");
	let files = await readdir(postsPath);
	if (limit) files = files.slice(0, limit);

	let posts = [];
	for (const file of files) {
		const filePath = path.join(process.cwd(), "pages", "blog", file);
		const fileContents = await readFile(filePath, "utf8");
		const { data } = matter(fileContents);

		posts.push({
			slug: path.parse(file).name,
			title: data.title,
			preview: data.preview,
		});
	}

	return posts;
}
