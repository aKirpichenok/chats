import { FC, useRef } from "react";
import { PickFiles } from "../../../utils/svgIcons";
import { PickFilesInputProps } from "./types";
import './pickFiles.scss'

export const PickFilesInput: FC<PickFilesInputProps>=({onChange}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = () => {
    const file = fileInputRef?.current?.files?.[0]
    if (file) {
        onChange(file)
    }
  };
  return (
    <div className="file-input-container">
    <input
        type="file"
        id="file-input"
        className="file-input"
        ref={fileInputRef}
        onChange={handleChange}
      />
      <label htmlFor="file-input" className="file-input-label">
        <PickFiles style={{height:'25px', width: '23px'}}/>
      </label>
      </div>
  )
}