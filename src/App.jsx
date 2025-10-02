import SearchBox from "./components/SearchBox/SearchBox"
import MessageForm from "./components/MessageForm/MessageForm"
import MessageList from "./components/MessageList/MessageList"

function App() {
  
  return (
    <>
      <h1 style={{textAlign:"center"}}>Notes App</h1>
      <SearchBox/>
      <MessageForm />
      <MessageList />
    </>
  )
}

export default App
