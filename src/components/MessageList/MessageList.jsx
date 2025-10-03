import { useSelector } from "react-redux"
import css from "./MessageList.module.css"


const MessageList = () => {
  let messages = useSelector(state => state.notes.items)
  const filter = useSelector(state=> state.filter.name)
  

  if (filter !== "") {
    messages = messages.filter(message=> message.message.toLowerCase().indexOf(filter.toLowerCase()) !== -1)
  }

  return (
    <div>
      <ul className={css.list}>
        {
          messages.map((message,index) => (
            <li key={message.id} style={{ backgroundColor: message.color }}>
              <p className={css.note}>Note: {index+1} </p>
              <p>{message.message}</p>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default MessageList
