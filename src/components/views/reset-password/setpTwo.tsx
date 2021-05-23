import React, {useState} from 'react';
import styled from "styled-components";
import SolidButton from "../../../components/common/Button/SolidButton";
import Input from "../../common/Input/Input";
import { ToMillisecondsTimeString } from "../../../lib/util";

const ResetPasswordBlock = styled.div`
    label {
        height: 36px;
        line-height: 36px;
        font-size: 16px;
        opacity: 0.8;
    }
    
    h5 {
        font-size: 15px;
        height: 15px;
        line-height: 15px;
        opacity: 0.8;
        margin: -10px 0 14px 0;
    }
`;

type ResetPasswordProps = {
    handleAuthCode? : (e: React.FormEvent<HTMLFormElement>) => void;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    email: string;
    authCode: string;
    issueToken: string;
    remainMillisecond: number;
}

function StepTwo ({email, issueToken, authCode, onChange, handleAuthCode, remainMillisecond}: ResetPasswordProps)  {

    return (
        <ResetPasswordBlock>
            <form onSubmit={handleAuthCode}>
                <label>비밀번호 재설정</label>
                <Input name="Email" type="email" placeholder="ably452@dummy.com" value={email}/>
                <label>인증코드</label>
                <Input name="authCode" type="text" placeholder="인증코드 입력" value={authCode} onChange={onChange}/>
                <h5>{ToMillisecondsTimeString(remainMillisecond)}</h5>
                <SolidButton title="다음" />
            </form>
        </ResetPasswordBlock>
    );
};

export default StepTwo;