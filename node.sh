#!/bin/bash

docker run \
	--rm            `# remove container when done` \
	-it             `# make it interactive` \
	-v $(pwd):/src  `# bind source folder` \
	-w /src         `# set workdir` \
	-p 3000:3000    `# expose port 3000` \
	node:18-alpine  `# use node 18` \
	$@              `# run command`