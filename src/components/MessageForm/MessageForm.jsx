import { useDispatch } from "react-redux";
import { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import css from "./MessageForm.module.css";
import { addMessage } from "../../redux/noteSlice";

const MessageForm = () => {

  const dispatch = useDispatch();
  const [color, setColor] = useState("")
  const [message, setMessage] = useState("")
  
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addMessage({ id:nanoid(),message, color }))
    
    setMessage("")
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <textarea rows={6} cols={80} placeholder="Enter your note here..."  onChange={(e)=>setMessage(e.target.value)} value={message}></textarea>
      <div className={css.color}>
        <div>
          <p className={css.red} onClick={() => setColor("#F06291")} ></p>
          <p className={css.purple} onClick={() => setColor("#BA68C8")} ></p>
          <p className={css.yellow} onClick={() => setColor("#FFD54E")} ></p>
          <p className={css.blue} onClick={() => setColor("#50C2F7")} ></p>
          <p className={css.green} onClick={()=>setColor("#AED581")} ></p>
        </div>
        
        <button type="submit">ADD</button>
      </div>

      
    </form>
  );
};

export default MessageForm;
