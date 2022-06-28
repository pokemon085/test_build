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

## 測試佈署到github(windows)
source => https://www.youtube.com/watch?v=i_XbW-FsLKk

### 1.建立sh檔案deploy.sh

```
#!/usr/bin/env sh

#當發生錯誤時終止腳本運行
set -e

#建立輸出檔案
yarn build

#移動至到打包後的dist目錄 
cd dist

#因為dist資料夾預設是被ignore的，因此在進入dist資料夾後初始化git
git init
git add -A
git commit -m 'deploy'

#將 dist資料夾中的內容推送至遠端 hexWeek6Demo的 gh-pages分支中，並強制無條件將舊有的內容取代成目前的內容（指令 git push -f)
git push -f git@github.com:pokemon085/test_build.git master:gh-pages

cd -
```
### 2.按右鍵git bash here 
sh deploy.sh

### 3.產生git key (自己的email)
 ssh -keygen -t ed25519 -C "xxx@gmail.com" 

 會產生檔案的儲存路徑  
 Your identification has been saved /xxx/xxx/xxx (id_rsa 自己用的)
 Your public key has been saved /xxx/xxx/xxxx.pub (id_rsa.pub 外部系統用的)

 ### 3.1 取得外部系統檔案內容
 cat /xxx/xxx/xxxx.pub

 ### 4. 把key貼到github 
 右邊頭像箭頭->
 Settings->
 左邊SSH and GPG keys->
 進到頁面->
 按右邊New SSH key->
 title隨便打 在Key欄位貼上 按下Add SSH key->
 完成設定

 ### 5. 把 "deploy":"sh deploy.sh"貼到package.json裡的"scripts"裡面

  ### 6. 按右鍵git bash here 
  yarn deploy

```









