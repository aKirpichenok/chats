import { ChangeEventHandler, useRef, useState } from "react"
import { EditableTextArea } from "./EditableTextArea";
import './input.scss'
import { PickFiles, SendButton } from "../../utils/svgIcons";
import { Button } from "../Button/Button";

export const Input =() => {
  const [message,setMessage] = useState('')

  const handlePickFile = (file: any) => {
    console.log('Selected file:', file);
  }

  const handleTextChange = (text: string) => {
    setMessage(text);
  };

  const handleClick= () =>{
    console.log(message)
    setMessage('')
  }

  return (
    <div className="input-wrapper">
        <EditableTextArea value={message} onChange={handleTextChange} placeholder="Type message"/>
      <div className="input-buttons">
        <PickFiles onChange={handlePickFile}/>
        <Button onClick={handleClick}><SendButton/></Button>
      </div>
    </div>
  );
}