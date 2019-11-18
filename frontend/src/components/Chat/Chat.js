import React, { Component } from "react";
import api from "../../services/api";
import io from "socket.io-client";

export default class Chat extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      usermessage: "",
      messages: []
    };
  }

  async componentDidMount() {
    this.registerToSocket();
    const response = await api.get("message");
    this.setState({ messages: response.data });
  }

  handleChange = async e => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state.usermessage, this.state.username);
  };

  handleSubmit = async e => {
    e.preventDefault();
    let data = {
      author: this.state.username,
      message: this.state.usermessage
    };
    const response = await api.post("message", data);
    this.setState({ usermessage: "" });
    console.log(response.data);
  };

  registerToSocket = () => {
    const socket = io("http://localhost:3333");

    socket.on("message", newMessage => {
      console.log(newMessage);
      this.setState({
        messages: [...this.state.messages, newMessage]
      });
    });
  };

  render() {
    return (
      <div>
        {this.state.messages.map(msg => {
          return (
            <div>
              <p>
                {msg.author}: {msg.message}
              </p>
            </div>
          );
        })}

        <div>
          <form onSubmit={this.handleSubmit}>
            <input
              required
              name="username"
              required
              type="text"
              value={this.state.username}
              onChange={this.handleChange}
              placeholder="Username"
            />
            <input
              required
              name="usermessage"
              type="text"
              value={this.state.usermessage}
              onChange={this.handleChange}
              placeholder="Hello world"
            />
            <button type="submit" onClick={this.handleSubmit}>
              Enviar
            </button>
          </form>
        </div>
      </div>
    );
  }
}
