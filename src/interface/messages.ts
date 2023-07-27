import { IUser } from "./user";

export interface IMessages {
  id: string,
  created_at: number,
  user: IUser,
  message: string,
  is_new: boolean
}