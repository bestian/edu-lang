# edu-lang
 meta language ideas for edu( sublanguage of markdown ) I/O examples 

# 開發環境

1. [Node.js](https://nodejs.org/zh-tw/download?ref=peppedotnet.it)
2. [Mocha](https://mochajs.org/)

##

1. 收集並開發一些在教育領域常用的函式以及剖析器等等，從簡單的countAge到複雜的countStep等等
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
