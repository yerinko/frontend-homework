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
    
    h5 {
        margin: -10px 0 20px 0;        
        
        .invalid-feedback {
            color: #89AC76;
        }
        .inInvalid-feedback {
            color: #CD5C5C;
        }
    }
`;

type ResetPasswordProps = {
    handleResetPassword : (e: React.FormEvent<HTMLFormElement>) => void;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onConfirmChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
    email: string;
    issueToken: string;
    newPassword: string;
    newPasswordConfirm: string;
}

function StepThree ({email, issueToken, newPassword, newPasswordConfirm, handleResetPassword, onChange, onConfirmChange, className}: ResetPasswordProps)  {

    const renderFeedbackMessage = () => {
        if (newPasswordConfirm) {
            if (newPassword !== newPasswordConfirm ) {
                return (
                    <div className="inInvalid-feedback">⚠ 패스워드가 일치하지 않아요.</div>
                );
            } else {
                return (
                    <div className="invalid-feedback">패스워드가 일치해요! 💚️ </div>
                )
            }
        }
    };

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
                    onChange={onConfirmChange}
                />
                <h5>{renderFeedbackMessage()}</h5>
                <SolidButton
                    title="다음"
                />
            </form>
        </ResetPasswordBlock>
    );
};

export default StepThree;