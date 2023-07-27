import { wrapper } from "../../utils/wrapper";
import { URLS } from "../../constants/urls";
import { IChatItem } from "../../interface/chatItem";
import { IMessages } from "../../interface/messages";

export const getChatList = (offset: number = 0, limit: number = 20): Promise<Array<IChatItem>> => {
    return wrapper("get", URLS.CHATS + `?offset=${offset}&limit=${limit}`)
}

export const getMessages = (chat_id: string, offset: number = 0, limit: number = 20): Promise<Array<IMessages>> => {
    return wrapper("get", URLS.MESSAGES + `?chat_id=${chat_id}&offset=${offset}&limit=${limit}`)
}