import React, {useState} from 'react';
import styled from "styled-components";
import Ably from "../img/ably.jpeg";
import api from "../lib/api";
import { Route, Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import Input from "../components/common/Input/Input";
import SolidButton from "../components/common/Button/SolidButton";
import Button from "../components/common/Button/Button";

const LoginBlock = styled.div`
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

function LoginPage ({props}: any)  {
    const history = useHistory();
    const [form, setForm] = useState({
        Email: '',
        password: ''
    });

    const { Email, password } = form;

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
            password: ''
        });

        api.post('/api/login', {
                email: Email,
                password: password
        })
            .then( response => {
                const { accessToken } = response.data;
                sessionStorage.setItem('accessToken', 'Bearer '+accessToken);
                history.push('/user')
            })
            .catch(function (error) {
                alert('다시 확인해주세요.')
            });
    };


    return (
        <LoginBlock>
            <form onSubmit={handleSubmit}>
                <label>로그인</label>
                <Input
                    name="Email"
                    type="email"
                    placeholder="ably452@dummy.com"
                    value={Email}
                    onChange={onChange}
                />
                <Input
                    name="password"
                    type="password"
                    placeholder="비밀번호를 입력하세요."
                    value={password}
                    onChange={onChange}
                />

                <SolidButton title="다음" />
            </form>
            <Link to="/reset-password">
                <Button title="비밀번호 재설정"/>
            </Link>
        </LoginBlock>
    );
};

export default LoginPage;