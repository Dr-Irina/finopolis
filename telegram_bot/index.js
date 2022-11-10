const TelegramBot = require('node-telegram-bot-api');
const axios = require('axios');

const token = '1960444685:AAEKhM_M8wryDqjyjkoDyVK9ifr7DXh9RYQ';

const bot = new TelegramBot(token, { polling: true });

bot.on('message', async (msg) => {
  const chatId = msg.chat.id; //получаем идентификатор диалога, чтобы отвечать именно тому пользователю, который нам что-то прислал
  // console.log(msg);
  axios
    .post('http://127.0.0.1:8083/scoring/', {
      text: msg.text,
      status: 'Новое',
      fullname: `${msg.from.first_name}  ${msg.from.last_name}`,
    })
    .then((res) => {
      if (res && res.status === 200) {
        bot.sendMessage(chatId, `Ваше сообщение было принято%`);
      }
    })
    .catch((error) => {
      bot.sendMessage(chatId, 'Что-то пошло не так, повторите попытку позже(');
      console.error(error);
    });
});
