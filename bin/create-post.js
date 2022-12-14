#!/usr/bin/node

import { writeFile } from "node:fs/promises";
import path from "path";

const title = process.argv.slice(2).join(" ");
const time = Date.now();
const slug = title.toLocaleLowerCase().split(" ").join("-");
const file = path.join(process.cwd(), "posts", slug + ".mdx");

const content = `---
title: ${title}
excerpt: Post excerpt here
timestamp: ${time}
---

# ${title}

Some content here
`;

writeFile(file, content);

console.log(`New post created "${file}"`);
