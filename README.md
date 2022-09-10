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
npx http-server out
```

and visit [http://localhost:8080](http://localhost:8080).

## Using docker

You can use the utility `node.sh` to run command from a nodejs container:

```
sh node.sh npm run dev
```
