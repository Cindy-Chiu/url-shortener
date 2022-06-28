# AC_2-3_A11_URLShortener
這是Alpha Camp 2-3後端專修的A11作業。

本作業功能清單如下：
1. 使用者輸入一網址按下Shorten後，網頁將回應一組縮短後的網址，由hostname與5碼亂數組成
2. 使用者可點擊該網址，並可連結至原網址的目標網頁
3. 使用者可按下Copy按鈕將網址複製起來
4. 使用者可自行開新分頁輸入縮短後的網址，並可連結至原網址的目標網頁
5. 使用者可按下Back按鈕返回至首頁輸入另一組網址
6. 若使用者未輸入任何值即按下Shorten，網頁將跳出提醒視窗

安裝步驟:
1. 指令 git clone https://github.com/Cindy-Chiu/url-shortener.git
2. 指令 cd (存放資料夾)
3. 指令npm install
4. 指令npm i nodemon
5. 指令 set MONGODB_URI = 您的MongoDB位址
6. 指令npm run dev 並會看見終端機回傳
"Express is listening on localhost:3000
mongodb connected!"
