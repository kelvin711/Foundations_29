const bcrypt = require('bcryptjs');
const chats = [];
// const chats = [{
//   pin_hashes: "fdasfds344bgn24",
//   messages: ["hey", "hi", "hey back", "dan what you thinking about", "stuff"]
// },
// {
//   pin_hashes: "fdasfds344bgn24",
//   messages: ["new messages"]
// }]

module.exports = {
  createMessage: (request, response) => {
    const { pin: pin_input, message: user_message } = request.body;

    if (chats.length > 0) {
      for (const chat_obj of chats) {
        const existing_chat = bcrypt.compareSync(pin_input, chat_obj.pin_hashes)
        console.log("these pins do be matching tho");
        if(existing_chat) {
          chat_obj.messages.push(user_message)
          const { pin_hashes, ...messages_to_send } = chat_obj
          response.status(200).send(messages_to_send)
          return
        }
      }
    }
    
    const hashed_pin = bcrypt.hashSync(pin_input, bcrypt.genSaltSync(12));
    
    let msg_obj = {
      pin_hashes: hashed_pin,
      messages: [user_message]
    }
    
    chats.push(msg_obj);
    const { pin_hashes, ...messages_to_send } = msg_obj
    //delete clone.pin_hashes
    response.status(200).send(messages_to_send)
  }
}