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
    handleResetPassword : (e: React.FormEvent<HTMLFormElement>) => void;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    email: string;
    issueToken: string;
    newPassword: string;
    newPasswordConfirm: string;
}

function StepThree ({email, issueToken, newPassword, newPasswordConfirm, handleResetPassword, onChange}: ResetPasswordProps)  {
       return (
        <ResetPasswordBlock>
            <form onSubmit={handleResetPassword}>
                <label>비밀번호 재설정</label>
                <Input
                    name="Email"
                    type="email"
                    placeholder="ably452@dummy.com"
                    value={email}
                />
                <label>새로운 비밀번호</label>
                <Input
                    name="newPassword"
                    type="password"
                    placeholder="새로운 비밀번호 입력"
                    value={newPassword}
                    onChange={onChange}
                />
                <label>새로운 비밀번호 확인</label>
                <Input
                    name="newPasswordConfirm"
                    type="password"
                    placeholder="새로운 비밀번호 입력"
                    value={newPasswordConfirm}
                    onChange={onChange}
                />
                <SolidButton
                    title="다음"
                />
            </form>
        </ResetPasswordBlock>
    );
};

export default StepThree;