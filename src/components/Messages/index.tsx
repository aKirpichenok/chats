import { useEffect } from "react"
import { useAppSelector } from "../../store/hook"
import { commonSelector } from "../../store/slices/commonSlice"
import { getMessages } from "../../api/chat"
import { IMessages } from "../../interface/messages"
import { Message } from "../Message"
import { Header } from "../Header"
import { HeaderIcon } from "../Header/HeaderIcon"
import { HeaderTitle } from "../Header/HeaderTitle"
import { Chat } from "../../utils/svgIcons"

import './messages.scss'
import { Paper } from "../Paper"
import { Input } from "../Input"
import { NewMessage } from "../NewMessage"
import { SystemMessage } from "../SystemMessage"
import { useSortMessages } from "../../hooks/useSortMessages"


export const Messages = () => {
  const {chat_id, chat_title} = useAppSelector(commonSelector)
  const {isNewMessages, isOldMessages, newMessages, oldMessages, setMessages} = useSortMessages()

  useEffect(() => {
    if(chat_id) {
      getMessages(chat_id).then(data => setMessages(data.reverse()))
    }
  },[chat_id])
  return (
   <>
    {chat_id &&<div className="messages-container">
    <Paper border="bottom">
       <Header>
      <>
        <HeaderIcon icon={<Chat/>}/>
        <HeaderTitle title={chat_title}/>
      </>
     </Header>
    </Paper>
    <div className="messages-wrapper">
      {isOldMessages && oldMessages.map(([day,messages]) => {
        return (
          <>
          <SystemMessage time={day}/>
          {messages.map((message) => (
            <Message 
              my={message.user.you} 
              message={message.message} 
              main={!!message.user.avatar} 
              key={message.id} 
              avatar={message.user.avatar} 
              name={message.user.name} 
              surname={message.user.surname}
              time={message.created_at}
            />
          ))}
        </>
        )
      })}
      {isNewMessages && (
        <>
        <NewMessage time="Новые сообщения"/>
        {newMessages.map((message: IMessages) => (
          <Message 
            my={message.user.you} 
            message={message.message} 
            main={!!message.user.avatar} 
            key={message.id} 
            avatar={message.user.avatar} 
            name={message.user.name} 
            surname={message.user.surname}
            time={message.created_at}
          />
      ))}
        </>
      )}
      </div>
      <Input />
    </div>}
    </>
  )
}