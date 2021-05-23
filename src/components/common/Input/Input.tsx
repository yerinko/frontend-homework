import React from "react";
import styled from "styled-components";


const InputBlock = styled.input`
    width: 100%;
    height : 50px;
    border: solid 1px #1f1f1f;
    box-sizing : border-box;
    border-radius: 8px;
    font-size: 16px;
    color: #424242;
    margin: 4px 0 20px 0;
    padding: 0 8px;
    
    &:focus {
        outline: none;
        box-shadow: 0px 0px 2px #1f1f1f;
    }
`;

type InputProps = {
    placeholder: string;
    type: string;
    name: string;
    value: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ name, placeholder, type, value,onChange } : InputProps) => {
    return (
        <InputBlock
            name={name}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    )
};



export default  Input;