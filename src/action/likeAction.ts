const add = (playerData: {}) => {
    return { type: 'add', playerData };
};
const remove = (playerData: {}) => {
    return { type: 'remove', playerData };
}

export default {
    add,
    remove
}