import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import Ably from "../img/ably.jpeg";
import api from "../lib/api";
import { useHistory } from 'react-router';
import { clearAuth, getAccessToken } from "../lib/auth";
import SolidButton from "../components/common/Button/SolidButton";

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
    
    .profile {
        width: 100%;
        height: 100%;
        border-radius: 8px;
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
            <p>{form.name}</p>
            <p>{form.email}</p>

            <form  onSubmit={handleSubmit}>
                <SolidButton title="로그아웃" />
            </form>
        </LoginBlock>
    );
};

export default ProfilePage;