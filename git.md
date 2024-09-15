1. 說明 blob, tree, commit, branch, head 分別是什麼


2. 紀錄在 git repo 操作過程中，.git 檔案夾裡的變化，看看你可以觀察到什麼


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

> References:
> - https://www.conventionalcommits.org/en/v1.0.0/