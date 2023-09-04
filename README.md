#  教育元語言 edu-lang
> 一種專門為了教育方式或學習方法分享而設計的[Markdown](https://markdown.tw/)之子語言。例如：「步驟」(一種固定格式的小階梯說明文)
> meta languages for edu( a set of sublanguage of [Markdown](https://en.wikipedia.org/wiki/Markdown) ), e.x.  step
 
# 新手上路
0. 請先看[簡報頁](https://docs.google.com/presentation/d/1xtSwUsW4AI6fDaaFOLIFo-9NSxIbJ8Lws_w12D05ZpY/edit?usp=sharing)
)1. 請先看[共筆區(Wiki)](https://github.com/bestian/edu-lang/wiki)的首頁
2. 錯誤回報與功能請求，請上[議題區(issues)](https://github.com/bestian/edu-lang/issues)
3. 若您還沒有Gtihub帳號，請[申請一個](https://git-scm.com/book/zh-tw/v2/GitHub-%E5%BB%BA%E7%AB%8B%E5%B8%B3%E6%88%B6%E5%8F%8A%E8%A8%AD%E5%AE%9A)
4. 若您還不會[Markdown](https://markdown.tw/)，沒有關係，它很簡單，至少比html簡單。請看此頁[Markdown文法說明](https://markdown.tw/)，或是此[Markdown範本集](https://hackmd.io/@eMP9zQQ0Qt6I8Uqp2Vqy6w/SyiOheL5N/%2FBVqowKshRH246Q7UDyodFA?type=book)謝謝。
6. 喜歡本專案的話，請記得幫忙訂閱(右上角的watch)和打星(右上角的star)集氣喔，謝謝！


# 開發環境

1. [Node.js](https://nodejs.org/zh-tw/download?ref=peppedotnet.it)
2. [Mocha](https://mochajs.org/)
3. [google slide
4. 足夠的血糖和熱情❤️‍🔥

##

1. 收集並開發一些在教育領域常用的函式以及剖析器等等，從簡單的countAge到複雜的countStep, countTable, countTree, countClimbingStones等等
2. 為開源共學島提供基礎建設
3. 目標是打包到npm 想讓想用的專案都可以用


## 緣起(Idea)

基本上，以非營利的概念，老師們在[開源共學島](https://www.github.com/bestian/colearna-open)平台上就不能上架收費課程了，
但是他們可以上架自己覺得如何學會一樣東西的小階梯步驟。

一般來說，從入門到進階都會有一個小階梯，這稱為小階梯教學法。

如何把這個階梯表達出來，讓人很容易地可以編輯、很容易地看懂，這就是工程師要做的事情。
因為要表達小階梯，用演講、短文、YouTube這些方法都不是很有效率的。

有鑒於之前的[https://beta.hackfoldr.org/](https://github.com/hackfoldr/hackfoldr-2.0-forkme/blob/master/docs/Hosting%20your%20own%20Hackfoldr%202.0%20zh-tw.md) 對一般使用者還是太困難。
在他最後嘗試表達階梯的[Goban](http://goban.bestian.tw)，介面和表述的方式仍然太複雜，且一般人沒有動機網上分享東西。

看起來一個更簡單的語言表達方式是必要的。
他應該屬於Markdown的子類。
