1. 說明 blob, tree, commit, branch, head 分別是什麼?
2. 紀錄在 git repo 操作過程中，.git 檔案夾裡的變化，看看你可以觀察到什麼?
   - git 的存放方式類似 unix 的檔案系統，內容皆以 tree 或 blob 物件儲存
    
    blob: (Binary large object):
     - blob 物件在 git 系統中的角色，約等於 unix 檔案系統的 file 或 inodes
     - blob 是 immutable，創建後便不能進行修改
     
    blob operation
     - `git add` 檔案的時候，就會產生一個由SHA-1加密後的blob物件，存放在`.git/objects`路徑中。
     - blob會紀錄檔案的內容，但不會紀錄檔名！
     - 由於是存放內容，因此若是建立空的資料夾(directory)，則不會產生新的blob物件
 
    tree: 
     - tree 物件在 git 系統中的角色，約等於 unix 檔案系統的 directory
     - tree 是一個物件，有許多指向其他 blob 和 tree 的 pointer
     - tree 用來記錄了資料夾名稱和檔案名
     
    tree operation:
     - `git add`: 紀錄檔案的檔案名稱和路徑
     - 由於 blob 物件只記錄檔案內容，因此若建立了 test.c 和 test2.c 兩個相同內容的檔案，在被 tree 和 blob 紀錄時，會是tree object中兩個檔名指向同一個blob object

    commit: 
     - commit 指向一棵tree，將其標記為專案在某個時間點的樣子。
     - commit 包含有關該時間點的資訊，
     - 例如: timestamp、作者、提交者資訊、提交訊息(commit message)、指向上一次 commit 的 pointer
    
    commit operation: 
     - `git commit`: 就是創建一個 commit 物件
     - 記錄方式：我認為有點像是，資訊安全的增量備份(Incremental Backup)
      
    branch: 
     - branch，本質上是指向 commit 物件的可變指標
    
    branch operation:
     - `git branch testing`: 新建一個分支指標(testing)指向當前 commit 物件
   
    head: 
     - head 在 git 中，是一個指向你正在工作中的本地 branch 的 pointer
     - head 可視為當前 branch 的別名

    head operation: 
     - 運行 `git branch testing` : 不代表將 head 切換到 testing，只是建立一個新的分支指標(testing)
     - 運行 `git checkout testing` : 將 head pointer 指向 testing branch
     - 運行 `git commit` 時: 將會把 commit list 中 head pointer 指向的 branch pointer 的 commit 再往前推一格物件，並且 head 隨著 head 指向的 branch 指標也指向新的 commit 物件 (相關內容點擊下方示意圖)
     - [head 和 commit、branch 之間的互動示意圖](#my-custom-block)

3. commit message 應該怎麼寫比較好？應該有什麼 `style` 嗎？
    - commit message convention
    `<type>(optional scope): <description>`
    - `<type>`: feat, fix, docs, style, refactor, test, chore, perf
      - feat: 新增/修改功能 (feature)
      - fix: 修補bug (bug fix)
      - docs: 文件、README.md (documentation)
      - style: 格式、css? (styling)
      - refactor: 重構，不影響原功能 (refactor)
      - test: 增加測試 (add tests)
      - chore: 輔助工具的變動，例:.env, .vscode, module (maintain)
      - revert: 撤銷回覆先前的 commit (revert commit)
      - perf: 改善效能 (improves performance)
    - `(scope)`: 更動範圍、檔案
    - `<description>`: **簡短**描述
    - `!`: 表示注意
      - ex: `feat! (login-page): add confirm function for login`

<a id="my-custom-block"></a>
**Note:** head 和 commit、branch 之間的互動示意圖
|  checkout testing (branch testing)   |  git commit (branch testing)  |
|  :----:  |  :----:  |
|  ![checkout testing](./src/figs/checkout_tesing.png)  |  ![commit testing](./src/figs/commit_testing.png) |
| **checkout master (branch master)**  | **git commit (branch master)** |
|  ![checkout master](./src/figs/checkout_master.png)   |  ![commit master](./src/figs/commit_master.png)   |
  

> References:
> - https://iissnan.com/progit/html/zh-tw/ch9_2.html
> - https://www.conventionalcommits.org/en/v1.0.0/