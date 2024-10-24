import { useState } from "react";

function MessageBoard() {
  const [message, setMessage] = useState([]);
  const [inputMessage, setInputMessage] = useState("");

  const addMessage = (event) => {
    event.preventDefault();
    const newMessage = [...message, inputMessage];
    setMessage(newMessage);
  };

  const deleteMessage = (indexMessage) => {
    const newMessage = message.filter((_, index) => index !== indexMessage);
    setMessage(newMessage);
  }

  return (
    <div className="app-wrapper">
      <h1 class="app-title">Message board</h1>
      <div class="message-input-container">
        <label>
          <input
            id="message-text"
            name="message-text"
            type="text"
            placeholder="Enter message here"
            value={inputMessage}
            onChange={(event) => setInputMessage(event.target.value)}
          />
        </label>
        <button onClick={addMessage} className="submit-message-button">
          Submit
        </button>
      </div>
      <div className="board">
        {
          message.map((input, index) => {
            return (
              <div key={index} className="message">
                <h1>{input}</h1>
                <button onClick={()=>{deleteMessage(index)}} className="delete-button">x</button>
              </div>
            );
          })
          /*<div className="message">
          <h1>Hello all ! This is first message.</h1>
          <button className="delete-button">x</button>
        </div>*/
        }
      </div>
    </div>
  );
}

export default MessageBoard;
