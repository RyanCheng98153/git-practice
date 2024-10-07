## 建立 EC2 主機與部屬 Web Server
1. 在 Readme 中提供 instance 的 public IP，我會連線過去檢查，所以要保持主機是一直在啟動中
2. 什麼是 instance type?
    - Instance type 是 AWS EC2 中虛擬機器的配置。它定義了計算、記憶體和儲存資源的組合，不同的 instance type 適合不同的應用需求。例如，t2.micro 是入門級實例，適合小型網站或測試環境。
3. 什麼是 Nginx？有哪些用途與特性？
    - Nginx 是一款高效能的網頁伺服器，常用於反向代理、負載平衡和靜態文件提供。它以輕量化、高併發著稱，適合處理大量的同時連線。
4. pm2 套件是什麼？有什麼用處？
    - PM2 是一個 Node.js 的進程管理工具，用於在生產環境中持續運行應用程式。它提供監控、重新啟動和日誌管理等功能，確保服務穩定運行。
    1. 如果不是使用 pm2，那就告訴我你是用哪一個、這個工具的用途，以及，你為什麼這樣選擇
5. 步驟 9 中提到的 `proxy` 是什麼意思？為什麼要透過 Nginx 來 `proxy` 到 Express 開發的 Web Server?
    - Proxy 是指代理伺服器，Nginx 作為反向代理將請求轉發給 Express 伺服器。這樣可以增加應用的安全性、效能，並提供負載平衡。
    - Reverse proxy 代表代理伺服器位於客戶端與後端伺服器之間，處理來自外部的請求。相比之下，Forward Proxy 則是代表客戶端去訪問外部資源。
    1. 提示 `Reverse proxy` vs `Forward Proxy`
6. 在 readme 中提供步驟 9 的 Nginx 設定檔
    ```bash
    server {
        listen 80;
        server_name your_domain_or_IP;

        location / {
            proxy_pass http://localhost:3000;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection 'upgrade';
            proxy_set_header Host $host;
            proxy_cache_bypass $http_upgrade;
        }
    }
    ```
7. Security Group 是什麼？用途為何？有什麼設定原則嗎？
   - Security Group 是 AWS 的虛擬防火牆，控制進出實例的流量。常見的設定原則包括允許 HTTP(80) 和 HTTPS(443) 流量進入，限制不必要的連接端口。
8. 什麼是 sudo? 為什麼有的時候需要加上 sudo，有時候不用？
   - sudo 是一個允許以超級使用者權限運行命令的指令。有時需要 sudo 是因為某些操作（如安裝軟件或更改系統配置）需要更高的權限。
9.  Nginx 的 Log 檔案在哪裡？你怎麼找到的？怎麼看 Nginx 的 Log？
   - Nginx 的預設日誌檔案通常位於 /var/log/nginx/access.log 和 /var/log/nginx/error.log。可以使用命令 tail -f /var/log/nginx/access.log 查看實時日誌。
10. 其他你在過程中遭遇的問題，有找到解答就記錄下來，沒有可以把問題放著，下次上課討論。如果沒有遇到任何問題，也可以回答「無」
11. 列出完成本作業時參考的資料
    Reference: AWS 官方文件、Nginx 文檔、PM2 文檔
12. (optional) 如果你很初學，不放心自己的過程是否正確，可以紀錄過程，我會盡量幫忙看