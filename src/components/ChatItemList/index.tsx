import { ChatItem } from "../ChatItem";
import { Avatar } from "../Avatar";
import { ChatItemHeader } from "../ChatItem/ChatItemHeader";
import { Time } from "../Time";
import { useEffect, useState } from "react";
import { getChatList } from "../../api/chat";
import { ChatItemMessage } from "../ChatItem/ChatItemMessage";
import { IChatItem } from "../../interface/chatItem";
import { Header } from "../Header";
import { HeaderTitle } from "../Header/HeaderTitle";
import './chatItemList.scss'
import { useAppDispatch } from "../../store/hook";
import { setChatId, setChatTitle } from "../../store/slices/commonSlice";
import { Paper } from "../Paper";

export const ChatItemList = () => {
    const [chatList, setChatList] = useState<Array<IChatItem>>([])
    const dispatch = useAppDispatch()


    useEffect(() => {
      getChatList().then(data => setChatList(data))
      
    },[])

    const handleClick = (chat_id: string, chat_title: string) => {
      dispatch(setChatId(chat_id))
      dispatch(setChatTitle(chat_title))
    }


    return (
      <Paper border="right" className="chat-item-list">
        <Header>
          <HeaderTitle title="All Chats"/>
        </Header>
          {chatList?.length> 0 && chatList.map((chat: IChatItem) => (
            <ChatItem 
            key={chat.id}
            avatar={<Avatar src={chat.avatar} size="md"/>}
            header={<ChatItemHeader name={chat.last_message.user_name} female={chat.last_message.user_surname}/>}
            date={<Time my={false} time={chat.last_message.created_at}/>}
            message={<ChatItemMessage message={chat.last_message.message}/>}
            onClick={() => handleClick(chat.id, chat.title)}
          />
          ))}
      </Paper>
    )
}