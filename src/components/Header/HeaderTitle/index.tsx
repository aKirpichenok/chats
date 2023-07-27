import { FC } from "react"
import { HeaderTitleProps } from "./types"

export const HeaderTitle: FC<HeaderTitleProps> = ({title}) => {
  return (
    <h2>{title}</h2>
  )
}