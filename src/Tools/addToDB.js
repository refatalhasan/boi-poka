const getStoredReadList = () => {
    const storedListStr = localStorage.getItem('read-list');
    if (storedListStr) {
        return JSON.parse(storedListStr);
    } else {
        return [];
    }
};

const addToStoredReadList = (id) => {
    const storedList = getStoredReadList();
    if (storedList.includes(id)) {
        return false; 
    } else {
        storedList.push(id);
        localStorage.setItem('read-list', JSON.stringify(storedList));
        return true; 
    }
};

const getStoredWishList = () => {
    const storedListStr = localStorage.getItem('wish-list');
    if (storedListStr) {
        return JSON.parse(storedListStr);
    } else {
        return [];
    }
};

const addToStoredWishList = (id) => {
    const storedWishList = getStoredWishList();
    if (storedWishList.includes(id)) {
        return false; 
    } else {
        storedWishList.push(id);
        localStorage.setItem('wish-list', JSON.stringify(storedWishList));
        return true;
    }
};

export { addToStoredReadList, addToStoredWishList, getStoredReadList, getStoredWishList };
