export function hasAccessToken(): boolean {
    if (!getAccessToken()) {
        return false;
    }
    return true;
}

export function getAccessToken(): string | null {
    return sessionStorage.getItem('accessToken');
}

export function setAccessToken( accessToken: string ) {
    sessionStorage.setItem('accessToken', accessToken);
}

export function clearAuth() {
    sessionStorage.removeItem('accessToken')
}