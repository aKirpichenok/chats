import './systemMessage.scss'

export const SystemMessage = ({text}:{text:string}) => {
return (
  <div className="system-message">
    <span>{text}</span>
  </div>
)
}