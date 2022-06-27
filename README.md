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

###測試佈署到github(windows)
#1.建立sh檔案deploy.sh
```
#!/usr/bin/env sh

# 當發生錯誤時終止腳本運行
set -e

# 建立輸出檔案
yarn build

# 移動至到打包後的dist目錄 
cd dist

# 因為dist資料夾預設是被ignore的，因此在進入dist資料夾後初始化git
git init
git add -A
git commit -m 'deploy'

# 將 dist資料夾中的內容推送至遠端 hexWeek6Demo的 gh-pages分支中，並強制無條件將舊有的內容取代成目前的內容（指令 git push -f)
git push -f git@github.com:pokemon085/test_build.git master:gh-pages

cd -
```

#2.按右鍵git bash here
```
sh deploy.sh
```


