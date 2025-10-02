import { useSelector } from "react-redux"



const MessageList = () => {
  const messages = useSelector(state => state)
  console.log(messages)
  return (
    <div>
      
    </div>
  )
}

export default MessageList
