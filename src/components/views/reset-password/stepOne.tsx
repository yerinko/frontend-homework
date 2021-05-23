import React, {useState} from 'react';
import styled from "styled-components";
import SolidButton from "../../../components/common/Button/SolidButton";
import Input from "../../common/Input/Input";

const ResetPasswordBlock = styled.div`    
    label {
        height: 36px;
        line-height: 36px;
        font-size: 16px;
        opacity: 0.8;
    }
`;

type ResetPasswordProps = {
    onSubmit? : (e: React.FormEvent<HTMLFormElement>) => void;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
}

function StepOne ({ value, onChange, onSubmit } : ResetPasswordProps)  {
     return (
        <ResetPasswordBlock>
            <form onSubmit={onSubmit}>
                <label>비밀번호 재설정</label>
                <Input
                    name="Email"
                    type="email"
                    placeholder="ably452@dummy.com"
                    value={value}
                    onChange={onChange}
                />
                <SolidButton
                    title="다음"
                />
            </form>
        </ResetPasswordBlock>
    );
};

export default StepOne;