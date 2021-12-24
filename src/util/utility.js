export function isUserLoggedIn () {
    return sessionStorage.getItem('isLoggedIn') === 'true';
}

export function addSessionItem (itemKey, value) {
    sessionStorage.setItem(itemKey, value);
}

export function getSessionItem(itemKey) {
    return sessionStorage.getItem(itemKey);
}

export function removeSessionItem (itemKey) {
    sessionStorage.removeItem(itemKey);
}