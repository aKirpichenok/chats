import { FC, useEffect, useLayoutEffect, useRef, useState } from 'react';
import './editableTextArea.scss';
import { EditableTextAreaProps } from './types';

export const EditableTextArea: FC<EditableTextAreaProps> = ({ value, onChange, placeholder }) => {
  const textAreaRef = useRef<HTMLDivElement>(null);
  const [isPlaceholderVisible, setIsPlaceholderVisible] = useState(true);

  const handleChange = () => {
    const text = textAreaRef.current!.innerText;
    onChange(text);
    setIsPlaceholderVisible(text === '');
  };

  const handleClick = ()=> {
    textAreaRef.current!.innerText= ''
  }
  useLayoutEffect(() => {
    const textArea = textAreaRef.current;
    if (textArea) {
      const range = document.createRange();
      const selection = window.getSelection();
      range.selectNodeContents(textArea);
      range.collapse(false);
      selection?.removeAllRanges();
      selection?.addRange(range);
    }
  }, [value]);
  return (
    <div
      className={`editable-textarea ${isPlaceholderVisible ? 'placeholder-visible' : ''}`}
      contentEditable
      suppressContentEditableWarning={true}
      ref={textAreaRef}
      onInput={handleChange}
      onClick={handleClick}
    >
      {isPlaceholderVisible ? placeholder : value}
    </div>  
  );
};

