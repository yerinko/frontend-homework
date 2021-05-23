import React, {useState} from 'react';
import styled from "styled-components";
import { ToMillisecondsTimeString } from "../lib/util";
import api from "../lib/api";
import StepTwo from "../components/views/reset-password/setpTwo";
import StepOne from "../components/views/reset-password/stepOne";
import StepThree from "../components/views/reset-password/stepThree";
import {useHistory} from "react-router";


const ResetPasswordBlock = styled.div`
    label {
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
`;

function ResetPassword ({props}: any)  {
    const history = useHistory();
    const [form, setForm] = useState({
        Email: '',
        remainMillisecond: 0,
        authCode: '',
        issueToken: '',
        confirmToken: '',
        newPassword:'',
        newPasswordConfirm:''
    });

    const { Email, remainMillisecond, authCode, issueToken, confirmToken, newPassword, newPasswordConfirm } = form;

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setForm({
            Email: '',
            remainMillisecond: 0,
            authCode: '',
            issueToken: '',
            confirmToken: '',
            newPassword:'',
            newPasswordConfirm:''
        });

        if (  window.confirm(`${Email}로 인증번호를 발송합니다.`) ) {
            api.get('/api/reset-password', {
                params: {
                    email: form.Email
                }
            })
                .then( response => {
                    const { issueToken, remainMillisecond } = response.data;
                    setForm({
                        ...form,
                        Email: form.Email,
                        remainMillisecond: remainMillisecond,
                        issueToken: issueToken,
                    });
                })
                .catch( error  => {
                    alert('이메일을 다시 확인해주세요 🥲')
                }).then(function() {
                // 항상 실행
            });
        }};



    const handleAuthCode = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        api.post('/api/reset-password', {
            email: Email,
            authCode: form.authCode,
            issueToken: issueToken
        })
            .then( response => {
                const { confirmToken } = response.data;
                setForm({
                    ...form,
                    confirmToken: confirmToken,
                    issueToken: ''
                });
            })
            .catch( response => {
                alert('인증번호를 다시 확인해주세요!')
            }).then(function() {
            // 항상 실행
        });
    };

    const handleResetPassword = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        api.patch('/api/reset-password', {
            email: Email,
            confirmToken: confirmToken,
            newPassword: newPassword,
            newPasswordConfirm: newPasswordConfirm
        })
            .then( response => {
                history.push('/')
            })
            .catch( response =>{
                // 오류발생시 실행
            }).then(function() {
            // 항상 실행
        });
    };


    return (
        <ResetPasswordBlock>
            {
                issueToken ?
                <StepTwo
                    email={Email}
                    issueToken={issueToken}
                    authCode={authCode}
                    remainMillisecond={remainMillisecond}
                    onChange={onChange}
                    handleAuthCode={handleAuthCode}
                />
                : confirmToken ?
                <StepThree
                    email={Email}
                    issueToken={issueToken}
                    newPassword={newPassword}
                    newPasswordConfirm={newPasswordConfirm}
                    onChange={onChange}
                    handleResetPassword={handleResetPassword}
                />
                : <StepOne
                        value={Email}
                        onChange={onChange}
                        onSubmit={handleSubmit}
                    />
            }
        </ResetPasswordBlock>
    );
};

export default ResetPassword;