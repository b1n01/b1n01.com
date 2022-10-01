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

and visit [http://localhost:3000](http://localhost:3000).

Build the static site:

```
npm run publish
```

To try the static site locally, run:

```
npx serve out
```

and visit [http://localhost:3000](http://localhost:3000).

## Create a new post

Use the create-post utility to generate a file for a new post:

```
npm run create-post "New Blog Post"
```

## Using docker

You can use the utility `node.sh` to run command from a nodejs container:

```
sh bin/node npm run dev
```
