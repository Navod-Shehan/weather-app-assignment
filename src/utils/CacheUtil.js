export const setCacheData = (key, data) => {
    const expiresAt = Date.now() + 5 * 60 * 1000; // 5 minutes expiration
    const cachedData = {
        expiresAt,
        data,
    };

    localStorage.setItem(key, JSON.stringify(cachedData));
}

export const getCachedData = (key) => {
    const cachedData = localStorage.getItem(key);

    if (cachedData) {
        const parsedData = JSON.parse(cachedData);
        if (parsedData.expiresAt > Date.now()) {
            return parsedData.data;
        } else {
            localStorage.removeItem(key);
        }
    }

    return null;
};