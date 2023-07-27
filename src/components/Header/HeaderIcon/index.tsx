import { FC } from "react"
import { HeaderIconProps } from "./types"
import './headerIcon.scss'

export const HeaderIcon: FC<HeaderIconProps> = ({icon}) => {
  return <div className="header-icon">{icon}</div>
}