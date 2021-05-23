import React from "react";
import styled from "styled-components";

const ButtonBlock = styled.button`
    width: 100%;
    height : 56px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
        
    p {
        height: 24px;
        font-size: 16px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: 24px;
        letter-spacing: normal;
        text-align: center;
        color: #1f1f1f;
    }
    
     &:hover {
     opacity: 0.9;
        p {
        color: #1f1f1f;
        }
    }
    &:active {
        p {
        color: #1f1f1f;
        }
    }
`;

type SolidButtonProps = {
    title: string;
}

const Button = ({ title } : SolidButtonProps) => {
    return (
        <ButtonBlock type="submit" >
            <p>{title}</p>
        </ButtonBlock>
    )
};

export default Button;

