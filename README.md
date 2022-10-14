# Personal website

## Getting started

Install dependencies:

```
npm install
```

Start the dev server:

```
npm run dev
```

Build the static site:

```
npm run publish
```

To try the static site locally, run:

```
npx -y serve out
```

## Create a new post

Use the create-post utility to generate a file for a new post:

```
npm run create-post "New Blog Post"
```

## Using docker

You can use the `node` utility to run command from a nodejs container:

```
sh bin/node [command]
```
