import { ChangeEventHandler, useRef, useState } from "react"
import { EditableTextArea } from "./EditableTextArea";
import './input.scss'
import { PickFiles, SendButton } from "../../utils/svgIcons";

export const Input =() => {
  const [message,setMessage] = useState('')

  const handlePickFile = (file: any) => {
    console.log('Selected file:', file);
  }

  const handleTextChange = (text: string) => {
    setMessage(text);
  };

  return (
    <div className="input-wrapper">
      <div>
        <EditableTextArea value={message} onChange={handleTextChange} placeholder="Type message"/>
      </div>
      <div className="input-buttons">
        <PickFiles onChange={handlePickFile}/>
        <button><SendButton/></button>
      </div>
    </div>
  );
}