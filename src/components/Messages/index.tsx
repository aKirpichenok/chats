import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../store/hook"
import { commonSelector, setMessages } from "../../store/slices/commonSlice"
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
import { getNewMessages, getOldMessages } from "../../utils/sortMessages"


export const Messages = () => {
  const {chat_id, messages, chat_title} = useAppSelector(commonSelector)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if(chat_id) {
      getMessages(chat_id).then(data => dispatch(setMessages(data.reverse())))
    }
  },[chat_id])
  return (
   <>{chat_id &&<div className="messages-container">
   <Paper border="bottom">
       <Header>
      <>
        <HeaderIcon icon={<Chat/>}/>
        <HeaderTitle title={chat_title}/>
      </>
   </Header>
  </Paper>
  <div className="messages-wrapper">
  {messages.length> 0 && getOldMessages(messages).map((message: IMessages) => (
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
  <NewMessage time="Новые сообщения"/>
  {messages.length> 0 && getNewMessages(messages).map((message: IMessages) => (
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
  </div>
  <Input />
</div>}</>
  )
}