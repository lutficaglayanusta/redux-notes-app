import { useDispatch } from "react-redux";
import { useState } from "react";
import css from "./MessageForm.module.css";
import { addMessage } from "../../redux/noteSlice";

const MessageForm = () => {

  const dispatch = useDispatch();
  const [color, setColor] = useState("")
  const [message, setMessage] = useState("")
  
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(message,color)
    dispatch(addMessage({message,color}))
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <textarea onChange={(e)=>setMessage(e.target.value)} value={message}></textarea>
      <div className={css.color}>
        <p className={css.blue} onClick={()=>setColor("#F06291")} ></p>
        <button type="submit">ADD</button>
      </div>

      
    </form>
  );
};

export default MessageForm;
