import { FC } from "react"
import { MessageProps } from "./types"
import './message.scss'
import { Avatar } from "../Avatar"
import { ChatItemHeader } from "../ChatItem/ChatItemHeader"
import { Time } from "../Time"

export const Message: FC<MessageProps> = ({my,main, message, avatar,name,surname, time}) => {

  return (
    <div className={`message-container ${!my? 'my-position' : 'friend-position'}`}>
     
      {main && my && <Avatar src={avatar}/>}
      <div>
      {my && <ChatItemHeader name={name} female={surname}/>}
      <div className={`message-info ${my ? 'my-message' : 'friend-message'}`}>
        <span className={`message-text `}>{message}</span>
        <Time my={false} time={time}/>
      </div>
      </div>
    </div>
  )
}