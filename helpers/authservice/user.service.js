import { authHeader } from './auth-header';

export const userService = {
    logout
};

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}
