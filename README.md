# test_build

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


#建立sh檔案deploy.sh
```
#!/usr/bin/env sh

set -env

yarn build

cd dist

git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:pokemon085/test_build.git master:gh-pages

cd -
```
