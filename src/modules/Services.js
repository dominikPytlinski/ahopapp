export const ajax = async (url, method, data = null) => {
    const response = await fetch(url, {
        method: method,
        body: data
    });

    const result = await response.json();
    
    return result;
}

export const setToStorage = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
}

export const getFromStorage = (key) => {
    return (JSON.parse(localStorage.getItem(key))) ? JSON.parse(localStorage.getItem(key)) : false;
}

export const removeFromStorage = (key) => {
    localStorage.removeItem(key);
}

export const setToSessionStorage = (key, data) => {
    sessionStorage.setItem(key, JSON.stringify(data));
}

export const getFromSessionStorage = (key) => {
    return (JSON.parse(sessionStorage.getItem(key))) ? JSON.parse(sessionStorage.getItem(key)) : false;
}

export const removeFromSessionStorage = (key) => {
    sessionStorage.removeItem(key);
}