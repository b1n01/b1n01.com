#!/usr/bin/node

import { writeFile } from "node:fs/promises";
import path from "path";

const title = process.argv.slice(2).join(" ");
const time = new Date().toLocaleDateString("en-US");
const slug = title.toLocaleLowerCase().split(" ").join("-");
const file = path.join(process.cwd(), "pages", "blog", slug + ".mdx");

const content = `---
title: ${title}
excerpt: 
publishedOn: ${time}
---

[← back to index](/blog)

# ${title}
`;

writeFile(file, content);

console.log(`New post created "${file}"`);
