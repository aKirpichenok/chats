import React, {FC} from "react";
import {IPage} from "../../interface/page";
import { ChatItemList } from "../../components/ChatItemList";
import { Messages } from "../../components/Messages";

export const PageIndex: FC<IPage> = (props: IPage) => {
    const { title } = props;

    return (
        <div style={{display: 'flex'}}>
        <ChatItemList />
        <Messages />
        </div>
    )
}