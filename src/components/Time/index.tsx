import { FC } from "react"
import { TimeProps } from "./types"
import dayjs from 'dayjs'

export const Time:FC<TimeProps> = ({my, time}) => {

  return (
    <div className="time-container">
      <span className="time">{dayjs(time).format('hh:mm')}</span>
      {my && <span className="message-read">&#10003;&#10003;</span>}
    </div>
  )
}