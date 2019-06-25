export const ajax = async (url, method, data = null) => {
    const response = await fetch(url, {
        method: method,
        body: data
    });

    const result = await response.json();
    
    return result;
}

export const setToStorage = (key, data, storage) => {
    (storage === 'session') ? sessionStorage.setItem(key, JSON.stringify(data)) : localStorage.setItem(key, JSON.stringify(data));
}

export const getFromStorage = (key, storage) => {
    let data = (storage === 'session') ? sessionStorage.getItem(key) : localStorage.getItem(key);
    return (data) ? JSON.parse(data) : false;
}

export const removeFromStorage = (key, storage) => {
    (storage === 'session') ? sessionStorage.removeItem(key) : localStorage.removeItem(key);
}