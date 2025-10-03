const getStoredReadList = () => {
    const storedListStr = localStorage.getItem('read-list');
    if(storedListStr){
        const storedList = JSON.parse(storedListStr);
        return storedList;
    }else {
        return [];
    }
};

const addToStoredReadList = (id) => {
    const storedList = getStoredReadList();
    if(storedList.includes(id)){
        console.log(`Book number ${id} already exists in the read list`);
    } else {
        storedList.push(id);
        const storedlistString = JSON.stringify(storedList);
        localStorage.setItem('read-list', storedlistString);
    }
}

const getStoredWishList = () => {
    const storedListStr = localStorage.getItem('wish-list');
    if(storedListStr){
        const storedWishList = JSON.parse(storedListStr);
        return storedWishList;
    }else {
        return [];
    }
};

const addToStoredWishList = (id) => {
    const storedWishList = getStoredWishList();
    if(storedWishList.includes(id)){
        console.log(`Book number ${id} already exists in the wish list`);
    } else {
        storedWishList.push(id);
        const storedlistString = JSON.stringify(storedWishList);
        localStorage.setItem('wish-list', storedlistString);
    }
}

export {addToStoredReadList, addToStoredWishList, getStoredReadList, getStoredWishList}