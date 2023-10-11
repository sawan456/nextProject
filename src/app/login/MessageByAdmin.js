import React, { useState } from 'react'
import "./MessageByAdmin.css"

const MessageByAdmin = () => {
    
    const[message,setMessage] = useState("");
    const[messageList,setMessageList] = useState([]);

    const handleEvent=(e)=>{
        setMessage(e.target.value);
    }

    const replyMessage=()=>{
        message === ""
        ?
        alert("Type something....")
        :
        setMessageList([...messageList,message]);
        setMessage("");
    }

  return (
    <>
    <p className='recievedMsg'>Todays Weather ?</p>
      
      {
              messageList.map((value,index)=>{
                return (
                    <p key={index} className='replyMsg'>{value}</p>
                )
              })  
            }
      
      <input placeholder='Write your message here...' style={{marginLeft:"70%"}} 
      value={message}
      onChange={handleEvent}
      />
      <button style={{width:"5rem",height:"2rem",marginLeft:"70%",marginTop:".5rem"}}
      onClick={replyMessage}
      >Reply</button>
    </>
  )
}

export default MessageByAdmin