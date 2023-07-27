import { FC, useRef, useState } from 'react';
import './editableTextArea.scss';
import { EditableTextAreaProps } from './types';

export const EditableTextArea: FC<EditableTextAreaProps> = ({ value, onChange, placeholder }) => {
  const textAreaRef = useRef<HTMLDivElement>(null);
  const [isPlaceholderVisible, setIsPlaceholderVisible] = useState(true);

  const handleChange = () => {
    const text = textAreaRef.current!.innerText;
    onChange('');
    setIsPlaceholderVisible(text === '');
  };

  return (
    <div
      className={`editable-textarea ${isPlaceholderVisible ? 'placeholder-visible' : ''}`}
      contentEditable
      ref={textAreaRef}
      onInput={handleChange}
    >
      {isPlaceholderVisible ? placeholder : value}
    </div>
  );
};

