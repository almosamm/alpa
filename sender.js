//bot token
var telegram_bot_id = "5629109136:AAEc8gME2lzCU0PMVbYOkUmotYMUcmNzAIM";
//chat id
var chat_id = 1445937489;

var sender = function () {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
 
};

