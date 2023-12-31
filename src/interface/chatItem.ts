import { IUser } from "./user"

export interface IChatItem {
  id: string,
  created_at: number,
  title: string,
  avatar: string,
  private: boolean,
  last_message: ILastMessage,
  count_unread: number,
  users: Array<IUser>
}


export interface ILastMessage {
  created_at: number,
  user_id: string,
  user_name: string,
  user_surname: string,
  you: boolean,
  message: string
}