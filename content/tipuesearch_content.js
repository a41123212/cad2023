var tipuesearch = {"pages": [{'title': 'About', 'text': '\n', 'tags': '', 'url': 'About.html'}, {'title': 'W12', 'text': '11/30 機械設計二乙 出席座位表 \n 2b_w12_seat.txt \n \n 2b stud num\tseat\n41123201\t\n41123202\t(3,8)\n41123203\t(3,7)\n41123204\t(6,8)\n41123205\t(2,9)\n41123206\t(3,4)\n41123207\t(1,5)\n41123208\t(2,3)\n41123209\t(2,6)\n41123210\t(4,3)\n41123211\t(6,2)\n41123212\t(1,7)\n41123213\t(1,3)\n41123214\t(4,1)\n41123215\t(1,4)\n41123216\t(6,9)\n41123217\t(6,7)\n41123218\t(4,5)\n41123219\t\n41123220\t(1,1)\n41123221\t(2,2)\n41123222\t(3,9)\n41123223\t(3,5)\n41123224\t(4,2)\n41123226\t(3,3)\n41123227\t(3,6)\n41123228\t\n41123229\t(5,2)\n41123230\t(2,7)\n41123231\t(1,2)\n41123232\t(6,5)\n41123233\t(2,8)\n41123234\t\n41123235\t(5,1)\n41123236\t(5,3)\n41123237\t(1,9)\n41123238\t(1,8)\n41123239\t(4,8)\n41123240\t(4,4)\n41123241\t(5,7)\n41123243\t(5,8)\n41123244\t\n41123245\t(4,9)\n41123246\t(5,6)\n41123247\t(6，3)\n41123248\t\n41123249\t(5,9)\n41123250\t(5,5)\n41123251\t(5,4)\n41132222\t(6,4)\n41136103\t(7,3)\n41136124\t(3,2)\n41136126\t\n41136131\t \n  https://github.com/mdecycu/cmsite \n', 'tags': '', 'url': 'W12.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation (Python 採 4 個 Spaces 縮排, 以界定執行範圍) \n Variables ( Python Keywords ) \n Comments (# 單行註解, 三個單引號或三個雙引號標註多行註解) \n Numbers  (整數 int(), 浮點數 float()) \n Strings  (字串) \n print (Python 內建函式,  print()  函式) \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n', 'tags': '', 'url': 'Brython.html'}]};