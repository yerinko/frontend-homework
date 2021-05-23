import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import { Alert } from 'antd';
import api from "../lib/api";
import { useHistory } from 'react-router';
import { clearAuth, getAccessToken } from "../lib/auth";
import SolidButton from "../components/common/Button/SolidButton";

const LoginBlock = styled.div`
    h1 {
        height: 24px;
        font-size: 18px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: 24px;
        letter-spacing: normal;
        text-align: center;
        color: #1f1f1f;
    }
    
    .profile {
        width: 100%;
        height: 100%;
        border-radius: 8px;
    }
    
    .userInfo {
        width: 100%;
        height: 100%;
        margin: 24px 0;
    }
`;


function ProfilePage ()  {
    const history = useHistory();

    const [form, setForm] = useState({
        email: '',
        lastConnectedAt: '',
        name: '',
        password: '',
        profileImage: '',
    });

    useEffect(() => {
        api.get('/api/user', {
                headers: {'Authorization': getAccessToken()}
            })
        .then(response => setForm(
                response.data
        ));
    },[]);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        api.post('/api/logout', null, {
            headers: {'Authorization': getAccessToken()}
        })
            .then( response => {
                clearAuth();
                history.push('/')
            })
            .catch(function (error) {

            }).then(function() {
        });
    };

    return (
        <LoginBlock>
            <img
                src={form.profileImage}
                alt="profileImage"
                className="profile"
            />
            <div className="userInfo">
                <h1>{form.name}</h1>
                <h1>{form.email}</h1>
            </div>
            <form  onSubmit={handleSubmit}>
                <SolidButton title="로그아웃" />
            </form>
        </LoginBlock>
    );
};

export default ProfilePage;