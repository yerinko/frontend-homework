import axios from "axios";
import { getAccessToken } from './auth';

const API_SERVER_HOST = process.env.REACT_APP_API_SERVER_HOST;

const RESET_PASSWORD_URL = '/api/reset-password';
const LOGIN_URL = '/api/login';
const LOGOUT_URL = '/api/logout';
const USER_URL = '/api/user';

const axiosInstance = axios.create({
    baseURL: API_SERVER_HOST,
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 5000,
});

axiosInstance.interceptors.request.use(
    function (config) {
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        return Promise.reject(error);
    }
);

export interface IAuthCodeRequest {
    email: string;
}

export interface IAuthCodeResponse {
    issueToken: string;
    remainMilisecond: number;
}

export async function getAuthCodeAsync(
    params: IAuthCodeRequest,
): Promise<IAuthCodeResponse> {
    const response = await axiosInstance.get(RESET_PASSWORD_URL, { params });
    return response.data
}

export interface IValidateAuthCodeRequest {
    email: string;
    authCode: string;
    issueToken: string;
}

export interface IValidateAuthCodeResponse {
    confirmToken: string;
}

export async function validateAuthCodeAsync(
    params: IValidateAuthCodeRequest,
): Promise<IValidateAuthCodeResponse> {
    const response = await axiosInstance.post(RESET_PASSWORD_URL, params);
    return response.data
}

export interface IUpdatePasswordRequest {
    email: string;
    confirmToken: string;
    newPassword: string;
    newPasswordConfirm: string;
}

export interface IUpdatePasswordResponse {
    email: string;
}

export async function updatePasswordAsync (
    params: IUpdatePasswordRequest,
): Promise<IUpdatePasswordResponse> {
    const response = await axiosInstance.patch(RESET_PASSWORD_URL, params);
    return response.data
}

export interface ILoginRequest {
    email: string;
    password: string;
}

export interface ILoginResponse {
    accessToken: string;
}

export async function loginAsync (
    params: ILoginRequest,
): Promise<ILoginResponse> {
    const response= await axiosInstance.post(LOGIN_URL, params);
    return response.data
}

export interface ILogoutResponse {
    lastConnectedAt: Date;
}

export async function logoutAsync(): Promise<ILogoutResponse> {
    const response = await axiosInstance.post(LOGOUT_URL, {}, {
        headers: {
            Authorization: `Bearer ${getAccessToken()}`,
        },
    });
    return response.data
}

export interface IGetUserResponse {
    name: string;
    email: string;
    profileImage: string;
    lastConnectedAt: Date;
}

export async function getUserAsync(): Promise<IGetUserResponse> {
    const response = await axiosInstance.get(USER_URL, {
        headers: {
            Authorization: `Bearer ${getAccessToken()}`,
        },
    });
    return response.data
}




