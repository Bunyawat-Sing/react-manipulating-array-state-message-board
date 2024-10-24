import { useState } from "react";

function MessageBoard() {
  const [messages, setMessages] = useState([]); 
  const [inputMessage, setInputMessage] = useState("");


  function addMsg() {
    const newMsg = {
      id: messages.length + 1,
      message: inputMessage
    };

    setMessages([...messages, newMsg]);
    setInputMessage(""); 
    // const newarr = [...message, inputmessage]
    // setMessage(newarr)
    // setInputMessage("")
  }

  function deleteMsg(id) { 
    const newArr = messages.filter((msg) => msg.id !== id); 
    setMessages(newArr);
  }

  return (
    <div className="app-wrapper">
      <h1 className="app-title">Message board</h1>
      <div className="message-input-container">
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
        <button className="submit-message-button" onClick={addMsg}>Submit</button>
      </div>
      <div className="board">
        {messages.map((text) => (
          <div className="message" key={text.id}>
            <h1>{text.message}</h1>
            <button className="delete-button" onClick={()=>deleteMsg(text.id)}>x</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MessageBoard;
