import React from 'react'

class ChatWindow extends React.Component {
  state = {
    currentText: ''
  };

  /*
  If the user did not type anything, he/she should not be
  allowed to submit.
  */
  isDisabled = () => {
    return this.state.currentText.length === 0;
  };

  textOnChange = (event) => {
    this.setState({currentText: event.target.value});
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({currentText: ''});
    this.props.onSubmitCallback(
      this.props.user,
      this.state.currentText
    );
  };

  render() {
    return (
      <div className="chat-window">
        <h2>Super Awesome Chat</h2>
        <div className="name sender">{this.props.user.username}</div>
        <ul className="message-list">
          {this.props.messages.map((message, index) => (
            <li
              key={index}
              className={message.username === this.props.user.username ? 'message sender' : 'message recipient'}>
              <p>{`${message.username}: ${message.text}`}</p>
            </li>
          ))}
        </ul>
        <div>
          <form className="input-group" onSubmit={this.onSubmit}>
            <input 
              type="text"
              className="form-control"
              placeholder="Enter your message..."
              value={this.state.currentText}
              onChange={this.textOnChange}/>
            <div className="input-group-append">
              <button 
                className="btn submit-button"
                disabled={this.isDisabled()}>SEND</button>
            </div>
          </form>
        </div>
      </div>
    )
  };
};

export default ChatWindow;
