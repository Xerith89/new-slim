function sortAscending(inputObjectArray, sortProperty) {
    inputObjectArray.sort((a,b) => {
        const aUpper = a[sortProperty].toUpperCase();
        const bUpper = b[sortProperty].toUpperCase();
        if (aUpper < bUpper) {
            return true;
        } else if (aUpper > bUpper) {
            return false;
        }
    });
}

function sortDescending(inputObjectArray, sortProperty) { 
    inputObjectArray.sort((a,b) => {
    const aUpper = a[sortProperty].toUpperCase();
    const bUpper = b[sortProperty].toUpperCase();
    if (aUpper > bUpper) {
        return true;
    } else if (aUpper < bUpper) {
        return false;
    }
});
}

module.exports = {
    sortAscending:sortAscending,
    sortDescending:sortDescending
}