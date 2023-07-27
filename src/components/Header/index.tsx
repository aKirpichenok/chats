import { HeaderProps } from "./types";
import './header.scss'

export const Header = ({children}: HeaderProps) => {
  return <div className="header">
    {children}
  </div>
}