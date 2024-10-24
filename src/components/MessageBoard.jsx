import { useState } from "react";

function MessageBoard() {
  const [messageList, setMessageList]=useState([])
  const [inputMessage, setInputMessage]=useState("")

  const addMessageList = (e) => {
    e.preventDefault()

    const newMessage = {
      id: messageList.length+1,
      message: inputMessage,
    }

    setMessageList([...messageList,newMessage])

    setInputMessage("")
  }

  const removeMessage = (id) => {
    const updateMessageList = messageList.filter((message) => message.id !== id)
    setMessageList(updateMessageList)
  }
  return (
    <div className="app-wrapper">
      <h1 class="app-title">Message board</h1>
      {/* state input Message */}
      <form onSubmit={addMessageList}>
      <div class="message-input-container">
        <label>
          <input
            id="message-text"
            name="message-text"
            type="text"
            placeholder="Enter message here"
            value={inputMessage}
            onChange={(e)=> setInputMessage(e.target.value)}
          />
        </label>
        {/* event message */}
        <button className="submit-message-button">Submit</button>
      </div>
      </form>
      {/* show state array Message  */}
      <div class="board">
        {messageList.map((message) => (
        <div className="message" key={message.id}>
          <h1>{message.message}</h1>
          <button className="delete-button" onClick={() => removeMessage(message.id)}>x</button>
        </div>))}
      </div>
    </div>
  );
}

export default MessageBoard;
