# Backend project
- Note 聲明: 由於筆記部分較多，太占用版面的筆記，會在下方 Note 區整理
1. 觀察 npm install express 前後的變化
   - npm install 之前
     - `npm init` 練立了 package.json 記錄了此 project 的資訊 
     - package.json (npm install express 後)
        ```json
        {
            "name": "backend",
            "version": "1.0.0",
            "description": "backend project",
            "main": "index.js",
            "scripts": {
                "test": "echo \"Error: no test specified\" && exit 1"
            },
            "author": "RyanCheng98153",
            "license": "ISC"
        }
        ```
  - npm install express 之後
    - package.json 新增了 dependencies 欄位
      - 其中存有 `npm install [-package]` 中，`[-package]` 的套件版本
      - 只存必要下載的 packages
    - 新增了 package-lock.json 檔案
      - 記錄了隨著 `[-package]` 一起被安裝的`[-support-package]`
      - 內容為 `[-package]` 會用到的 dependency package
    - 新增了 node modules 資料夾 (模組資料夾)
      - node modules 中安裝了 `package-lock.json` 中所有的 `[-package]` 和 `[-support-package]`
    - package.json (npm install express 後)
      ```json
      {
          "name": "backend",
          "version": "1.0.0",
          "description": "backend project",
          "main": "index.js",
          "scripts": {
              "test": "echo \"Error: no test specified\" && exit 1"
          },
          "author": "RyanCheng98153",
          "license": "ISC",
          
          "dependencies": {
              "express": "^4.21.0"
          }
      }
      ```
2. 觀察 node modules 裡有甚麼
  - .bit 資料夾
    - 根據 package.json 的某些 package 內容的套件資訊，生成的 windows 或 linux 可執行檔，
    - 以便在執行 npm 指令 (ex: npm test) 時，可一起執行的可執行檔
    - ex: package mine
      - windows: mine.exe, mine.ps1
      - linux: mine
    - Reference: https://stackoverflow.com/questions/25306168/what-is-the-purpose-of-bin-folder-in-node-modules
  - node module 中的每一個資料夾，都包含 index.js、package.json、Licence、README.md
    - package.json: 該 module 所需要依賴的其它 packages，紀錄在package.json
    - index.js: 該 module 的主程式，記錄了該 module 可以被呼叫的變數、函式、prototype...
    - README.md: 說明此 module 的功能、安裝方式、使用方式等資訊
    - license: 該 module 用到的授權方式 (詳細內容在下方筆記)
    - 其它文件:
      - History.md: 記錄了該 module 的歷史更動
      - Security.md: module 開發者回報該 module 錯誤的方式或說明
      - index.d.ts: 該 module 的 typescript 版本 declare 宣告聲明檔案
      - .git: git 記錄檔案等等
      - module 開發者想加的其它內容
3. Port number 怎麼以環境變數 .env 來設定
   - 需要先安裝 dotenv 套建
     - `npm install dotenv`
   -  引入 dotenv 套件
     - `require('dotenv').config();`
   - 建立 .env 檔案
    ```
    PORT=4000
    ```
   - 使用方式
     - `process.env.PORT` 或 process.env['PORT']
     - 可以找出 .env 檔案中的 Port變數
4. 哪些檔案不該被放上 github repo
   - .env
     - 包含環境變數，也可能包含資料庫或某些付費功能的 API-KEY
     - 非常不建議被推上 github repo
   - node modules 資料夾
     - 其中內容過多，檔案過大，
     - 並且是可以被 npm install package.json 下載回來的
     - 不建議推上 github repo 
   - assets 資料夾
     - 內容都是放入圖片或其它檔案，由於檔案太大，建議使用資料庫存取
     - 不建議推上 github repo

### Note: 
Package Json 參數說明
  - name、description、author: 此 project 的名子、說明、作者 (皆可自填)
  - version: **此 project** 的版本，因此開始是 1.0.0
  - main: 此專案的入口(主程式、主檔案)
    - 類似
      c++ 的 `int main()` 或 `int main(int argc, char *argv[])`
      python 的 `if __name__ == "__main__"`
  - scripts: 產生指令的地方，可用 `npm run [--script_name]`
    - 概念有點類似 shell script 的 `alias` 指令
    - 在上述 package.json 中，建立了一個名為 `test` 的指令
      當輸入 `npm run test` 的指令時，會執行其對應的指令:
      `echo \"Error: no test specified\" && exit 1`
      指令內容:印出 "Error: no test specified\"，告訴 user 此專案沒有測試指令，並結束指令
    - Reference: https://dyte.io/blog/package-json-scripts/ 
  - licence: 使用的 Licence，有關此專案的受權，
    - 可用來表明著作權、使用條件、使用範圍，或使用時是否需要署名或付費。
    - 常見的 Licence: Mozilla Public License 2.0、MIT License
    - Reference: https://choosealicense.com/licenses/
  - dependencies: 此專案使用到的 **套件** 和該套件的 **版本**
    - 剛剛做了 npm install express，因此 depenedencies 新增了 express 套件的版本資訊
Software Versioning 概念 
  - version 1.2.3 => Major.Minor.Patch:
  - 1.0.0 : Major version: (第一個穩定發行的版本)
    - Major version 不同時，不可向下兼融
    - 向下兼融: 更新到新版本時，使用**舊版本建立的檔案**，程式仍可正常使用
    Reference : [Levono What is backward compatible?](https://www.lenovo.com/us/en/glossary/backward-compatible/?orgRef=https%253A%252F%252Fwww.google.com%252F&srsltid=AfmBOooA9dB561YE_a4uMMmIboee1Hqi4Lc_mU_khBBxYaYGnoFEpaCS)
  - 1.1.0 : Minor version: Major 版本同上，但新增了一個 "feature" 或一系列"小 feature"
    - Minor version 不同時，可以向下兼融
  - 1.1.1 : Patch version: Major 和 Minor 版本同上，但有新的 bug fixing
    - Patch version 不同時，可以向下兼融
  - Reference: [Medium (Shilpa Syal): Demystifying Software Versioning: Understanding Patch, Minor, and Major Versions](https://medium.com/@shilpasyal55/demystifying-software-versioning-understanding-patch-minor-and-major-versions-11927673f3d3)