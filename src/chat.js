$(function() {
    var send = $('#send-message');
    var messageDom = $('#message');
    var chatBox = $('#chat-box');

    function html_encode(str) {
      var s = "";
      if (str.length == 0) return "";
      s = str.replace(/&/g, "&gt;");
      s = s.replace(/</g, "&lt;");
      s = s.replace(/>/g, "&gt;");
      s = s.replace(/ /g, "&nbsp;");
      s = s.replace(/\'/g, "&#39;");
      s = s.replace(/\"/g, "&quot;");
      s = s.replace(/\n/g, "<br>");
      return s;
    }

    function sendMessage() {
        var messageText = messageDom.val();
        if (!messageText) {
            alert('消息不能为空');
            return;
        }
        var date = new Date();
        var h = date.getHours();
        var m = date.getMinutes();
        var s = date.getSeconds();
        var now = h + ':' + m + ':' + s;
        chatBox.append('<div class="sended-message"><p class="timer text-right">你的名字-' + now + '</p><p class="message-text">' + html_encode(messageText) + '</p></div>');
        messageDom.val('');
        chatBox.scrollTop(chatBox.prop("scrollHeight"));
        reMessage(messageText);
    }

    function reMessage(question) {
        var date = new Date();
        var h = date.getHours();
        var m = date.getMinutes();
        var s = date.getSeconds();
        var now = h + ':' + m + ':' + s;
        var answer = '收到';
        switch (question) {
            case '你好' :
                answer = '你好！'
                break;
            case '今天天气不错' :
                answer = '恩恩，要不出去走走？'
                break;
            case '讲个笑话吧' :
                answer = '张三从小就感觉自己不是亲生的。一次他在外面玩，不小心掉粪坑里了，她妈看到了说：“这孩子我们不要了吧！回去再生一个吧。”后来长大点，一次发高烧了，她妈用手摸了下他的额头，立刻把手缩回去了说：“好烫啊！”他爸立马一个大嘴巴子抽了过去说：“看把你妈烫的！”　　这是亲的吗？‍‍‍‍'
                break;
            default :
                answer = '这句话我不太理解。。。'
        }
        chatBox.append('<div class="re-message"><p class="timer">客服-' + now + '</p><p class="message-text">' + html_encode(answer) + '</p></div>');
        chatBox.scrollTop(chatBox.prop("scrollHeight"));
    }

    send.on('click', function() {
        sendMessage();
    })

    messageDom.keypress(function(event) {
        if(event.keyCode ==13){
            event.preventDefault();
            sendMessage();
        }
    });
})