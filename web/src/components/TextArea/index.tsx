import React, { TextareaHTMLAttributes } from 'react';
import { TextareaBlock } from './styled';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    name: string;
    label: string;
}

const Textarea: React.FC<TextareaProps> = ({ name, label, ...rest }) => {
    return (
        <TextareaBlock>
            <label htmlFor={name}>{label}</label>
            <textarea id={name} {...rest} />
        </TextareaBlock>
    );
}

export default Textarea;