import { PropsWithChildren } from "react"
import { PaperProps } from "./interface"
import './paper.scss'

export const Paper = ({
elementProps = {},
children,
className,
border,
...otherProps
}: PropsWithChildren<PaperProps>) => {

  const classNames = `paper paper-border--${border} ${className}`;
  return <div className={classNames}>{children}</div>
}