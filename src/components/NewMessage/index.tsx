import './newMessage.scss'


export const NewMessage = ({time}: {time:string}) => {
  return (
    <div className="new-message">
      <span>{time}</span>
    </div>
  )
}