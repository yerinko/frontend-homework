import React from "react";
import styled from "styled-components";

const SolidButtonBlock = styled.button`
    width: 100%;
    height : 56px;
    border: none;
    border-radius: 8px;
    margin: 4px 0 8px 0;
    background-color: #1f1f1f;
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
        color: #ffffff;
    }
    
     &:hover {
     opacity: 0.9;
        p {
        color: #F6F7F8;
        }
    }
    &:active {
        p {
        color: #F6F7F8;
        }
    }
`;

type SolidButtonProps = {
    title: string;
}

const SolidButton = ({ title } : SolidButtonProps) => {
    return (
        <SolidButtonBlock type="submit" >
            <p>{title}</p>
        </SolidButtonBlock>
    )
};

export default SolidButton;

