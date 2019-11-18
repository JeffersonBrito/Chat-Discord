import Message from '../models/Message';

class ChatController {

  async index(req, res) {
    const messages = await Message.find().sort("created-at");
    return res.json(messages);
  }

  async store(req, res) {
    const { author, message } = req.body;

    console.log(author);
    const msg = await Message.create({
      author,
      message
    });
    req.io.emit('message', msg);
    return res.json({msg});
  }
}

export default new ChatController();
