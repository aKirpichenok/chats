import dayjs from 'dayjs'
import './systemMessage.scss'

export const SystemMessage = ({time}:{time:string}) => {
return (
  <div className="system-message">
    {/* <span>{dayjs(time).format('DD.MM.YYYY')}</span> */}
    <span>{time}</span>
  </div>
)
}