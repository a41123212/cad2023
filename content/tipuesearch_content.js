var tipuesearch = {"pages": [{'title': 'About', 'text': '\n  https://github.com/mdecycu/cmsite \n', 'tags': '', 'url': 'About.html'}, {'title': 'w4~w5', 'text': '\n', 'tags': '', 'url': 'w4~w5.html'}, {'title': 'w6~w7', 'text': 'w5 之前的教學影片: \n 利用隨身碟上的批次檔案進行電腦輔助設計室網路環境設定 \xa0(更完整的 網路設定內容 ) \n w5 2b 從 Onshape 轉出零組件 STL 後轉入 CoppeliaSim 操作說明 \n 評分網站與倉儲: \n 2a cad2023 學員網站與倉儲連結 \n 2b cad2023 學員網站與倉儲連結 \n 學員展示用 IPv6 位址: \n 2a 學員展示用 IPv6 位址: 2001:288:6004:17:2023:cada:: 班級名單序號 \n 2b 學員展示用 IPv6 位址: 2001:288:6004:17:2023:cadb:: 班級名單序號 \n 建立線上考試題目: \n 學員完成任務一零組件繪圖 \n 學習如何利用 zmqRemote API Python 控制模擬場景中的零組件 \n \n 利用 pull request 加入或修改 \xa0 https://github.com/mdecycu/studlist \xa0倉儲中 \xa0 2b.txt \xa0 資料的 說明影片 . \n 利用 \xa0 https://github.com/mdecycu/cmsite \xa0作為 template 建立 cad2023 倉儲與網站, 並轉入 Replit 進行維護的 說明影片 . \n \n', 'tags': '', 'url': 'w6~w7.html'}, {'title': 'w12', 'text': '11/30 機械設計二乙 出席座位表 \n 2b_w12_seat.txt \n \n 2b stud num\tseat\n41123201\t\n41123202\t(3,8)\n41123203\t(3,7)\n41123204\t(6,8)\n41123205\t(2,9)\n41123206\t(3,4)\n41123207\t(1,5)\n41123208\t(2,3)\n41123209\t(2,6)\n41123210\t(4,3)\n41123211\t(6,2)\n41123212\t(1,7)\n41123213\t(1,3)\n41123214\t(4,1)\n41123215\t(1,4)\n41123216\t(6,9)\n41123217\t(6,7)\n41123218\t(4,5)\n41123219\t\n41123220\t(1,1)\n41123221\t(2,2)\n41123222\t(3,9)\n41123223\t(3,5)\n41123224\t(4,2)\n41123226\t(3,3)\n41123227\t(3,6)\n41123228\t\n41123229\t(5,2)\n41123230\t(2,7)\n41123231\t(1,2)\n41123232\t(6,5)\n41123233\t(2,8)\n41123234\t\n41123235\t(5,1)\n41123236\t(5,3)\n41123237\t(1,9)\n41123238\t(1,8)\n41123239\t(4,8)\n41123240\t(4,4)\n41123241\t(5,7)\n41123243\t(5,8)\n41123244\t\n41123245\t(4,9)\n41123246\t(5,6)\n41123247\t(6，3)\n41123248\t\n41123249\t(5,9)\n41123250\t(5,5)\n41123251\t(5,4)\n41132222\t(6,4)\n41136103\t(7,3)\n41136124\t(3,2)\n41136126\t\n41136131\t \n', 'tags': '', 'url': 'w12.html'}, {'title': 'w15', 'text': '範例圖片: \n \n w15 \n ↓ Soildwork繪製 永動機V2-等角視圖 \n \n ↓ Soildwork繪製 永動機V2-前側視圖 \n \n ↓Soildwork繪製 永動機V2-右側視圖 \n', 'tags': '', 'url': 'w15.html'}, {'title': '維護網站', 'text': '維護網站的三個方式: \n \n localhost 透過 token, SSH 確定 git push 權限, SSH 設定可透過 Putty 完成 \n Replit 透過 connect 功能連結與 Github 的權限 \n 自架主機 s1511.cycu.org, 透過 SSH 與分配埠號 \n \n \n 以下將說明第 3 種方法, 使用 s1511.cycu.org 管理個人與分組網站: \n 其中包括 1) \xa0 如何遠端登入 、2 ) \xa0 如何取放檔案 、3) \xa0 如何與 github 帳號彼此信任 、4) \xa0 如何取下 cad2023 、5) \xa0 如何啟動或關閉 cad2023 倉儲 、6) \xa0 如何連結到動態網站 、7) \xa0 如何設定靜態網站 、8) \xa0 如何連動動態網站改版與靜態網頁 、9) \xa0 如何對資料進行保全 以及 10) \xa0 網路連線協定 等相關議題. \n w8_2a_s1511 設定操作影片 part1.mp4 \n w8_2a_s1511 設定操作影片 part2.mp4 \n w8_2a_s1511 設定操作影片 part3.mp4 \xa0(只有前段有聲音) \n w8 2a s1511 設定操作影片 part4.mp4 \n 1) \xa0 如何遠端登入 : \n 遠端登入到 s1511.cycu.org (只支援 IPv6 網路協定), 命令列指令 ssh client, 工具可以使用 Putty \n 使用 ssh 指令: ssh 帳號@s1511.cycu.org 然後輸入密碼 (鍵入密碼時螢幕並不會顯示字元) \n 使用 putty.exe 設定 session 令其連接到\xa0 s1511.cycu.org \n 登出指令為 exit \n 假如在 IPv4 網路協定下, 則 ssh 指令與 putty.exe 都必須透過能支援 IPv6 的代理主機進行連線. \n 2b w8 作業: 請根據\xa0 cad2023_2b_w8.txt \xa0檔案中的內容, 透過程式的讀取與篩選, 按照時間先後, 列出 2b 修課學員中已經登入 s1511.cycu.org 的學號. (修課學員名單\xa0 2a:\xa0 0838 , 2b:\xa0 0851 ) \n 假如在近端處理, 必須同時儲存兩個檔案後, 進行資料選取: \n get_stud_num_from_last_data.py \xa0(若採 Brython 編寫, 可以直接 列出 2b w8 結果 \xa0( 2a w8 結果 ), 依照登入時間先後排序, 其中 41123227 為管理者最早測試時登入, 若採用 ANSI 編寫: \xa0 c_parse_last_cp2023.7z ) \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n 9 \n 10 \n 11 \n 12 \n 13 \n 14 \n 15 \n 16 \n 17 \n 18 \n 19 \n 20 \n 21 \n 22 \n 23 \n 24 \n 25 \n 26 \n 27 \n 28 \n 29 \n 30 \n 31 \n 32 \n 33 \n 34 \n 35 \n 36 \n 37 \n 38 \n 39 \n \n \n \n # 讀取學號檔案 \n with  open ( "2b_user_list.txt" ,  \'r\' ) as user_file: \n \xa0\xa0\xa0\xa0 user_lines  =   user_file.read().splitlines() \n \xa0 \n # 讀取 last 指令轉出的檔案, 以 last -w > cad2023_2b_w8.txt 建立檔案 \n with  open ( "cad2023_2b_w8.txt" ,  \'r\' ) as cad_file: \n \xa0\xa0\xa0\xa0 # 以下是利用跳行符號, 將每一行區隔成數列 \n \xa0\xa0\xa0\xa0 cad_lines  =   cad_file.read().splitlines() \n #print(cad_lines) \n \xa0 \n # 從 cad_lines 建立所有登入使用者數列 \n login_users  =   [] \n for   i  in   cad_lines: \n \xa0\xa0\xa0\xa0 line_list  =   i.split( " " ) \n \xa0\xa0\xa0\xa0 login_users.append(line_list[ 0 ]) \n #print(login_users) \n \xa0 \n # 根據 https://stackoverflow.com/questions/480214/how-do-i-remove-duplicates-from-a-list-while-preserving-order \n # 數列去除重複元素但仍保持原始次序 \n login_users  =   list ( dict .fromkeys(login_users)) \n #print(login_users) \n \xa0 \n # 建立數列存放符合條件的使用者 \n valid_users  =   [] \n \xa0 \n # 取出符合條件的使用者 \n for   line  in   login_users: \n \xa0\xa0\xa0\xa0 if   "cad"   in   line: \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 # 將 cad 字串去除 \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 user_number  =   line.replace( "cad" , "") \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 if   user_number  in   user_lines: \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 valid_users.append(user_number) \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 \xa0 \n # 利用 reverse() 將 valid_users 反向排序 \n valid_users.reverse() \n \xa0 \n # , 最早登入者列在最前面 \n for   user  in   valid_users: \n \xa0\xa0\xa0\xa0 print (user) \n \n \n \n \n \n \n \n 2) \xa0 如何取放檔案 : \n 利用 sftp 從 s1511.cycu.org 取下檔案畫面: \n \n 進入對應的目錄之後, 以 pwd 確認所在目錄後, 以 get 取下檔案, 以 put 放上檔案, 例如: 進入 images 目錄後, 可以透過 get gd_ex1.png 取下圖檔, 若要將圖檔放入 images 目錄, 則只要確定 sftp 進入後, cd 到 images 目錄, 然後以 put gd_ex1.png 將圖檔送入. \n 3) \xa0 如何與 github 帳號彼此信任 : \n 利用 ssh-keygen 在 .ssh 目錄建立 id_rsa 與 id_rsa.pub, 之後將 id_rsa.pub 登記到各自帳號下 settings 的 SSH and GPG keys 區域. \n .ssh 目錄中的\xa0 config , 將 SSH session 名稱設為 github.com: \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n \n \n \n Host github.com \n User git \n Hostname github.com \n ProxyCommand /usr/bin/ncat --proxy p4.cycu.org:3128 --proxy-type http %h %p \n \n \n \n \n \n \n \n 將 上列 config 送到帳號下的 .ssh 目錄之後, 就可以利用 github.com 作為 session, 從 github.com 取下 cad2023 倉儲, 並且已經具備 git push 的權限. \n 4) \xa0 如何取下 cad2023 : \n 以 SSH 協定取下 cad2023 的指令: \n git clone --recurse-submodules \xa0 git@github.com :帳號/cad2023.git \n 接下來必須從 cad2023 取下 server.py 進行編輯, 放入自己分配到的 9xxx 埠後, 再送回. \n 5) \xa0 如何啟動或關閉 cad2023 倉儲 : \n 當使用者已經將上述 public key 登錄到 Github 帳號下, 且已經將 server.py 中的 9xxx 改為自己所分配到的內部埠號後再送回, 則可以利用 python3 server.py 啟動編輯網站, 並測試是否可以連線到 \xa0 https://s1511.cycu.org:8xxxx \n 由於管理者內建密碼為 admin, 使用者修改後, 編碼字串將存入 config/config, 此檔案必須設為只有管理者可以 read, 若目前位於登入後的工作目錄, 則其指令為: \n chmod og-rwx config/config \n 表示要將 others 與 group 針對 config/config 檔案的 read, write 與 execute 權限取消. \n 若希望使用者登入後動態網站仍然執行, python3 server.py& \n 當 server.py 已經啟動, 使用者登入後可以利用以下指令, 列出各使用者啟動網頁編輯所對應的 PID (Process ID): \n ps -axo pid,comm,uname | grep "python3" \n 各用戶若希望刪除已經啟動的 Process, 可以找到所啟動的 PID 後, 以下列指令關閉服務 (若 PID = 1234): \n kill 1234 \n 其中, 系統管理者可以刪除所有 Processes, 而各用戶只能刪除各自所啟動的 Process. \n 6) \xa0 如何連結到動態網站 : \n python3 server.py 啟動測試是否可以連線到 \xa0 https://s1511.cycu.org:8xxxx \n 編輯網站啟動之後, 使用者登入後可以透過 config 指令修改管理者密碼, 而此一密碼的編碼將存入 s1511 主機倉儲檔案中的 config/config 檔案中, 且此一檔案將只會位於 s1511, 而不會被推向 github.com (因為 .gitignore 的設定). \n 當使用者決定要進行 git add 與 git commit 之前, 必須先以 git config 設定 user.name 與 user.email, 此設定將會存入 .gitconfig 檔案中. \n 7) \xa0 如何設定靜態網站 : \n 前面已經在 /home/帳號/倉儲目錄 透過 SSH 協定從 github.com 取下檔案內容, 由於 SSH keys 的設定, 此一倉儲一旦改版, 可以在新增提交之後, 可以透過 git push 指令將改版資料推向 github.com. \n 當倉儲的靜態網站 git push 至 github.com 後, 將會透過 Github Pages 的設定進行轉檔. \n 若使用者希望在 s1511 主機中伺服對應的倉儲靜態網站, 則可以將倉儲檔案放入帳號中的 public_html 目錄中. \n 由於位於 public_html 僅需鏡射位於 github.com 中的倉儲檔案資料, 並不作為 git commit 與 git push 之用, 因此可以利用 git clone --recurse-submodules https://github.com/帳號/倉儲名稱.git 取下 (也就直接以 https 協定取下倉儲內容), 並可在 https://s1511.cycu.org/~帳號/倉儲名稱 中擷取靜態網站資料. \n 8) \xa0 如何連動動態網站改版與靜態網頁: \n 當每次 /home/帳號/倉儲 中的檔案改版, 而且資料已經推送到 github.com, 使用者就可以進入 public_html 中的對應倉儲目錄, 以 git pull 指令從 github.com 取得最新的版本資料, 此指令可以採手動, 也可以設法納入倉儲的 acp 指令中: \n acp 必須納入 public_html 目錄中的靜態網站 git pull, 且利用 chmod u+x acp 令其可以執行. \n acp \xa0 內容: \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n \n \n \n #! /bin/bash \n git add . \n git commit -m  "$1" \n git push \n cd ./../public_html/cad2023 \n git pull \n \n \n \n \n \n \n \n 9) \xa0 如何對資料進行保全: \n chmod u+x acp \n chmod og-rwx config/config \n chmod 711 /home/cad學號 \n chmod 755 /home/cad學號/public_html \n 假如自己所分派到的網路 port 遭到占用, 可以利用下列指令查出使用該埠號的使用者帳號: \n 例如要查詢埠號 9210 埠號的使用情形, 指令為\xa0 lsof -i :9210, 其中 ls 為 list, of 為 open file, -i 中的 i 為 internet, :9210 表示要求列出與 port 9210 有關 internet 使用相關的資料. \n 10) \xa0 網路連線協定: \n 將 cad2023 倉儲資料取到 s1511.cycu.org 帳號下, 若使用 SSH 協定且位於只有 IPv6 網路協定, 則分別牽涉以 SSH 及 https 協定連線到 github.com 的設定. \n 其中所謂運用 SSH 協定與 github.com 連線, 運用在 git clone --recurse-submodules \xa0 git@github.com:帳號/cad2023.git \xa0 因為其流程是利用 SSH 協定以 git 作為帳號登入到 session 名稱為 github.com 的連線主機 (即 config 中的 Hostname 設定), 能不能遠端登入則取決於 github.com session (即 config 設定檔案中的 Host 名稱) 後面的帳號是否已經登錄與目前 .ssh/id_rsa 所對應的 public key. \n 至於在純 IPv6 網路下的 s1511.cycu.org 其 https 所需的 proxy 設定, 已經由管理者設定於 /etc/environment 中, 因此所有使用者都無需設定. \n \n', 'tags': '', 'url': '維護網站.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation (Python 採 4 個 Spaces 縮排, 以界定執行範圍) \n Variables ( Python Keywords ) \n Comments (# 單行註解, 三個單引號或三個雙引號標註多行註解) \n Numbers  (整數 int(), 浮點數 float()) \n Strings  (字串) \n print (Python 內建函式,  print()  函式) \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n', 'tags': '', 'url': 'Brython.html'}]};